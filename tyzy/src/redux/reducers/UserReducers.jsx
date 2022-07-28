import { TypeUser } from "../types/Types";

const initialState = {
    user: {}
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case TypeUser.userlist:
            return {
                user: action.payload
            }
        case TypeUser.userUpinfo:
            return {
                user: action.payload
            }
        case TypeUser.userUpImg:
            return {}

        default:
            return state;
    }
}
