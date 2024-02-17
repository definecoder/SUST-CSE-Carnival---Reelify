"use client";

import React from "react";
import "../../styles/global.css";
import { FeatureDescribe } from "../../components/FeatureDescribe";
import Teamintro from "../../components/Teamintro";
import Link from "next/link";
import Navbar from "../../components/navMehraj";

const Homepage = () => {
  return (
    <>
      

      <div className="tallwind-animation text-white w-[800px]"></div>

      <div className="tallwind-animation2 text-white w-[800px]"></div>            

      <Navbar />

      <section className="w-full min-h-100vh flex flex-col justify-center items-center">
        <div className="h-[calc(100vh - 100px)] text-center mt-32 ">
          <h1 className="text-5xl sm:text-8xl">
            <div className="text-blue-400 font-bold">Re:elify </div>
            <br />
            <div className="text-white text-3xl sm:text-5xl mt-[-40px] sm:mt-[-80px]">AI powered Reels Generator</div>
          </h1>
          <p className="text-sm sm:text-xl text-white mt-12 italic pl-10 pr-10">
            Born to make your life easier, Re:elify is a platform that helps you
            <br />
            Make reels for yor social media platforms with ease. Or you can just use our AI to generate reels for your own use.
          </p>
          <Link href="/Dashboard/">
            <button className=" font-poppins px-5 py-2 m-8 text-xl bg-transparent text-white outline-none border-2 border-current rounded-md transition-all duration-300 font-semibold hover:bg-white hover:text-black">
              Join Us
            </button>
          </Link>

          <Link href="/products/">
            <button className="ont-poppins px-5 py-2 m-8 text-xl bg-blue-400 text-black outline-none border-2 border-black rounded-md transition-all duration-300 font-semibold hover:bg-black hover:text-blue-300 ">
              EXPLORE
            </button>
          </Link>
        </div>
        <div className="text-white mt-12 sm:mb-[250px]">
          <FeatureDescribe />
        </div>
      </section>
      <Teamintro />
    </>
  );
};

export default Homepage;
