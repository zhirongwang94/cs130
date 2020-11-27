import React,  { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
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
interface MyProps {

}

interface MyState {
    mapsLoaded: boolean,     
    //position :any,
    latitude:number,
    longitude:number,
    map: {},
    mapsApi: {},
    searchResults: [],
    placesService: {},
    geoCoderService: {},
    directionService: {},
}

class Tab1 extends Component <MyProps,MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mapsLoaded: false,     
            latitude:37.4,
            longitude:-122,
            map: {},
            mapsApi: {},
            searchResults: [],
            placesService: {},
            geoCoderService: {},
            directionService: {},
        };
    }
    apiHasLoaded = (map:any, mapsApi:any) => {
      this.setState({
        mapsLoaded: true,
        map: map,
        mapsApi: mapsApi,
        placesService: new mapsApi.places.PlacesService(map),
        geoCoderService: new mapsApi.Geocoder(),
        directionService: new mapsApi.DirectionsService(),
      });
      console.log(this.state.mapsApi);
      console.log(this.state.map);
      
        //var {placesService, directionService } = this.state;
        let markerLatLng = new mapsApi.LatLng(this.state.latitude, this.state.latitude);
        let placesRequest = {
              location: markerLatLng,
              //radius: '3000000', // Cannot be used with rankBy. Pick your poison!
              type: ['hospital', 'pharmacy','doctor'], // List of types: https://developers.google.com/places/supported_types
              query: 'covid 19 testing site',
              rankBy: mapsApi.places.RankBy.DISTANCE,
          }
          console.log(placesRequest);
          new mapsApi.places.PlacesService(map).textSearch(placesRequest, ((response:any) => {
              console.log(response.length)
              let responseLimit = Math.min(5, response.length);
              for (let i = 0; i < responseLimit; i++) {
                  const covidTesting = response[i];
                  const { rating, name } = covidTesting;
                  const address = covidTesting.formatted_address; 
                  let openNow = false;
                  if (covidTesting.opening_hours) {
                      openNow = covidTesting.opening_hours.open_now; // e.g true/false
                  }
                  console.log(name,address, openNow);
              }
              
          }
          ))

     
    };
    
    handleClick = () => {
      this.componentDidMount();
      console.log("set longitude:",this.state.longitude);
    }
    async componentDidMount() {
          await navigator.geolocation.getCurrentPosition(
              position => this.setState({ 
                  latitude: position.coords.latitude, 
                  longitude: position.coords.longitude
              })
          
          )
      }
      

      //<IonButton color="primary" onClick={this.getLocation}>{this.state.longitude ? `${this.state.latitude} ${this.state.longitude}` : "Get Location"}</IonButton>
      render(){
        //const { constraints, mapsLoaded, singaporeLatLng, markers, searchResults } = this.state;
        const {  geoCoderService } = this.state; // Google Maps Services
      return(
              <IonPage>
              <IonHeader>
                <IonToolbar color="primary">
                  <IonTitle>Login</IonTitle>
                </IonToolbar>
              </IonHeader>
              <div>            
            <IonButton color="primary" onClick={this.handleClick}>
              {"Update my locations"} 
            </IonButton> 
          </div>
              <IonContent>
              <div>Current Location: {JSON.stringify(this.state.latitude  )} ,  {JSON.stringify(this.state.latitude )}</div> 
              <div>Initial Location: {JSON.stringify(this.state.latitude )} ,  {JSON.stringify(this.state.longitude)}</div> 
              <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBj9b-EHxuAAihd8u2HBBqWOSXukFlA3jY",
                libraries: ['places', 'directions']
              }}
              defaultZoom={11}
              defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
              //yesIWantToUseGoogleMapApiInternals={true}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.
            >
  
               </GoogleMapReact>
               </div>
                </IonContent>
                </IonPage>
            );
      }
    
  };
  
  
  
  
  export default Tab1;