import axios from 'axios';

export default axios.create({
    baseURL: 'https://booksreact.herokuapp.com/api'
});