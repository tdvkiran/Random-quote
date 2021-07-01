import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.quotable.io/random"
});
export default axiosInstance;