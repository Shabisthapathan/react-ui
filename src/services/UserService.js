import axios from "./httpService";




const login=(user)=>{
    
 return axios.post('/api/users/signin' , user)
}
const register=(user)=>{
    return  axios.post('/api/users/signup' ,user)
}

const saveUser=(user)=>{
    localStorage.setItem('user',JSON.stringify(user));
}

export default {login, saveUser, register};