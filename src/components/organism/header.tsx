import React from "react";
import Image from "next/image";
import Link from "next/link";

type prop = {
  title: string;
  desc: string;
  imgSrc?: string;
  showButtons?: boolean;
  hasHomepageBadge?: boolean;
  showHeaderTabs?: boolean;
  costumeHeaderClass?: string;
};

const Header = ({
  title,
  desc,
  imgSrc,
  showButtons = false,
  showHeaderTabs,
  hasHomepageBadge = false,
  costumeHeaderClass = "",
}: prop) => {
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

  return (
    <header
      className={`flex flex-col px-4 pt-8 bg-[#141414] text-white ${
        costumeHeaderClass ? costumeHeaderClass : ""
      }`}
    >
      <div className="flex flex-col gap-[60px] items-center md:flex-row-reverse max-w-container m-auto">
        {imgSrc && (
          <div className=" relative md:w-1/2 ">
            <Image
              src={imgSrc}
              width={960}
              height={500}
              priority={true}
              alt="Picture of the author"
              className="rounded-xl  lg:rounded-none border border-[#262626] "
            />
            {hasHomepageBadge && (
              <Image
                src="/badge.png"
                width={175}
                height={175}
                priority={true}
                alt="Homepage badge"
                className=" absolute w-28 h-28 -bottom-14 md:bottom-auto md:w-32 md:h-32 md:-left-16 md:top-[15%]"
              />
            )}
          </div>
        )}
        <div className={`${imgSrc && "md:w-1/2"}`}>
          <h1 className=" text-[28px] font-semibold lg:text-5xl ">{title}</h1>
          <p className="text-[#999999] pt-4 font-medium lg:text-base lg:pt-5">
            {desc}
          </p>
          {showButtons && (
            <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:mt-12">
              <button className=" px-5 py-[14px] border border-[#262626] rounded-lg">
                Learn More
              </button>
              <Link href="/properties" className=" px-5 py-[14px] rounded-lg bg-[#703BF7]">
                Browse Properties
              </Link>
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
    </header>
  );
};

export default Header;
