import { TypeInfoUser } from "../types/Types"
import { DB } from "../../firebase/Firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

//--------------Agregar info usuario-------------------------------
export const agregarInfoUserAsync = (formulario) => {
    return (dispatch) => {
        addDoc(collection(DB, "InfoUserCRUD"), formulario)
            .then(resp => {
                dispatch(agregarInfoUserSync(formulario))
                dispatch(mostrarDatesUserAsync())
            })
            .catch(error => console.log(error))
    }
}
export const agregarInfoUserSync = (formulario) => {
    return {
        type: TypeInfoUser.agregar,
        payload: formulario
    }
}

//-------------------mostrar datos usuario----------------------------
export const mostrarDatesUserAsync = () => {
    return async (dispatch) => {
        const datosUsers = await getDocs(collection(DB, "InfoUserCRUD"))
        const DatosUsersNew = []
        datosUsers.forEach(datos => {
            DatosUsersNew.push({ ...datos.data() })
        })
        dispatch(mostrarDatesUserSync(DatosUsersNew))
    }
}
export const mostrarDatesUserSync = (datos) => {
    return {
        type: TypeInfoUser.mostrar,
        payload: datos
    }
}

//-------------------editar datos usuario----------------------------
export const editarInfoUserAsync = (datosEditar) => {
    return async (dispatch) => {
        const datosUsers = collection(DB, "InfoUserCRUD")
        const datosFirebaseUsers = query(datosUsers, where("correo", "==", datosEditar.correo))
        const filterDatosUser = await getDocs(datosFirebaseUsers)
        let id = '';

        filterDatosUser.forEach(async (info) => { id = info.id })
        const infoFirebaseUser = doc(DB, 'InfoUserCRUD', id)
        
        await updateDoc(infoFirebaseUser, datosEditar)
            .then((resp) => {
                dispatch(editarInfoUserSync(datosEditar))
                dispatch(mostrarDatesUserAsync())
            })
            .catch(err => console.log(err))
    }
}
export const editarInfoUserSync = (datosEditar) => {
    return {
        type: TypeInfoUser.editar,
        payload: { datosEditar }
    }
}

//--------------Eliminar info usuario-------------------------------//
export const eliminarInfoUseAsync = (email) => {
    return async (dispatch) => {
        const datosUsers = collection(DB, "InfoUserCRUD")
        const datosFirebaseUsers = query(datosUsers, where("email", "==", email))

        const filterDatosUser = await getDocs(datosFirebaseUsers)

        filterDatosUser.forEach(filter => {
            deleteDoc(doc(DB, "InfoUserCRUD", filter.id))
        })
        dispatch(eliminarInfoUserSync(email))
    }
}
export const eliminarInfoUserSync = (email) => {
    return {
        type: TypeInfoUser.eliminar,
        payload: email
    }
}