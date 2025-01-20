import React from "react";

const AchievementCard = () => {
  const data = [
    {
      title: "3+ Years of Excellence",
      desc: `With over 3 years in the industry, we've amassed a wealth of knowledge and experience.`,
    },
    {
      title: "Happy Clients",
      desc: `Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.`,
    },
    {
      title: "Industry Recognition",
      desc: `We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.`,
    },
  ];

  return (
    <div className="grid grid-flow-row lg:grid-cols-3 text-white gap-5">
      {data?.map((elm) => (
        <div className="p-[30px] border border-[#262626] rounded-[10px] shadow-archievcardsshadow">
          <span className="block text-xl font-semibold pb-4 pb-4">{elm?.title}</span>
          <p className=" text-sm font-medium text-[#999999]"> {elm?.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default AchievementCard;
