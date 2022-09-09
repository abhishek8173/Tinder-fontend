import axios from 'axios';

const instance=axios.create({
    baseURL:'https://tinder-backend-clone-8173.herokuapp.com'
})

export default instance;