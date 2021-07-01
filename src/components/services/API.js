import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance.get('/users')
const getUser = (id) => axiosInstance.get('users/' + id)
const getPosts = () => axiosInstance.get('/posts')
const getPost = (id) => axiosInstance.get( '/posts/' + id)
const getComments = () => axiosInstance.get('/comments')
const getComment = (id) => axiosInstance.get('/comments/' + id)


export {getPosts, getUsers, getComments, getComment, getUser, getPost}