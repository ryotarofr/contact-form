// import { getApp, getApps, initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
//   databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || ''
//     }.firebaseio.com`,
// };

// export const firebaseApp = !getApps().length
//   ? initializeApp(firebaseConfig)
//   : getApp();



// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfk6nyzSIhsWiHbYOO9TRCzuhLoImYluY",
  authDomain: "astro-blog-c777d.firebaseapp.com",
  projectId: "astro-blog-c777d",
  storageBucket: "astro-blog-c777d.appspot.com",
  messagingSenderId: "49580284328",
  appId: "1:49580284328:web:c042806ca5b8c1418fa59d",
  measurementId: "G-5ESL6ZKLKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

