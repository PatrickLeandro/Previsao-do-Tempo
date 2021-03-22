import axios from 'axios';

//https://api.hgbrasil.com/weather?key=f8de8d2b&lat=-23.682&lon=-46.875


export const key = 'f8de8d2b';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;