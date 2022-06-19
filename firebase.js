// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-community/async-storage';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcU8Kg83wL10osDWWbSp-Mep92ZDrftRs",
  authDomain: "fir-auth-5b202.firebaseapp.com",
  projectId: "fir-auth-5b202",
  storageBucket: "fir-auth-5b202.appspot.com",
  messagingSenderId: "191470755623",
  appId: "1:191470755623:web:38cbf3aefbb153bf7a5302"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
