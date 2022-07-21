import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { DB } from "../../firebase/Firebase";
import { TypeData } from "../types/Types";

export const CargarLandingPageSync = (data) => {
    return {
        type: TypeData.cargar,
        payload: data
    }
}
// --------------------------------------------Data Landing Page
export const CargarLPsection2Async = (data) => {
    return (dispatch) => {
        data.forEach((card) => {
            const { id, img } = card;
            // asignar lo que se captura de la api para enviar a la coleccion de firestore
            const CargarDatos = {
                Uid: id,
                image: img
            }
            addDoc(collection(DB, 'LPsection2'), CargarDatos)
                .then(resp => {
                    dispatch(CargarLandingPageSync(CargarDatos))
                    console.log('dato agregado')
                })
                .catch(err => console.log(err))
        })
    }
}
export const CargarLPsectAnimacionAsync = (data) => {
    return (dispatch) => {
        data.forEach((card) => {
            const { id, img, texto, titulo } = card;
            // asignar lo que se captura de la api para enviar a la coleccion de firestore
            const CargarDatos = {
                Uid: id,
                image: img,
                texto: texto,
                titulo: titulo
            }
            addDoc(collection(DB, 'LPsectAnimacion'), CargarDatos)
                .then(resp => {
                    dispatch(CargarLandingPageSync(CargarDatos))
                    console.log('dato agregado')
                })
                .catch(err => console.log(err))
        })
    }
}
export const CargarLPsectEstadistica = (data) => {
    return (dispatch) => {
        data.forEach((card) => {
            const { id, estadistica, parrafo } = card;
            // asignar lo que se captura de la api para enviar a la coleccion de firestore
            const CargarDatos = {
                Uid: id,
                estadistica: estadistica,
                parrafo: parrafo
            }
            addDoc(collection(DB, 'LPsectEstadistica'), CargarDatos)
                .then(resp => {
                    dispatch(CargarLandingPageSync(CargarDatos))
                    console.log('dato agregado')
                })
                .catch(err => console.log(err))
        })
    }
}
export const CargarLPbeneOfrecidos = (data) => {
    return (dispatch) => {
        data.forEach((card) => {
            const { id, imagen, descripcion } = card;
            // asignar lo que se captura de la api para enviar a la coleccion de firestore
            const CargarDatos = {
                Uid: id,
                imagen: imagen,
                descripcion: descripcion
            }
            addDoc(collection(DB, 'LPbeneOfrecidos'), CargarDatos)
                .then(resp => {
                    dispatch(CargarLandingPageSync(CargarDatos))
                    console.log('dato agregado')
                })
                .catch(err => console.log(err))
        })
    }
}
//-------------------Listar----------------------------//
export const listarLPsection2Async = () => {
    return async (dispatch) => {
        const collectionListar = await getDocs(collection(DB, "LPsectAnimacion"))
        const citasA = []
        collectionListar.forEach(listar => {
            // console.log(citasA.length - 4);
            citasA.push({ ...listar.data() })
        })
        dispatch(listarSync(citasA))
    }
}
export const listarSync = (data) => {
    return {
        type: TypeData.listar,
        payload: data
    }
}


//--------------Eliminar cita agendar-------------------------------//
export const deleteCitaAsync = (email) => {
    return async (dispatch) => {
        const collectionCitas = collection(DB, "LPsectAnimacion")
        const q = query(collectionCitas, where("Uid", "==", email))
        const datosQ = await getDocs(q)
        datosQ.forEach((docu) => {
            deleteDoc(doc(DB, "LPsectAnimacion", docu.id))
        })
        dispatch(actionDeleteEmailSync(email))
    }
};

export const actionDeleteEmailSync = (email) => {
    return {
        type: TypeData.eliminarlista,
        payload: email
    }
}
