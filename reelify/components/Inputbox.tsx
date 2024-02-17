import React from "react";


export const InputBox: React.FC = () => {
  return (
    <div className="min-w-min mt-12">
    <div className="flex flex-col items-center">
<div className="flex">
    <textarea 
    id="srtInput"
    className="min-w-[800px] h-16  px-4 py-3 text-lg text-white bg-[#0A0B0C] border-[5px] border-[#24272B] border-5 rounded-2xl shadow-sm focus:border-blue-800 focus:ring-2 focus:ring-orange_gradient"
    placeholder="Enter text here..."
  ></textarea>

</div>
    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-[#00bfff] hover:bg-gradient-to-r hover:from-black hover:via-gray-600 hover:to-gray-200 h-[50px] w-[200px] rounded-xl m-9 text-[24px] text-white   hover:text-white">🚀 Generate</button>
    
    </div>
   
  </div>
  );
};