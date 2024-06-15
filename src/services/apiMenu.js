import db from "../database/firebase-config";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";

const menuCollectionRef = collection(db, "menu");

// Get all data from "menu" table
export async function getMenu() {
    try {
        const data = await getDocs(menuCollectionRef);
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
        throw new Error("Prodouct could not be fetched: ", error.message);
    }
}

// Create new item
export async function createItem(value) {
    try {
        await addDoc(menuCollectionRef, value);
        return menuCollectionRef;
    } catch (error) {
        throw new Error("Product could not be created: ", error.message);
    }
}

// Update specific item
export async function updateItem(id, value) {
    const menuDoc = doc(db, "menu", id);

    try {
        await updateDoc(menuDoc, value);
        return menuDoc;
    } catch (error) {
        console.error("Error updating document: ", error);
        throw new Error(`Item could not be updated: ${error.message}`);
    }
}

// Delete specific item
export async function deleteItem(id, value) {
    const menuDoc = doc(db, "menu", id);

    try {
        await deleteDoc(menuDoc, value);
        return menuDoc;
    } catch (error) {
        throw new Error("Item could not be deleted: ", error.message);
    }
}

// Get item by id
export async function getItemById(id) {
    const menuDoc = doc(db, "menu", id);
    const docSnapshot = await getDoc(menuDoc);

    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
        throw new Error("Document not found");
    }
}
