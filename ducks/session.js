import { AsyncStorage } from "react-native"

export const GET_TOKEN = "GET_TOKEN"
export const onGetTokenRequest = (token)=>({type:GET_TOKEN,payload:token})

export const getToken =()=>{
    return async dispatch =>{
        let userToken = await AsyncStorage.getItem('jwt')
        if(userToken){
            dispatch(onGetTokenRequest(userToken))
        }
    }
}