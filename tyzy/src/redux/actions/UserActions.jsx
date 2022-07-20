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
        payload: user
    }
}


export const addCuentaAsync = (data)=>{
    return async (dispatch)=>{
        const upinfo = await addDoc(collection(DB, "userInfo"), data)
        dispatch(addCuentaSync(upinfo))

    }
}
export const addCuentaSync = (cuenta)=>{
    return{
        type: TypeUser.userUpinfo,
        payload: cuenta
    }
}