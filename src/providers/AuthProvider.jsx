import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const logInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
      };

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('current user',currentUser);
            
            setUser(currentUser);
        })
        return()=>{
            unSubscribe();
        }

    },[])

    const userInfo = {
    user,
    loading, 
    createUser,
    logInUser,logOutUser
    }

    return (
       <AuthContext.Provider value={userInfo}>
      {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;