"use client";

import { Avatar, Button, Link } from "@nextui-org/react";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { RiDownloadCloudFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa6";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

const ExploreCard = (props: {
  username: any;
  imgLink: any;
  videoLink: any;
}) => {
  // const username = "Shawon Majid";
  // const description = "Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born"
  // const imgLink = "https://i.pravatar.cc/150?u=a042581f4e29026024d";
  // const videoLink = "cake.mp4";
  // const promptText = "Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born scientists of all time."

  const { username, imgLink, videoLink } = props;
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    console.log("isPlaying", isPlaying);
  }, [isPlaying]);

  return (
    <div
      className="p-4 m-4"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <ReactPlayer
        loop={true}
        controls={false}
        playing={isPlaying}
        width={"300px"}
        height={"400px"}
        url={videoLink}
      />
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
        <Avatar src={imgLink} size="lg" />
        <div className="pl-5">{username}</div>
        </div>
        <div>
          <Button
            className="text-white font-semibold tracking-wider hover:text-black ml-4"
            variant="ghost"
          >
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  username: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
};

export default ExploreCard;
