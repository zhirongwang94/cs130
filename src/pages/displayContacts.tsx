import { IonRouterOutlet, IonFooter, IonPage, IonCheckbox, IonItem, IonTitle, IonBackdrop, IonContent, IonLabel, IonList, IonListHeader, IonToolbar, IonHeader, IonButton } from "@ionic/react";
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, useHistory} from 'react-router-dom'; //

import Singleton from './ContactTracing';
import { Contact } from "@capacitor-community/contacts";
import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;



const ct = Singleton.getInstance();

const displayContacts:React.FC = () => {
    //const contactIndex:boolean[] = [];
    const contact_list = ct.getContacts();
    // const history = useHistory()
    // const onPush = () => { // 
    //     ct.sendMessage();
    //     history.goBack();
    // };
  

    return(
        <IonPage>
            <IonContent fullscreen>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonTitle>
                            Contacts
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList mode="ios" >
                    <IonListHeader>Send to: </IonListHeader> 
                    
                    
                    {contact_list.map(( {}, i) => (
                        <IonItem key={i}>
                            <IonLabel>
                                <h2>{contact_list[i].displayName}</h2>
                                <h3>{contact_list[i].phoneNumbers[0]}</h3>
                            </IonLabel>
                            <IonCheckbox slot="end" value={contact_list[i].displayName} checked={ct.getContactIndex()[i]} onClick={()=>ct.check(i)} />
                        </IonItem>
                    ))}


                </IonList>
            </IonContent>
            <IonFooter>

                <IonButton onClick={()=>ct.sendMessage()} expand="block" shape="round"  color="dark" fill="solid"> 
                    {/*Where to write message?*/}
                    {/* <IonReactRouter>
                        <IonRouterOutlet>
                            <Route path={"/tab3"} component={Tab3} exact={true}/> 
                        </IonRouterOutlet>
                    </IonReactRouter> */}
                    Select and Send
                    

                </IonButton>
            </IonFooter>
        </IonPage>
        
        // <IonPage>
        //     <IonTitle>Settings</IonTitle>
            
        //     {/* <IonBackdrop>
        //         <IonButton expand="block" shape="round"  color="dark" fill="solid"> Test </IonButton>

        //     </IonBackdrop> */}
        // </IonPage>
    )
};
export default displayContacts;