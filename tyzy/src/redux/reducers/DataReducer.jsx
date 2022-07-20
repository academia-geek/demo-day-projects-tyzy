import { TypeData } from "../types/Types"

const initialState = {
    dta: []
}

export const DataReducers = (state = initialState, action) => {
    switch (action.type) {
        case TypeData.cargar:
            return {
                dta: [...state.dta, action.payload]
            }
        case TypeData.listar:
            return {
                dta: [...action.payload]
            }
        case TypeData.eliminarlista:
            return {
                dta: state.dta.filter(c => c.Uid !== action.payload)
            }

        default:
            return state
    }

}