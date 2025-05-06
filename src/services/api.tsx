import axios from 'axios';
// const URL="https://fakestoreapi.com";

//creating axios instanceS  
const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com",
    headers:{
        authorName: "Shivam"
    },

})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    Object.assign(config,{test:'1214'})
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Object.assign(response,{test:'1234',list:response.data})
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response && error.response.status===401)
    {
        console.log('call the refresh token api here') 
    }

    return Promise.reject(error);
  });



export const getProducts = async()=> {
    try{
return await axiosInstance.get(`/products`)
    }
    catch(error){
        console.log("Error in getting products",error);
    }
}  