import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
