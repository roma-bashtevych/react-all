
// const getPosts  = () => {
//      return fetch('https://jsonplaceholder.typicode.com/posts')
//               .then(value => value.json());
//              };
//
// const getPost  = (id) => {
//     return fetch('https://jsonplaceholder.typicode.com/posts' + id)
//         .then(value => value.json());
//        };
//  export {getPost, getPosts};

// import axios from 'axios';
//
// let axiosInstance = axios.create({
// 	baseURL: 'https://jsonplaceholder.typicode.com/posts'
// });
//
// const getPosts = () => axiosInstance.get();
// const  getPost = (id) => axiosInstance.get('/' + id);
//
// export {getPost, getPosts}



import axios from 'axios';

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance.get('/users')
const getUser = (id) => axiosInstance.get('/' + id)
const getPosts = (id) => axiosInstance.get('users/' + id + '/posts/')
const getComments = (id) => axiosInstance.get('/comments/' + id)


export {getUser, getUsers, getPosts, getComments}

