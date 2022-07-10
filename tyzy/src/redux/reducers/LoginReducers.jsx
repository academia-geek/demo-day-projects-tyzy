import { TypesLogin } from "../types/Types";

const initialState = {
    userLogin: []
}

export const LoginReducers = (state = initialState, action) => {
    switch (action.type) {
        case TypesLogin.login:
            return {
                email: action.payload.email,
                password: action.payload.password,
            }

        case TypesLogin.logout:
            return {}

        case TypesLogin.register:
            return {
                userLogin: [...state.userLogin, action.payload]
            }

        default:
            return state;
    }
}