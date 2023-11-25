import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { User } from "../types/user";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const saveUserinDB = async (users:User) => {
  try {
 await addDoc(collection(db, "users"), users)
} catch (e) {
  console.error("Error adding document: ", e);
}}

const getUser = await getDocs(collection(db, "users"));
getUser.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});



export default {saveUserinDB,getUser}
