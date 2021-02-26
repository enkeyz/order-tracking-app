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
  await auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const logOutWithGoogle = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const addOrder = async (order) => {
  await fireStore.collection("order-list").add({
    ...order,
    addedOn: firebase.firestore.FieldValue.serverTimestamp(),
    userId: auth.currentUser.uid,
    id: new Date().getTime().toString(),
  });
};

export const getOrders = async () => {
  if (!auth.currentUser) return;

  const orderList = [];

  await fireStore
    .collection("order-list")
    .where("userId", "==", auth.currentUser.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        orderList.push(doc.data());
      });
    });

  return orderList;
};

export const removeOrder = async (id) => {
  var order_query = fireStore.collection("order-list").where("id", "==", id);

  await order_query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  });
};
