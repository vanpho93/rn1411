import axios from 'axios';

export const getMorePost = () => {
    return axios.get('http://10.0.0.186:3000/')
    .then(res => res.data);
}
