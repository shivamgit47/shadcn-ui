import { useEffect, useState } from 'react';
import {getProducts} from "../services/api"
import 'tailwindcss'

const Projects = () => {
  const[productState,setProduct]= useState([]);
  console.log("productState",productState);

  useEffect(()=>{
    getAllProducts()
  },[]);

  const getAllProducts = async () => {
    const response = await getProducts();
    console.log(response);
    setProduct(response.data);
  }
  return (
    <div className='grid relative top-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
      {productState.map((val,index)=>{
        const{image,title,price}=val;

        return<div className="max-w-sm w-full "key={index}>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
          <img
            className="h-48 w-full object-cover"
            src={image}
            alt='image'
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-xl font-bold text-indigo-600">${price}</p>
          </div>
        </div>
      </div>
      })}
     
    </div>
  )
}

export default Projects
