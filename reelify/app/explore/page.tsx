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
          <ExploreCard
            username="john_doe"
            imgLink="https://i.pravatar.cc/150?img=3"
            videoLink="0.mp4"
          />
          <ExploreCard
            username="jane_smith"
            imgLink="https://i.pravatar.cc/150?img=4"
            videoLink="1.mp4"
          />
          <ExploreCard
            username="alex_jackson"
            imgLink="https://i.pravatar.cc/150?img=5"
            videoLink="2.mp4"
          />
          <ExploreCard
            username="emily_white"
            imgLink="https://i.pravatar.cc/150?img=6"
            videoLink="3.mp4"
          />
          <ExploreCard
            username="samuel_brown"
            imgLink="https://i.pravatar.cc/150?img=7"
            videoLink="4.mp4"
          />
          <ExploreCard
            username="olivia_taylor"
            imgLink="https://i.pravatar.cc/150?img=8"
            videoLink="5.mp4"
          />
          <ExploreCard
            username="nathan_green"
            imgLink="https://i.pravatar.cc/150?img=9"
            videoLink="6.mp4"
          />
          <ExploreCard
            username="lily_martin"
            imgLink="https://i.pravatar.cc/150?img=10"
            videoLink="7.mp4"
          />
          <ExploreCard
            username="david_white"
            imgLink="https://i.pravatar.cc/150?img=11"
            videoLink="8.mp4"
          />
          <ExploreCard
            username="grace_miller"
            imgLink="https://i.pravatar.cc/150?img=12"
            videoLink="0.mp4"
          />
          <ExploreCard
            username="max_carter"
            imgLink="https://i.pravatar.cc/150?img=13"
            videoLink="1.mp4"
          />
          <ExploreCard
            username="sophia_hill"
            imgLink="https://i.pravatar.cc/150?img=14"
            videoLink="2.mp4"
          />
          <ExploreCard
            username="leo_jones"
            imgLink="https://i.pravatar.cc/150?img=1"
            videoLink="3.mp4"
          />
          <ExploreCard
            username="ava_smith"
            imgLink="https://i.pravatar.cc/150?img=2"
            videoLink="4.mp4"
          />
          <ExploreCard
            username="mason_taylor"
            imgLink="https://i.pravatar.cc/150?img=15"
            videoLink="5.mp4"
          />
          <ExploreCard
            username="mia_brown"
            imgLink="https://i.pravatar.cc/150?img=16"
            videoLink="6.mp4"
          />
          <ExploreCard
            username="owen_white"
            imgLink="https://i.pravatar.cc/150?img=17"
            videoLink="7.mp4"
          />
          <ExploreCard
            username="zoey_jackson"
            imgLink="https://i.pravatar.cc/150?img=18"
            videoLink="8.mp4"
          />
          <ExploreCard
            username="ethan_martin"
            imgLink="https://i.pravatar.cc/150?img=19"
            videoLink="0.mp4"
          />
          <ExploreCard
            username="ella_green"
            imgLink="https://i.pravatar.cc/150?img=20"
            videoLink="1.mp4"
          />
          <ExploreCard
            username="liam_carter"
            imgLink="https://i.pravatar.cc/150?img=21"
            videoLink="2.mp4"
          />
          <ExploreCard
            username="isabella_hill"
            imgLink="https://i.pravatar.cc/150?img=22"
            videoLink="3.mp4"
          />
          <ExploreCard
            username="jacob_jones"
            imgLink="https://i.pravatar.cc/150?img=23"
            videoLink="4.mp4"
          />
          <ExploreCard
            username="sophie_taylor"
            imgLink="https://i.pravatar.cc/150?img=24"
            videoLink="5.mp4"
          />
          <ExploreCard
            username="noah_brown"
            imgLink="https://i.pravatar.cc/150?img=25"
            videoLink="6.mp4"
          />
          <ExploreCard
            username="chloe_martin"
            imgLink="https://i.pravatar.cc/150?img=26"
            videoLink="7.mp4"
          />
          <ExploreCard
            username="ryan_smith"
            imgLink="https://i.pravatar.cc/150?img=27"
            videoLink="8.mp4"
          />
        </div>
      </div>
    </>
  );
};

export default Explore;
