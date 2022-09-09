import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl__Pi7_QGmfEfMfK5gwz9oTov6hIEYwI",
  authDomain: "shopping-app-7c01c.firebaseapp.com",
  databaseURL: "https://shopping-app-7c01c-default-rtdb.firebaseio.com",
  projectId: "shopping-app-7c01c",
  storageBucket: "shopping-app-7c01c.appspot.com",
  messagingSenderId: "863664455667",
  appId: "1:863664455667:web:19878e0a3c374304561c86"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
