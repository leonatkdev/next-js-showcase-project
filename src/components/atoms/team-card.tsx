import React from "react";
import Image from "next/image";
import { title } from "process";
import { FaTwitter } from "react-icons/fa";

const TeamCard = () => {
  const data = [
    {
      img: "",
      name: "Max Mitchell",
      title: "Founder",
      link: "",
      mail: "",
    },
    {
      img: "",
      name: "Max Mitchell",
      title: "Founder",
      link: "",
      mail: "",
    },
    {
      img: "",
      name: "Max Mitchell",
      title: "Founder",
      link: "",
      mail: "",
    },
    {
      img: "",
      name: "Max Mitchell",
      title: "Founder",
      link: "",
      mail: "",
    },
  ];

  return (
    <div className="grid grid-flow-row lg:grid-cols-4 text-white gap-5">
      {data?.map((elm, index) => (
        <div
          key={index}
          className=" p-[20px] text-white border border-[#262626]  rounded-xl"
        >
          <Image
            src="/teamavatar.png"
            width={316}
            height={253}
            alt="team avatar"
          />
          <div className="bg-[#703BF7] w-fit m-auto -mt-5 relative rounded-[43px] px-[26px] py-[14px]">
          <FaTwitter color="#fff" />
          </div>
          <span className=" block mt-4 text-2xl font-semibold text-center">{elm?.name}</span>
          <p className=" text-lg font-medium text-[#999999] text-center ">{elm?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
