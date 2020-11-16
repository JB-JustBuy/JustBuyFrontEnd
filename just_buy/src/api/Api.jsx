import axios from 'axios';

// about search merchanise
const searchRequest = axios.create({
    baseURL: "http://localhost:5000/search",
    timeout: 10000
})

const apiSearchMerchandise = (keyword) => searchRequest.get('', {params:{ "keyword": keyword}})  

// about search merchandise
export {apiSearchMerchandise}