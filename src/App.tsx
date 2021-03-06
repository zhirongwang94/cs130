import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, newspaper, chatbubbles, location} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Symptoms from './pages/Symptoms'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'
import OnOpen from './pages/OnOpen'
import TestInput from './pages/testinput'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Import SMS, Contacts modules */


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true}/>
          <Route path="/testinput" component={TestInput} exact={true}/>
          <Route path="/" render={() => <Redirect to="/OnOpen" />} exact={true} />
          <Route path="/Symptoms" component={Symptoms} exact={true}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={location} />
            <IonLabel>Local Information</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={newspaper} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={chatbubbles} />
            <IonLabel>Contact Tracing</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Route path="/OnOpen" component={OnOpen} exact={true}/>
      <Route path="/CreateUser" component={CreateUser} exact={true}/>
      <Route path="/Login" component={Login} exact={true}/>
    </IonReactRouter>
  </IonApp>
);

export default App;
