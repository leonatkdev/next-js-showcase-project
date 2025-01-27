import React from "react";

interface CardsProps {
  title: string,
  desc: string,
}

const AchievementCard: React.FC<CardsProps> = ({title, desc}) => {
  return (
    <div
      className=" text-white p-[30px] border border-[#262626] rounded-[10px] shadow-headerTabs h-full"
    >
      <span className="block text-xl font-semibold pb-4">{title}</span>
      <p className=" text-sm font-medium text-[#999999]"> {desc}</p>
    </div>
  );
};

export default AchievementCard;
