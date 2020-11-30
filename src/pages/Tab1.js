import React,  { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'  // for the map, className="google-map"
import { Icon } from '@iconify/react'  // for map pin
import locationIcon from '@iconify/icons-mdi/map-marker' // for map pin
import PlaceCard from '../components/PlaceCard';
import Marker from './Marker';

//import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Button, Input, Divider, message } from 'antd';
import { AnyCnameRecord } from 'dns';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonPage
  } from "@ionic/react";

class Tab1 extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            mapsLoaded: false,     
            latitude:38,
            longitude:-118,
            map: {},
            mapsApi: {},
            markers: [],
            searchResults: [],
            placesService: {},
            geoCoderService: {},
            directionService: {},
        };
    }
    apiHasLoaded = ((map, mapsApi) => {
        this.setState({
          mapsLoaded: true,
          map: map,
          mapsApi: mapsApi,
          placesService: new mapsApi.places.PlacesService(map),
          geoCoderService: new mapsApi.Geocoder(),
          directionService: new mapsApi.DirectionsService(),
        });
    });
    

    handleSearch = (() => {
      if (this.state.map === {}){
        return
      }
      console.log(this.state.mapsApi);
      console.log(this.state.map);
      console.log(this.state.placesService);
      console.log(this.state.latitude, this.state.longitude);
        let {markers, placesService, directionService,mapsApi } = this.state;
        const filteredResults = [];
        //if (markers.length === 0){
        //  console.log("add marker and try again");
        //  return;
        //}
        const markerLatLng = new mapsApi.LatLng(this.state.latitude, this.state.longitude);
        const placesRequest = {
              location: markerLatLng,
              //radius: '3000000', // Cannot be used with rankBy. Pick your poison!
              type: ['hospital', 'pharmacy','doctor'], // List of types: https://developers.google.com/places/supported_types
              query: 'covid 19 testing site',
              rankBy: mapsApi.places.RankBy.DISTANCE,
          }
          console.log(placesRequest);
          placesService.textSearch(placesRequest, ((response) => {
              console.log(response.length)
              let responseLimit = Math.min(5, response.length);
              for (let i = 0; i < responseLimit; i++) {
                  const covidTesting = response[i];
                  const { rating, name } = covidTesting;
                  const address = covidTesting.formatted_address; 
                  const lat = covidTesting.geometry.location.lat();
                  const lng = covidTesting.geometry.location.lng();
                  let openNow = false;
                  if (covidTesting.opening_hours) {
                      openNow = covidTesting.opening_hours.isOpen(); // e.g true/false
                  }
                  //console.log(name,address, openNow);
                  filteredResults.push({
                    name,
                    address,
                    rating,
                    lat, 
                    lng,
                    openNow,
                  });
                  this.setState({ searchResults: filteredResults });
              }
              console.log(this.state.searchResults);
              
          }
          ))
    });
    
    async componentDidMount() {
      await navigator.geolocation.getCurrentPosition(
          position => this.setState({ 
              latitude: position.coords.latitude, 
              longitude: position.coords.longitude
          })
      )
  }


//    handleClick = () => {
//        this.componentDidMount();
//        console.log("set longitude:",this.state.longitude);
//      }
      

      //<IonButton color="primary" onClick={this.getLocation}>{this.state.longitude ? `${this.state.latitude} ${this.state.longitude}` : "Get Location"}</IonButton>
      render(){

      //const { constraints, mapsLoaded, singaporeLatLng, markers, searchResults } = this.state;
      const { markers, geoCoderService,searchResults } = this.state; // Google Maps Services
      const site_lat  =  this.state.searchResults[0] ?  this.state.searchResults[0].lat : 10;
      const site_lng  =  this.state.searchResults[0] ?  this.state.searchResults[0].lng : 11; 
      return(
              <IonPage>

                      {/* 
              <IonHeader>
                <IonToolbar color="primary">
                  <IonTitle>Login</IonTitle>
                </IonToolbar>
              </IonHeader>
                        */}

              <IonContent>
              <div>Current Location: {JSON.stringify(this.state.latitude  )} ,  {JSON.stringify(this.state.longitude )}</div> 
              <div>Initial Location: {JSON.stringify(this.state.latitude )} ,  {JSON.stringify(this.state.longitude)}</div>               
{/*************** Maps Section ******************************************************************************/}              
            <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBj9b-EHxuAAihd8u2HBBqWOSXukFlA3jY",
                libraries: ['places', 'directions']
              }}
              defaultZoom={15}
              defaultCenter={{ lat: 38, lng: -118 }}
              center={{ lat: this.state.latitude, lng: this.state.longitude }}
              yesIWantToUseGoogleMapApiInternals={true}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.

            >
             <Marker lat={this.state.latitude} lng={this.state.longitude} name="My Marker" color="blue"/>

               </GoogleMapReact>
               </div>


{/*************** Search Button ******************************************************************************/}           
              <IonButton color="primary" onClick={this.handleSearch}> {"search"}  </IonButton> 


{/*************** Result Section ******************************************************************************/}
            {searchResults.length > 0 ? 
               <>

<section className="col-12">
<div className="d-flex flex-column justify-content-center">

              <h1 className="mb-4 fw-md">Testing Center Nearby</h1>

                 <div className="d-flex flex-wrap">
                    {searchResults.map((result, key) => (<PlaceCard info={result} key={key} />))}
                </div>

</div>                        
</section>               
               </>
               : null}

                </IonContent>
                </IonPage>
            );
      }
    
  };
  
  
  
  
  export default Tab1;