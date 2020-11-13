// IONSLIDES FOR TABS?
// ionChange	Emitted when the checked property has changed.

import React, { useState } from 'react';
import { IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const symptomList = [
  {val: "Cough", isChecked: false},
  {val: "Fever or chills", isChecked: false},
  {val: "Shortness of breath or difficulty breathing", isChecked: false},
  {val: "Fatigue", isChecked: false},
  {val: "Muscle or body aches", isChecked: false},
  {val: "Headaches", isChecked: false},
  {val: "New loss of taste or smell", isChecked: false},
  {val: "Sore throat", isChecked: false},
  {val: "Congestion or runny nose", isChecked: false},
  {val: "Nausea or vomiting", isChecked: false},
  {val: "Diarrhea", isChecked: false}
]

const emergencyList = [
  {val: "Trouble breathing", isChecked: false},
  {val: "Persistent pain or pressure in chest", isChecked: false},
  {val: "New confusion", isChecked: false},
  {val: "Inability to wake or stay awake", isChecked: false},
  {val: "Bluish lips or face", isChecked: false}
]

const Tab3: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Check Symptoms Experienced</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
          <IonItemDivider>EMERGENCY WARNING SIGNS - IF EXPERIENCING SEEK IMMEDIATE MEDICAL ATTENTION</IonItemDivider>
          {emergencyList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
      </IonList>
      <IonList>
          <IonItemDivider>Symptoms exprienced 2-14 days after exposure</IonItemDivider>
          {symptomList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
      </IonList>
      <IonButton expand="block" shape="round"  color="dark" fill="solid">Send Messages</IonButton>
      
      </IonContent>

    </IonPage>
  );
};

export default Tab3;
