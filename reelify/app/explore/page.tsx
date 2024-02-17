"use client";

import type { NextPage } from "next";
import NavBar from "../../components/navMehraj";
import { Button } from "@nextui-org/react";
import { MdHome } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaCompass } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { User, Link } from "@nextui-org/react";
import ExploreCard from "../../components/exploreCard";

const Explore: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex text-white">
        <div
          className="bg-black flex flex-col items-center justify-start pt-7 pl-8 pr-8"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Link href="/community">
            <Button
              className="text-xl p-6 mb-4 font-bold bg-transparent text-white"
              startContent={<MdHome size={"1.5em"} />}
              variant="light"
            >
              For you
            </Button>
          </Link>
          <Button
            className=" text-xl p-6 mb-4 bg-transparent text-white"
            startContent={<BsPersonFillCheck size={"1.4em"} />}
            variant="light"
          >
            Following
          </Button>
          <Button
            className="text-xl p-6 mb-4 bg-transparent text-blue-400"
            startContent={<FaCompass size={"1.3em"} />}
            variant="light"
          >
            Explore
          </Button>
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
          className="bg-slate-800 flex-grow flex flex-wrap justify-start items-center overflow-scroll mb-4 sm:mb-0 gap-3"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="0.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="1.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="2.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="3.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="4.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="5.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="6.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="7.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="8.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="0.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="1.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="2.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="3.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="4.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="5.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="6.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="7.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="8.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="0.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="1.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="2.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="3.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="4.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="5.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="6.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="7.mp4" />
          <ExploreCard username="mehraj" imgLink="https://i.pravatar.cc/150?u=b042581f4e29026024d" videoLink="8.mp4" />
        </div>
      </div>
    </>
  );
};

export default Explore;
