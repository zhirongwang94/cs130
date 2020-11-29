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

