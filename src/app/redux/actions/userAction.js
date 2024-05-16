import { ActionTypes } from "../constants/actionType";



export const userLogin = (userData)=>{
    return{
        type: ActionTypes.USER_LOGIN,
        payload:userData
    }
}