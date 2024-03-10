import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCbO-F6Y4s5jRtspb801Kxu3V1YJSpw_6g',
  authDomain: 'chat-react-4f7ea.firebaseapp.com',
  projectId: 'chat-react-4f7ea',
  storageBucket: 'chat-react-4f7ea.appspot.com',
  messagingSenderId: '52156755363',
  appId: '1:52156755363:web:ad71126a8fc66300edbe16',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
