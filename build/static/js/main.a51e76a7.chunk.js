(this.webpackJsonpcovidAway=this.webpackJsonpcovidAway||[]).push([[1],{102:function(e,t,n){e.exports=n(150)},108:function(e,t,n){var a={"./ion-action-sheet.entry.js":[153,5],"./ion-alert.entry.js":[154,6],"./ion-app_8.entry.js":[155,7],"./ion-avatar_3.entry.js":[156,17],"./ion-back-button.entry.js":[157,18],"./ion-backdrop.entry.js":[158,43],"./ion-button_2.entry.js":[159,19],"./ion-card_5.entry.js":[160,20],"./ion-checkbox.entry.js":[161,21],"./ion-chip.entry.js":[162,22],"./ion-col_3.entry.js":[163,44],"./ion-datetime_3.entry.js":[164,10],"./ion-fab_3.entry.js":[165,23],"./ion-img.entry.js":[166,45],"./ion-infinite-scroll_2.entry.js":[167,46],"./ion-input.entry.js":[168,24],"./ion-item-option_3.entry.js":[169,25],"./ion-item_8.entry.js":[170,26],"./ion-loading.entry.js":[171,27],"./ion-menu_3.entry.js":[172,28],"./ion-modal.entry.js":[173,8],"./ion-nav_2.entry.js":[174,14],"./ion-popover.entry.js":[175,9],"./ion-progress-bar.entry.js":[176,29],"./ion-radio_2.entry.js":[177,30],"./ion-range.entry.js":[178,31],"./ion-refresher_2.entry.js":[179,11],"./ion-reorder_2.entry.js":[180,16],"./ion-ripple-effect.entry.js":[181,47],"./ion-route_4.entry.js":[182,32],"./ion-searchbar.entry.js":[183,33],"./ion-segment_2.entry.js":[184,34],"./ion-select_3.entry.js":[185,35],"./ion-slide_2.entry.js":[186,48],"./ion-spinner.entry.js":[187,13],"./ion-split-pane.entry.js":[188,49],"./ion-tab-bar_2.entry.js":[189,36],"./ion-tab_2.entry.js":[190,15],"./ion-text.entry.js":[191,37],"./ion-textarea.entry.js":[192,38],"./ion-toast.entry.js":[193,39],"./ion-toggle.entry.js":[194,12],"./ion-virtual-scroll.entry.js":[195,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=108,e.exports=r},110:function(e,t,n){var a={"./ion-icon.entry.js":[197,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=110,e.exports=r},115:function(e,t,n){},139:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(24),s=n.n(l),o=n(30),c=n(3),i=n(92),u=n(21),m=n(17),d=n(6),h=n.n(d),p=n(13),f=n(8),E=n(9),g=n(11),y=n(12),v=n(100),b=(n(115),n(116),function(e){var t=e.info,n=e.key,a=t.address,l=t.distanceText,s=t.name,o=(t.openNow,t.photoUrl,t.priceLevel,t.rating,t.timeText);return r.a.createElement("div",{key:n,className:"col-3 w-100 mx-4 my-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},s),r.a.createElement("span",{className:"d-block mb-1"},a),r.a.createElement("span",{className:"d-block"},l),r.a.createElement("span",{className:"d-block"},o)),r.a.createElement("ul",{className:"list-group list-group-flush"})))}),k=(n(75),function(e){var t=e.color,n=e.name;e.id;return r.a.createElement("div",null,r.a.createElement("div",{className:"pin bounce",style:{backgroundColor:t,cursor:"pointer"},title:n}),r.a.createElement("div",{className:"pulse"}))}),C=function(e){var t=e.color,n=e.name;e.id;return r.a.createElement("div",{className:"simplemarker",style:{backgroundColor:t,cursor:"pointer"},title:n})},j=n(58);j.a.initializeApp({apiKey:"AIzaSyC2rOQ72ut-xL20Hl2NJfyAv4xHK374YRM",authDomain:"covidaway-55b86.firebaseapp.com",databaseURL:"https://covidaway-55b86.firebaseio.com",projectId:"covidaway-55b86",storageBucket:"covidaway-55b86.appspot.com",messagingSenderId:"819026874031",appId:"1:819026874031:web:b424a25eb21f3d121dce5a",measurementId:"G-NN77SPJFBF"}),j.a.analytics();var w=j.a,L=(n(121),n(122),n(36)),S=L.b.LocalNotifications,x=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).apiHasLoaded=function(e,t){a.setState({mapsLoaded:!0,map:e,mapsApi:t,placesService:new t.places.PlacesService(e),geoCoderService:new t.Geocoder,directionService:new t.DirectionsService})},a.handleSearch=function(){if(a.state.map!=={}){var e=a.state,t=(e.markers,e.placesService),n=(e.directionService,e.mapsApi),r=[],l={location:new n.LatLng(a.state.latitude,a.state.longitude),type:["hospital","pharmacy","doctor"],query:"covid 19 testing site",rankBy:n.places.RankBy.DISTANCE};t.textSearch(l,(function(e){for(var t=Math.min(5,e.length),n=0;n<t;n++){var l=e[n],s=l.rating,o=l.name,c=l.formatted_address,i=l.geometry.location.lat(),u=l.geometry.location.lng(),m=!1;l.opening_hours&&(m=l.opening_hours.isOpen()),r.push({name:o,address:c,rating:s,lat:i,lng:u,openNow:m}),a.setState({searchResults:r})}a.setState({siteLat0:a.state.searchResults[0].lat}),a.setState({siteLng0:a.state.searchResults[0].lng}),a.setState({siteLat1:a.state.searchResults[1].lat}),a.setState({siteLng1:a.state.searchResults[1].lng}),a.setState({siteLat2:a.state.searchResults[2].lat}),a.setState({siteLng2:a.state.searchResults[2].lng}),a.setState({siteLat3:a.state.searchResults[3].lat}),a.setState({siteLng3:a.state.searchResults[3].lng}),a.setState({siteLat4:a.state.searchResults[4].lat}),a.setState({siteLng4:a.state.searchResults[4].lng})}))}},a.state={mapsLoaded:!1,latitude:38,longitude:-118,map:{},mapsApi:{},markers:[],searchResults:[],placesService:{},geoCoderService:{},directionService:{},testing_site_locations:[],siteLat0:38,siteLat1:38,siteLat2:38,siteLat3:38,siteLat4:38,siteLng0:-118,siteLng1:-118,siteLng2:-118,siteLng3:-118,siteLng4:-118},a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){t.setState({latitude:e.coords.latitude,longitude:e.coords.longitude}),console.log("Position\n",e)}));case 2:navigator.geolocation.watchPosition((function(e){var n={latitude:e.coords.latitude,longitude:e.coords.longitude};console.log("Location\n",n);var a=w.firestore().collection("users"),r=w.auth().currentUser,l="";null!=r&&(l=r.uid.toString(),a.doc(l).update({location:n}),t.nearPositive(n))}),(function(e){1==e.code?console.log("Error: Access is denied!"):2==e.code&&console.log("Error: Position is unavailable!")}),{timeout:6e4,maximumAge:3e4});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"nearPositive",value:function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.firestore().collection("users"),a=n.where(t,"==",t).get(),alert("Num people",a.length),e.next=5,S.schedule({notifications:[{title:"Test",body:"test",id:1,schedule:{at:new Date(Date.now())},sound:null}]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state,a=(n.markers,n.geoCoderService,n.searchResults);return r.a.createElement(c.u,null,r.a.createElement(c.j,null,r.a.createElement("div",null,"Current Location: ",JSON.stringify(this.state.latitude)," ,  ",JSON.stringify(this.state.longitude)),r.a.createElement("div",null,"Initial Location: ",JSON.stringify(this.state.latitude)," ,  ",JSON.stringify(this.state.longitude)),r.a.createElement("div",{className:"google-map"},r.a.createElement(v.a,(e={bootstrapURLKeys:{key:"AIzaSyBj9b-EHxuAAihd8u2HBBqWOSXukFlA3jY",libraries:["places","directions"]},defaultZoom:12,defaultCenter:{lat:38,lng:-118},center:{lat:this.state.latitude,lng:this.state.longitude},yesIWantToUseGoogleMapApiInternals:!0},Object(m.a)(e,"yesIWantToUseGoogleMapApiInternals",!0),Object(m.a)(e,"onGoogleApiLoaded",(function(e){var n=e.map,a=e.maps;return t.apiHasLoaded(n,a)})),e),r.a.createElement(k,{lat:this.state.latitude,lng:this.state.longitude,name:"My Marker",color:"blue"}),r.a.createElement(C,{lat:this.state.siteLat0,lng:this.state.siteLng0,name:"My Marker",color:"red"}),r.a.createElement(C,{lat:this.state.siteLat1,lng:this.state.siteLng1,name:"My Marker",color:"red"}),r.a.createElement(C,{lat:this.state.siteLat2,lng:this.state.siteLng2,name:"My Marker",color:"red"}),r.a.createElement(C,{lat:this.state.siteLat3,lng:this.state.siteLng3,name:"My Marker",color:"red"}),r.a.createElement(C,{lat:this.state.siteLat4,lng:this.state.siteLng4,name:"My Marker",color:"red"}))),r.a.createElement(c.c,{color:"primary",onClick:this.handleSearch}," ","search","  "),a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"col-12"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},r.a.createElement("h1",{className:"mb-4 fw-md"},"Testing Center Nearby"),r.a.createElement("div",{className:"d-flex flex-wrap"},a.map((function(e,t){return r.a.createElement(b,{info:e,key:t})})))))):null))}}]),n}(a.Component),N=n(65),O=n.n(N),I=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).cases=void 0,a.deaths=void 0,a.renderPosts=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello world"),e.next=3,O()({url:"https://gnews.io/api/v4/search?q=covid19&lang=en&country=us&token=75459139b9417d88389a866dda4a84cb",method:"get"});case 3:t=e.sent,n=t.data.articles,a.setState({Posts:n.map((function(e,t){return r.a.createElement(c.d,null,r.a.createElement(c.n,{src:e.image}),r.a.createElement(c.f,null,r.a.createElement(c.h,null,r.a.createElement(c.w,{href:e.url},e.title)),r.a.createElement(c.g,null,e.description)),r.a.createElement(c.e,null,e.content))}))});case 6:case"end":return e.stop()}}),e)}))),a.renderCases=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello world"),e.next=3,O()({url:"http://127.0.0.1:3313/feed/refresh?loc=Los+Angeles",method:"get"});case 3:t=e.sent,a.cases=t.data.cases,a.deaths=t.data.deaths,console.log(t.data.cases),console.log(t.data.deaths);case 8:case"end":return e.stop()}}),e)}))),a.state={Posts:""},a.cases=0,a.deaths=0,a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.renderPosts(),this.renderCases()}},{key:"render",value:function(){return r.a.createElement(c.u,null,r.a.createElement(c.l,null,r.a.createElement(c.E,null,r.a.createElement(c.D,null,"NewsFeed"))),r.a.createElement(c.j,null,r.a.createElement(c.s,null,r.a.createElement(c.p,null,r.a.createElement(c.r,null,"Current Cases"),r.a.createElement(c.b,{color:"warning"},this.cases)),r.a.createElement(c.p,null,r.a.createElement(c.r,null,"Deaths"),r.a.createElement(c.b,{color:"danger"},this.deaths))),this.state.Posts))}}]),n}(r.a.Component),A=L.b.Contacts,_=L.b.Share,M=function(){var e;return{getInstance:function(){return e||(e=new D),e}}}(),D=function(){function e(){Object(f.a)(this,e),this.contacts=[],this.selected=[],this.conIndex=[],this.symptomList=[{val:"Cough",isChecked:!1},{val:"Fever or chills",isChecked:!1},{val:"Shortness of breath or difficulty breathing",isChecked:!1},{val:"Fatigue",isChecked:!1},{val:"Muscle or body aches",isChecked:!1},{val:"Headaches",isChecked:!1},{val:"New loss of taste or smell",isChecked:!1},{val:"Sore throat",isChecked:!1},{val:"Congestion or runny nose",isChecked:!1},{val:"Nausea or vomiting",isChecked:!1},{val:"Diarrhea",isChecked:!1}],this.emergencyList=[{val:"Trouble breathing",isChecked:!1},{val:"Persistent pain or pressure in chest",isChecked:!1},{val:"New confusion",isChecked:!1},{val:"Inability to wake or stay awake",isChecked:!1},{val:"Bluish lips or face",isChecked:!1}]}return Object(E.a)(e,[{key:"getEmergencyList",value:function(){return this.emergencyList}},{key:"getSymptomsList",value:function(){return this.symptomList}},{key:"getContactIndex",value:function(){return this.conIndex}},{key:"checkSymptom",value:function(e){e<this.symptomList.length&&(this.symptomList[e].isChecked=!this.symptomList[e].isChecked)}},{key:"checkEmergency",value:function(e){e<this.emergencyList.length&&(this.emergencyList[e].isChecked=!this.emergencyList[e].isChecked)}},{key:"check",value:function(e){e<this.conIndex.length&&(this.conIndex[e]=!this.conIndex[e])}},{key:"getContacts",value:function(){return console.log("GRABBING CONTACT LIST FROM OBJECT\n"),0==this.contacts.length&&this.loadContacts(),this.contacts}},{key:"getSelected",value:function(){return this.selected}},{key:"loadContacts",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.getContacts().then((function(e){t.contacts=e.contacts,console.log(t.contacts);for(var n=0;n<t.contacts.length;n++)t.conIndex.push(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"share",value:function(){var e="Covid-19 Contact Alert!\nI am experiencing the following symptoms:\n";for(var t in e+="------------------------------\n",this.emergencyList)this.emergencyList[t].isChecked&&(e+="- "+this.emergencyList[t].val+" (EMERGENCY symptom!)\n");for(var n in this.symptomList)this.symptomList[n].isChecked&&(e+="- "+this.symptomList[n].val+"\n");e+="------------------------------\n",this.sendMessage("Covid-19 Contact Alert!\nSomeone you have been in contact with is expiercing symptoms. Please take appropriate precautions.",e,"https://www.cdc.gov/coronavirus/2019-ncov/index.html","Share with those who you have been in contact with")}},{key:"sendMessage",value:function(){var e=Object(p.a)(h.a.mark((function e(t,n,a,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.share({title:t,text:n,url:a,dialogTitle:r});case 2:e.sent?console.log("Success!\n"):console.log("Failed\n"),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()}]),e}(),P=M,R=(n(139),P.getInstance()),B=function(){return r.a.createElement(c.u,null,r.a.createElement(c.l,null,r.a.createElement(c.E,null,r.a.createElement(c.D,null,"Check Symptoms Experienced"))),r.a.createElement(c.j,{fullscreen:!0},r.a.createElement(c.s,null,r.a.createElement(c.q,null,"EMERGENCY WARNING SIGNS - IF EXPERIENCING SEEK IMMEDIATE MEDICAL ATTENTION"),R.getEmergencyList().map((function(e,t){var n=e.val,a=e.isChecked;return r.a.createElement(c.p,{key:t},r.a.createElement(c.r,null,n),r.a.createElement(c.i,{slot:"end",value:n,checked:a,onClick:function(){return R.checkEmergency(t)}}))}))),r.a.createElement(c.s,null,r.a.createElement(c.q,null,"Symptoms exprienced 2-14 days after exposure"),R.getSymptomsList().map((function(e,t){var n=e.val,a=e.isChecked;return r.a.createElement(c.p,{key:t},r.a.createElement(c.r,null,n),r.a.createElement(c.i,{slot:"end",value:n,checked:a,onClick:function(){return R.checkSymptom(t)}}))})))),r.a.createElement(c.k,null,r.a.createElement(c.c,{onClick:function(){return R.share()},expand:"block",shape:"round",color:"dark",fill:"solid"},"Share")))},T=n(45),U={fever:"",bodyAches:"",difficultyBreathing:""},z=function(){var e=Object(o.e)(),t=Object(T.a)(),n=t.register,a=t.handleSubmit;function l(e,t){"fever"==e?U.fever=t.detail.value:"bodyAches"==e?U.bodyAches=t.detail.value:"difficultyBreathing"==e&&(U.difficultyBreathing=t.detail.value)}return r.a.createElement(c.u,null,r.a.createElement(c.l,null,r.a.createElement(c.E,null,r.a.createElement(c.D,null,"Symptoms Checklist"),r.a.createElement("h6",null,"Please answer the following questions."))),r.a.createElement(c.j,null,r.a.createElement(c.s,null,r.a.createElement("form",{onSubmit:a((function(){w.firestore().collection("symptomsChecklist").doc("Patient0").set(U).then((function(){e.push("/Diagnosis")}))}))},r.a.createElement("div",null,r.a.createElement("label",null,"Do you have a fever?"),r.a.createElement(c.y,{interface:"popover",onIonChange:function(e){console.log(e),l("fever",e)}},r.a.createElement(c.z,{value:"yes"},"Yes"),r.a.createElement(c.z,{value:"no"},"No"),"ref=",n)),r.a.createElement("div",null,r.a.createElement("label",null,"Do you have body aches?"),r.a.createElement(c.y,{interface:"popover",onIonChange:function(e){console.log(e),l("bodyAches",e)}},r.a.createElement(c.z,{value:"yes"},"Yes"),r.a.createElement(c.z,{value:"no"},"No"),"ref=",n)),r.a.createElement("div",null,r.a.createElement("label",null,"Do you have difficulty breathing?"),r.a.createElement(c.y,{interface:"popover",onIonChange:function(e){console.log(e),l("difficultyBreathing",e)}},r.a.createElement(c.z,{value:"yes"},"Yes"),r.a.createElement(c.z,{value:"no"},"No"),"ref=",n)),r.a.createElement(c.c,{shape:"round",type:"submit"},"Submit")))))};L.b.App;var F=function(){var e=Object(o.e)(),t=Object(T.a)(),n=t.register,a=t.handleSubmit;return r.a.createElement(c.u,null,r.a.createElement(c.l,null,r.a.createElement(c.E,null,r.a.createElement(c.D,{size:"large"},"Login"))),r.a.createElement(c.j,{className:"page"},r.a.createElement("form",{onSubmit:a((function(t){w.auth().signInWithEmailAndPassword(t.e,t.p).then((function(e){console.log(e)})).then((function(){e.push("/Tab1")})).catch((function(e){return console.log(e)}))}))},r.a.createElement("label",null,"Email:"),r.a.createElement(c.o,{required:!0,type:"email",id:"e",name:"e",ref:n}),r.a.createElement("label",null,"Password:"),r.a.createElement(c.o,{required:!0,type:"password",id:"p",name:"p",ref:n}),r.a.createElement(c.c,{"justify-content":"center",expand:"block",shape:"round",color:"dark",fill:"solid",type:"submit"},"Sign In"),r.a.createElement(c.c,{expand:"block",shape:"round",color:"dark",fill:"solid",onClick:function(){e.push("/OnOpen")}},"Back"))))},G=!1,q=function(){var e=Object(o.e)(),t=Object(T.a)(),n=t.register,a=t.handleSubmit;return r.a.createElement(c.u,null,r.a.createElement(c.l,null,r.a.createElement(c.E,null,r.a.createElement(c.D,{size:"large"},"Create User"))),r.a.createElement(c.j,{className:"page"},r.a.createElement("form",{onSubmit:a((function(t){var n,a;n=t.pass1,a=t.pass2,n==a&&n.length>=6&&(G=!0),G?(w.auth().createUserWithEmailAndPassword(t.email,t.pass1).then((function(e){w.firestore().collection("users").doc(e.user.uid).set({email:t.email,userID:e.user.uid})})).catch((function(e){console.log(e)})),e.push("/Tab1")):console.log("Passwords do not match")}))},r.a.createElement("label",null,"Email:"),r.a.createElement(c.o,{required:!0,type:"email",id:"email",name:"email",ref:n}),r.a.createElement("label",null,"Password: (minimum of 6 characters)"),r.a.createElement(c.o,{required:!0,type:"password",id:"pass1",name:"pass1",ref:n}),r.a.createElement("label",null,"Re-enter password:"),r.a.createElement(c.o,{required:!0,type:"password",id:"pass2",name:"pass2",ref:n}),r.a.createElement(c.c,{"justify-content":"center",color:"black",size:"large",type:"submit"},"Create Account"),r.a.createElement(c.c,{color:"black",size:"large",onClick:function(){e.push("/OnOpen")}},"Back"))))};n(90);var J=function(){var e=Object(o.e)();return r.a.createElement(c.u,null,r.a.createElement(c.l,null,r.a.createElement(c.E,null,r.a.createElement(c.D,{size:"large"},"Welcome"))),r.a.createElement(c.j,null,r.a.createElement("div",null),r.a.createElement(c.c,{expand:"block",shape:"round",color:"dark",fill:"solid",onClick:function(){e.push("/CreateUser")}},"New User"),r.a.createElement(c.c,{expand:"block",shape:"round",color:"dark",fill:"solid",onClick:function(){e.push("/Login")}},"Login")))},W=(n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(97)),H=P.getInstance(),Y=function(){var e=H.getContacts();return r.a.createElement(c.u,null,r.a.createElement(c.j,{fullscreen:!0},r.a.createElement(c.l,{translucent:!0},r.a.createElement(c.E,null,r.a.createElement(c.D,null,"Contacts"))),r.a.createElement(c.s,{mode:"ios"},r.a.createElement(c.t,null,"Send to: "),e.map((function(t,n){return Object(W.a)(t),r.a.createElement(c.p,{key:n},r.a.createElement(c.r,null,r.a.createElement("h2",null,e[n].displayName),r.a.createElement("h3",null,e[n].phoneNumbers[0])),r.a.createElement(c.i,{slot:"end",value:e[n].displayName,checked:H.getContactIndex()[n],onClick:function(){return H.check(n)}}))})))),r.a.createElement(c.k,null,r.a.createElement(c.c,{onClick:function(){return H.share()},expand:"block",shape:"round",color:"dark",fill:"solid"},"Select and Send")))},K=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(c.C,null,r.a.createElement(c.x,null,r.a.createElement(o.b,{path:"/tab1",component:x,exact:!0}),r.a.createElement(o.b,{path:"/tab2",component:I,exact:!0}),r.a.createElement(o.b,{path:"/tab3",component:B,exact:!0}),r.a.createElement(o.b,{path:"/",render:function(){return r.a.createElement(o.a,{to:"/OnOpen"})},exact:!0}),r.a.createElement(o.b,{path:"/Symptoms",component:z,exact:!0}),r.a.createElement(o.b,{path:"/displayContacts",component:Y,exact:!0})),r.a.createElement(c.A,{slot:"bottom"},r.a.createElement(c.B,{tab:"tab1",href:"/tab1"},r.a.createElement(c.m,{icon:u.i}),r.a.createElement(c.r,null,"Local Information")),r.a.createElement(c.B,{tab:"tab2",href:"/tab2"},r.a.createElement(c.m,{icon:u.l}),r.a.createElement(c.r,null,"News")),r.a.createElement(c.B,{tab:"tab3",href:"/tab3"},r.a.createElement(c.m,{icon:u.c}),r.a.createElement(c.r,null,"Contact Tracing")))),r.a.createElement(o.b,{path:"/OnOpen",component:J,exact:!0}),r.a.createElement(o.b,{path:"/CreateUser",component:q,exact:!0}),r.a.createElement(o.b,{path:"/Login",component:F,exact:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,n){},90:function(e,t,n){}},[[102,3,4]]]);
//# sourceMappingURL=main.a51e76a7.chunk.js.map