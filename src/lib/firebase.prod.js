import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyAcAN2UY0y7JT1HJoAyEmB5ihgQPn2mVhg',
  authDomain: 'netflix-c244b.firebaseapp.com',
  databaseURL: 'https://netflix-c244b.firebaseio.com',
  projectId: 'netflix-c244b',
  storageBucket: 'netflix-c244b.appspot.com',
  messagingSenderId: '714578994901',
  appId: '1:714578994901:web:78f35ed484a58339a6645c',
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
