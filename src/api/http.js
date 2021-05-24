import axios from 'axios'

export const getInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:3300'
    });
    return instance;
}