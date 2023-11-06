import axios from 'axios';
const instance = axios.create({
     baseURL: 'https://assignment-11-server-jade.vercel.app',
     withCredentials: true
});
const useAxios = () => {
     return instance;
};

export default useAxios;