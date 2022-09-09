import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "clothItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall cloth items
export const getAllClothItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "clothItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
