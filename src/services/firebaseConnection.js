import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCoy_wGJyfLdkXpM65K22L4V-6-WK8YUzg",
    authDomain: "projetorect-778dc.firebaseapp.com",
    projectId: "projetorect-778dc",
    storageBucket: "projetorect-778dc.appspot.com",
    messagingSenderId: "83049271991",
    appId: "1:83049271991:web:5b785d34f2f1b40baa7332"
  };
  // Inicializar Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase;
 