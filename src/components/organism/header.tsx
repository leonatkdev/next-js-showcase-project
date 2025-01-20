import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const Header = ({
  title,
  desc,
  imgSrc,
  showButtons = false,
  showHeaderTabs,
  showSecondTabs,
  costumeHeaderClass,
}) => {
  const headerTabsData = [
    {
      value: "200+",
      key: "Happy Customers",
    },
    {
      value: "10+",
      key: "Properties For Clients",
    },
    {
      value: "16+",
      key: "Years of Experience",
    },
  ];

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
    <header
      className={`flex flex-col px-4 pt-8 bg-[#141414] text-white ${
        costumeHeaderClass ? costumeHeaderClass : ""
      }`}
    >
      <div className="flex flex-col items-center md:flex-row-reverse max-w-7xl m-auto">
        {imgSrc && (
          <div className="md:w-1/2">
            <Image
              src={imgSrc}
              width={960}
              height={500}
              alt="Picture of the author"
            />
          </div>
        )}
        <div className={`${imgSrc && "md:w-1/2"}`}>
          <h1 className=" text-[28px] font-semibold lg:text-5xl">{title}</h1>
          <p className="text-[#999999] pt-4 font-medium lg:text-base lg:pt-5">
            {desc}
          </p>
          {showButtons && (
            <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:mt-12">
              <button className=" px-5 py-[14px] border border-[#262626] rounded-lg">
                Learn More
              </button>
              <button className=" px-5 py-[14px] rounded-lg bg-[#703BF7]">
                Browse Properties
              </button>
            </div>
          )}
          {showHeaderTabs && (
            <div className=" grid grid-cols-2 lg:flex flex-col gap-4 mt-10  mb-10 lg:flex-row lg:mt-12">
              {headerTabsData?.map((elm, index) => (
                <div
                  key={index}
                  className={`px-5 py-[14px] bg-[#1A1A1A] border border-[#262626] rounded-lg justify-items-center lg:justify-items-start ${
                    index === 2 && " col-span-full"
                  }`}
                >
                  <span className=" text-2xl text-center font-bold lg:text-3xl lg:font-bold">
                    {elm?.value}
                  </span>
                  <p className=" text-[14px] font-medium text-[#999999] lg:text-base">
                    {elm?.key}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {showSecondTabs && (
        <div className="grid grid-cols-2 gap-[10px] lg:grid-cols-4 ">
          {data?.map((elm, index) => (
            <div
              key={index}
              className=" relative py-5 px-[14px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] "
            >
              <MdArrowOutward className="absolute right-4" />
              <FaCircleCheck
                width={60}
                height={60}
                className="w-16 h-16 place-self-center"
              />
              <span className="block pt-4 text-center">{elm?.text}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
