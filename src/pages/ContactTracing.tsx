import { Contact } from "@capacitor-community/contacts";
import { Plugins } from "@capacitor/core";

const  { Contacts } = Plugins;

//MAke this class singleton?

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
    this.loadContacts();
  }

  public getEmergencyList(){
    return this.emergencyList;
  }

  public getSymptomsList(){
    return this.symptomList;
  }

  public getContactIndex(){
    return this.conIndex;
  }

  public checkSymptom(i:number){
    if(i < this.symptomList.length){
      this.symptomList[i].isChecked = !(this.symptomList[i].isChecked);
    }
  }
  public checkEmergency(i:number){
    if(i < this.emergencyList.length){
      this.emergencyList[i].isChecked = !(this.emergencyList[i].isChecked);
    }
  }
  
  //Updates list of 
  public check(i:number){
    if(i < this.conIndex.length){
      this.conIndex[i] = !(this.conIndex[i]);
    }
  }
  
  //Getter method for all device contacts
  //Void input
  //Returns list of Contact objects
  public getContacts(){
    console.log('GRABBING CONTACT LIST FROM OBJECT\n');
    //console.log(this.contacts);
    return this.contacts;
  }

  //Getter method for selected device contacts
  //Void input
  //Returns list of Contact objects
  public getSelected(){
    return this.selected;
  }


  public sendMessage(){
    for(var i = 0; i<this.contacts.length; i++){
      if(this.conIndex[i]){
        this.selected.push(this.contacts[i]);
      }
    }

    console.log("SELECTED CONTACTS");
    console.log(this.selected);
    //sendSms()
  }



  public select(i:number){
    if(i >= 0){
      if(i < this.contacts.length){
        this.conIndex[i] = !(this.conIndex[i]);
      }
    }
  }

  private async loadContacts(){
    Contacts.getContacts().then(results => {
    this.contacts = results.contacts;
    console.log(this.contacts);

    for(var i = 0; i < this.contacts.length; i++){
      this.conIndex.push(false);
    }
    });
  }

  // private onSuccess(contacts:Contact[]){
  //   console.log(contacts.length + ' contacts found');
  //   for(var i = 0; i < contacts.length; i++) {
  //     console.log(contacts[i].contactId + " - " + contacts[i].displayName);
  //     for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
  //        var phone = contacts[i].phoneNumbers[j];
  //        console.log("===> " + phone + "\n");
  //     }
  //  }
  // }

  // private onError(error:string){
  //   console.log("Error grabbing contacts! " + error);
  // }





  
  private sendSms(){
    
    var message:String = "";
    
    message += "------------------------------\nIF EXPERIENCING SEEK IMMEDIATE MEDICAL ATTENTION!\n";
    for(var index in this.emergencyList){
      if(this.emergencyList[index].isChecked){
        message += this.emergencyList[index].val + "\n";
      }
    }

    message += "------------------------------\nNon-Emergency Symptoms:\n";
    for(var index in this.symptomList){
      if(this.symptomList[index].isChecked){
        message += this.symptomList[index].val + "\n";
      }
    }

    alert("Symptoms List \n" + message);
    //SMS.send('5167120628', "test sms");
    alert("sendSms was called!");
  }


}
export default Singleton;