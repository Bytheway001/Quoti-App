import { AsyncStorage } from "react-native"
import Axios from "axios"
import jwt_decode from 'jwt-decode';
import { API } from "../globals";
import { setAuthToken } from "../utils/setAuthToken";

export const LOGIN_REQUESTED = 'LOGIN_REQUEST';
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const LOGOUT_SUCCEEDED = "LOGOUT_SUCCEEDED";

export const onLoginRequested = ()=>({type:LOGIN_REQUESTED});
export const onLoginSucceeded = (data)=>({type:LOGIN_SUCCEEDED,payload:data})
export const onLoginFailed = (data)=>({type:LOGIN_FAILED,payload:data})

export const onLogoutRequested = ()=>({type:LOGOUT_REQUESTED});
export const onLogoutSucceeded = ()=>({type:LOGOUT_SUCCEEDED});
export const Login = (email,password) => {
    return dispatch => {
        console.log("Logging in")
        dispatch(onLoginRequested())
        
        Axios.post(API + '/login', { email, password })
            .then(res => {
                console.log("Login Was Successful")
                AsyncStorage.setItem("jwt", res.data.jwt)
                AsyncStorage.setItem("refresh_token",res.data.refresh_token);
                setAuthToken(res.data.jwt,res.data.refresh_token)
                dispatch(onLoginSucceeded(jwt_decode(res.data.jwt).data))
            })
            .catch(err => {
                console.log(err)
                console.log("Login Failed")
                dispatch(onLoginFailed(err.response))
            })
    }
}

export const Logout = ()=>{
    return dispatch =>{
        dispatch(onLogoutRequested());
        AsyncStorage.clear();
        dispatch(onLogoutSucceeded());
    }
  
}

const initialState = {
    user:null,
    loading:false
}

export const sessionReducer  = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUESTED:
            return {
                ...state,
                loading:true
            } 
        case LOGIN_SUCCEEDED:
            return {
                ...state,
                loading:false,
                user:action.payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading:false
            }
        case LOGOUT_REQUESTED:
            return {...state,loading:true}
        case LOGOUT_SUCCEEDED:
            return {...state,user:null,loading:false}
        default:
            return state;
    }
}