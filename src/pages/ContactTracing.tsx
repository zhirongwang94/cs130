//import { Contact } from "@capacitor-community/contacts";
//import { SMS } from '@ionic-native/sms';
import { Plugins } from "@capacitor/core";
const  { Share } = Plugins;

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

  public constructor(){}

  /**
   * Getter method for emergency symptoms list
   * @returns {Array<string, boolean>} list of emergency symptoms
   */
  public getEmergencyList(){
    return this.emergencyList;
  }

  /**
   * Getter method for symptoms list
   * @returns {Array<string, boolean>} list of symptoms
   */
  public getSymptomsList(){
    return this.symptomList;
  }

  /**
   * Saves state of symptoms at specified index 'i' of 'symptomList'
   * @param {number} i - Index of symptom to mark as true in 'symptomList'
   */
  public checkSymptom(i:number){
    if(i >= 0 && i < this.symptomList.length){
      this.symptomList[i].isChecked = !(this.symptomList[i].isChecked);
    }
  }
  
  /**
   * Saves state of symptoms at specified index 'i' of 'emergencyList'
   * @param {number} i - Index of symptom to mark as true in 'emergencyList'
   */
  public checkEmergency(i:number){
    if(i >= 0 && i < this.emergencyList.length){
      this.emergencyList[i].isChecked = !(this.emergencyList[i].isChecked);
    }
  }
  
  //Method called by button GUI
  //Constructs message and calls async function to launch share functionality
  //Void input
  //Void output
  /**
   * Called on Tab 3 'Share' button press.
   * @remarks
   * Constructs strings for share functionality input based on selected symptoms
   * saved in 'this.symptomList' and 'this.emergencyList'
   * Calls async function 'sendMessage()'
   */
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

    this.sendMessage(title, message, link, diaTitle);

  }

  /**
   * Async method that calls Share.share()
   * @param {string} title - Title of constructed message to be shared. Shown as subject for emails.
   * @param {string} message - Main message; where symptoms are listed.
   * @param {string} link - Link displayed at the end of shared message.
   * @param {string} diaTitle - Set title of the share modal. Android only.
   */
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


