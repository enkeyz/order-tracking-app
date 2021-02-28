import dotenv from "dotenv";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

dotenv.config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const auth = firebase.auth();
export const fireStore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (error) {
    console.error(error);
  }
};

export const signInAnonymous = async () => {
  try {
    await auth.signInAnonymously();
  } catch (error) {
    console.error(error);
  }
};

export const logOutWithGoogle = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

export const addOrder = async (order) => {
  try {
    await fireStore.collection("order-list").add({
      ...order,
      addedOn: new Date().toString(),
      userId: auth.currentUser.uid,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = async () => {
  if (!auth.currentUser) return;

  const orderList = [];

  const order_query = fireStore
    .collection("order-list")
    .where("userId", "==", auth.currentUser.uid);

  try {
    const querySnapshot = await order_query.get();
    querySnapshot.forEach((doc) => {
      orderList.push(doc.data());
    });
  } catch (error) {
    console.error(error);
  }

  return orderList;
};

export const removeOrder = async (id) => {
  const order_query = fireStore
    .collection("order-list")
    .where("userId", "==", auth.currentUser.uid)
    .where("id", "==", id);

  try {
    const querySnapshot = await order_query.get();
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateOrder = async (id, toUpdate) => {
  const order_query = fireStore
    .collection("order-list")
    .where("userId", "==", auth.currentUser.uid)
    .where("id", "==", id);

  try {
    const querySnapshot = await order_query.get();
    querySnapshot.forEach((doc) => {
      doc.ref.update(toUpdate);
    });
  } catch (error) {
    console.error(error);
  }
};
