import { getAuth, onAuthStateChanged } from "firebase/auth";
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
