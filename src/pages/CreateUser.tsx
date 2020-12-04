import React from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonInput,
  useIonViewWillEnter,
  IonSelect,
  IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useForm } from "react-hook-form"
import {useHistory} from 'react-router-dom'
import firebase from '../Firebase'

type AccountCreation = {
  email: string;
  pass1: string;
  pass2: string;
}

var validPass = false;

const CreateUser: React.FC = () => {
  const history = useHistory()
  const {register, handleSubmit} = useForm<any>();
  const goNext = () => {
    history.push('/Tab1')
  };

  const goBack = () =>{
    history.push('/OnOpen')
  }

  function checkPass(p1: string, p2: string){
    if (p1 == p2 && p1.length >= 6){
      validPass = true
    }
  }

  const onSubmit = (data: AccountCreation) => {
    checkPass(data.pass1, data.pass2)
    if (validPass){
      firebase.auth().createUserWithEmailAndPassword(data.email, data.pass1).then((ref: any)=>{
        firebase.firestore().collection('users').doc(ref.user.uid).set({'email': data.email, 'userID': ref.user.uid})
      }).catch((error)=>{
        console.log(error)
      })
      goNext()
    } else {
      console.log('Passwords do not match')
    }
  };

  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
          <IonTitle size="large">Create User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <form onSubmit = {handleSubmit(onSubmit)}>
          <label>Email:</label>
            <IonInput
              required={true}
              type="email"
              id="email"
              name="email"
              ref={register}
            />
          <label>Password: (minimum of 6 characters)</label>
            <IonInput
              required={true}
              type="password"
              id="pass1"
              name="pass1"
              ref={register}
            />
          <label>Re-enter password:</label>
            <IonInput
              required={true}
              type="password"
              id="pass2"
              name="pass2"
              ref={register}
            />
          <IonButton justify-content='center' expand="block" shape="round"  color="dark" fill="solid" type="submit">Create Account</IonButton>
          <IonButton expand="block" shape="round"  color="dark" fill="solid" onClick={goBack}>Back</IonButton>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default CreateUser;