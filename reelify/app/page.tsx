"use client";

import type { NextPage } from "next";
import Dashboard from "./Dashboard/page";
import Homepage from "./Homepage/page";

const Home: NextPage = () => {
  const isLoggedIn = false;

  return (
    <>
    
      {isLoggedIn ? (<Dashboard/>) : (<Homepage/>)}
    </>
  );
};

export default Home;
