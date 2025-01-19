import Image from "next/image";
import React from "react";

const Tab = ({ value, name, icon }) => {
  return (
    <div className="border border-[#262626] bg-[#1A1A1A] rounded-[28px] py-[6px] px-[14px]">
      {value && value + "-"}
      {name}
    </div>
  );
};

const PropertyCards = () => {
  return (
    <div className="text-white p-6 border border-[#262626] rounded-xl max-w-[512px]">
      <Image
        src="/cardtest.png"
        width={310}
        height={210}
        alt="Section icon"
        // className="col-span-full"
      />
      <span className="block pt-4 pb-[2px] font-semibold text-lg">Rustic Retreat Cottage</span>
      <p className="text-[#999999] text-sm">
        An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
        Read More
      </p>
      <div className="flex gap-[6px] pt-5">
        <Tab value={4} name="Bedroom" />
        <Tab value={3} name="Bathroom" />
        <Tab name="Villa" />
      </div>
      <div className="flex justify-between  pt-5">
        <div>
          <p className="text-[#999999] text-lg">Price</p>
          <span className=" text-2xl font-semibold">$550,000</span>
        </div>
        <button className="bg-[#703BF7] py-[14px] px-5 rounded-lg">
          View Property Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCards;
