import axios from 'axios';

// about search merchanise
const searchRequest = axios.create({
    baseURL: "http://localhost:5000/search",
    timeout: 10000
})

const signUpRequest = axios.create({
    baseURL: "http://localhost:5000/signup",
    timeout: 1000
})

// about search merchandise
const apiSearchMerchandise = (keyword) => searchRequest.get('', {params:{ "keyword": keyword}})  

// about user sign up
const apiSignupRequest = (props) =>  signUpRequest.post('/', {"account": props.account, "password": props.password})

export {apiSearchMerchandise}
export {apiSignupRequest}