import { ActionTypes } from "../constants/actionType";

const initialState = {
    userData: []
}

export const userReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.USER_LOGIN:
            return { ...state, userData: payload };
        default:
            return state;
    }
}