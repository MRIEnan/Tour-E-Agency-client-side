import { useEffect, useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

const useFirebase = () => {

    initializeAuthentication();

    const [user,setUser] = useState({});
    const [sId,setSId] = useState(null);
    const [isLoading, setIsLoading]  = useState(true);


    const auth = getAuth();


    // sign in with google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
    };
    
    
    useEffect(()=>
    {
        const unSubscribe = onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return () =>  unSubscribe;
    },[isLoading]);



    // sign Out
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }




    return {user,isLoading,signInUsingGoogle,setIsLoading,logOut,sId,setSId};
};

export default useFirebase;