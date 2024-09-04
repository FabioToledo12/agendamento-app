import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3030/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use((config) => {
    console.log(config);
    const auth = localStorage.getItem("auth");
    if (!!auth) {
        const credentials = JSON.parse(auth);
        config.headers.Authorization = `Bearer ${credentials.access_token}`;
    }

    console.log('interceptors request auth: ',  auth);

    return config;
});

const errorInterceptor = (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem("auth");
        window.location.reload();
    }
    return Promise.resolve(error);
}

api.interceptors.response.use((config) => config, errorInterceptor);

export default api;