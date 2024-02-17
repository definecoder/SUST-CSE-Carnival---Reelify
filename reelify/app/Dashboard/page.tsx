"use client"

import { Player } from "@remotion/player";
import React, { useMemo, useState, useRef } from "react";

import { InputBox } from "../../components/Inputbox";
import {
 
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { MergeStory } from "../../remotion/MyComp/MergeStory";
import "../../styles/global.css";
import { FeatureDescribe } from "../../components/FeatureDescribe";
import { StoryWithReq } from "../../remotion/MyComp/StoryWithReq";
import { defaultVideoProps, scripts, images, audioes } from "../../types/videoprops";


type AudioPlayerProps = {
  audioUrl: string;
};


const Dashboard = () => {

  const [showReels, setShowReels] = useState(false);
   const [videoScript, setVideoScript] = useState([
  "Boss are a diverse group of reptiles belonging to the clade Dinosauria.",
  "Boss first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of their evolution is still under active research.",
  "Boss the Triassic-Jurassic extinction event around 201.3 million years ago, dinosaurs became the dominant terrestrial vertebrates.",
  "Boss dominance continued throughout the Jurassic and Cretaceous periods.",
  "Boss fossil record shows that birds are feathered dinosaurs, originating from earlier theropods during the Late Jurassic epoch.",
  "Boss are the only dinosaur lineage known to have survived the Cretaceous-Paleogene extinction event around 66 million years ago.",
  

 ]);

 const [imageUrls, setImageUrls] = useState([
  "http://10.100.161.49:3000/api/get-image/dino0.jpg",
  "http://10.100.161.49:3000/api/get-image/dino1.jpg",
  "http://10.100.161.49:3000/api/get-image/dino2.jpg",
  "http://10.100.161.49:3000/api/get-image/dino3.jpg",
  "http://10.100.161.49:3000/api/get-image/dino4.jpg",
  "http://10.100.161.49:3000/api/get-image/dino5.jpg",
 
 ]);


 const [audioUrls, setAudioUrls] = useState([
  "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
  "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
  "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
  "http://10.100.161.49:3000/api/get-speech/dino3.mp3",
  "http://10.100.161.49:3000/api/get-speech/dino4.mp3",
  "http://10.100.161.49:3000/api/get-speech/dino5.mp3",

 ]);

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
            <InputBox 
            setShowReels={setShowReels} 
            setScripts={setVideoScript}
            setAudioUrls={setAudioUrls}
            setImages={setImageUrls}
            audioUrls = {audioUrls}
            
            ></InputBox>
          </div>
          <div className="mt-6">
            <FeatureDescribe></FeatureDescribe>
          </div>
          
        </div>
        
        <div className="w-2/6 h-screen ">

          
       
          

        <div className='w-[400px] m-8'>
        <div className="rounded-md shadow-2xl mb-10 mt-12" >

        
          {/* {showReels &&  <Player
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
          } */}
        
{showReels &&  
<div>
<Player
            component={StoryWithReq}
            durationInFrames={900}
            inputProps={{
              videoScript: videoScript,
          imageUrls: imageUrls,
          audioUrls: audioUrls
            }}
            fps={30}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            className="w-full rounded-2xl"
            showVolumeControls
            controls
            autoPlay
            loop
           
          />
          
          </div>
          }
       

          </div>
         
      
        </div>
        
        
      </div> 

      

        </div>

        </div>
      
    
  )
}

export default Dashboard