import * as firebase from 'firebase/app';
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0r4OBD1ROH9tu6kw-VZ0HyYhBPdlnht8',
  authDomain: 'ivorysoft-968a9.firebaseapp.com',
  databaseURL: 'https://ivorysoft-968a9.firebaseio.com',
  projectId: 'ivorysoft-968a9',
  storageBucket: 'ivorysoft-968a9.appspot.com',
  messagingSenderId: '283804189736',
  appId: '1:283804189736:web:618bce73a81f90b8c4a11d',
  measurementId: 'G-6XX6CNVYDN',
};

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  if ('measurementId' in firebaseConfig) firebase.analytics();
}

export default firebase;
