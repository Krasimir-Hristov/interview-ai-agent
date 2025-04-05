import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACqVuIG4XKIz1qUQCaVKVf6e-piapBf18',
  authDomain: 'recuitech-8951a.firebaseapp.com',
  projectId: 'recuitech-8951a',
  storageBucket: 'recuitech-8951a.firebasestorage.app',
  messagingSenderId: '880794328522',
  appId: '1:880794328522:web:38a82bbcd1be19919b8333',
  measurementId: 'G-TLEG3V9Z30',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
