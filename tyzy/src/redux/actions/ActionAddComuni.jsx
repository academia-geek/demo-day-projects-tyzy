//---------------Agregar Planta-----------------------/

import { addDoc, collection, getDocs } from "firebase/firestore"
import { DB } from "../../firebase/Firebase"
import { typesComunidad } from "../types/Types"

export const addComuniAsync = (planta) => {
    return async (dispatch)=>{
        addDoc(collection(DB, "comunidad"), planta)
        .then(resp => {
            dispatch(addComuniSync(planta))
            //dispatch(listPlantaAsync())

        }
           )
        .catch(error => console.warn(error))

    }
}
export const addComuniSync = (planta) => {
    return {
        type: typesComunidad.add,
        payload: planta
    }
}

//------------------Listar Plantas------------------------------------/
export const listaComuniAsync = () =>{
    return async (dispatch)=>{
        const collectionListar = await getDocs(collection(DB, "comunidad"))  
        console.log(collectionListar)
        const plantas= []
        collectionListar.forEach(lista =>{
            plantas.push({
                ...lista.data()
            })
        })
        console.log(plantas)
        dispatch(listaComuniSync(plantas))
    }
}
export const listaComuniSync = (comunidad)=>{
        return{
            type: typesComunidad.list,
            payload: comunidad
        }
}     