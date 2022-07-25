import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { DB } from "../../firebase/Firebase"
import { TypesDiagnostico } from "../types/Types"

//-------------------------------Agregar----------------------------------
export const actionAggDiagAsync = (formDiag) => {
    return (dispatch) => {
        addDoc(collection(DB, "CitaDiagnostico"), formDiag)
            .then(resp => {
                dispatch(actionAggDiagSync(formDiag))
                dispatch(actionListCitaAsync(formDiag?.nombreComp))
            })
            .catch(error => { console.log(error) })
    }
}
export const actionAggDiagSync = (formDiag) => {
    return {
        type: TypesDiagnostico.agg,
        payload: formDiag
    }
}

//-------------------------------Listar----------------------------------
export const actionListCitaAsync = () => {
    return async (dispatch) => {
        const listCitaDiag = await getDocs(collection(DB, "CitaDiagnostico"))
        const citaAgendada = []
        listCitaDiag.forEach(list => {
            citaAgendada.push({...list.data()})
        })
        dispatch(actionListCitaSync(citaAgendada))
    }
}
export const actionListCitaSync = (citaDiag) => {
    return {
        type: TypesDiagnostico.list,
        payload: citaDiag
    }
}

//-------------------------------editar----------------------------------
export const actionEditarCitaAsync = (datosEdit) => {
    return async (dispatch) => {
        const listCitaDiag = collection(DB, "CitaDiagnostico")
        const q = query(listCitaDiag, where("correo", "==", datosEdit?.correo))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async (docu) => { id = docu.id })
        const DocRecf = doc(DB, 'CitaDiagnostico', id)

        await updateDoc(DocRecf, datosEdit)
            .then((resp) => {
                dispatch(actionEditarCitaSync(datosEdit))
                dispatch(actionListCitaAsync(datosEdit?.nombreComp))
            })
            .catch(err => console.log(err))
    }
}
export const actionEditarCitaSync = (datosEdit) => {
    return {
        type: TypesDiagnostico.edit,
        payload: { datosEdit }
    }
}

//-------------------------------Eliminar----------------------------------
export const actionEliminarCitaAsync = (correo) => {
    return async (dispatch) => {
        const listCitaDiag = collection(DB, "CitaDiagnostico")
        const q = query(listCitaDiag, where("correo", "==", correo))
        const datosQ = await getDocs(q)

        datosQ.forEach(docu => {
            deleteDoc(doc(DB, "CitaDiagnostico", docu.id))
        })
        dispatch(actionEliminarCitaSync(correo))
    }
}
export const actionEliminarCitaSync = (correo) => {
    return {
        type: TypesDiagnostico.delete,
        payload: correo
    }
}