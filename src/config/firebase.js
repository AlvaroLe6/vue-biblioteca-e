import { initializeApp } from 'firebase/app'

/*onst firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}*/
  const firebaseConfig = {
    apiKey: "AIzaSyAi4X9HmiWsYUvtUensrlKbSPuHUiIufWY",
    authDomain: "vuebiblioteca-82671.firebaseapp.com",
    projectId: "vuebiblioteca-82671",
    storageBucket: "vuebiblioteca-82671.appspot.com",
    messagingSenderId: "770862190969",
    appId: "1:770862190969:web:3a10fcb5d7cea0dba19fa8"
  };

export const firebaseApp = initializeApp(firebaseConfig)