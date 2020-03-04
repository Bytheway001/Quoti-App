import axios from "axios";
export function setAuthToken(token,session) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer: ${token}`;
        axios.defaults.headers.common["session"]=session
        
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}
