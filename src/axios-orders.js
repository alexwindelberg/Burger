import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-dc5ff.firebaseio.com/'
});

export default instance;