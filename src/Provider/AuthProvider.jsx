import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleLogIn =()=>{
        setLoading(true);
      return  signInWithPopup(auth, googleProvider);
        
    }

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOutUser =()=>{
        setLoading(true);
       return  signOut(auth);
    }


    const updateProfile =(name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    // onAuthStateChange observer
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer user', currentUser);
            setLoading(false);
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
        loading,
        logOutUser,
        updateProfile,

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