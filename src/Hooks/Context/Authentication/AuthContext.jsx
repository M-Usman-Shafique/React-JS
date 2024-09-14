import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const login = (email, password) => {
        setUser(email, password);
    }
    const logout = () => {
      setUser(null);
    }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
    return useContext(AuthContext)
}