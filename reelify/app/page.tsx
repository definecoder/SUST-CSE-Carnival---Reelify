"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
import Dashboard from "./Dashboard/page";
import Homepage from "./Homepage/page";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);  

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  const isLoggedIn = false;

  return (
    <>
    
      {isLoggedIn ? (<Dashboard/>) : (<Homepage/>)}
    </>
  );
};

export default Home;
