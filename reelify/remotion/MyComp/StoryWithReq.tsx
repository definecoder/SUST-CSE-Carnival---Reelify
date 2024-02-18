"use client";

import { Sequence } from "remotion";
import { Story2 } from "./Story";
import React, { useState, useEffect } from 'react';
import {  uri } from "../../components/Constants"; 
import { myVideoProps } from "../../types/videoprops"; 
import { AudioListen } from "./AudioListen"; 



export const myduration = [0, 150, 300, 450, 600, 750];

type ComponentBProps = {
    mydata: myVideoProps;
  };

  type MyComponentProps = {
    videoScript: string[];
    imageUrls: string[];
    audioUrls: string[];
  };


export const StoryWithReq: React.FC<MyComponentProps> = ({ videoScript,imageUrls, audioUrls }) => {
//   const [data, setData] = useState({
//     "videoScript": [
//         "Dinosaurs are a diverse group of reptiles belonging to the clade Dinosauria.",
//         "They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of their evolution is still under active research.",
//         "After the Triassic-Jurassic extinction event around 201.3 million years ago, dinosaurs became the dominant terrestrial vertebrates.",
//         "Their dominance continued throughout the Jurassic and Cretaceous periods.",
//         "The fossil record shows that birds are feathered dinosaurs, originating from earlier theropods during the Late Jurassic epoch.",
//         "Birds are the only dinosaur lineage known to have survived the Cretaceous-Paleogene extinction event around 66 million years ago.",
//         "Dinosaurs can be categorized into avian dinosaurs, which are birds, and non-avian dinosaurs, which are all dinosaurs other than birds."
//     ],
//     "imageUrls": [
//         "http://10.100.161.49:3000/api/get-image/dino0.jpg",
//         "http://10.100.161.49:3000/api/get-image/dino1.jpg",
//         "http://10.100.161.49:3000/api/get-image/dino2.jpg",
//         "http://10.100.161.49:3000/api/get-image/dino3.jpg",
//         "http://10.100.161.49:3000/api/get-image/dino4.jpg",
//         "http://10.100.161.49:3000/api/get-image/dino5.jpg",
//         "http://10.100.161.49:3000/api/get-image/dino6.jpg"
//     ],
//     "audioUrls": [
//         "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
//         "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
//         "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
//         "http://10.100.161.49:3000/api/get-speech/dino3.mp3",
//         "http://10.100.161.49:3000/api/get-speech/dino4.mp3",
//         "http://10.100.161.49:3000/api/get-speech/dino5.mp3",
//         "http://10.100.161.49:3000/api/get-speech/dino6.mp3"
//     ]
// });

//  const [videoScript, setVideoScript] = useState([
//   "Boss are a diverse group of reptiles belonging to the clade Dinosauria.",
//   "Boss first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of their evolution is still under active research.",
//   "Boss the Triassic-Jurassic extinction event around 201.3 million years ago, dinosaurs became the dominant terrestrial vertebrates.",
//   "Boss dominance continued throughout the Jurassic and Cretaceous periods.",
//   "Boss fossil record shows that birds are feathered dinosaurs, originating from earlier theropods during the Late Jurassic epoch.",
//   "Boss are the only dinosaur lineage known to have survived the Cretaceous-Paleogene extinction event around 66 million years ago.",
  

//  ]);

//  const [imageUrls, setImageUrls] = useState([
//   "http://10.100.161.49:3000/api/get-image/dino0.jpg",
//   "http://10.100.161.49:3000/api/get-image/dino1.jpg",
//   "http://10.100.161.49:3000/api/get-image/dino2.jpg",
//   "http://10.100.161.49:3000/api/get-image/dino3.jpg",
//   "http://10.100.161.49:3000/api/get-image/dino4.jpg",
//   "http://10.100.161.49:3000/api/get-image/dino5.jpg",
 
//  ]);




// const videoScriptArray = Object.values(data.videoScript);
// const imageUrlsArray = data.imageUrls;
// const audioUrlsArray = data.audioUrls;


  return (
    <>
    {imageUrls.map((imgUrl, index) => (

      <Sequence key={index} from={myduration[index]} durationInFrames={150}>
        <Story2 key={index} imgUrl={imageUrls[index]} sentence={videoScript[index]} />

        </Sequence>
      ))}
    
    {/* <Sequence from={0} durationInFrames={150}>
      <Story2 imgUrl={imageUrlsArray[0]} sentence={videoScriptArray[0]}/>
    </Sequence>
    <Sequence from={150} durationInFrames={150}>
    <Story2 imgUrl={imageUrlsArray[1]} sentence={videoScriptArray[1]}/>
    </Sequence>
    <Sequence from={300} durationInFrames={150}>
    <Story2 imgUrl={imageUrlsArray[2]} sentence={videoScriptArray[2]}/>
    </Sequence>

    <Sequence from={450} durationInFrames={150}>
    <Story2 imgUrl={imageUrlsArray[3]} sentence={videoScriptArray[3]}/>
    </Sequence>

    <Sequence from={600} durationInFrames={150}>
    <Story2 imgUrl={imageUrlsArray[4]} sentence={videoScriptArray[4]}/>
    </Sequence>
    <Sequence from={750} durationInFrames={150}>
    <Story2 imgUrl={imageUrlsArray[5]} sentence={videoScriptArray[5]}/>
    </Sequence> */}
   
    
    <Sequence from={0} durationInFrames={900}>
       <AudioListen></AudioListen>
    </Sequence>
    </>
    
  );
  //return <Img src={"hackpic.jpeg"} style={{width: COVER_SIZE }}/>; // enable for show image in dev
};