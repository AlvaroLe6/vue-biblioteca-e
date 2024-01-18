import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';


  const firebaseConfig = {
    apiKey: "AIzaSyAi4X9HmiWsYUvtUensrlKbSPuHUiIufWY",
    authDomain: "vuebiblioteca-82671.firebaseapp.com",
    projectId: "vuebiblioteca-82671",
    storageBucket: "vuebiblioteca-82671.appspot.com",
    messagingSenderId: "770862190969",
    appId: "1:770862190969:web:3a10fcb5d7cea0dba19fa8"
  };  

export const firebaseApp = initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };


