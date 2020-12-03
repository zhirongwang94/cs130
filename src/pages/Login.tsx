import React from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonInput,
  useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useForm } from "react-hook-form"
import {useHistory} from 'react-router-dom'
import firebase from '../Firebase'

type SignIn = {
  e: string;
  p: string;
}

const Login: React.FC = () => {
  const history = useHistory()
  const {register, handleSubmit} = useForm<SignIn>();
  const goBack = () => {
    history.push('/OnOpen')
  }

  const onSubmit = (data: SignIn) => {
    firebase.auth().signInWithEmailAndPassword(data.e, data.p)
    .then((user:any)=>{
      console.log(user)
    }).then(()=>{
      history.push('/Tab1')
    })
    .catch((error) => console.log(error))
  };

  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
          <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
          <IonInput
          required={true}
          type="email"
          id="e"
          name="e"
          ref={register}
          />
        <label>Password:</label>
          <IonInput
          required={true}
          type="password"
          id="p"
          name="p"
          ref={register}
          />
        <IonButton justify-content='center' color="black" size='large' type="submit">Sign In</IonButton>
        <IonButton color="black" size='large' onClick={goBack}>Back</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;