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

const update=(user)=>{
    console.log(user.email)
    const userFormLocalStorage=localStorage.getItem('user');
    const json=JSON.parse(userFormLocalStorage) || {};
    const token=json.token;
    const headers={
        authorization: `Bearer ${token}`
    };
    return axios.put(`/api/users/${user.email}`,user,{headers});
}

const getUser=(email)=>{
    const userFormLocalStorage=localStorage.getItem('user');
    const json=JSON.parse(userFormLocalStorage) || {};
    const token=json.token;
    const headers={
        authorization: `Bearer ${token}`
    };
   return axios.get(`/api/users/${email}`, {headers});
};

const getUserFormStorage=()=>{
    const data= localStorage.getItem('user');
    return JSON.parse(data)
}

export default {login, saveUser, register, update, getUser,getUserFormStorage};