/* eslint-disable import/prefer-default-export */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBdtUZVQ7CQqGlL7T5MjCdoY6cmbcvRngk',
  authDomain: 'netflix-7db66.firebaseapp.com',
  projectId: 'netflix-7db66',
  storageBucket: 'netflix-7db66.appspot.com',
  messagingSenderId: '366768909002',
  appId: '1:366768909002:web:7a86ad17d9c814856b6233',
  measurementId: 'G-PQLPJZ1B5H',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
