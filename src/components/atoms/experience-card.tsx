import React from "react";

interface CardsProps {
  title: string,
  desc: string,
}

const ExperienceCard: React.FC<CardsProps> = ({title, desc }) => {
  return (
    <div className=" block text-white">
      <span className=" block py-[14px] px-4 text-base font-medium border-l border-l-[#703BF7] ">
        Step step
      </span>
      <div className="border border-[#262626] p-[30px] rounded-[10px] rounded-tl-[0px] h-full">
        <span className=" block font-semibold text-xl pb-4 ">{title}</span>
        <p className=" text-base font-medium text-[#999999]">{desc}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
