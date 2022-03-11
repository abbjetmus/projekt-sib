
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgy76BKgmQx56xfW11gcDC565r8Jdg_H4",
  authDomain: "test-applicationform.firebaseapp.com",
  projectId: "test-applicationform",
  storageBucket: "test-applicationform.appspot.com",
  messagingSenderId: "791701493938",
  appId: "1:791701493938:web:31c28a700a5e9b660c11ab",
  measurementId: "G-YWT8T3GJXV"
}

const apps = getApps()
let firebaseApp
if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = apps[0]
}

const db = getFirestore(firebaseApp)
// const auth = getAuth(firebaseApp)

export { db }



