"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#1A1A1A]">
      {showBanner && (
        <div className=" relative text-center bg-[#1A1A1A] text-white  px-4 py-5 lg:py-[18px] ">
          <div className=" flex relative max-w-container m-auto z-10">
            <span className="text-xs lg:text-sm m-auto">
              ✨ Discover Your Dream Property with Estatein Learn More
            </span>
            <button
              onClick={() => setShowBanner(false)}
              className="bg-[#FFFFFF1A] h-[26px] w-[26px] min-w-[26px] rounded-full flex items-center justify-center"
            >
              <IoClose color="#fff" width={12} height={12} />
            </button>
          </div>
          <Image
            src="/banner.png"
            alt="Banner Background"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
            className=" object-cover"
          />
        </div>
      )}

      <div className=" border border-[#262626]">
        <div className="flex items-cente justify-between max-w-container m-auto px-4 py-5">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            className="invert h-7 md:h-[34px] lg:h-12"
          />

          <ul
            className={`items-center p-5 text-white gap-6 flex-col bg-[#1A1A1A] fixed w-full left-0 z-20 h-screen  ${
              openMenu ? "flex" : "hidden"
            } lg:relative lg:flex-row lg:h-fit lg:flex lg:justify-center  lg:p-0`}
          >
            <li className=" flex self-center">
              <Link
                href="/"
                className={`${
                  pathname === "/" &&
                  " bg-[#141414] text-white py-2 px-6 border border-[#262626] text-base font-medium  rounded-[10px]"
                }`}
              >
                Home
              </Link>
            </li>
            <li className=" flex self-center">
              <Link
                href="/about-us"
                className={`${
                  pathname === "/about-us" &&
                  " bg-[#141414] text-white py-2 px-6 border border-[#262626] text-base font-medium  rounded-[10px]"
                }`}
              >
                About
              </Link>
            </li>
            <li className=" flex self-center">
              <Link
                href="/properties"
                className={`${
                  pathname === "/properties" &&
                  " bg-[#141414] text-white py-2 px-6 border border-[#262626] text-base font-medium  rounded-[10px]"
                }`}
              >
                Properties
              </Link>
            </li>
            <li className=" flex self-center">
              <Link
                href="/services"
                className={`${
                  pathname === "/services" &&
                  " bg-[#141414] text-white py-2 px-6 border border-[#262626] text-base font-medium  rounded-[10px]"
                }`}
              >
                Services
              </Link>
            </li>
            <li className="lg:hidden">
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>

          <Link
            href="/contact-us"
            className={`hidden bg-[#141414] content-center text-white py-2 px-6 border border-[#262626] text-base font-medium  rounded-[10px] lg:block ${
              pathname === "/contact-us" && " bg-[#703BF7] border-none"
            }`}
          >
            Contact
          </Link>

          <button className="lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
            <Image
              src="/navMenu.png"
              alt="Navigation Menu"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
