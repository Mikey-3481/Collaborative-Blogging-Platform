import React, { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const updateUser = useCallback(
    (userData) => {
      setCurrentUser((prevUser) => {
        const updatedUser = { ...prevUser, ...userData };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        return updatedUser;
      });
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
