import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
export  const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

const [user ,setUser] = useState(null);
// registration setup with email and password
 const createUser =(email , password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
//  Sign in setup 
const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}
// current  user setup
 useEffect(()=>{
 const unSubscribe =   onAuthStateChanged(auth,curentUser=>{
        setUser(curentUser) 
       
    })
    return()=>{
        unSubscribe();
    }
 },[])
//  logout setup
const logOut = () =>{
    return signOut(auth);
}
//  Authinfo children setup
   const authInfo = {
       user,
       createUser,
       signIn,
       logOut
    };

  
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
               {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;