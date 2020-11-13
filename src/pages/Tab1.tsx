import React from 'react';
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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
