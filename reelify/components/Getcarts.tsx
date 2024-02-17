import React, { useEffect, useState } from 'react';
import { getProducts } from './Utils';
import Cart from './Cart'; // Import the Cart component


type Product = {
  name: string;
  phone: string;
  category: string;
  description: string;
};

export default function GetCarts() {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {data && data.map((product, index) => (
         <div className="w-1/4 min-h-min text-gray-600 body-font mx-12 my-24">
               <Cart
          key={index} // Add a unique key prop
          name={product.name}
          phone={product.phone}
          category={product.category}
          description={product.description}
        />
             
         </div>
       
      ))}
    </div>
  );
}
