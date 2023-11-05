/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../public/firebase.config";



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState();
     // theme toggle
    
     // loaded created user from database
     const [loadedProduct, setLoadedProduct] = useState();
     useEffect(() => {
          fetch('https://user-management-server-koayagszg-servers-projects.vercel.app/product/')
               .then(res => res.json())
               .then(data => setLoadedProduct(data))
     }, [loadedProduct])
     // google login
     const googleProvider = new GoogleAuthProvider();
     const signInWithGoogle = () => {
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
          
     }
     // Login with email and pass
     const userLogin = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }
     // sign up with email
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     // logout
     const logout = () => {
          setLoading(true)
          return signOut(auth)

     }
     // Auth state change
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false)
               
          });
          return () => {
               unSubscribe()
          }
     }, [])

     const authInfo = {
          user, 
          loadedProduct, signInWithGoogle,
          logout, loading, setLoading, createUser, userLogin,
          
     }

     return (
         
               <AuthContext.Provider value={authInfo}>
                    {children}
                  
               </AuthContext.Provider>
         
     );
};

export default AuthProvider;


     


