//---------------Agregar Planta-----------------------/
import { addDoc, collection, getDocs } from "firebase/firestore"
import { DB } from "../../firebase/Firebase"
import { typesComunidad } from "../types/Types"

export const addComuniAsync = (comu) => {
    return async (dispatch) => {
        addDoc(collection(DB, "comunidad"), comu)
            .then(resp => {
                dispatch(addComuniSync(comu))
                dispatch(listaComuniAsync())
            })
            .catch(error => console.warn(error))
    }
}
export const addComuniSync = (comu) => {
    return {
        type: typesComunidad.add,
        payload: comu
    }
}

//------------------Listar comu------------------------------------/
export const listaComuniAsync = () => {
    return async (dispatch) => {
        const collectionListar = await getDocs(collection(DB, "comunidad"))
        const momentoHappy = []
        collectionListar.forEach(lista => {
            momentoHappy.push({
                ...lista.data()
            })
        })
        dispatch(listaComuniSync(momentoHappy))
    }
}
export const listaComuniSync = (comunidad) => {
    return {
        type: typesComunidad.list,
        payload: comunidad
    }
}     