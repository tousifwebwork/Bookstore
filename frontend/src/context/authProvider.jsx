import React,{createContext} from 'react'
import { useContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const initialAuthUser = localStorage.getItem("user");
    const [authUser, setauthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : null
    );

  return (
    <>
    <AuthContext.Provider value={[authUser, setauthUser]}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

export const useAuth = () => useContext(AuthContext);