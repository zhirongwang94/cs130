import React from 'react';
import { IonFooter, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider, IonRouterOutlet } from '@ionic/react';
//import { SMS } from '@ionic-native/sms';
//import {Contact} from "@capacitor-community/contacts";
import  Singleton  from "./ContactTracing";
//import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
//import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
//import { isConstructorDeclaration } from 'typescript';
//import {useHistory, Route} from 'react-router-dom'; //
//import displayContacts from './displayContacts';
//import { IonReactRouter } from '@ionic/react-router';
//import { IonReactRouter } from '@ionic/react-router';





const ct = Singleton.getInstance();

const Tab3: React.FC = () => {
  const history = useHistory();
  const {handleSubmit} = useForm();
  const onSubmit = () => {
    history.push('/TestInput');
  }
  return (
    <IonPage>
      {/* <IonReactRouter>
      <IonRouterOutlet>
          <Route path="/displayContacts" component={displayContacts} exact={true}/>
      </IonRouterOutlet>
      </IonReactRouter> */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Check Symptoms Experienced</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
          <IonItemDivider>EMERGENCY WARNING SIGNS - IF EXPERIENCING SEEK IMMEDIATE MEDICAL ATTENTION</IonItemDivider>
          {ct.getEmergencyList().map(({ val, isChecked }, i:number) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} onClick={()=>ct.checkEmergency(i)} />
            </IonItem>
          ))} 
      </IonList>

      <IonList>
          <IonItemDivider>Symptoms exprienced 2-14 days after exposure</IonItemDivider>
          {ct.getSymptomsList().map(({ val, isChecked }, i:number) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} onClick={()=>ct.checkSymptom(i)} />
              
            </IonItem>
          ))}
      </IonList>
      </IonContent>

      <IonFooter>
        <IonButton onClick={()=>ct.share()} expand="block" shape="round" justify-content='center' color="primary" fill="solid">
          {/* <IonReactRouter>
            <IonRouterOutlet>
              <Route path={"/displayContacts"} component={displayContacts} exact={true}/> 
            </IonRouterOutlet>
          </IonReactRouter> */}
          Share
        </IonButton>
        <form onSubmit = {handleSubmit(onSubmit)}>
                  <IonButton type="submit" justify-content='center' expand="block" shape="round" color="secondary" fill="solid">Update Test Results</IonButton>
        </form>
      </IonFooter>

    </IonPage>
  );
};


export default Tab3;
