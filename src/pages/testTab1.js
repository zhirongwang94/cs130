import React,  { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'  // for the map, className="google-map"
import { Icon } from '@iconify/react'  // for map pin
//import locationIcon from '@iconify/icons-mdi/map-marker' // for map pin
//import PlaceCard from '../components/PlaceCard';
//import Marker from './Marker';
import SimpleMarker from './SimpleMarker';

//import { Geolocation, Geoposition } from '@ionic-native/geolocation';
//import { Button, Input, Divider, message } from 'antd';
//import { AnyCnameRecord } from 'dns';

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

class Tab1Test extends Component  {
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
      //const markerLatLng = new mapsApi.LatLng(this.state.latitude, this.state.longitude);
      let locations = [];
      // los angeles, san francisco, seattle
      let citys = [[33.7690882,34.2763908,-118.4948469,-117.745091],[37.2802362,37.986638,-122.4835193,-121.855137],
    [47.2031566,47.9789848,-122.3320,-122.0355736],[41.505286,42.248038,-88.283689,-87.651560]
    ];
      for(let i = 0; i < 4; i++){
          for(let j = 0; j <= 10; j++){
                const curlat = Math.random() * (citys[i][1]-citys[i][0]) + citys[i][0];
                const curlong = Math.random()*(citys[i][3]-citys[i][2]) + citys[i][2];
                locations.push([curlat,curlong]);
          }

      }
      //locations.push([]);
      const loc = [ 33.960697786372634,-118.27835814456115];
      // m could be 0-10, 10-20, 20-30, 30-40 
      for(let m = 30; m < 40; m++){
      const markerLatLng = new mapsApi.LatLng(locations[m][0],locations[m][1])
      console.log(m,locations[m][0],locations[m][1]);
      const placesRequest = {
            location: markerLatLng,
            //radius: '3000000', // Cannot be used with rankBy. Pick your poison!
            type: ['hospital', 'pharmacy','doctor'], // List of types: https://developers.google.com/places/supported_types
            query: 'covid 19 testing site',
            rankBy: mapsApi.places.RankBy.DISTANCE,
        };
        //console.log(placesRequest);
        placesService.textSearch(placesRequest, ((response) => {
          if(response == null){
            console.log("response is null",response,m,locations[m][0],locations[m][1]);
            
          }
          else{
            console.log(m,response.length)
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
                //console.log(name,address, openNow,covidTesting.opening_hours, rating);
            }
            }
        }
        ))
    }
    });
    render(){
        const { markers, geoCoderService,searchResults,latitude,longitude } = this.state;
        return(
            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Testing Site Search</IonTitle>
                </IonToolbar>
            </IonHeader>

                  {/* 
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Login</IonTitle>
            </IonToolbar>
          </IonHeader>
                    */}

          <IonContent>
               
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

        </GoogleMapReact>
        </div>
         <IonButton justify-content='center' expand="block" shape="round" color="primary" onClick={this.handleSearch}> {"search"}  </IonButton> 
        </IonContent>
            </IonPage>
        )
    }  
};
  
  export default Tab1Test;