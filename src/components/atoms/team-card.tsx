import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

interface CardsProps {
  imgSrc: string,
  name: string,
  title: string,
}

const TeamCard  : React.FC<CardsProps> = ({imgSrc ,name , title}) => {
  return (
    <div className=" p-[20px] text-white border border-[#262626]  rounded-xl">
      <Image src={imgSrc} width={316} height={253} alt="team avatar" />
      <div className="bg-[#703BF7] w-fit m-auto -mt-5 relative rounded-[43px] px-[26px] py-[14px]">
        <FaTwitter color="#fff" />
      </div>
      <span className=" block mt-4 text-2xl font-semibold text-center">
        {name}
      </span>
      <p className=" text-lg font-medium text-[#999999] text-center ">
        {title}
      </p>
    </div>
  );
};

export default TeamCard;
