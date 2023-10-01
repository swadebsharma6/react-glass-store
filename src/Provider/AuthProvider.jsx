import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const googleLogIn =()=>{
      return  signInWithPopup(auth, googleProvider);
        
    }

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOutUser =()=>{
       return  signOut(auth);
    }

    // onAuthStateChange observer
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer user', currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    }, []);





   

    const authentication ={
        googleLogIn,
        createUser,
        loginUser,
        user,
        logOutUser,

    }


    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
   
    children: PropTypes.node,
}