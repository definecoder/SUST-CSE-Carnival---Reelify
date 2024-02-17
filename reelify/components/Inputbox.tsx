import React, { useState } from 'react';
import { postReelsText } from './Utils';
import { myVideoProps } from '../types/videoprops'; 
import { defaultVideoProps } from '../types/videoprops';
import { z } from "zod";
import { videoProps } from '../types/videoprops'
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@nextui-org/react';

type MyComponentProps = {
  setShowReels: React.Dispatch<React.SetStateAction<boolean>>;
  setScripts: React.Dispatch<React.SetStateAction<string[]>>;
  setAudioUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  audioUrls: string[]
 
};


const playAudio = (audioUrls: string[]) => {
  // const audio = new Audio(audioUrls[0]);
  // const audio1 = new Audio(audioUrls[1]);
  // const audio2 = new Audio(audioUrls[2]);
  // const audio3 = new Audio(audioUrls[3]);
  const audioElements: HTMLAudioElement[] = []; 

  console.log(audioUrls)

  for (let i = 0; i < audioUrls.length; i++) {
    const audioElement = new Audio(audioUrls[i]);
    audioElements.push(audioElement);
  }

  audioElements[0].play();

  // audioElements[0].duration;
  // console.log(audioElements[0].duration);
  for (let i = 1; i < audioUrls.length; i++) {
    const timeoutId = setTimeout(() => {
     console.log(`${i} is done`);
     audioElements[i-1].pause();
     audioElements[i].play();
    }, 5*(i+1)*1000);
  }




  // audioElements[0].play();
  
  // const timeoutId = setTimeout(() => {
  //  console.log("2 is done");
  //  audioElements[0].pause();
  //  audioElements[1].play();
  // }, 5000);

  // const timeoutId1 = setTimeout(() => {
   
  //   audioElements[1].pause();
  //   audioElements[2].play();
  // }, 10000);


  // const timeoutId3 = setTimeout(() => {
  //   audioElements[2].pause();
  //   audioElements[3].play();
  // }, 15000);


};

export const InputBox: React.FC<MyComponentProps> = ({ setShowReels, setScripts, setAudioUrls, setImages, audioUrls  }) => {

  const [reelsText, setReelsText] = useState('');
  // const audioUrl = "http://10.100.161.49:3000/api/get-speech/dino0.mp3";

  // const audioUrls =  [
  //   "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
  //   "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
  //   "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
  //   "http://10.100.161.49:3000/api/get-speech/dino3.mp3",
   
  //  ]


  



  const handleButtonClick = async () => {
    console.log(reelsText);

    try{
      console.log('response done');

      const response = await postReelsText(
        reelsText

      );

      console.log(response);
     // setVideoValue(defaultVideoProps);
     const videoScriptArray = response.videoScript;
const imageUrlsArray = response.imageUrls;
const audioUrlsArray = response.audioUrls;

console.log("Video Script Array:", videoScriptArray);
console.log("Image URLs Array:", imageUrlsArray);
console.log("Audio URLs Array:", audioUrlsArray);
      setScripts(videoScriptArray);
      setAudioUrls(audioUrlsArray);
      setImages(imageUrlsArray);

      setShowReels(true);
     // console.log('Response:', response);
      console.log('response done');
      playAudio(audioUrlsArray);

    }catch(e){
      console.error('Error:', e);
    }
 
  };


  return (
    <div className="min-w-min mt-12">
    <div className="flex flex-col items-center">
<div className="flex">
    <textarea 
    id="reelsText" name="reelsText" value={reelsText} onChange={(e) => setReelsText(e.target.value)}
    className="min-w-[800px] h-64  px-4 py-3 text-lg text-white bg-[#0A0B0C] border-[5px] border-[#24272B] border-5 rounded-2xl shadow-sm focus:border-blue-800 focus:ring-2 focus:ring-orange_gradient"
    placeholder="Enter text here..."
  ></textarea>

</div>
    <button onClick={handleButtonClick} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-[#00bfff] hover:bg-gradient-to-r hover:from-black hover:via-gray-600 hover:to-gray-200 h-[50px] w-[200px] rounded-xl m-9 text-[24px] text-white   hover:text-white">🚀 Generate</button>
    
    </div>
   
  </div>
  );
};

function setVideoValue(response: any) {
  throw new Error('Function not implemented.');
}
