import React from "react";

const ExperienceCard = () => {
  const data = [
    {
      title: "Discover a World of Possibilities",
      desc: `Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,`,
    },
    {
      title: "Narrowing Down Your Choices",
      desc: `Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`,
    },
    {
      title: "Personalized Guidance",
      desc: `Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.`,
    },
    {
      title: "See It for Yourself",
      desc: `Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.`,
    },
    {
      title: "Making Informed Decisions",
      desc: `Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`,
    },
    {
      title: "Personalized Guidance",
      desc: `Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.`,
    },
  ];
  return (
    <div className="grid grid-flow-row lg:grid-cols-3 text-white gap-5">
      {data?.map((elm, index) => (
        <div>
          <span className=" block py-[14px] px-4 text-base font-medium border-l bord    er-l-[#703BF7]">Step {index < 10 ? "0" + index : index }</span>
          <div className="border border-[#262626] p-[30px] rounded-[10px] rounded-tl-[0px]">
          <span className=" block font-semibold text-xl pb-4 ">{elm?.title}</span>
          <p className=" text-base font-medium text-[#999999]">{elm?.desc}</p> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
