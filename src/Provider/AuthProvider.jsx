import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const googleLogIn =()=>{
      return  signInWithPopup(auth, googleProvider);
        
    }

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }




    const user ={name: 'Swadeb'}

    const authentication ={
        googleLogIn,
        user,
        createUser,
        loginUser,

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