import React from 'react'


const Pricing = () => {
  return (
    <section className="text-gray-400 bg-transparent body-font w-full">
      <div className='text-white text-5xl  text-center font-bold'>
        Pricing
      </div>
  <div className="container px-5 py-24 w-full mx-auto">
    <div className="md:flex m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-4 bg-gray-950 bg-opacity-70">
        <div className="h-full text-center rounded-xl bg-[#1E293B] flex flex-col justify-center items-center">           
          <h2 className="text-white font-semibold title-font tracking-wider text-2xl pb-6 pt-6">Free Tier</h2>
          <div className="leading-relaxed text-left w-max"><ul>
                <li> ✔ Make videos from text </li>
                <li> ✔ Make video of a topic </li>
                <li> ✔ 5$ Worth of credit per month </li>
                <li> ✔ Access the community </li>
                <li> ✔ Share your work </li>
                <li> ❌ Add credit balance </li>
                <li> ❌ Edit Video </li>
                <li> ❌ Render video for large data </li>
                <li> ❌ 24/7 support </li>
            </ul></div>
            <div className="h-1 w-10 rounded bg-blue-400 mt-6 mb-4"></div>        
          <div className="text-white rounded-2xl p-3 pb-2 pt-2 bg-[#565F63] text-md">Currently Using</div>
          <div className='p-3'></div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-4 bg-gray-950 bg-opacity-70">
        <div className="h-full text-center rounded-xl bg-[#1E293B] flex flex-col justify-center items-center">           
          <h2 className="text-white font-semibold title-font tracking-wider text-2xl pb-6 pt-6">Gold Tier</h2>
          <div className="leading-relaxed text-left w-max"><ul>
                <li> ✔ Make videos from text </li>
                <li> ✔ Make video of a topic </li>
                <li> ✔ 5$ Worth of credit per month </li>
                <li> ✔ Access the community </li>
                <li> ✔ Share your work </li>
                <li> ✔ Add credit balance </li>
                <li> ✔ Edit Video </li>
                <li> ❌ Render video for large data </li>
                <li> ❌ 24/7 support </li>
            </ul></div>
            <div className="h-1 w-10 rounded bg-blue-400 mt-6 mb-4"></div>        
          <div className="text-blue-200 rounded-2xl p-3 font-bold text-md">25$ per month</div>
          <div className='p-3'></div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-4 bg-gray-950 bg-opacity-70">
        <div className="h-full text-center rounded-xl bg-[#1E293B] flex flex-col justify-center items-center">           
          <h2 className="text-white font-semibold title-font tracking-wider text-2xl pb-6 pt-6">Gold Tier</h2>
          <div className="leading-relaxed text-left w-max"><ul>
                <li> ✔ Make videos from text </li>
                <li> ✔ Make video of a topic </li>
                <li> ✔ 5$ Worth of credit per month </li>
                <li> ✔ Access the community </li>
                <li> ✔ Share your work </li>
                <li> ✔ Add credit balance </li>
                <li> ✔ Edit Video </li>
                <li> ✔ Render video for large data </li>
                <li> ✔ 24/7 support </li>
            </ul></div>
            <div className="h-1 w-10 rounded bg-blue-400 mt-6 mb-4"></div>        
          <div className="text-blue-200 rounded-2xl p-3 font-bold text-md">50$ per month</div>
          <div className='p-3'></div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Pricing