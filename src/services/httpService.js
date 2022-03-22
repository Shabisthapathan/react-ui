import axios from "axios"

//wraper

  const host='https://node-fsa.herokuapp.com'
  const axiosInstance= axios.create({baseURL : host});


export default axiosInstance;