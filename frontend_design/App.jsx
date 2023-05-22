import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Billing from "./components/Billing";
import Messages from "./components/Messages";
import Patients from "./components/Patients";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/billing">
          <Billing {...billingData} />
        </Route>
        <Route path="/messages">
          <Messages {...messagesData} />
        </Route>
        <Route path="/patients">
          <Patients {...patientsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame281Data = {
    account_Circle: "/img/account-circle@2x.png",
};

const frame321Data = {
    image9: "/img/image-9@2x.png",
    spanText1: <React.Fragment>Jane Alex <br /></React.Fragment>,
    spanText2: <React.Fragment>22 Yrs, Female<br /></React.Fragment>,
    spanText3: "Routine Checkup",
    x11231100Am: <React.Fragment>1/1/23<br />11:00 am</React.Fragment>,
};

const frame322Data = {
    image9: "/img/image-11@2x.png",
    spanText1: <React.Fragment>Sarah King<br /></React.Fragment>,
    spanText2: <React.Fragment>29 Yrs, Female<br /></React.Fragment>,
    spanText3: "Abnormal nausea",
    x11231100Am: <React.Fragment>1/1/23<br />11:30 am</React.Fragment>,
};

const homeData = {
    home: "/img/home@2x.png",
    place: "Home",
    settings: "/img/settings@2x.png",
    support: "Support",
    east: "/img/east@2x.png",
    upcomingVisits: "Upcoming Visits",
    name: "MAY 2023",
    searchByPatientDepartmentDate: "Search by patient, department, date",
    number1: "11",
    price1: "S",
    m: "M",
    t1: "T",
    w: "W",
    t2: "T",
    f: "F",
    price2: "S",
    number2: "13",
    number3: "12",
    number4: "14",
    number5: "16",
    number6: "17",
    number7: "15",
    today: "TODAY",
    image5: "/img/image-5@2x.png",
    spanText1: "John Doe ",
    spanText2: <React.Fragment>29<br />29, Male<br /></React.Fragment>,
    spanText3: "Broken Ankle",
    x1123930Am: <React.Fragment>1/1/23<br />9:30 am</React.Fragment>,
    image3: "/img/image-3@2x.png",
    spanText4: <React.Fragment>Alice Smith<br /></React.Fragment>,
    spanText5: <React.Fragment>32 Yrs, Female<br /></React.Fragment>,
    spanText6: "Routine Checkup",
    x11231100Am: <React.Fragment>1/1/23<br />11:00 am</React.Fragment>,
    image4: "/img/image-4@2x.png",
    spanText7: <React.Fragment>Jack Frost<br /></React.Fragment>,
    spanText8: "39 Yrs, Male ",
    spanText9: <React.Fragment> <br /></React.Fragment>,
    spanText10: "Severe headache",
    x11231130Am: <React.Fragment>1/1/23<br />11:30 am</React.Fragment>,
    tomorrow: "TOMORROW",
    number8: "1",
    inbox: "Inbox",
    newMessage: "New Message",
    image7: "/img/image-7@2x.png",
    spanText11: <React.Fragment>Dr. Jones<br /></React.Fragment>,
    spanText12: "9:30 AM",
    heyDrEverlyCan: "Hey Dr. Everly, can we chat today around 10 AM?",
    image8: "/img/image-8@2x.png",
    spanText13: <React.Fragment>Dr. Brown<br /></React.Fragment>,
    spanText14: "8:15 AM",
    justSentOverTheL: "Just sent over the lab reports for Alice!",
    image121: "/img/image-12-1@2x.png",
    spanText15: <React.Fragment>Dr. Bailey<br /></React.Fragment>,
    spanText16: "8:00 AM",
    howDidTheMeetingWithMaryGo: "How did the meeting with Mary go?",
    image122: "/img/image-12@2x.png",
    spanText17: <React.Fragment>Proposed Treatment<br /><br /></React.Fragment>,
    spanText18: <React.Fragment>Rest + ice<br />X-ray examination<br />ORIF surgery</React.Fragment>,
    spanText19: <React.Fragment>Past Symptoms<br /><br /></React.Fragment>,
    spanText20: <React.Fragment>Broken ankle causing throbbing pain<br />Increased pain during activity and decreased pain during rest<br />Bruising.<br />Inflammation, redness and tenderness.</React.Fragment>,
    image2: "/img/image-2@2x.png",
    number9: "5",
    notifications: "/img/notifications@2x.png",
    drEverly: "Dr. Everly",
    frame28Props: frame281Data,
    frame321Props: frame321Data,
    frame322Props2: frame322Data,
};

const frame282Data = {
    account_Circle: "/img/account-circle-1@2x.png",
    className: "frame-28-1",
};

const frame302Data = {
    className: "frame-30-1",
};

const bigPrimaryButton1Data = {
    children: "Create Bill",
    className: "",
};

const inactiveFilled1Data = {
    bigPrimaryButtonProps: bigPrimaryButton1Data,
};

const frame581Data = {
    diagnosis: "Diagnosis",
};

const frame582Data = {
    diagnosis: "Procedure",
    className: "frame-59",
};

const bigPrimaryButton2Data = {
    children: "Autofill with today’s notes",
    className: "small-primary",
};

const primaryFilled1Data = {
    bigPrimaryButtonProps: bigPrimaryButton2Data,
};

const bigPrimaryButton22Data = {
    children: "See  All",
};

const primaryFilled2Data = {
    bigPrimaryButton2Props: bigPrimaryButton22Data,
};

const bigPrimaryButton23Data = {
    children: "View All",
    className: "small-white",
};

const smallWhiteData = {
    bigPrimaryButton2Props: bigPrimaryButton23Data,
};

const billingData = {
    attach_Money: "/img/attach-money@2x.png",
    billing: "Billing",
    settings: "/img/settings@2x.png",
    support: "Support",
    number: "5",
    notifications: "/img/notifications@2x.png",
    image2: "/img/image-2@2x.png",
    drEverly: "Dr. Everly",
    east1: "/img/east-1@2x.png",
    account_Circle1: "/img/account-circle-2@2x.png",
    account_Circle2: "/img/account-circle-2@2x.png",
    createBill: "Create Bill",
    search1: "/img/search-1@2x.png",
    department: "Department",
    browseDepartments: "Browse Departments",
    symptoms: "Symptoms",
    east2: "/img/east-2@2x.png",
    recentBills: "Recent Bills",
    patientName1: "Patient Name",
    place: "Date",
    amount: "Amount",
    patientName2: "Patient Name",
    x1123345Pm: <React.Fragment>1/1/23<br />3:45 pm</React.Fragment>,
    price1: "$10,000",
    completed1: "Completed",
    patientName3: "Patient Name",
    x1123530Pm: <React.Fragment>1/1/23<br />5:30 pm</React.Fragment>,
    price2: "$2,500",
    completed2: "Completed",
    navbarLinkPatientName: "Patient Name",
    navbarLink1223900Am: <React.Fragment>1/2/23<br />9:00 am</React.Fragment>,
    navbarLinkPrice: "$5,750",
    navbarLinkPending: "Pending",
    searchByPatientDepartmentDate: "Search by patient, department, date",
    frame28Props: frame282Data,
    frame30Props: frame302Data,
    inactiveFilledProps: inactiveFilled1Data,
    frame581Props: frame581Data,
    frame582Props: frame582Data,
    primaryFilledProps: primaryFilled1Data,
    primaryFilled2Props: primaryFilled2Data,
    smallWhiteProps: smallWhiteData,
};

const frame312Data = {
    className: "frame-31-2",
};

const frame283Data = {
    account_Circle: "/img/account-circle@2x.png",
};

const primaryOutlined2Data = {
    className: "primary-outlined-1",
};

const primaryOutlined3Data = {
    className: "primary-outlined-2",
};

const messagesData = {
    drafts: "/img/drafts@2x.png",
    messages1: "Messages",
    settings: "/img/settings@2x.png",
    support: "Support",
    number: "5",
    notifications: "/img/notifications@2x.png",
    image2: "/img/image-2@2x.png",
    drEverly: "Dr. Everly",
    east1: "/img/east-1@2x.png",
    east2: "/img/east-2@2x.png",
    messages2: "Messages",
    inbox: "Inbox",
    edit_Square1: "/img/edit-square-2@2x.png",
    image71: "/img/image-7-1@2x.png",
    image81: "/img/image-8-1@2x.png",
    account_Circle: "/img/account-circle-2@2x.png",
    image10: "/img/image-7-1@2x.png",
    image9: "/img/image-7-1@2x.png",
    image11: "/img/image-8-1@2x.png",
    image12: "/img/image-7-1@2x.png",
    spanText1: <React.Fragment>Dr. Jones<br /></React.Fragment>,
    spanText2: "10:45 AM",
    jan120231043Am: "Jan. 1, 2023, 10:43 AM",
    drJones: "Dr. Jones",
    heyDrEverlyCan1: "Hey Dr. Everly, can we chat today around 11 AM?",
    aa: "Aa",
    justSendOverTheL1: "Just send over the lab reports for Alice Smith!",
    spanText3: <React.Fragment>Dr. Brown<br /></React.Fragment>,
    spanText4: "9:30 AM",
    image72: "/img/image-7-1@2x.png",
    image82: "/img/image-8-1@2x.png",
    spanText5: <React.Fragment>Dr. Jones<br /></React.Fragment>,
    spanText6: "10:45 AM",
    heyDrEverlyCan2: "Hey Dr. Everly, can we chat today around 11 AM?",
    justSendOverTheL2: "Just send over the lab reports for Alice Smith!",
    spanText7: <React.Fragment>Dr. Brown<br /></React.Fragment>,
    spanText8: "9:30 AM",
    screenShot20230410At1501: "/img/screen-shot-2023-04-10-at-1-50-1@2x.png",
    frame31Props: frame312Data,
    frame28Props: frame283Data,
    primaryOutlined1Props: primaryOutlined2Data,
    primaryOutlined2Props: primaryOutlined3Data,
};

const frame313Data = {
    className: "frame-31-3",
};

const frame552Data = {
    className: "frame-55-1",
};

const unfilledText1Data = {
    spanText1: <React.Fragment>Paracetamol<br /></React.Fragment>,
    spanText2: <React.Fragment>Disprol<br /></React.Fragment>,
    spanText3: "500 mg, 2 times per day",
};

const unfilledText2Data = {
    spanText1: <React.Fragment>Lisinopril <br /></React.Fragment>,
    spanText2: <React.Fragment>Zestril<br /></React.Fragment>,
    spanText3: "40 mg, 1 time per day",
    className: "unfilled-text-1",
};

const unfilledText3Data = {
    spanText1: <React.Fragment>Diphenhydramine<br /></React.Fragment>,
    spanText2: <React.Fragment>Benadryl<br /></React.Fragment>,
    spanText3: "75 mg, 1 time per day",
    className: "unfilled-text-2",
};

const bigPrimaryButton3Data = {
    children: "Refill",
    className: "small-inactive-2",
};

const inactiveFilled2Data = {
    className: "inactive-filled-1",
    bigPrimaryButtonProps: bigPrimaryButton3Data,
};

const largeFilledData = {
    textHere: "",
    text1: "",
    largeFilled: "Input Notes",
    text2: "",
    text3: "",
};

const largeUnfilled2Data = {
    largeFilledProps: largeFilledData,
};

const largeUnfilledData = {
    largeUnfilled2Props: largeUnfilled2Data,
};

const bigPrimaryButton4Data = {
    children: "Save",
    className: "small-inactive",
};

const inactiveFilled3Data = {
    className: "inactive-filled-2",
    bigPrimaryButtonProps: bigPrimaryButton4Data,
};

const bigPrimaryButton5Data = {
    children: "Create Bill",
    className: "small-primary-1",
};

const primaryFilled3Data = {
    className: "primary-filled-1",
    bigPrimaryButtonProps: bigPrimaryButton5Data,
};

const patientsData = {
    account_Circle1: "/img/account-circle-1@2x.png",
    patients: "Patients",
    iconSettings: "/img/settings@2x.png",
    support: "Support",
    number: "5",
    iconNotifications: "/img/notifications@2x.png",
    image2: "/img/image-2@2x.png",
    drEverly: "Dr. Everly",
    east1: "/img/east@2x.png",
    spanText1: "16 ",
    spanText2: "bpm",
    spanText3: "98.6 ",
    spanText4: "°F",
    image11: "/img/image-11-3@2x.png",
    spanText5: "89 ",
    spanText6: "bpm",
    spanText7: "108/68 ",
    spanText8: "mm Hg",
    spanText9: "99 ",
    spanText10: "%",
    todaysVitals: "Today’s Vitals",
    image13: "/img/image-13@2x.png",
    iconHeart: "/img/favorite@2x.png",
    vital_Signs: "/img/vital-signs@2x.png",
    image14: "/img/image-14@2x.png",
    symptoms: "Symptoms",
    proposedTreatment: "Proposed Treatment",
    x1123345Pm1: <React.Fragment>1/1/23<br />3:45 pm</React.Fragment>,
    previousVisit: "Previous Visit",
    brokenAnkleCausing: <React.Fragment>Broken ankle causing throbbing pain<br />Increased pain during activity and decreased pain during rest<br />Bruising.<br />Inflammation, redness and tenderness.</React.Fragment>,
    restIceXRayExa: <React.Fragment>Rest + ice<br />X-ray examaniation<br />ORIF surgery</React.Fragment>,
    medications: "Medications",
    consultationNotes: "Consultation Notes",
    east2: "/img/east-1@2x.png",
    recentPayments: "Recent Payments",
    transaction: "Transaction",
    place: "Date",
    amount: "Amount",
    xRay1: "X-Ray",
    x1123345Pm2: <React.Fragment>1/1/23<br />3:45 pm</React.Fragment>,
    price1: "$550",
    medication: "Medication",
    x1123530Pm: <React.Fragment>1/1/23<br />5:30 pm</React.Fragment>,
    price2: "$220",
    account_Circle2: "/img/account-circle-2@2x.png",
    xRay2: "X-Ray",
    x1223900Am: <React.Fragment>1/2/23<br />9:00 am</React.Fragment>,
    price3: "$360",
    east3: "/img/image-12@2x.png",
    frame31Props: frame313Data,
    frame55Props: frame552Data,
    unfilledText1Props: unfilledText1Data,
    unfilledText2Props: unfilledText2Data,
    unfilledText3Props: unfilledText3Data,
    inactiveFilled1Props: inactiveFilled2Data,
    largeUnfilledProps: largeUnfilledData,
    inactiveFilled2Props: inactiveFilled3Data,
    primaryFilledProps: primaryFilled3Data,
};

