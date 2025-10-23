import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";


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

    //-------------Register With Email and Password------------------
    const emailRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password) ;
    }
    //----------------Update User Profile-------------------
    const updateUserProfile = (updatedUser) => {
        return updateProfile(auth.currentUser ,updatedUser)
    }

    //---------------------Update User Email-------------------------
    const updateUserEmail = (email) => {
        return updateEmail(auth.currentUser,email) ; 
    }
    //---------------LogIn with Email and password--------------
    const loginWithEmail = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password) ;
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

    //---------------------LogOut----------------------------
    const logOut = () => {
        return  signOut(auth) ;
    }


    //---------------Shared Data-------------------------------
    const AuthData = {
        user,
        setUser,
        googleLogin,
        loading,
        logOut,
        emailRegister,
        updateUserProfile ,
        loginWithEmail ,
        updateUserEmail
    } 
    return (
        <div>
            <AuthContext value={AuthData}>{children} </AuthContext>
        </div>
    );
};

export default AuthProvider;