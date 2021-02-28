import { useState, useEffect } from "react";
import { fireStore, auth } from "../services/firebase/firebase";

const useRealtimeFirestore = (collectionName) => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const query = fireStore
      .collection(collectionName)
      .where("userId", "==", auth.currentUser.uid)
      .orderBy("id", "desc");

    const unSubscribe = query.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setOrderList(items);
    });

    return () => unSubscribe();
  }, []);

  return orderList;
};

export default useRealtimeFirestore;
