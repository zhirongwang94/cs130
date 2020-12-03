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
    IonPage, IonTitle, IonToolbar,
    IonBadge,
    IonItem,
    IonLabel,
    IonListHeader,
    IonList,
    IonRouterLink
} from "@ionic/react";
import Tab1 from "./Tab1";

class newsFeed extends React.Component<{}, { Posts: string}>{
    cases: number
    deaths: number
    county: string
    State: string
    latitude: number;
    longitude: number;
    constructor(props){
        super(props);
        this.state = {Posts:''};
        this.cases = 0;
        this.deaths = 0;
        this.county = '';
        this.State = '';
        this.latitude = 38;
        this.longitude = -118;
    }
    renderPosts = async() => {
        console.log("hello world")
        let url = "https://gnews.io/api/v4/search?q=" + this.county + " Covid&lang=en&country=us&max=10&token=75459139b9417d88389a866dda4a84cb"
        console.log(url)
        let res = await axios({url: url,
            method: 'get'});
        let posts = res.data.articles;
        this.setState({
            Posts: posts.map((item, i) => (
                <IonCard>
                    <IonImg src={item.image}/>
                    <IonCardHeader>
                        <IonCardTitle><IonRouterLink href={item.url}>{item.title}</IonRouterLink></IonCardTitle>
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
    renderCases = async() => {
        console.log("hello world")
        let url = "http://127.0.0.1:3313/feed/refresh?loc=" + this.county;
        let res = await axios({url: url,
            method: 'get'});
        this.cases = res.data.cases;
        this.deaths = res.data.deaths;
        console.log(res.data.cases);
        console.log(res.data.deaths);
    }
    getLatLong = async() => {
        console.log("hello");
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    console.log(this.latitude);
                    console.log(this.longitude);
                    resolve();
                }
            )
        }).then(() => {
            this.getLocation().then(() => {
                    this.renderPosts();
                    this.renderCases();
            }
            );
        })
    }
    getLocation = async() => {
        console.log(this.latitude);
        console.log(this.longitude);
        let url = "https://geo.fcc.gov/api/census/area?lat=" + this.latitude.toString() + "&lon=" +
            this.longitude.toString() + "&format=json";
        let res = await axios({url: url,
            method: 'get'});
        console.log(res.data)
        this.State = res.data.results[0].state_name;
        this.county = res.data.results[0].county_name;
        console.log(this.State);
        console.log(this.county);

    }
    componentDidMount() {
        this.getLatLong();
    }
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>NewsFeed - {this.county}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonList>
                        <IonItem>
                            <IonLabel>Current Cases</IonLabel>
                            <IonBadge color="warning" >{this.cases}</IonBadge>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Deaths</IonLabel>
                            <IonBadge color="danger" >{this.deaths}</IonBadge>
                        </IonItem>
                    </IonList>
                    {this.state.Posts}
                </IonContent>
            </IonPage>
        );
    }
}

export default newsFeed;

