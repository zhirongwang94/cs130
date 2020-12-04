import React,  { Component, useState  } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {  IonLoading, IonToast } from '@ionic/react';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};
export default Tab2;