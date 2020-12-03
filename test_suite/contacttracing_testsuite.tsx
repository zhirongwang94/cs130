import Singleton from '../src/pages/ContactTracing';

//This is the test suite for ContactTracing object

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
        expect(
            ()=>{
                {ct.checkSymptom(-1);}
                ct.getSymptomsList();
            }
        ).toEqual(sList);

        sList[0].isChecked = !sList[0].isChecked;
        expect(
            ()=>{
                {ct.checkSymptom(0);}
                ct.getSymptomsList();
            }
        ).toEqual(sList);
        sList[0].isChecked = false;

        sList[3].isChecked = !sList[3].isChecked;
        expect(
            ()=>{
                {ct.checkSymptom(3);}
                ct.getSymptomsList();
            }
        ).toEqual(sList);
        sList[3].isChecked = false;

        sList[sList.length-1].isChecked = !sList[sList.length-1].isChecked;
        expect(
            ()=>{
                {ct.checkSymptom(sList.length-1);}
                ct.getSymptomsList();
            }
        ).toEqual(sList);
        sList[sList.length-1].isChecked = false;


        expect(
            ()=>{
                {ct.checkSymptom(sList.length);}
                ct.getSymptomsList();
            }
        ).toEqual(sList);
       
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
        expect(
            ()=>{
                {ct.checkEmergency(-1);}
                ct.getEmergencyList();
            }
        ).toEqual(eList);

        eList[0].isChecked = !eList[0].isChecked;
        expect(
            ()=>{
                {ct.checkSymptom(0);}
                ct.getSymptomsList();
            }
        ).toEqual(eList);
        eList[0].isChecked = false;

        eList[2].isChecked = !eList[2].isChecked;
        expect(
            ()=>{
                {ct.checkSymptom(3);}
                ct.getSymptomsList();
            }
        ).toEqual(eList);
        eList[2].isChecked = false;

        eList[eList.length-1].isChecked = !eList[eList.length-1].isChecked;
        expect(
            ()=>{
                {ct.checkSymptom(eList.length-1);}
                ct.getSymptomsList();
            }
        ).toEqual(eList);
        eList[eList.length-1].isChecked = false;


        expect(
            ()=>{
                {ct.checkSymptom(eList.length);}
                ct.getSymptomsList();
            }
        ).toEqual(eList);
       
    });
    
});