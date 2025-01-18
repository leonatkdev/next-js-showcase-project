import React from "react";
import Image from "next/image";

const Footer = () => {
  const menuFooter = {
    Home: [
      {
        name: "Hero Section",
      },
    ],
    About_us: [
      {
        name: "Our Story",
      },
    ],
    Properties: [
      {
        name: "Portfolio",
      },
    ],
  };

  console.log("footer");

  return (
    <>
      <div className="bg-[#1A1A1A] px-4 py-[50px] lg:py-[60px] text-white">
        <div className="max-w-7xl  m-auto grid lg:grid-cols-[1fr_180px] gap-6">
          <span className=" text-[28px] font-semibold pb-[10px] lg:text-[38px] ">
            Start Your Real Estate Journey Today
          </span>
          <p className=" text-[#999999] text-sm lg:text-base">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
          <button className=" px-5 py-[14px] w-full rounded-[10px] bg-[#703BF7] lg:col-[2] lg:row-[1/3] h-fit place-self-center whitespace-nowrap">
            Explore Properties
          </button>
        </div>
      </div>
      <footer className="bg-[#141414] text-white">
        <div className="flex max-w-7xl m-auto pt-12 justify-between pb-20">
          <div className="flex gap-6 flex-col">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              // className="dark:invert"
              className="invert"
            />
            <div>
              <input
                placeholder="Enter Your Email"
                className="bg-[#141414] border border-[#262626] rounded-lg py-[14px] px-[20px] text-[#999999] "
              />
            </div>
          </div>

          <div className="flex gap-6">
            {Object.keys(menuFooter).map((elm, index) => {
              console.log("elm", elm);
              return (
                <div key={index}>
                  <span className="text-[#999999]">{elm}</span>
                  <div>
                    {menuFooter[elm] &&
                      menuFooter[elm]?.map((menu) => (
                        // eslint-disable-next-line react/jsx-key
                        <span key={menu?.name}>{menu?.name}</span>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-3">
          <div className="flex max-w-7xl m-auto">
            <span>2025 Estate Project. All Rights Reserved</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
