import axios from "axios";
export const makerequest=axios.create({
    baseURL:"http://localhost:8000/api/",
    withCredentials:true,
})
