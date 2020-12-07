

import Singleton from './ContactTracing';
const ct = Singleton.getInstance();


describe('checkSymptom(i:number)', () => {
    const sList = [
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
      ];
    


    it('updates boolean to save checkbox state', () => {
        ct.checkSymptom(-1);
        expect(ct.getSymptomsList()).toEqual(sList);
    

        sList[0].isChecked = !sList[0].isChecked;
        ct.checkSymptom(0);
        expect(ct.getSymptomsList()).toEqual(sList);
        ct.checkSymptom(0);
        sList[0].isChecked = false;

        sList[3].isChecked = !sList[3].isChecked;
        ct.checkSymptom(3);
        expect(ct.getSymptomsList()).toEqual(sList);
        ct.checkSymptom(3);
        sList[3].isChecked = false;


        sList[sList.length-1].isChecked = !sList[sList.length-1].isChecked;
        ct.checkSymptom(sList.length-1);
        expect(ct.getSymptomsList()).toEqual(sList);
        ct.checkSymptom(sList.length-1);
        sList[sList.length-1].isChecked = false;

        ct.checkSymptom(sList.length);
        expect(ct.getSymptomsList()).toEqual(sList);

    });

});

describe('checkEmergency(i:number)', () => {
    const eList = [
        {val: "Trouble breathing", isChecked: false},
        {val: "Persistent pain or pressure in chest", isChecked: false},
        {val: "New confusion", isChecked: false},
        {val: "Inability to wake or stay awake", isChecked: false},
        {val: "Bluish lips or face", isChecked: false}
      ];

      it('updates boolean to save checkbox state', () => {
        ct.checkEmergency(-1);
        expect(ct.getEmergencyList()).toEqual(eList);

        eList[0].isChecked = !eList[0].isChecked;
        ct.checkEmergency(0);
        expect(ct.getEmergencyList()).toEqual(eList);
        ct.checkEmergency(0);
        eList[0].isChecked = false;

        eList[2].isChecked = !eList[2].isChecked;
        ct.checkEmergency(2);
        expect(ct.getEmergencyList()).toEqual(eList);
        ct.checkEmergency(2);
        eList[2].isChecked = false;

        eList[eList.length-1].isChecked = !eList[eList.length-1].isChecked;
        ct.checkEmergency(eList.length-1);
        expect(ct.getEmergencyList()).toEqual(eList);
        ct.checkEmergency(eList.length-1);
        eList[eList.length-1].isChecked = false;

        ct.checkEmergency(eList.length);
        expect(ct.getEmergencyList()).toEqual(eList);
       
    });
    
});