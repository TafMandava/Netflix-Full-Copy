/* Import firebase firebase app */
import Firebase from 'firebase/app';
/* We are going to be usking firestore */
import 'firebase/firestore';
/* We need firebase auth for authorisation */
import 'firebase/auth';

/* We need to seed the database */


/* We need a config  */
const config = {};

/* Initialize the App  */
const firebase = Firebase.initializeApp(config);

/* Export firebase because we want to use it at the top of our application  */
export { firebase };