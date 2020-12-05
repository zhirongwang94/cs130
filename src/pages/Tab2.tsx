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

    /**
     * Async method to render the Posts with the current
     * county name.
     * @remarks
     * this is the utility function to render all the news with search result.
     * Call this method after getting the county name
     */
    renderPosts = async() => {
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
    }

    /**
     * Async method to get the positive cases from backend.
     * @remarks
     * Query the positive cases from the backend.
     * Call this function after getting the county name
     */
    renderCases = async() => {
        let url = "http://127.0.0.1:3313/feed/refresh?loc=" + this.county;
        let res = await axios({url: url,
            method: 'get'});
        this.cases = res.data.cases;
        this.deaths = res.data.deaths;
        console.log(res.data.cases);
        console.log(res.data.deaths);
    }

    /**
     * Async function to get the current user location. After the callback function,
     * we will get the State and County name
     * @remark
     * Query the longitude and latitude from the geolocation module
     *
     * @callback
        * Store the Position to the latitude and longitude state.
     */
    getLatLong = async() => {
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

    /**
     * Calculate the State and County name given the latitude and longitude stored in the
     * state.
     * @remarks
     * Call this function after getting the latitude and longitude.
     */
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

    /**
     * Asyncronous call to request device permissions for Local current location to feed the news and
     * report positve cases
     * @remarks
     * Call method when generating the scripts.
     */
    componentDidMount() {
        this.getLatLong();
    }

    /**
     * Render the page method
     */
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

