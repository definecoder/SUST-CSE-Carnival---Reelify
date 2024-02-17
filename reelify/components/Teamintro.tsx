import React from 'react'
import Image from 'next/image'
import mehrajvai from './assets/mehrajvai.jpeg';
import shawonvai from './assets/shawonvai.jpeg';
import nafi from './assets/nafi.jpeg';


const Teamintro = () => {
  return (
    <section className="text-gray-400 bg-transparent body-font w-full">
      <div className='text-white text-5xl  text-center font-bold'>
        Our Team
      </div>
  <div className="container px-5 py-24 w-full mx-auto">
    <div className="flex m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-4 bg-gray-950 bg-opacity-70">
        <div className="h-full text-center">
           <Image width={200} height={200} alt="testimonial" className="w-64 h-64 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={shawonvai} /> 
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-lg">Shawon Majid </h2>
          <p className="text-gray-500">Backend Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mr-4 bg-gray-950 bg-opacity-70">
        <div className="h-full text-center ">
          <Image width={200} height={200}  alt="testimonial" className="w-64 h-64 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={mehrajvai}/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-lg">Md Mehrajul Islam</h2>
          <p className="text-gray-500">MERN Develeoper</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4 bg-gray-950 bg-opacity-70">
        <div className="h-full text-center">
          <Image width={200} height={200}  alt="testimonial" className="w-64 h-64 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={nafi}/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-lg">Nafi Ullah Shafin</h2>
          <p className="text-gray-500">Frontend Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Teamintro