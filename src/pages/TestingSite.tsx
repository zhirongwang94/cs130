import React,  { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import GoogleMapReact from 'google-map-react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
/**
Find an API that can easily import a COVID news feed

This page should contain:
  -a news feed
**/

const TestingSite: React.FC = () => {

  const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  );
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
        <ExploreContainer name=" Testing Site page" />
        <MapWithAMarker
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
      </IonContent>
    </IonPage>
  );
};

export default TestingSite;
