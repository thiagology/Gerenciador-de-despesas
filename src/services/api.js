import axios from 'axios';

//const api = axios.create({baseURL: 'http://localhost:3001/api'});
const api = axios.create({
    //baseURL: 'http://localhost:3001/api'
    //baseURL: 'https://api.tvmaze.com/search/show?q=star%20wars'
    baseURL: 'https://api-alpha-01.herokuapp.com/api'
    //baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default api;