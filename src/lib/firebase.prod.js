/* Import firebase app */
import Firebase from 'firebase/app';
/* We are going to be usking firestore */
import 'firebase/firestore';
/* We need firebase auth for authorisation */
import 'firebase/auth';
/* Import seed file once because we do not want to create duplicate data */
/* import { seedDatabase } from '../seed'; */

/* We need a config  */
const firebaseConfig = {
    apiKey: "AIzaSyAX8qMGvBdcrFxRTz8e21Tpof_HJGA5vWY",
    authDomain: "netflix-full-copy.firebaseapp.com",
    projectId: "netflix-full-copy",
    storageBucket: "netflix-full-copy.appspot.com",
    messagingSenderId: "641671493745",
    appId: "1:641671493745:web:c154498cb6bea1db0e43d0"
  };

/* Initialize the App  */
const firebase = Firebase.initializeApp(firebaseConfig);

/* We need to seed the database */
/* seedDatabase(firebase); */

/* Export firebase because we want to use it at the top of our application  */
export { firebase };