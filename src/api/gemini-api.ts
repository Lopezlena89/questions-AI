import axios from 'axios';
// import { getEnvVariables } from '../helpers/getEnvVariables';

// const { VITE_API_URL } = getEnvVariables()

const geminiapi = axios.create({
    baseURL: 'https://vercel.com/lopezlena89/questions-ai',
    headers:{
        'x-token': localStorage.getItem('token'),
        
    },
    

});

// Todo: configurar interceptores
// geminiapi.interceptors.request.use( config => {

//     config.headers = {
//         ...config.headers,
//         'x-token': localStorage.getItem('token')
//     }

//     return config;
// })


export default geminiapi;





