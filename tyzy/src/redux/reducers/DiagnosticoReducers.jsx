import { TypesDiagnostico } from "../types/Types"

const initialState = {
    citaDiagnostico: []
}

export const DiagnosticoReducers = (state = initialState, action) => {
    switch (action.type) {
        case TypesDiagnostico.agg:
            return {
                citaDiagnostico: [...state.citaDiagnostico, action.payload]
            }
        case TypesDiagnostico.list:
            return {
                citaDiagnostico: [...action.payload]
            }
        case TypesDiagnostico.edit:
            return {
                citaDiagnostico: [...action.payload]
            }
        case TypesDiagnostico.delete:
            return {
                citaDiagnostico: state.citaDiagnostico.filter(c => c.email !== action.payload)
            }

        default:
            return state
    }
}