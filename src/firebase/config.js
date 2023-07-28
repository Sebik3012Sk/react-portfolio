import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAwes6OPfCckLvIQMHWnbktufo4qqOw318",
    authDomain: "react-portfolio-db-7e2a0.firebaseapp.com",
    projectId: "react-portfolio-db-7e2a0",
    storageBucket: "react-portfolio-db-7e2a0.appspot.com",
    messagingSenderId: "72299145265",
    appId: "1:72299145265:web:a1fe6e27dec758bb114d10",
    measurementId: "G-SMW6FGR8G3"
};

// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)


// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()

export { projectFirestore }