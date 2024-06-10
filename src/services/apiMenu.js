import db from "../database/firebase-config";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from "firebase/firestore";

const menuCollectionRef = collection(db, "menu");

export async function getMenu() {
    const data = await getDocs(menuCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function createItem(value) {
    await addDoc(menuCollectionRef, value);
}

export async function updateItem(id, value) {
    const menuDoc = doc(db, "menu", id);
    await updateDoc(menuDoc, value);
}

export async function deleteItem(id, value) {
    const menuDoc = doc(db, "menu", id);
    await deleteDoc(menuDoc, value);
}
