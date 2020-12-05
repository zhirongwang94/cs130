import React,  { Component,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'  // for the map, className="google-map"
import { Icon } from '@iconify/react'  // for map pin
//import locationIcon from '@iconify/icons-mdi/map-marker' // for map pin
import PlaceCard from '../components/PlaceCard';
import Marker from './Marker';
import SimpleMarker from './SimpleMarker';
import firebase from '../Firebase';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Button, Input, Divider, message } from 'antd';
import { AnyCnameRecord } from 'dns';
import {Plugins, LocalNotificationEnabledResult, LocalNotificationActionPerformed, Device} from '@capacitor/core';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent,
    IonHeader,
    IonImg,
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonBadge,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  } from "@ionic/react";
import App from '../App';


const {LocalNotifications} = Plugins;

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
            latitude:34,
            longitude:-118,
            map: {},
            mapsApi: {},
            markers: [],
            searchResults: [],
            placesService: {},
            geoCoderService: {},
            directionService: {},
            testing_site_locations: [], // array of {lat: number, lng: number}
            siteLat0: 60,
            siteLat1: 60, 
            siteLat2: 60,
            siteLat3: 60,
            siteLat4: 60,
            siteLng0: -118,
            siteLng1: -118,
            siteLng2: -118,
            siteLng3: -118,
            siteLng4: -118,
        };
        this.initNotif();
        this.notif_timeout = new Date().getTime()-10000;
    }

    /**
     * Asyncronous call to request device permissions for Local Notifications
     * @remarks
     * Call method before any calls that send local notifications.
     */
    async initNotif(){
      await LocalNotifications.requestPermission();
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
    /**
     * call to testing site search. It contained the main logic ofform a placesearch request 
     * with current position and use Google.textsearch to getall place information 
     * saved in searchResults. And render the searchResults for visualization.
     * @remarks
     * Call method after push the search bottom.
     * @param {float} location.latitude - latitude value in degrees
     * @param {float} location.longitude - longitude value in degrees
     * @returns {Array} searchResults - top 5 testing location information
     */
    handleSearch = (() => {
      if (this.state.map === {}){
        return
      }
      
      // console.log(this.state.mapsApi);
      // console.log(this.state.map);
      // console.log(this.state.placesService);
      // console.log(this.state.latitude, this.state.longitude);
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
          //console.log(placesRequest);
          placesService.textSearch(placesRequest, ((response) => {
              //console.log(response.length)
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
                  console.log(name,address, openNow,covidTesting.opening_hours, rating);
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
              //console.log(this.state.searchResults);  

              this.setState({siteLat0: filteredResults[0].lat})
              console.log(this.state.siteLat0);
              this.setState({siteLng0: filteredResults[0].lng})

              this.setState({siteLat1: filteredResults[1].lat})
              this.setState({siteLng1: filteredResults[1].lng})

              this.setState({siteLat2: filteredResults[2].lat})
              this.setState({siteLng2: filteredResults[2].lng})

              this.setState({siteLat3: filteredResults[3].lat})
              this.setState({siteLng3: filteredResults[3].lng})

              this.setState({siteLat4: filteredResults[4].lat})
              this.setState({siteLng4: filteredResults[4].lng})
              
          }
          ))
    });
    /**
     * Asyncronous call to request device permissions for Local current location and saved in state
     * @remarks
     * Call method when generating the scripts.
     */
    async componentDidMount() {
      await navigator.geolocation.getCurrentPosition(
          position => {this.setState({ 
              latitude: position.coords.latitude, 
              longitude: position.coords.longitude
          });
          //console.log('Position\n', position);
        }
      );

      var id = navigator.geolocation.watchPosition(
        (position) => {
          const userLoc = {latitude:position.coords.latitude, longitude: position.coords.longitude};
          //console.log("Location\n", userLoc);
          const db = firebase.firestore().collection('users');
          const user = firebase.auth().currentUser;
          var user_id = '';
          if (user!=null){
            user_id = user.uid.toString();
            db.doc(user_id).set({'location': userLoc});
            this.nearPositive(userLoc, 0.01);
          }
        },
        (err)=>{
          if(err.code == 1) {
            console.log("Error: Access is denied!");
          } else if( err.code == 2) {
            console.log("Error: Position is unavailable!");
          }
        }, 
        { enableHighAccuracy:false ,timeout: 60000, maximumAge:30000}
      );
    }

    /**
     * Determines if there is another user near the point 
     * represented by param location and sends local notification to user.
     * 
     * @remarks
     * Queries firestore database for all user locations
     * Uses distance(lat1, lon1, lat2, lon2) to determine distance between users
     * 
     * @param {Object} location - representation of a point in the Geographic Coordinate System
     * @param {float} location.latitude - latitude value in degrees
     * @param {float} location.longitude - longitude value in degrees
     * @param {float} max_dist - maximum distance between users to be considered close
     * 
     * @returns {number} number of positive tested users considered close to current user
     */
    nearPositive(location, max_dist){
      const all_usrs = firebase.firestore().collection('users');
      const cur_user = firebase.auth().currentUser;
      //console.log("\n");
      let close_usrs = [];
      let close_usrs_len = 0;
      if(cur_user != null){
      //grabs all users with the same lat and long degree
        //console.log('usrs', all_usrs.get().doc);
        all_usrs.get().then(snapshot=>{
          snapshot.forEach(usr=>
            {
              let loc = usr.get('location');
              if(loc != undefined){
                //let loc = usr.data('location');
                if(!usr.isEqual(cur_user)){
                  console.log('distance:', this.distance(loc.latitude, loc.longitude, location.latitude, location.longitude));
                  if(this.distance(loc.latitude, loc.longitude, location.latitude, location.longitude) < max_dist){
                    //this is not pushing , object types
                    // WRITTEN POSSIBLY NOT FUNC CODE
                    if(usr.get('testResult') == 'positive'){
                      close_usrs_len=close_usrs_len+1;
                    }
                  }
                }
              }
            });
          
        }).then(() => {
          console.log("len",close_usrs_len);
          if(close_usrs_len > 0){
            //   //check if users are positive
            //   //implement a time out just to make sure there is no spam
            let cur_time = new Date().getTime();
            if(Math.abs(cur_time - this.notif_timeout) > 10000){
              this.notify();
              this.notif_timeout = cur_time;
              return close_usrs_len;
            }
          }
        });
      }
    }

    /**
     * Asynchronously sends local notification using capacitor plugin LocalNotifications
     * 
     * @remarks
     * Must call LocalNotifications.requestPermission() before method call
     */
    async notify(){
      await LocalNotifications.schedule({
        notifications:[{
          title: 'Covid Proximity!',
          body: 'There is a Covid positive user near your location!',
          id: 1,
          sound: null,
          iconColor: '#0000FF'
          }
        ]
      });
    }

    /**
     * Converts a latitude-longitude degree to radians
     * 
     * @remarks
     * Helper function for distance function
     * 
     * @param {float} deg - coordinate in degrees
     * @returns {number} radian of 'deg'
     */
    degtorad(deg){
      return deg * (Math.PI/180);
    }

    /**
     * Calculates the distance between two 
     * Geographic coordinate system points
     * 
     * @remarks
     * Uses helper function - degtorad(deg)
     * 
     * @param {float} lat1 - latitude of the first point
     * @param {float} lon1 - longitude of the first point
     * @param {float} lat2 - latitude of the second point
     * @param {float} lon2 - longitude of the first point
     * @returns {float} distance between the points (lat1, lon1) (lat2, lon2) in kilometers.
     */
    distance(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.degtorad(lat2-lat1);  // deg2rad below
      var dLon = this.degtorad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.degtorad(lat1)) * Math.cos(this.degtorad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }
    

      //<IonButton color="primary" onClick={this.getLocation}>{this.state.longitude ? `${this.state.latitude} ${this.state.longitude}` : "Get Location"}</IonButton>
      render(){

      //const { constraints, mapsLoaded, singaporeLatLng, markers, searchResults } = this.state;
      const { markers, geoCoderService,searchResults,latitude,longitude } = this.state; // Google Maps Services
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
              {/* <div>Current Location: {JSON.stringify(this.state.latitude  )} ,  {JSON.stringify(this.state.longitude )}</div>          */}
{/*************** Maps Section ******************************************************************************/}              
            <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBj9b-EHxuAAihd8u2HBBqWOSXukFlA3jY",
                libraries: ['places', 'directions']
              }}
              defaultZoom={5}
              //defaultCenter={{ lat: 38, lng: -118 }}
              center={{ lat: latitude, lng: longitude }}
              yesIWantToUseGoogleMapApiInternals={true}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.

            >
              
              
             <Marker lat={this.state.latitude} lng={this.state.longitude} name="My Marker" color="blue"/>
             
             <SimpleMarker lat={this.state.siteLat0} lng={this.state.siteLng0} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat1} lng={this.state.siteLng1} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat2} lng={this.state.siteLng2} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat3} lng={this.state.siteLng3} name="My Marker" color="red"/>
             <SimpleMarker lat={this.state.siteLat4} lng={this.state.siteLng4} name="My Marker" color="red"/>
             
             

               </GoogleMapReact>
               </div>


{/*************** Search Button ******************************************************************************/}           
              <IonButton justify-content='center' expand="block" shape="round" color="primary" onClick={this.handleSearch}> {"search"}  </IonButton> 


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