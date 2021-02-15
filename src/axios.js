import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
// the instance above allow to do something like this
// instance.get('/foo-bar');
// so instance its actually the inicial part of the url
// we use this when we have diferent end point comming
// from the same API

export default instance;