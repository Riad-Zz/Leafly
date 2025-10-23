import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const goggleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState("");
    const [count, setCount] = useState(0);

    //---------------Register With Google-------------------- 
    const googleLogin = () => {
        return signInWithPopup(auth, goggleProvider);
    }

    //-------------Register With Email and Password------------------
    const emailRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //----------------Update User Profile-------------------
    const updateUserProfile = (updatedUser) => {
        return updateProfile(auth.currentUser, updatedUser)
    }

    //---------------------Update User Email-------------------------
    const updateUserEmail = (email) => {
        return updateEmail(auth.currentUser, email);
    }
    //---------------LogIn with Email and password--------------
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //---------------Password Reset Email--------------------
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    //------------Observer-------------------------------
    useEffect(() => {
        const tracking = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            tracking();
        }
    }, [])

    //--------------Stotred Values----------------------------

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("userStats"));
        if (saved) {
            setCount(saved.count ? saved.count : 0);
            setFavorite(saved.favorite ?saved.favorite : "");
        }
    }, []);

    //---------------------LogOut----------------------------
    const logOut = () => {
        return signOut(auth);
    }


    //---------------Shared Data-------------------------------
    const AuthData = {
        user,
        setUser,
        googleLogin,
        loading,
        logOut,
        emailRegister,
        updateUserProfile,
        loginWithEmail,
        updateUserEmail,
        forgetPassword,
        favorite,
        setFavorite,
        count,
        setCount,
    }
    return (
        <div>
            <AuthContext value={AuthData}>{children} </AuthContext>
        </div>
    );
};

export default AuthProvider;