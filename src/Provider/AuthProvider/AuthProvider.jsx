import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/Firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import logo from '../../assets/Logo.png'


export const AuthContext = createContext() ;
const auth = getAuth(app) ;

const goggleProvider = new GoogleAuthProvider() ;


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null) ;  
    const [loading,setLoading] = useState(true) ;

    //---------------Register With Google-------------------- 
    const googleLogin = () => {
        return signInWithPopup(auth,goggleProvider) ;
    }

    //------------Observer-------------------------------
    useEffect(()=>{
        const tracking = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser) ;
            setLoading(false) ;
        })
        return () =>{
            tracking() ;
        }
    },[])


    //---------------Shared Data-------------------------------
    const AuthData = {
        user,
        setUser,
        googleLogin,
        loading,
    } 
    return (
        <div>
            <AuthContext value={AuthData}>{children} </AuthContext>
        </div>
    );
};

export default AuthProvider;