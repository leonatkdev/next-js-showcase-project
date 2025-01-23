import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className=" p-[30px] text-white border border-[#262626] rounded-[10px]">
      <div className="flex gap-2 pb-5">
        {new Array(5).fill("")?.map((star, index) => (
          <Image
            src="/star.png"
            width={30}
            height={30}
            alt="stars"
            key={index}
          />
        ))}
      </div>
      <p className=" text-lg font-semibold pb-[6px]">Exceptional Service!</p>
      <span className=" font-medium text-sm">
        {` Our experience with Estatein was outstanding. Their team's dedication
        and professionalism made finding our dream home a breeze. Highly
        recommended!`}
      </span>
      <div className="flex gap-[10px] pt-5">
        <Image src="/avatar.png" width={50} height={50} alt="Avatar" />
        <div>
          <p className=" text-base font-medium">Wade Warren</p>
          <span className="text-[#999999] text-sm font-medium">
            USA, California
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
