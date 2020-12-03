import React,  { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'  // for the map, className="google-map"
import { Icon } from '@iconify/react'  // for map pin
//import locationIcon from '@iconify/icons-mdi/map-marker' // for map pin
import PlaceCard from '../components/PlaceCard';
import Marker from './Marker';
import SimpleMarker from './SimpleMarker';

//import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Button, Input, Divider, message } from 'antd';
import { AnyCnameRecord } from 'dns';

import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent,
    IonHeader,
    IonImg,
    IonPage, IonTitle, IonToolbar,
    IonBadge,
    IonItem,
    IonLabel,
    IonListHeader,
    IonList,
    IonButton
} from "@ionic/react";

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
const lats = [37.7313933, 37.7413933, 37.7413933]
const LocationPin = () => (
<div>
  <SimpleMarker name="My Marker" color="blue"/>
  <p>1</p>
</div>

)

class Tab1 extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            mapsLoaded: false,     
            latitude:38,
            longitude:-100,
            map: {},
            mapsApi: {},
            markers: [],
            searchResults: [],
            placesService: {},
            geoCoderService: {},
            directionService: {},
            testing_site_locations: [], // array of {lat: number, lng: number}
            siteLat0: 38,
            siteLat1: 38, 
            siteLat2: 38,
            siteLat3: 38,
            siteLat4: 38,
            siteLng0: -118,
            siteLng1: -118,
            siteLng2: -118,
            siteLng3: -118,
            siteLng4: -118,
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
        const testing_site_latlng_array = [];
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
                  let photoUrl = '';
                  if (covidTesting.opening_hours) {
                      openNow = covidTesting.opening_hours.isOpen(); // e.g true/false
                  }
                  if (covidTesting.photos && covidTesting.photos.length > 0) {
                    photoUrl = covidTesting.photos[0].getUrl();
                  }
                  console.log(name,address, openNow,rating);
                  console.log(photoUrl);
                  filteredResults.push({
                    name,
                    address,
                    rating,
                    lat, 
                    lng,
                    openNow,
                    photoUrl,
                  });
                  this.setState({ searchResults: filteredResults .map((item, i) => (
                      <IonCard>
                        {item.photoUrl != ''?
                         <>
                          <IonImg src={item.photoUrl}/>
                          </>
                          : null
                           }
                          <IonCardHeader>
                              <IonCardTitle>{item.name}</IonCardTitle>
                              <IonCardSubtitle>{item.address}</IonCardSubtitle>
                          </IonCardHeader>
                          <IonCardContent>
                          <li className="list-group-item">Rate:{item.rating}</li>
                               
                              {item.openNow ?
            <li className="list-group-item">Open</li>
            :
            <li className="list-group-item">Closed</li>
          }
                          </IonCardContent>
                      </IonCard>
                  ))
                  });
              }
              console.log(this.state.searchResults);  

              this.setState({siteLat0: this.state.searchResults[0].lat})
              this.setState({siteLng0: this.state.searchResults[0].lng})

              this.setState({siteLat1: this.state.searchResults[1].lat})
              this.setState({siteLng1: this.state.searchResults[1].lng})

              this.setState({siteLat2: this.state.searchResults[2].lat})
              this.setState({siteLng2: this.state.searchResults[2].lng})

              this.setState({siteLat3: this.state.searchResults[3].lat})
              this.setState({siteLng3: this.state.searchResults[3].lng})

              this.setState({siteLat4: this.state.searchResults[4].lat})
              this.setState({siteLng4: this.state.searchResults[4].lng})
              
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
      const { markers, geoCoderService,searchResults,latitude,longitude } = this.state; // Google Maps Services
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
              defaultZoom={12}
              //defaultCenter={{ lat: 38, lng: -118 }}
              center={{ lat: latitude, lng: longitude }}
              yesIWantToUseGoogleMapApiInternals={true}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.

            >
              
              {searchResults.length > 0 ? 
              <>
             <Marker lat={this.state.latitude} lng={this.state.longitude} name="My Marker" color="blue"/>
             <SimpleMarker lat={this.state.siteLat0} lng={this.state.siteLng0} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat1} lng={this.state.siteLng1} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat2} lng={this.state.siteLng2} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat3} lng={this.state.siteLng3} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat4} lng={this.state.siteLng4} name="My Marker" color="red"/>

             </>
             : null}

               </GoogleMapReact>
               </div>


{/*************** Search Button ******************************************************************************/}           
              <IonButton color="primary" onClick={this.handleSearch}> {"search"}  </IonButton> 


{/*************** Result Section ******************************************************************************/}
            {searchResults.length > 0 ? 
               <>
               {searchResults}             
               </>
               : null}

                </IonContent>
                </IonPage>
            );
      }
    
  };
  
  
  
  
  export default Tab1;