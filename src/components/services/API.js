import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance.get('/users')
const getUser = (id) => axiosInstance.get('users/' + id)
const getPost = (id) => axiosInstance.get('/posts/' + id)
const getPosts = (id) => axiosInstance.get( '/users/' + id + '/posts')


export {getPosts, getUsers, getUser, getPost}