"use client";

import type { NextPage } from "next";
import NavBar from "../../components/navMehraj";
import { Button } from "@nextui-org/react";
import { MdHome } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaCompass } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { User, Link } from "@nextui-org/react";
import CommunityReelCard from "../../components/CommunityReelCard";

const Community: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex text-white">
        <div
          className="bg-black flex flex-col items-center justify-start pt-7 pl-8 pr-8"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Button
            className="text-xl p-6 mb-4 font-bold bg-transparent text-blue-400"
            startContent={<MdHome size={"1.5em"} />}
            variant="light"
          >
            For you
          </Button>
          <Button
            className=" text-xl p-6 mb-4 bg-transparent text-white"
            startContent={<BsPersonFillCheck size={"1.4em"} />}
            variant="light"
          >
            Following
          </Button>
          <Link href="/explore">
            <Button
              className="text-xl p-6 mb-4 bg-transparent text-white"
              startContent={<FaCompass size={"1.3em"} />}
              variant="light"
            >
              Explore
            </Button>
          </Link>
          <Button
            className="text-xl p-6 mb-8 bg-transparent text-white"
            startContent={<IoPersonCircleSharp size={"1.6em"} />}
            variant="light"
          >
            Profile
          </Button>
          <div className="text-slate-300 font-bold p-5 w-max">
            {" "}
            Following Accounts{" "}
          </div>

          <div className="flex-grow flex flex-col justify-start items-center overflow-scroll mb-4 sm:mb-0">
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <User
              name="Ridwan Siam"
              className="p-4"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                >
                  @ridwan_siam
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
          </div>
        </div>
        <div
          className="bg-slate-800 flex-grow flex flex-col justify-start items-center overflow-scroll mb-4 sm:mb-0"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <CommunityReelCard
            username="John Doe"
            description="Marie Curie was a Polish-born physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to have won Nobel Prizes in two different scientific fields."
            imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d"
            videoLink="0.mp4"
            promptText="Marie Curie was a Polish-born physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to have won Nobel Prizes in two different scientific fields. Marie Curie's contributions to science have left a lasting impact on our understanding of the atomic structure."
          />
          <CommunityReelCard
            username="Jane Smith"
            description="Isaac Newton was an English mathematician, physicist, and astronomer who is widely recognized as one of the most influential scientists of all time. His laws of motion and law of universal gravitation laid the foundation for classical mechanics."
            imgLink="https://i.pravatar.cc/150?u=c042581f4e29026024d"
            videoLink="1.mp4"
            promptText="Isaac Newton was an English mathematician, physicist, and astronomer who is widely recognized as one of the most influential scientists of all time. His laws of motion and law of universal gravitation laid the foundation for classical mechanics. Newton's groundbreaking work continues to be fundamental in the study of physics and astronomy."
          />
          <CommunityReelCard
            username="Elena Rodriguez"
            description="Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. She is often regarded as the world's first computer programmer."
            imgLink="https://i.pravatar.cc/150?u=d042581f4e29026024d"
            videoLink="7.mp4"
            promptText="Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. She is often regarded as the world's first computer programmer. Lovelace's visionary insights into computing laid the groundwork for the digital age we live in today."
          />
          <CommunityReelCard
            username="Alex Johnson"
            description="Nikola Tesla was a Serbian-American inventor, electrical engineer, and futurist best known for his contributions to the development of alternating current (AC) electrical systems. His groundbreaking inventions and innovations have had a profound impact on modern electrical power systems."
            imgLink="https://i.pravatar.cc/150?u=e042581f4e29026024d"
            videoLink="3.mp4"
            promptText="Nikola Tesla was a Serbian-American inventor, electrical engineer, and futurist best known for his contributions to the development of alternating current (AC) electrical systems. His groundbreaking inventions and innovations have had a profound impact on modern electrical power systems. Tesla's visionary ideas continue to inspire researchers and engineers worldwide."
          />

          <CommunityReelCard
            username="Emily Chang"
            description="Stephen Hawking was an English theoretical physicist, cosmologist, and author, known for his work on black holes and the nature of the universe. Despite facing physical challenges due to ALS, he made significant contributions to theoretical physics and science communication."
            imgLink="https://i.pravatar.cc/150?u=f042581f4e29026024d"
            videoLink="4.mp4"
            promptText="Stephen Hawking was an English theoretical physicist, cosmologist, and author, known for his work on black holes and the nature of the universe. Despite facing physical challenges due to ALS, he made significant contributions to theoretical physics and science communication. Hawking's work continues to inspire curiosity about the mysteries of the cosmos."
          />

          <CommunityReelCard
            username="Carlos Mendez"
            description="Rosalind Franklin was an English biophysicist and X-ray crystallographer who made significant contributions to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite. Her work laid the foundation for the discovery of the DNA double helix."
            imgLink="https://i.pravatar.cc/150?u=g042581f4e29026024d"
            videoLink="5.mp4"
            promptText="Rosalind Franklin was an English biophysicist and X-ray crystallographer who made significant contributions to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite. Her work laid the foundation for the discovery of the DNA double helix. Franklin's groundbreaking research paved the way for advancements in molecular biology."
          />

          <CommunityReelCard
            username="Shawon Majid"
            description="Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born"
            imgLink="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            videoLink="6.mp4"
            promptText="Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.Albert Einstein was a German-born scientists of all time."
          />
        </div>
      </div>
    </>
  );
};

export default Community;
