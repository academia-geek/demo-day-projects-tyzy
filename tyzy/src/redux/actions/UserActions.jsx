
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {addDoc, collection }from 'firebase/firestore'
import { DB } from "../../firebase/Firebase";
import { TypeUser } from "../types/Types";


//==========Mostrar usuario===============//
export const ActionGetUserAsync = ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            
            dispatch(ActionGetUserSync(user))

        })
    }
}
export const ActionGetUserSync = (user)=>{
    return{
        type: TypeUser.userlist,
        payload: user,
    }
}

export const addCuenta = (cuenta)=>{
    return async (dispatch)=>{
        addDoc(collection(DB, 'userInfo'), cuenta)
        .then(resp =>{
        
        })
    }
}