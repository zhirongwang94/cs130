import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
//import { View, Image, StyleSheet } from 'react-native';
// TODO: info is bad naming.
const PlaceCard = (({ info, key }) => {
  const { address, distanceText, name, openNow, rating,timeText,photoUrl } = info;
  return (

    <div key={key} className="col-3 w-100 mx-4 my-4">
    {photoUrl != ''?
    <>
    {/* This Image's inner `img` tag gets `class="image"` but not the additional/transformed jsx class name(s) */}
    <img src={photoUrl} className="image" width={400} height={400}  mode='fit' />
      
    </>
    : null
    }
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span className="d-block mb-1">{address}</span>
          <span className="d-block">{distanceText}</span>
          <span className="d-block">{timeText}</span>
        </div>
        <ul className="list-group list-group-flush">
          {openNow ?
            <li className="list-group-item">Open</li>
            :
            <li className="list-group-item">Closed</li>
          }
          <li > <div>Rate: { rating} </div> </li>
        </ul>
      </div>
    </div>
    
  );
});

export default PlaceCard;