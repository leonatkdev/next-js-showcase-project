import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TabProps {
  value?: string;
  name: string;
}

interface CardsProps {
  imgSrc: string;
  title: string;
  desc: string;
  bedrooms: string;
  bathrooms: string;
  type: string;
}

const Tab: React.FC<TabProps> = ({ value, name }) => {
  return (
    <div className="border border-[#262626] bg-[#1A1A1A] rounded-[28px] py-[6px] px-[14px]">
      {value && value + "-"}
      {name}
    </div>
  );
};

const PropertyCards : React.FC<CardsProps> = ({imgSrc, title, desc, bedrooms, bathrooms, type}) => {
  return (
    <div className="text-white p-6 border border-[#262626] rounded-xl lg:mr-5">
      <Image
        src={imgSrc}
        width={432}
        height={318}
        alt="Section icon"
        className=" object-cover rounded-[10px]  w-full h-[210px] lg:w-[353px] lg:h-[255px] xl:w-[432px] xl:h-[318]"
        // className="col-span-full"
      />
      <span className="block pt-4 pb-[2px] font-semibold text-lg">
        {title}
      </span>
      <p className="text-[#999999] text-sm">
      {desc}
      </p>
      <div className="flex flex-wrap gap-[6px] pt-5">
        <Tab value={bedrooms} name="Bedroom" />
        <Tab value={bathrooms} name="Bathroom" />
        <Tab name={type} />
      </div>
      <div className="flex justify-between  pt-5">
        <div>
          <p className="text-[#999999] text-lg">Price</p>
          <span className=" text-2xl font-semibold">$550,000</span>
        </div>
        <Link href='/details-page' className="bg-[#703BF7] py-[14px] px-5 rounded-lg">
          View Property Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCards;
