
import React from "react";


export const Navbar: React.FC = () => {
  return (
    <div className="w-full max-h-24 flex bg-gray-950 text-white top-0 py-3 flex-wrap justify-around bg-silver">
    <h1 className="text-2xl font-semibold text-2xl">📱 Reels Maker</h1>
    <ul className="flex gap-[40px] text-xl">
      <li>Home</li>
      <li>Product</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>

    
  );
};