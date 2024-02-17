"use client"

import React from 'react'
import "../../styles/global.css";
import { FeatureDescribe } from '../../components/FeatureDescribe';
import Teamintro from '../../components/Teamintro';
import Link from 'next/link'


const Homepage = () => {
  return (
    <>
  
     <div className="tallwind-animation text-white w-[800px]">
  
  </div>
  
  < div className="tallwind-animation2 text-white w-[800px]">
    
    </div>

    <section className='w-full min-h-100vh flex flex-col justify-center  items-center '>
    <div className='h-[calc(100vh - 100px)] text-center mt-48 '>
        <h1 className="text-8xl">
            <span className="text-blue-500 font-bold">AI Reels </span><span className='text-white'>Generator</span> 
        </h1>
        <p className="text-xl text-white mt-12">
            Fast Track Your Web Development Career with Our Team!
            <br/>Learn Web Development from Beginning with live coding sessions on your Laptop!
        </p>
        <Link href="/Dashboard/">
        <button className=" font-poppins px-5 py-2 m-8 text-xl bg-transparent text-white outline-none border-2 border-current rounded-md transition-all duration-300 font-semibold hover:bg-white hover:text-black">Join Us</button>
        </Link>
        
        <Link href="/products/">
        <button className="ont-poppins px-5 py-2 m-8 text-xl bg-[#00bfff] text-white outline-none border-2 border-black rounded-md transition-all duration-300 font-semibold hover:bg-black hover:text-white ">EXPLORE</button>
        </Link>
    </div>
    <div className='text-white mt-12 mb-[450px]'>
    <FeatureDescribe />
    </div>
    
</section>
<Teamintro />


      
    </>
   

  )
}

export default Homepage