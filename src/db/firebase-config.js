import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB43NX3GLKd1YDtYcdQ_B58x81AZ-ERqeQ",
    authDomain: "todoapp-8ae1c.firebaseapp.com",
    databaseURL: "https://todoapp-8ae1c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todoapp-8ae1c",
    storageBucket: "todoapp-8ae1c.appspot.com",
    messagingSenderId: "405936305062",
    appId: "1:405936305062:web:35637225a5f47872d8d567"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;