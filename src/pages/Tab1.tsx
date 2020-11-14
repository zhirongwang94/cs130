import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'

import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

/**
This page should contain:
  -options to take you to other pages:
    -a symptoms checklist 
    -testing sites near you
    -health policies in your area
**/

const Tab1: React.FC = () => {
  const history = useHistory()
  const {register, handleSubmit} = useForm<any>();
  const onSubmit = ()=> {
    history.push('/Symptoms')
  };
  const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
  }
  const zoomLevel = 1; 
  const myKEY = "AIzaSyBj9b-EHxuAAihd8u2HBBqWOSXukFlA3jY"
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Location Based COVID-19 Information</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <IonButton type="submit">Symptoms Checklist</IonButton>
        </form>

        <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: myKEY }}
              defaultCenter={location}
              defaultZoom={zoomLevel}
            >

            </GoogleMapReact>
    </div>



      </IonContent>



    </IonPage>
  );
};

export default Tab1;








