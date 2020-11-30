import { Contact } from "@capacitor-community/contacts";
import { Plugins } from "@capacitor/core";
//import { SMS } from '@ionic-native/sms';
const  { Contacts, Share } = Plugins;


var Singleton = (function () {
  let instance:ContactTracing;

  function createInstance() {
      var ct = new ContactTracing();
      return ct;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();


class ContactTracing {
  private contacts:Contact[] = [];
  private selected:Contact[] = [];
  private conIndex:boolean[] = [];

  private symptomList = [
    {val: "Cough", isChecked: false},
    {val: "Fever or chills", isChecked: false},
    {val: "Shortness of breath or difficulty breathing", isChecked: false},
    {val: "Fatigue", isChecked: false},
    {val: "Muscle or body aches", isChecked: false},
    {val: "Headaches", isChecked: false},
    {val: "New loss of taste or smell", isChecked: false},
    {val: "Sore throat", isChecked: false},
    {val: "Congestion or runny nose", isChecked: false},
    {val: "Nausea or vomiting", isChecked: false},
    {val: "Diarrhea", isChecked: false}
  ]
  
  private emergencyList = [
    {val: "Trouble breathing", isChecked: false},
    {val: "Persistent pain or pressure in chest", isChecked: false},
    {val: "New confusion", isChecked: false},
    {val: "Inability to wake or stay awake", isChecked: false},
    {val: "Bluish lips or face", isChecked: false}
  ]

  public constructor(){

  }

  //Getter method for emergency symptoms list
  //Returns list of emergency symptoms to map to ContactTracing display
  //Void input
  //Output: list of {string, boolean} tuples
  public getEmergencyList(){
    return this.emergencyList;
  }

  //Getter method for symptoms list
  //Returns list of symptoms to map to ContactTracing display
  //Void input
  //Output: list of {string, boolean} tuples
  public getSymptomsList(){
    return this.symptomList;
  }

  //Returns list of selected contacts to map to contact display
  //Void input
  //Output: boolean array of size contacts.length
  public getContactIndex(){
    return this.conIndex;
  }

  //Saves state of symptoms at index i
  //to list in ContactTracing object
  //Input: number i, 0 < i < symptomList.length
  //Void output
  public checkSymptom(i:number){
    if(i < this.symptomList.length){
      this.symptomList[i].isChecked = !(this.symptomList[i].isChecked);
    }
  }
  
  //Saves state of emergency symptom at index i
  //to list in ContactTracing object
  //Input: number i, 0 < i < emergencyList.length
  //Void output
  public checkEmergency(i:number){
    if(i < this.emergencyList.length){
      this.emergencyList[i].isChecked = !(this.emergencyList[i].isChecked);
    }
  }
  
  //Saves state of selected contact at index i
  //Input: number i, 0 < i < contacts.length
  //Void output
  public check(i:number){
    if(i < this.conIndex.length){
      this.conIndex[i] = !(this.conIndex[i]);
    }
  }
  
  //Getter method for all device contacts
  //Will all async loadContacts method if contacts list has not been populated yet
  //Void input
  //Returns list of Contact objects
  public getContacts(){
    console.log('GRABBING CONTACT LIST FROM OBJECT\n');

    //console.log(this.contacts);
    if (this.contacts.length == 0){
      this.loadContacts();
    }
    return this.contacts;

  }

  //Getter method for selected contacts
  //Void input
  //Returns list of Contact objects that have been selected using select()
  public getSelected(){
    return this.selected;
  }

  //Async method to load contacts from device to contacts list.
  //Void input
  //Void output
  private async loadContacts(){
    Contacts.getContacts().then(results => {
    this.contacts = results.contacts;
    console.log(this.contacts);

    for(var i = 0; i < this.contacts.length; i++){
      this.conIndex.push(false);
    }
    });
  }

  //Method called by button GUI
  //Constructs message and calls async function to launch share functionality
  //Void input
  //Void output
  public share(){
    let title:string = "Covid-19 Contact Alert!\nSomeone you have been in contact with is expiercing symptoms. Please take appropriate precautions.";
    let link:string = 'https://www.cdc.gov/coronavirus/2019-ncov/index.html';
    let diaTitle = 'Share with those who you have been in contact with';

    let message:string = "Covid-19 Contact Alert!\nI am experiencing the following symptoms:\n";
    message += "------------------------------\n";
    
    for(var index in this.emergencyList){
      if(this.emergencyList[index].isChecked){
        message += "- " + this.emergencyList[index].val + " (EMERGENCY symptom!)\n";
      }
    }
    for(var index1 in this.symptomList){
      if(this.symptomList[index1].isChecked){
        message += "- " + this.symptomList[index1].val + "\n";
      }
    }
    message += "------------------------------\n";

    this.sendMessage(title,message, link, diaTitle);

  }

  //Async method to launch share functionality
  //Input: string title, string message
  //  title and message to share
  //Void output
  private async sendMessage(title:string, message:string, link:string, diaTitle:string){

    let shareRet = await Share.share({
      title: title,
      text: message,
      url: link,
      dialogTitle: diaTitle
    });

    if (shareRet){
      console.log("Success!\n");
    }else{
      console.log("Failed\n");
    }
    console.log(message);

  }
}
export default Singleton;


