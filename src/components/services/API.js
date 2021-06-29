import axios from 'axios';

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance.get('/users')
const getUser = (id) => axiosInstance.get('/users' + id)
const getPosts = () => axiosInstance.get('/posts')
const getPost = (id) => axiosInstance.get('/users/' + id + '/posts')
const getComments = () => axiosInstance.get('/comments')
const getComment = (id) => axiosInstance.get('/posts/' + id + '/comments')

export {getPosts, getUsers, getComments, getComment, getPost, getUser}