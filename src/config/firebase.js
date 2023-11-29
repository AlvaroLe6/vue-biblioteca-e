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
    apiKey: "AIzaSyBeraY7kgSXGxVeKnGvi3X1nUt4DAR0Fg0",
    authDomain: "vuebiblioteca-a807f.firebaseapp.com",
    projectId: "vuebiblioteca-a807f",
    storageBucket: "vuebiblioteca-a807f.appspot.com",
    messagingSenderId: "626141843383",
    appId: "1:626141843383:web:f55f29d5e6c6b41ee22232"
  };

export const firebaseApp = initializeApp(firebaseConfig)