
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

import axios from 'axios';

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const getPosts = () => axiosInstance.get();
const  getPost = (id) => axiosInstance.get('/' + id);

export {getPost, getPosts}
