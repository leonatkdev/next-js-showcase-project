import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const HeaderTabs = () => {
  const data = [
    {
      text: "Find Your Dream Home",
    },
    {
      text: "Unlock Property Value",
    },
    {
      text: "Effortless Property Management",
    },
    {
      text: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-[10px] lg:grid-cols-4 ">
      {data?.map((elm, index) => (
        <div
          key={index}
          className=" relative py-5 px-[14px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] "
        >
          <MdArrowOutward className="absolute right-4" />
          <FaCircleCheck
            color="#A685FA"
            width={60}
            height={60}
            className="w-16 h-16 place-self-center"
          />
          <span className="block pt-4 text-center text-white">{elm?.text}</span>
        </div>
      ))}
    </div>
  );
};

export default HeaderTabs;
