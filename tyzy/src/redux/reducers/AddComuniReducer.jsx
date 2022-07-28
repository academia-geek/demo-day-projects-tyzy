import { typesComunidad } from "../types/Types"

const initialState={
    planta : []
}

export const plantasReducers =(state = initialState, action)=>{
    switch (action.type) {
        case typesComunidad.add:
            return{
                     comunidad : [action.payload]
            }
         case typesComunidad.list:
                return{
                         comunidad : [...action.payload]
                }  
                case typesComunidad.search:
                    return{
                        comunidad : action.payload
                    }      
    
        default:
           return state
    }
}