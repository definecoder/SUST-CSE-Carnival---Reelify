import React from 'react'

export const Cart: React.FC<{
  name: string,
  phone: string,
  category: string,
  description: string
}> = ({ name, phone, category, description }) => {
  return (
   
        <div className="w-full h-full p-4" >
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="h-1/2 rounded w-full mb-6 bg-violet-300 p-24 font-3xl" >{name}</div>
          <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">{phone}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{category}</h2>
          <p className="leading-relaxed text-base">{description}</p>
        </div>
      </div>
      
    

  )
}

export default Cart