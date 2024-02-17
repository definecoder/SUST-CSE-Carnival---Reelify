"use client";

import React, { useState, useEffect }  from "react";
import Form from "../../components/Form";
import Sidebar from "../../components/Sidebar";
import Cart from "../../components/Cart";
import GetCarts from "../../components/Getcarts";


const Products = () => {

  const [showProduct, setShowProduct] = useState(true);
  const [showForm, setShowForm] = useState(false);


  const handleButtonClick = () => {
    
    setShowProduct(false);
    setShowForm(true);
  };

  



  return (
    <div className="w-full min-h-screen flex">
      <div className="w-1/6 min-h-full bg-slate-500 flex flex-col">
          <Sidebar/>
      </div>

      <div className="w-5/6 min-h-full ">
        {/* either the following div or Form */}
        {showProduct && 
      <div className="w-full h-full">
        <button onClick={handleButtonClick} className="absolute top-24 left-[85%] font-poppins px-5 py-2 text-xl bg-transparent text-white outline-none border-2 border-current rounded-xl transition-all duration-300 font-semibold hover:bg-white hover:text-black"
      >
        Add Product
        </button>
 
       
        <GetCarts />
        </div>
}
      
        {showForm && <Form setShowForm={setShowForm} setShowProduct={setShowProduct}/> }

      </div>
    </div>
  );
};

export default Products;
