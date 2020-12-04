import './map.css'

//import { Icon } from '@iconify/react'
//import locationIcon from '@iconify/icons-mdi/map-marker'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {  IonLoading, IonToast } from '@ionic/react';
import React,  { Component, useState  } from 'react';



interface MyProps {

}

interface MyState {
      brand: string,
      model: string,
      color: string,
      year: string
}
class Car extends React.Component<MyProps, MyState> {
  constructor(props:any) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: "1964"
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

export default Car;