"use client"

import { Player } from "@remotion/player";
import React, { useMemo, useState } from "react";
import { Main } from "../../remotion/MyComp/Main";
import { z } from "zod";
import { RenderControls } from "../../components/RenderControls";
import { Navbar } from "../../components/Navbar";
import { InputBox } from "../../components/Inputbox";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { MergeStory } from "../../remotion/MyComp/MergeStory";
import "../../styles/global.css";
import { FeatureDescribe } from "../../components/FeatureDescribe";


const Dashboard = () => {

  const [text, setText] = useState<string>(defaultMyCompProps.title);  

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);


  return (
    <div className="w-screen h-screen main">
     
      
      <div className="w-screen h-screen flex ">
        <div className="text-white w-4/6 h-scree p-24  flex flex-col text-center items-center">
          <div className="text-7xl  font-bold">
          AI Reels Generator
          </div>
         
          <div className="text-gray-400 text-lg mt-6">
          Try our AI-driven reels generator and unlock your creativity! Get unique writing prompts tailored to your needs and start writing now.

          </div>
          <div className=" font-bold">
            <InputBox></InputBox>
          </div>
          <div className="mt-6">
            <FeatureDescribe></FeatureDescribe>
          </div>
          
        </div>
        
        <div className="w-2/6 h-screen ">

          
       
          

        <div className='w-[400px] m-8'>
        <div className="rounded-md shadow-2xl mb-10 mt-12" >
          
        <Player
            component={MergeStory}
            durationInFrames={1050}
            fps={30}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            className="w-full rounded-2xl"
            controls
            autoPlay
            loop
           
          />

          </div>
         
      
        </div>
        
        
      </div> 

      

        </div>

        </div>
      
    
  )
}

export default Dashboard