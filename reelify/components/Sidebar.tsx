import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MedicationIcon from "@mui/icons-material/Medication";
import MessageIcon from "@mui/icons-material/Message";
import HealingIcon from "@mui/icons-material/Healing";
import DescriptionIcon from "@mui/icons-material/Description";

const Sidebar = () => {
  return (
    <>
    <div className="w-5/6 h-10 mx-4 my-5  flex rounded-[7px] border border-red-50">
    <img
      className="w-[34px] h-9 m-1"
      src="https://via.placeholder.com/34x36"
      alt="logo"
    />
    <div className=" text-white text-xl px-10 p-2 ">My Account</div>
  </div>

  <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-5 hover:bg-white hover:text-black text-white ">
    <AssignmentIcon color="secondary" fontSize="medium" />

    <div className=" text-xl mx-4 ">AI model Help</div>
  </div>
  <button className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-5 hover:bg-white hover:text-black text-white ">
    <MedicationIcon color="secondary" fontSize="medium" />

    <div className=" text-xl mx-4">Emergency Help</div>
  </button>
  <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-5 hover:bg-white hover:text-black text-white ">
    <MessageIcon color="secondary" fontSize="medium" />

    <div className=" text-xl mx-4 ">AI Model Guide</div>
  </div>
  <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-5 hover:bg-white hover:text-black text-white ">
    <HealingIcon color="secondary" fontSize="medium" />

    <div className=" text-xl mx-4 ">AI Mentor</div>
  </div>
  <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-5 hover:bg-white hover:text-black text-white">
    <DescriptionIcon color="secondary" fontSize="medium" />

    <div className=" text-xl mx-4">Old Models</div>
  </div>
  </>
  )
}

export default Sidebar