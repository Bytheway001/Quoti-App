import axios, { AxiosRequestConfig } from 'axios';

import {API} from '../globals';
import { AsyncStorage } from 'react-native';
export class TokenStorage {

    static LOCAL_STORAGE_TOKEN = 'jwt';
    static LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token';

    static isAuthenticated() {
        return this.getToken() !== null;
    }

    static getAuthentication() {
        return {
            headers: { 'Authorization': 'Bearer ' + this.getToken() }
        };
    }

    static getNewToken() {
        console.log('Getting new token');
        return new Promise((resolve, reject) => {
            axios
                .post(API+'/refresh_token' , { refresh_token: this.getRefreshToken() })
                .then(response => {
                    this.storeToken(response.data.token);
                    this.storeRefreshToken(response.data.refresh_token);
                    resolve(response.data.token);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static storeToken(token) {
        AsyncStorage.setItem(TokenStorage.LOCAL_STORAGE_TOKEN, token);
    }

    static storeRefreshToken(refreshToken) {
        AsyncStorage.setItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
    }

    static clear() {
        AsyncStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
        AsyncStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    }

    static getRefreshToken() {
        return AsyncStorage.getItem('refresh_token');
    }

    static getToken() {
        return AsyncStorage.getItem(TokenStorage.LOCAL_STORAGE_TOKEN);
    }
}