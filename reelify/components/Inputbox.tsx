import React, { useState } from "react";
import { postReelsText } from "./Utils";
import { myVideoProps } from "../types/videoprops";
import { defaultVideoProps } from "../types/videoprops";
import { set, z } from "zod";
import { videoProps } from "../types/videoprops";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@nextui-org/react";

type MyComponentProps = {
  setShowReels: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setScripts: React.Dispatch<React.SetStateAction<string[]>>;
  setAudioUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setAudioString: React.Dispatch<React.SetStateAction<string>>;
  audioUrls: string[];
  textValue: string;
};

const playAudio = (audioUrls: string[]) => {
  // const audio = new Audio(audioUrls[0]);
  // const audio1 = new Audio(audioUrls[1]);
  // const audio2 = new Audio(audioUrls[2]);
  // const audio3 = new Audio(audioUrls[3]);
  const audioElements: HTMLAudioElement[] = [];

  console.log(audioUrls);

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
      audioElements[i - 1].pause();
      audioElements[i].play();
    }, 5 * (i + 1) * 1000);
  }
};

export const InputBox: React.FC<MyComponentProps> = ({
  setShowReels,
  setScripts,
  setAudioUrls,
  setImages,
  audioUrls,
  setShowLoading,
  setAudioString,
  textValue
}) => {
  const [reelsText, setReelsText] = useState("");
  const [showButton, setShowButton] = useState(true);
  // const audioUrl = "http://10.100.161.49:3000/api/get-speech/dino0.mp3";

  // const audioUrls =  [
  //   "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
  //   "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
  //   "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
  //   "http://10.100.161.49:3000/api/get-speech/dino3.mp3",

  //  ]

  const handleButtonClick = async () => {
    console.log(reelsText);
    setShowLoading(true);
    setShowButton(false);

    try {
      console.log("response done");
      const response = await postReelsText(textValue+reelsText);

      console.log(response);
      // setVideoValue(defaultVideoProps);
      const videoScriptArray = response.videoScript;
      const imageUrlsArray = response.imageUrls;
      const audioUrlsArray = response.audioUrls;
      const audioString = response.finalAudioUrl;

      console.log("Video Script Array:", videoScriptArray);
      console.log("Image URLs Array:", imageUrlsArray);
      console.log("Audio URLs Array:", audioUrlsArray);
      setScripts(videoScriptArray);
      setAudioUrls(audioUrlsArray);
      setImages(imageUrlsArray);
      setAudioString(audioString);

      setShowLoading(false);
      setShowReels(true);
      setShowButton(true);
      const audioElements: HTMLAudioElement[] = [];
      const audioElement = new Audio(response.finalAudioUrl);
      audioElements.push(audioElement);
      audioElements[0].play();

      // console.log('Response:', response);
      console.log("response done");
      // playAudio(audioUrlsArray);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <div className="min-w-min mt-12">
      <div className="flex flex-col items-center">
        <div className="flex">
          <textarea
            id="reelsText"
            name="reelsText"
            value={reelsText}
            onChange={(e) => setReelsText(e.target.value)}
            className="min-w-[800px] h-64  px-4 py-3 text-lg text-white bg-[#0A0B0C] border-[5px] border-[#24272B] border-5 rounded-2xl shadow-sm focus:border-blue-800 focus:ring-2 focus:ring-orange_gradient"
            placeholder="Enter text here..."
          ></textarea>
        </div>

        {showButton && (
          <button
            onClick={handleButtonClick}
            className="font-semibold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:bg-gradient-to-r hover:from-black hover:via-gray-600 hover:to-gray-200 h-[50px] w-[200px] rounded-xl m-9 text-[24px] text-white   hover:text-white"
          >
            🚀 Generate
          </button>
        )}
        {showButton == false && (
          <button className=" bg-gradient-to-r from-black via-gray-600 to-gray-200 h-[50px] w-[200px] rounded-xl m-9 text-[24px] text-white   ">
            🚀 Generate
          </button>
        )}
      </div>
    </div>
  );
};

function setVideoValue(response: any) {
  throw new Error("Function not implemented.");
}
