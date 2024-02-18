"use client";

import { Player } from "@remotion/player";
import React, { useMemo, useState, useRef } from "react";

import Image from "next/image";
import loading from "../../public/loading.gif";
import { IoReloadCircleSharp } from "react-icons/io5";
import { InputBox } from "../../components/Inputbox";
import { VIDEO_HEIGHT, VIDEO_WIDTH } from "../../types/constants";
import { MergeStory } from "../../remotion/MyComp/MergeStory";
import "../../styles/global.css";
import { FeatureDescribe } from "../../components/FeatureDescribe";
import { StoryWithReq } from "../../remotion/MyComp/StoryWithReq";
import {
  defaultVideoProps,
  scripts,
  images,
  audioes,
} from "../../types/videoprops";
import NavBar from "../../components/navMehraj";
import { useRouter } from 'next/router'

type AudioPlayerProps = {
  audioUrl: string;
};

const Dashboard = () => {
  // const router = useRouter()
  // const { textValue } = router.query
  const [showReels, setShowReels] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [reload, setReload] = useState(true);
  const [audioString, setAudioString] = useState("");

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

  const handleButtonClick = async () => {
    setReload(false);
  };

  const playAgainClick = async () => {
    setReload(true);
    const audioElements: HTMLAudioElement[] = [];
    const audioElement = new Audio(audioString);
    audioElements.push(audioElement);

    audioElements[0].play();
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <NavBar />
      <div className="w-full h-full flex ">
        <div className="text-white w-9/12 p-24  flex flex-col text-center items-center">
          <div className="text-5xl  font-bold">AI POWERED REELS</div>

          <div className="text-gray-400 text-lg mt-6">
            Try our AI-driven reels generator and unlock your creativity! Get
            unique writing prompts tailored to your needs and start writing now.
          </div>
          <div className=" font-bold">
            <InputBox
              setShowReels={setShowReels}
              setScripts={setVideoScript}
              setAudioUrls={setAudioUrls}
              setImages={setImageUrls}
              audioUrls={audioUrls}
              setShowLoading={setShowLoading}
              setAudioString={setAudioString} textValue={""}            ></InputBox>
          </div>
        </div>

        <div className="w-2/5 h-screen ">
          <div className="">
            <div className="rounded-md shadow-2xl mb-10 mt-12">
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

              {showReels && (
                <div>
                  {reload && (
                    <div className="flex flex-grow">
                      <Player
                        component={StoryWithReq}
                        durationInFrames={900}
                        inputProps={{
                          videoScript: videoScript,
                          imageUrls: imageUrls,
                          audioUrls: audioUrls,
                        }}
                        fps={30}
                        compositionHeight={VIDEO_HEIGHT}
                        compositionWidth={VIDEO_WIDTH}
                        className="w-full rounded-2xl"
                        showVolumeControls
                        controls
                        autoPlay
                        // loop
                      />
                      <div>
                        <button
                          onClick={handleButtonClick}
                          className="p-3 flex justify-center items-center gap-2 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:bg-gradient-to-r hover:from-black hover:via-gray-600 hover:to-gray-200 rounded-xl m-6 text-[18px] text-white hover:text-white"
                        >
                          <IoReloadCircleSharp size={"1.5em"}/> Stop
                        </button>
                      </div>
                    </div>
                  )}
                  {reload == false && (
                    <div className="w-full h-48 flex justify-center items-center">
                      <button
                        onClick={playAgainClick}
                        className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:bg-gradient-to-r hover:from-black hover:via-gray-600 hover:to-gray-200 rounded-2xl m-6 text-[18px] text-white flex justify-center items-center gap-4 p-4 hover:text-white"
                      >
                        <IoReloadCircleSharp size={"1.5em"} />
                        Play Again
                      </button>
                    </div>
                  )}
                </div>
              )}

              {showLoading && (
                <Image
                  width={473}
                  height={837}
                  alt="testimonial"
                  className="rounded-md"
                  src={loading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
