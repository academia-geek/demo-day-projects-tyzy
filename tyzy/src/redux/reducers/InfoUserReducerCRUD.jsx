import { TypeInfoUser } from "../types/Types"

const initialState = {
    DatosUser: []
}

export const InfoUserReducerCRUD = (state = initialState, action) => {
    switch (action.type) {
        case TypeInfoUser.agregar:
            return {
                DatosUser: [...state.DatosUser, action.payload]
            }

        case TypeInfoUser.mostrar:
            return {
                DatosUser: [...action.payload]
            }

        case TypeInfoUser.editar:
            return {
                ...state
            }

        default:
            return state;
    }

}