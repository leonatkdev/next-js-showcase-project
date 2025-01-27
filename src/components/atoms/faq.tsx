import React from "react";

interface CardsProps {
  faqTitle: string,
  faqDesc: string,
}

const FAQ : React.FC<CardsProps> = ({faqTitle, faqDesc}) => {
  return (
    <div className=" flex flex-col gap-5 p-[30px] text-white border border-[#262626] rounded-[10px] lg:mr-5 h-full justify-between">
      <p className=" text-lg font-semibold">{faqTitle}</p>
      <span className=" text-[#999999] text-sm">{faqDesc}</span>
      <button className=" text-sm border border-[#262626] bg-[#1A1A1A] rounded-lg py-[14px] px-5">Read More</button>
    </div>
  );
};

export default FAQ;
