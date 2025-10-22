import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    //-------------Register With Email and Password------------------
    const emailRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password) ;
    }
    //----------------Update User Profile-------------------
    const updateUserProfile = (updatedUser) => {
        return updateProfile(auth.currentUser ,updatedUser)
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
        updateUserProfile 
    } 
    return (
        <div>
            <AuthContext value={AuthData}>{children} </AuthContext>
        </div>
    );
};

export default AuthProvider;