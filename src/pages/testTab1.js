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

//class Tab1 extends Component  {
//    constructor(props) {
//        super(props);
//        this.state = {
 //           mapsLoaded: false,     
//            latitude:38,
//            longitude:-100,
//            map: {},
//            mapsApi: {},
//            markers: [],
//            searchResults: [],
 //           placesService: {},
//            geoCoderService: {},
//            directionService: {},
//            testing_site_locations: [], // array of {lat: number, lng: number}
//            
//        };
//    }
//}