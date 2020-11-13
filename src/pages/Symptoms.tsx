import React from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonInput,
  useIonViewDidEnter,
  IonToggle,
  IonList,
  IonSelect,
  IonSelectOption} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import firebase from '../Firebase'
import { useForm } from "react-hook-form"
import {useHistory} from 'react-router-dom'
//Dealer, Vehicle, Technition General Information
//contains all fields for section 1 of the form
//dealer, vehicle, and technition general information

var myToggles = {fever:'', bodyAches:'', difficultyBreathing:''}
                   
const Symptoms: React.FC = () => {
  const history = useHistory()
  const {register, handleSubmit} = useForm<any>();

  const onSubmit = () => {
    const db = firebase.firestore()
    db.collection('symptomsChecklist').doc('Patient0').set(myToggles).then(()=>{
      history.push('/Diagnosis')
    })
  };
  
  function handleChangeToggle(id:string, e:any){
    if (id=="fever"){
      myToggles.fever = e.detail.value
    } else if (id=="bodyAches"){
      myToggles.bodyAches=e.detail.value
    } else if (id=="difficultyBreathing"){
      myToggles.difficultyBreathing=e.detail.value
    }
  }

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>Symptoms Checklist</IonTitle>
            <h6>Please answer the following questions.</h6>
          </IonToolbar>
        </IonHeader>
      <IonContent>
      <IonList>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
        <label>Do you have a fever?</label>
        <IonSelect
          interface="popover"
          onIonChange={(e)=>{console.log(e);handleChangeToggle('fever',e)}}>
          <IonSelectOption value="yes">Yes</IonSelectOption>
          <IonSelectOption value="no">No</IonSelectOption>
          ref={register}
          </IonSelect>
        </div>
        <div>
        <label>Do you have body aches?</label>
        <IonSelect
          interface="popover"
          onIonChange={(e)=>{console.log(e);handleChangeToggle('bodyAches',e)}}>
          <IonSelectOption value="yes">Yes</IonSelectOption>
          <IonSelectOption value="no">No</IonSelectOption>
          ref={register}
          </IonSelect>
        </div>
        <div>
        <label>Do you have difficulty breathing?</label>
        <IonSelect
          interface="popover"
          onIonChange={(e)=>{console.log(e);handleChangeToggle('difficultyBreathing',e)}}>
          <IonSelectOption value="yes">Yes</IonSelectOption>
          <IonSelectOption value="no">No</IonSelectOption>
          ref={register}
          </IonSelect>
        </div>
        <IonButton shape="round" type="submit">Submit</IonButton>
        </form>
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Symptoms;