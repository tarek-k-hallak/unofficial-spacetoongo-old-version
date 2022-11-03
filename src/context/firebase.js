import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection ,addDoc} from 'firebase/firestore'
// import { seedDatabase } from '../seed'

const firebaseConfig = {
    apiKey: "AIzaSyDBwTMeDAV7UZvfTv_gRgTzc4SVXVf5f5I",
    authDomain: "netflix-clone-53fab.firebaseapp.com",
    projectId: "netflix-clone-53fab",
    storageBucket: "netflix-clone-53fab.appspot.com",
    messagingSenderId: "258686599401",
    appId: "1:258686599401:web:3eac04586d75c9ea223078"
};

//Initialize fire App
export const firebaseApp = initializeApp(firebaseConfig);

//Get authentication for the App
export const auth = getAuth(firebaseApp);

//Initialize Fire store
export const db = getFirestore(firebaseApp);


// seeding data to the App
// **DO NOT UNCOMMENT THE NEXT LINE IN ORDER TO NOT DUPLICATE THE DATA**

// seedDatabase(db, collection ,addDoc);