import axios from 'axios';

const SERVER_URL = "https://api.ytabc.com/"; // Example http://localhost:4941/api/v1/

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 10000
});

export default {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getInfo: () => instance.get('home/mainNavigation'), // 需要看别人的代码学习
}