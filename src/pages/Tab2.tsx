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

class newsFeed extends React.Component<{}, { Posts: string}>{
    cases: number
    deaths: number
    constructor(props){
        super(props);
        this.state = {Posts:''};
        this.cases = 0;
        this.deaths = 0;
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
        let res = await axios({url: "http://127.0.0.1:3313/feed/refresh?loc=Los+Angeles",
            method: 'get'});
        this.cases = res.data.cases;
        this.deaths = res.data.deaths;
        console.log(res.data.cases);
        console.log(res.data.deaths);
    }
    componentDidMount() {
        this.renderPosts();
        this.renderCases();
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

