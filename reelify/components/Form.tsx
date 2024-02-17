"use client";

import React, { useState } from 'react';
import { postForm } from './Utils'; 



export const Form: React.FC<{
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowForm, setShowProduct }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');


  const handleButtonClick = async () => {
    
    setShowProduct(true);
    setShowForm(false);

    // console.log('Input 1:', name);
    // console.log('Input 2:', phone);
    // console.log('Text Area:', category);

    try{

      const response = await postForm(
        name,
        phone,
        category,
        description
      );

      console.log('Response:', response);

    }catch(e){
      console.error('Error:', e);
    }

  };

 



  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">Add AI Products</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
      </div>
     
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-blue-600">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="phone" className="leading-7 text-sm text-blue-600">Phone No</label>
              <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="category" className="leading-7 text-sm text-blue-600">Product Category</label>
              <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}   className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="description" className="leading-7 text-sm text-blue-600">Product Description</label>
              <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full flex justify-end">
            <button type="submit" onClick={handleButtonClick } className=" text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
          </div>
          
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            
          </div>
        </div>
      </div>
    
    </div>
  </section>
  
  )
};


export default Form