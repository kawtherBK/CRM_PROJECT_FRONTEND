import axios from "axios"
const axiosIntance = axios.create({
    baseURL: "https://crm-app-backend-v1.herokuapp.com/",
  
})
export default axiosIntance