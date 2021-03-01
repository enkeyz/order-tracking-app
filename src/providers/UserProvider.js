import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase/firebase";

export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (!user) return setUser(null);

      const { displayName, email } = user;
      setUser({
        displayName,
        email,
      });
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
