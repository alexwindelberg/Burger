import axios from 'axos';

const instance = axios.create({
    baseURL: 'https://burger-app-dc5ff.firebaseio.com/'
});

export default instance;