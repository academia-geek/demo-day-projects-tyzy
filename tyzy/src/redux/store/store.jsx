import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { plantasReducers } from "../reducers/AddComuniReducer";
import { DiagnosticoReducers } from "../reducers/DiagnosticoReducers";
import { InfoUserReducerCRUD } from "../reducers/InfoUserReducerCRUD";
import { LoginReducers } from "../reducers/LoginReducers";
import { UserReducers } from "../reducers/UserReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    userLoginStore: LoginReducers,
    user: UserReducers,
    datosUserStore: InfoUserReducerCRUD,
    comunidades:plantasReducers,
    citaDiagnosticoStore: DiagnosticoReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);