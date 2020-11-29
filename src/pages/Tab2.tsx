// import React from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
// import { IonBadge, IonItem, IonLabel } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Tab2.css';
// import newsFeed from "./newsFeed";
// /**
// Find an API that can easily import a COVID news feed
//
// This page should contain:
//   -a news feed
// **/
//
//
//
// // const Tab2: React.FC = () => {
// //   return (
// //     <IonPage>
// //       <IonHeader>
// //         <IonToolbar>
// //           <IonTitle>Tab 2</IonTitle>
// //         </IonToolbar>
// //       </IonHeader>
// //       <IonContent fullscreen>
// //         <IonHeader collapse="condense">
// //           <IonToolbar>
// //             <IonTitle size="large">Tab 2</IonTitle>
// //           </IonToolbar>
// //         </IonHeader>
// //         <ExploreContainer name="Tab 2 page" />
// //       </IonContent>
// //     </IonPage>
// //   );
// // };
// //
// // export default Tab2;
//
//
// // import React from 'react';
//
//
// // export const BadgeExample: React.FC = () => (
// //     <IonContent>
// //         {/*-- Default --*/}
// //         <IonBadge>99</IonBadge>
// //
// //         {/*-- Colors --*/}
// //         <IonBadge color="primary">11</IonBadge>
// //         <IonBadge color="secondary">22</IonBadge>
// //         <IonBadge color="tertiary">33</IonBadge>
// //         <IonBadge color="success">44</IonBadge>
// //         <IonBadge color="warning">55</IonBadge>
// //         <IonBadge color="danger">66</IonBadge>
// //         <IonBadge color="light">77</IonBadge>
// //         <IonBadge color="medium">88</IonBadge>
// //         <IonBadge color="dark">99</IonBadge>
// //
// //         {/*-- Item with badge on left and right --*/}
// //         <IonItem>
// //             <IonBadge slot="start">11</IonBadge>
// //             <IonLabel>My Item</IonLabel>
// //             <IonBadge slot="end">22</IonBadge>
// //         </IonItem>
// //     </IonContent>
// // );
// //
// // export default BadgeExample;
//
// // import React from 'react';
//
// // import { IonButton, IonIcon, IonContent } from '@ionic/react';
// // import { star } from 'ionicons/icons';
// //
// // export const ButtonExample: React.FC = () => (
// //     <IonContent>
// //         {/*-- Default --*/}
// //         <IonButton>Default</IonButton>
// //
// //         {/*-- Anchor --*/}
// //         <IonButton href="#">Anchor</IonButton>
// //
// //         {/*-- Colors --*/}
// //         <IonButton color="primary">Primary</IonButton>
// //         <IonButton color="secondary">Secondary</IonButton>
// //         <IonButton color="tertiary">Tertiary</IonButton>
// //         <IonButton color="success">Success</IonButton>
// //         <IonButton color="warning">Warning</IonButton>
// //         <IonButton color="danger">Danger</IonButton>
// //         <IonButton color="light">Light</IonButton>
// //         <IonButton color="medium">Medium</IonButton>
// //         <IonButton color="dark">Dark</IonButton>
// //
// //         {/*-- Expand --*/}
// //         <IonButton expand="full">Full Button</IonButton>
// //         <IonButton expand="block">Block Button</IonButton>
// //
// //         {/*-- Round --*/}
// //         <IonButton shape="round">Round Button</IonButton>
// //
// //         {/*-- Fill --*/}
// //         <IonButton expand="full" fill="outline">Outline + Full</IonButton>
// //         <IonButton expand="block" fill="outline">Outline + Block</IonButton>
// //         <IonButton shape="round" fill="outline">Outline + Round</IonButton>
// //
// //         {/*-- Icons --*/}
// //         <IonButton>
// //             <IonIcon slot="start" icon={star} />
// //             Left Icon
// //         </IonButton>
// //
// //         <IonButton>
// //             Right Icon
// //             <IonIcon slot="end" icon={star} />
// //         </IonButton>
// //         <IonButton>
// //             <IonIcon slot="icon-only" icon={star} />
// //         </IonButton>
// //
// //         {/*-- Sizes --*/}
// //         <IonButton size="large">Large</IonButton>
// //         <IonButton>Default</IonButton>
// //         <IonButton size="small">Small</IonButton>
// //     </IonContent>
// // );
// // export default ButtonExample;
//
// // import React from 'react';
// // import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonThumbnail} from '@ionic/react';
// // import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
// //
// // export const CardExamples: React.FC = () => {
// //     return (
// //         <IonPage>
// //             <IonHeader>
// //                 <IonToolbar>
// //                     <IonTitle>CardExamples</IonTitle>
// //                 </IonToolbar>
// //             </IonHeader>
// //             <IonContent>
// //                 <IonCard>
// //                     <img src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/11/np_file_53848-870x513.jpeg"/>
// //                     <IonCardHeader>
// //                         <IonCardSubtitle>Osaka Prefecture reported 383 new cases of the virus on Friday, a day after recording a high of 12 deaths, while Hokkaido recorded 252 and a record nine deaths</IonCardSubtitle>
// //                         <IonCardTitle>Outbound travel from Sapporo and Osaka added to travel campaign curbs</IonCardTitle>
// //                     </IonCardHeader>
// //
// //                     <IonCardContent>
// //                         {/*<IonButton fill="outline" slot="end">View</IonButton>*/}
// //                         Osaka Prefecture reported 383 new cases of the virus on Friday, a day after recording a high of 12 deaths, while Hokkaido recorded 252 and a record nine deaths
// //                     </IonCardContent>
// //                 </IonCard>
// //
// //                 <IonCard>
// //                     <IonItem>
// //                         <IonIcon icon={pin} slot="start" />
// //                         <IonLabel>ion-item in a card, icon left, button right</IonLabel>
// //                         <IonButton fill="outline" slot="end">View</IonButton>
// //                     </IonItem>
// //
// //                     <IonCardContent>
// //                         This is content, without any paragraph or header tags,
// //                         within an ion-cardContent element.
// //                     </IonCardContent>
// //                 </IonCard>
// //
// //                 <IonCard>
// //                     <IonItem href="#" className="ion-activated">
// //                         <IonIcon icon={wifi} slot="start" />
// //                         <IonLabel>Card Link Item 1 activated</IonLabel>
// //                     </IonItem>
// //
// //                     <IonItem href="#">
// //                         <IonIcon icon={wine} slot="start" />
// //                         <IonLabel>Card Link Item 2</IonLabel>
// //                     </IonItem>
// //
// //                     <IonItem className="ion-activated">
// //                         <IonIcon icon={warning} slot="start" />
// //                         <IonLabel>Card Button Item 1 activated</IonLabel>
// //                     </IonItem>
// //
// //                     <IonItem>
// //                         <IonIcon icon={walk} slot="start" />
// //                         <IonLabel>Card Button Item 2</IonLabel>
// //                     </IonItem>
// //                 </IonCard>
// //             </IonContent>
// //         </IonPage>
// //     );
// // };
// // export default CardExamples;
//
//
// // import { IonRefresher, IonRefresherContent } from '@ionic/react';
// // import { RefresherEventDetail } from '@ionic/core';
// // import { chevronDownCircleOutline } from 'ionicons/icons';
// //
// // function doRefresh(event: CustomEvent<RefresherEventDetail>) {
// //     console.log('Begin async operation');
// //
// //     setTimeout(() => {
// //         console.log('Async operation has ended');
// //         event.detail.complete();
// //     }, 2000);
// // }
//
// // export const RefresherExample: React.FC = () => (
// //     <IonContent>
// //         {/*-- Default Refresher --*/}
// //         <IonContent>
// //             <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
// //                 <IonRefresherContent></IonRefresherContent>
// //             </IonRefresher>
// //         </IonContent>
// //
// //         {/*-- Custom Refresher Properties --*/}
// //         <IonContent>
// //             <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
// //                 <IonRefresherContent></IonRefresherContent>
// //             </IonRefresher>
// //         </IonContent>
// //
// //         {/*-- Custom Refresher Content --*/}
// //         <IonContent>
// //             <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
// //                 <IonRefresherContent
// //                     pullingIcon={chevronDownCircleOutline}
// //                     pullingText="Pull to refresh"
// //                     refreshingSpinner="circles"
// //                     refreshingText="Refreshing...">
// //                 </IonRefresherContent>
// //             </IonRefresher>
// //         </IonContent>
// //     </IonContent>
// // );
// //
// // export default RefresherExample;
//
// // import React from 'react';
// // import { IonList, IonThumbnail, IonImg } from '@ionic/react';
// //
// // type Item = {
// //     src: string;
// //     text: string;
// // };
// // const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' },
// //     { src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' },
// //     { src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' },
// //     { src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];
// //
// // export const ImgExample: React.FC = () => (
// //     <IonContent>
// //         <IonList>
// //             {items.map((image, i) => (
// //                 <IonItem key={i}>
// //                         <IonImg src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/11/np_file_53848-870x513.jpeg" />
// //                     <IonLabel>{image.text}</IonLabel>
// //                 </IonItem>
// //             ))}
// //         </IonList>
// //     </IonContent>
// // );
// //
// // export default ImgExample;
//
//
// import { IonCard, IonCardHeader, IonList, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonThumbnail} from '@ionic/react';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
// import axios from "axios";
//
// // const test = async() => {
// //
// //     axios({url: "https://gnews.io/api/v4/search?q=covid19&lang=en&country=us&token=75459139b9417d88389a866dda4a84cb",
// //         method: 'get'}).then(response => {
// //         console.log(response.data.articles)
// //         this.setState({
// //             Posts: response.data.articles.map((item, i) => (
// //                 <IonCard>
// //                     <img src={item.source.url}/>
// //                     <IonCardHeader>
// //                         <IonCardTitle>{item.title}</IonCardTitle>
// //                         <IonCardSubtitle>{item.description}</IonCardSubtitle>
// //                     </IonCardHeader>
// //                     <IonCardContent>
// //                         {item.content}
// //                     </IonCardContent>
// //                 </IonCard>
// //             ))
// //         });
// //     })
// //
// // };
// let state =  {Posts:null};
// var renderPosts = async() => {
//     console.log("hello world")
//     let res = await axios({url: "https://gnews.io/api/v4/search?q=covid19&lang=en&country=us&token=75459139b9417d88389a866dda4a84cb",
//     method: 'get'});
//     let posts = res.data.articles;
//     state = {
//         Posts: posts.map((item, i) => (
//             <IonCard>
//                 <IonImg src={item.image}/>
//                 <IonCardHeader>
//                     <IonCardTitle>{item.title}</IonCardTitle>
//                     <IonCardSubtitle>{item.description}</IonCardSubtitle>
//                 </IonCardHeader>
//                 <IonCardContent>
//                     {item.content}
//                 </IonCardContent>
//             </IonCard>
//         ))
//     }
//     {console.log(typeof state.Posts)}
//     {console.log("hello")}
//     // console.log(state)
//     // console.log("hello world")
// }
// var componentDidMount = () => {
//     console.log("called");
//     renderPosts();
// }
// var render = () => {
//     return (
//         <IonPage>
//             <IonHeader>
//                 <IonToolbar>
//                     <IonTitle>NewsFeed</IonTitle>
//                 </IonToolbar>
//             </IonHeader>
//             <IonContent>
//
//                 {state.Posts}
//             </IonContent>
//         </IonPage>
//     );
// }
// export const CardExamples: React.FC = () => {
//     // console.log(sendGetRequest());
//     // renderPosts();
//     // return null;
//     return (
//         <IonPage>
//             <IonHeader>
//                 <IonToolbar>
//                     <IonTitle>NewsFeed</IonTitle>
//                 </IonToolbar>
//             </IonHeader>
//             <IonContent>
//                 {newsFeed}
//                 {/*{axios({url: "https://gnews.io/api/v4/search?q=covid19&lang=en&country=us&token=75459139b9417d88389a866dda4a84cb",*/}
//                 {/*    method: 'get'}).then(response => {*/}
//                 {/*    console.log(response.data.articles)*/}
//                 {/*    response.data.articles.map((item, i) => (*/}
//                 {/*        <IonCard>*/}
//                 {/*            {console.log(item.image)};*/}
//                 {/*            <IonImg src={item.image}/>*/}
//                 {/*            <IonCardHeader>*/}
//                 {/*                <IonCardTitle>{item.title}</IonCardTitle>*/}
//                 {/*                <IonCardSubtitle>{item.description}</IonCardSubtitle>*/}
//                 {/*            </IonCardHeader>*/}
//                 {/*            <IonCardContent>*/}
//                 {/*                {item.content}*/}
//                 {/*            </IonCardContent>*/}
//                 {/*        </IonCard>*/}
//                 {/*    ))*/}
//                 {/*})}*/}
//                 {/*{sendGetRequest()}*/}
//                 {/*{console.log("hello world")}*/}
//                 {/*{axios({url: "https://gnews.io/api/v4/search?q=covid19&lang=en&country=us&token=75459139b9417d88389a866dda4a84cb",*/}
//                 {/*    method: 'get'}).then(response => {*/}
//                 {/*    console.log(response.data.articles)*/}
//                 {/*    response.data.articles.map((item, i) => (*/}
//                 {/*        <IonCard>*/}
//                 {/*            <IonImg src={item.image}/>*/}
//                 {/*            <IonCardHeader>*/}
//                 {/*                <IonCardTitle>{item.title}</IonCardTitle>*/}
//                 {/*                <IonCardSubtitle>{item.description}</IonCardSubtitle>*/}
//                 {/*            </IonCardHeader>*/}
//                 {/*            <IonCardContent>*/}
//                 {/*                {item.content}*/}
//                 {/*            </IonCardContent>*/}
//                 {/*        </IonCard>*/}
//                 {/*    ))*/}
//                 {/*})}*/}
//                 {/*{state.Posts}*/}
//                 {/*<IonCard>*/}
//                 {/*    <img src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/11/np_file_53848-870x513.jpeg"/>*/}
//                 {/*    <IonCardHeader>*/}
//
//                 {/*        <IonCardSubtitle>Osaka Prefecture reported 383 new cases of the virus on Friday, a day after recording a high of 12 deaths, while Hokkaido recorded 252 and a record nine deaths</IonCardSubtitle>*/}
//                 {/*        <IonCardTitle>Outbound travel from Sapporo and Osaka added to travel campaign curbs</IonCardTitle>*/}
//                 {/*    </IonCardHeader>*/}
//
//                 {/*    <IonCardContent>*/}
//                 {/*        /!*<IonButton fill="outline" slot="end">View</IonButton>*!/*/}
//                 {/*        Osaka Prefecture reported 383 new cases of the virus on Friday, a day after recording a high of 12 deaths, while Hokkaido recorded 252 and a record nine deaths*/}
//                 {/*    </IonCardContent>*/}
//                 {/*</IonCard>*/}
//
//                 {/*<IonCard>*/}
//                 {/*    <IonItem>*/}
//                 {/*        <IonIcon icon={pin} slot="start" />*/}
//                 {/*        <IonLabel>ion-item in a card, icon left, button right</IonLabel>*/}
//                 {/*        <IonButton fill="outline" slot="end">View</IonButton>*/}
//                 {/*    </IonItem>*/}
//
//                 {/*    <IonCardContent>*/}
//                 {/*        This is content, without any paragraph or header tags,*/}
//                 {/*        within an ion-cardContent element.*/}
//                 {/*    </IonCardContent>*/}
//                 {/*</IonCard>*/}
//
//                 {/*<IonCard>*/}
//                 {/*    <IonItem href="#" className="ion-activated">*/}
//                 {/*        <IonIcon icon={wifi} slot="start" />*/}
//                 {/*        <IonLabel>Card Link Item 1 activated</IonLabel>*/}
//                 {/*    </IonItem>*/}
//
//                 {/*    <IonItem href="#">*/}
//                 {/*        <IonIcon icon={wine} slot="start" />*/}
//                 {/*        <IonLabel>Card Link Item 2</IonLabel>*/}
//                 {/*    </IonItem>*/}
//
//                 {/*    <IonItem className="ion-activated">*/}
//                 {/*        <IonIcon icon={warning} slot="start" />*/}
//                 {/*        <IonLabel>Card Button Item 1 activated</IonLabel>*/}
//                 {/*    </IonItem>*/}
//
//                 {/*    <IonItem>*/}
//                 {/*        <IonIcon icon={walk} slot="start" />*/}
//                 {/*        <IonLabel>Card Button Item 2</IonLabel>*/}
//                 {/*    </IonItem>*/}
//                 {/*</IonCard>*/}
//             </IonContent>
//         </IonPage>
//     );
// };
//
// export default CardExamples;


import axios from 'axios';
import React from "react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent,
    IonHeader,
    IonImg,
    IonPage, IonTitle, IonToolbar
} from "@ionic/react";

class newsFeed extends React.Component<{}, { Posts: string }>{
    constructor(props){
        super(props);
        this.state = {Posts:''};
    }
    renderPosts = async() => {
        console.log("hello world")
        let res = await axios({url: "https://gnews.io/api/v4/search?q=covid19&lang=en&country=us&token=75459139b9417d88389a866dda4a84cb",
            method: 'get'});
        let posts = res.data.articles;
        this.setState({
            Posts: posts.map((item, i) => (
                <IonCard>
                    <IonImg src={item.image}/>
                    <IonCardHeader>
                        <IonCardTitle>{item.title}</IonCardTitle>
                        <IonCardSubtitle>{item.description}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {item.content}
                    </IonCardContent>
                </IonCard>
            ))
        });
        // console.log(state)
        // console.log("hello world")
    }
    componentDidMount() {
        this.renderPosts();
    }
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>NewsFeed</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {this.state.Posts}
                </IonContent>
            </IonPage>
        );
    }
}

export default newsFeed;

