import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-fausto.onrender.com/',
    timeout: 5000,
    //Envia os cookies seguros $de volta a todas as requisições
    credentials: true

    /* headers: {
        'x-access-token': window.sessionStorage.getItem('app-data')
    } */  
})

export default api