import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const HeaderTabs = () => {
  const data = [
    {
      imgSrc: "/hometabs.png",
      text: "Find Your Dream Home",
    },
    {
      imgSrc: "/cashtabs.png",
      text: "Unlock Property Value",
    },
    {
      imgSrc: "/apartmenttabs.png",
      text: "Effortless Property Management",
    },
    {
      imgSrc: "/suntabs.png",
      text: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <div className="grid grid-cols-2 w-full p-[10px] border border-[#262626] bg-[#141414] shadow-archievcardsshadow gap-[10px] mx-4 rounded-xl lg:grid-cols-4 lg:mx-0 lg:rounded-none">
      {data?.map((elm, index) => (
        <div
          key={index}
          className=" flex flex-col items-center relative py-5 px-[14px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] lg:p-[30px] lg:px-4 "
        >
          <GoArrowUpRight
            className="absolute right-4 w-[26px] h-[26px]"
            color="#4D4D4D"
            width={26}
            height={26}
          />
          <Image
            src={elm?.imgSrc}
            width={82}
            height={82}
            alt={elm?.text}
            className=" w-12 h-12 lg:w-[60px] lg:h-[60px]"
          />
          <span className="block  text-center font-semibold text-white text-sm pt-[14px] lg:text-base lg:pt-4">
            {elm?.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeaderTabs;
