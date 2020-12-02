import React from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {useHistory} from 'react-router-dom'
import '../theme/variables.css'

var userID = ''

function setUserId(stringIn:string){
  userID = stringIn
}

const OnOpen: React.FC = () => {
  const history = useHistory()
  const goNextCreateUser = () => {
    history.push('/CreateUser')
  };
  const goNextLogin=()=>{
    history.push('/Login')
  };

  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
          <IonTitle size="large">Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
        </div>
        <IonButton color="black" className = "buttons" size='large' onClick={goNextCreateUser}>New User</IonButton>
        <IonButton color="black" className = "buttons" size='large' onClick={goNextLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default OnOpen;
