import axios from 'axios';

export default axios.create({
    baseURL: 'https://fake-api-jsonserver-sigma.vercel.app/',
    // baseURL: 'https://onlineshop-1.herokuapp.com',
});
