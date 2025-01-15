import React, { createContext, useCallback, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const updateUser = useCallback(
    (userData) => {
      console.log(userData);
      setCurrentUser(userData);
      localStorage.setItem("currentUser", JSON.stringify(userData));
    },
    [setCurrentUser]
  );

  const clearUser = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser, updateUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};
