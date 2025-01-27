import React from "react";
import Image from "next/image";

const Footer = () => {
  interface MenuItem {
    name: string;
  }

  interface MenuFooter {
    [key: string]: MenuItem[];
  }

  const menuFooter: MenuFooter = {
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
    Contact_us: [
      {
        name: "Contact Form",
      },
    ],
  };

  return (
    <>
      <div className="bg-[#1E1E1E] relative px-4 py-[50px] lg:py-[60px] text-white">
        <div className="max-w-container  m-auto grid lg:grid-cols-[1fr_180px] gap-6">
          {/* <Image
            src="/squares.png"
            alt="footer square"
            width={475}
            height={258}
            className=" absolute top-0 left-0"
          /> */}
          <span className=" text-[28px] font-semibold pb-[10px] lg:text-[38px] relative">
            Start Your Real Estate Journey Today
          </span>
          <p className=" text-[#999999] text-sm lg:text-base relative">
            {` Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.`}
          </p>
          <button className=" px-5 py-[14px] w-full rounded-[10px] bg-[#703BF7] lg:col-[2] lg:row-[1/3] h-fit place-self-center whitespace-nowrap">
            Explore Properties
          </button>

          {/* <Image
            src="/squares.png"
            alt="footer square"
            width={475}
            height={258}
            className=" absolute bottom-0 right-0  transform rotate-y-180 transition-transform duration-500"
          /> */}
        </div>
      </div>
      <footer className="bg-[#141414] text-white">
        <div className="flex flex-col max-w-container m-auto pt-12 justify-between pb-20 px-4 gap-12 lg:flex-row ">
          <div className="flex gap-6 flex-col">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              // className="dark:invert"
              className="invert h-[34px] "
            />
            <div>
              <input
                placeholder="Enter Your Email"
                className="bg-[#141414] border border-[#262626] rounded-lg py-[14px] px-[20px] text-[#999999] "
              />
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-6 lg:flex lg:">
            {Object.keys(menuFooter).map((elm, index) => {
              return (
                <div
                  key={index}
                  className="border-b border-[#262626] pb-5 lg:border-none"
                >
                  <span className="block text-[#999999] pb-4 lg:pb-6">
                    {elm}
                  </span>
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
          <div className="flex max-w-container m-auto">
            <span>2025 Estate Project. All Rights Reserved</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
