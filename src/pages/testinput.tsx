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
//import {userID} from './Login/OnOpen'
//Dealer, Vehicle, Technition General Information
//contains all fields for section 1 of the form
//dealer, vehicle, and technition general information

var myToggles = {testDate:'', testResult:''}
                   
const TestInput: React.FC = () => {
  const history = useHistory()
  const {register, handleSubmit} = useForm<any>();

  const onSubmit = () => {
    const db = firebase.firestore()
    const userID = firebase.auth().currentUser
    if (userID != null){
      console.log("wrote")
      db.collection('users').doc(userID.uid).set(myToggles).then(()=>{
      history.push('/Tab1')
      })
    } else {
      console.log(userID)
    }
  };
  
  function handleChangeToggle(id:string, e:any){
    if (id=="testResult"){
      myToggles.testResult = e.detail.value
    } else if (id == "testDate"){
      myToggles.testDate = e.detail.value
    }
  }

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle>Symptoms Checklist</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent>
      <IonList>
        <h6>Please answer the following questions.</h6>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
        <label>Test Result: </label>
        <IonSelect
          interface="popover"
          onIonChange={(e)=>{console.log(e);handleChangeToggle('testResult',e)}}>
          <IonSelectOption value="positive">Positive</IonSelectOption>
          <IonSelectOption value="negative">Negative</IonSelectOption>
          ref={register}
          </IonSelect>
        </div>
        <div>
        <label>Test Date: </label>
        <IonInput
          onIonChange={(e)=>{console.log(e);handleChangeToggle('testDate',e)}}
          required={true}
          type="date"
          id="testDate"
          name="testDate"
          ref={register}
          />
        </div>
        <IonButton shape="round" type="submit">Submit</IonButton>
        </form>
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TestInput;