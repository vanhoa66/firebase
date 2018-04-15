import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCxZKLbn3KcUyqaXlctfjBWOrcQdYnH_ms",
  authDomain: "fir-6bbfe.firebaseapp.com",
  databaseURL: "https://fir-6bbfe.firebaseio.com",
  projectId: "fir-6bbfe",
  storageBucket: "fir-6bbfe.appspot.com",
  messagingSenderId: "66581059744"
};

export const firebaseApp = firebase.initializeApp(config);
export const tasksDoingRef = firebase.database().ref("tasksDoing");
export const tasksFinishRef = firebase.database().ref("tasksFinish");
export const usersRef = firebase.database().ref("usersRef");