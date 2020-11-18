import React,  { Component, useState  } from 'react';
import GoogleMapReact from 'google-map-react';
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
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {  IonLoading, IonToast } from '@ionic/react';
//import { AutoComplete } from 'antd';
//import  GooglePlacesAutocomplete  from 'react-places-autocomplete';
//import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
/**
This page should contain:
  -options to take you to other pages:
    -a symptoms checklist 
    -testing sites near you
    -health policies in your area
**/
interface LocationError {
  showError: boolean;
  message?: string;
}

const Tab1: React.FC = () => {
  const history = useHistory()
  const {register, handleSubmit} = useForm<any>();
  const onSubmit = ()=> {
    history.push('/Symptoms')
  };

  const onSubmit2 = ()=> {
    history.push('/TestingSite')
  };


  const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
  }
  
  const zoomLevel = 10; 
  const myKEY = "AIzaSyBj9b-EHxuAAihd8u2HBBqWOSXukFlA3jY"
  

  const myObject = 123; 
  
  //const { autoCompleteService, singaporeLatLng } = this.state;
  //const placesRequest = {
  //    location: new mapsApi.LatLng(1.3521, 103.8198),
  //    type: ['restaurant', 'cafe'],
  //    query: 'covid 19 testing site',
  //    rankBy: mapsApi.places.RankBy.DISTANCE,
      // radius: 30000, 
  //  };
  const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LocationError>({ showError: false });
  const [position, setPosition] = useState<Geoposition>();
  
  const getLocation = async () => {
      setLoading(true);

      try {
          const position = await Geolocation.getCurrentPosition();
          setPosition(position);
          setLoading(false);
          setError({ showError: false });
          

      } catch (e) {
          setError({ showError: true, message: e.message });
          setLoading(false);
      }
  }

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


        <form onSubmit = {handleSubmit(onSubmit2)}>
          <IonButton type="submit">Find Available Testing Site</IonButton>
        </form>

        <div>Current Location: {JSON.stringify(location.lat)} ,  {JSON.stringify(location.lng)}</div>
        <>
            <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Getting Location...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />
            <IonButton color="primary" onClick={getLocation}>{position ? `${position.coords.latitude} ${position.coords.longitude}` : "Get Location"}</IonButton>
        </>
        <div className="google-map">
       
            <GoogleMapReact
              bootstrapURLKeys={{ key: myKEY,
                libraries: ['places', 'directions']
               }}
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