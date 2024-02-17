import React, { useState } from 'react';
import { postReelsText } from './Utils';
import { myVideoProps } from '../types/videoprops'; 
import { defaultVideoProps } from '../types/videoprops';
import { z } from "zod";
import { videoProps } from '../types/videoprops'
import { Dispatch, SetStateAction } from 'react';

type MyComponentProps = {
  setAudioUrls: React.Dispatch<React.SetStateAction<string[]>>;
};



export const InputBox: React.FC<{
  setShowReels: React.Dispatch<React.SetStateAction<boolean>>;
  setScripts: React.Dispatch<React.SetStateAction<string[]>>;
  setAudioUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setShowReels, setScripts, setAudioUrls, setImages }) => {

  const [reelsText, setReelsText] = useState('');



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
    className="min-w-[800px] h-16  px-4 py-3 text-lg text-white bg-[#0A0B0C] border-[5px] border-[#24272B] border-5 rounded-2xl shadow-sm focus:border-blue-800 focus:ring-2 focus:ring-orange_gradient"
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
