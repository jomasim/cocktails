import firebase from 'firebase'
const firebaseConfig = {
    apiKey: 'AIzaSyBhiFoEQyMZppOZh5Tp08-BsHbc3em1T6k',
    authDomain: 'cocktails-df141.firebaseapp.com',
    databaseURL: 'https://cocktails-df141-default-rtdb.firebaseio.com',
    projectId: 'cocktails-df141',
    storageBucket: 'cocktails-df141.appspot.com',
    messagingSenderId: '462488278790',
    appId: '1:462488278790:web:ec953f8f481959f1f3b087',
    measurementId: 'G-040RSZHH77'
  }
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const storage =  firebase.storage()