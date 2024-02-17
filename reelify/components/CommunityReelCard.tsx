import { Avatar, Button, Link } from "@nextui-org/react";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { RiDownloadCloudFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa6";
import ReactPlayer from "react-player";

const CommunityReelCard = () => {
  return (
    <div className="w-5/6 flex flex-col p-4 mt-10">
      <div className="w-full flex justify-start items-start pl-[15%]">
        <div className="pr-3">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="lg"
          />
        </div>
        <div className="flex justify-between items-start flex-grow">
          <div className="pl-3 flex flex-col justify-start items-start flex-grow">
            <div className="font-semibold text-lg text-slate-200">
              Shawon Majid{" "}
              <Link className="text-blue-300 pl-2">@shawon-majid</Link>
            </div>
            <div className="pr-12 pt-1 pb-2">
              Albert Einstein was a German-born theoretical physicist who is
              widely held to be one of the greatest and most influential
              scientists of all time.
            </div>
            <div className="flex justify-start items-center w-full">
              <img src="https://www.secretsofuniverse.in/wp-content/uploads/2020/04/20200324_020501_0000-864x1024.png" className="w-2/5 pt-3 pb-3 pr-5" alt="" />
              <div className="ml-12 p-8 max-h-[310px] max-w-[350] overflow-scroll bg-slate-600 rounded-3xl shadow-2xl font-mono">
              Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential
              scientists of all time.Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born scientists of all time.              
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <Button
                isIconOnly
                variant="faded"
                className="rounded-3xl text-xl bg-[#585859] border-0 text-white"
                size="lg"
                aria-label="Like Reel"
              >
                <AiFillLike />
              </Button>
              <Button
                isIconOnly
                variant="faded"
                className="rounded-3xl text-xl bg-[#585859] border-0 text-white"
                size="lg"
                aria-label="Like Reel"
              >
                <MdModeComment />
              </Button>
              <Button
                isIconOnly
                variant="faded"
                className="rounded-3xl text-xl bg-[#585859] border-0 text-white"
                size="lg"
                aria-label="Like Reel"
              >
                <RiDownloadCloudFill />
              </Button>
              <Button
                isIconOnly
                variant="faded"
                className="rounded-3xl text-xl bg-[#585859] border-0 text-white"
                size="lg"
                aria-label="Like Reel"
              >
                <FaShare />
              </Button>
            </div>
          </div>
          <div>
            <Button className="text-white font-semibold tracking-wider hover:text-black" variant="ghost">
              Follow
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityReelCard;
