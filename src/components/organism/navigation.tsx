"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <nav className="bg-[#1A1A1A]">
      <div className=" max-w-7xl m-auto text-center  bg-[#1A1A1A] text-white  px-4 py-5 ">
        ✨ Discover Your Dream Property with Estatein Learn More
      </div>

      <div className=" border border-[#262626]">
        <div className="flex items-cente justify-between max-w-7xl m-auto px-4 py-5">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            // className="dark:invert"
            className="invert h-7 md:h-[34px] lg:h-12"
          />

          <ul className="items-cente justify-center  text-white gap-6 hidden lg:flex">
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
            {/* <li>
              <Link href="/contact-us">Contact</Link>
            </li> */}
          </ul>

          <Link
            href="/contact-us"
            className={`bg-[#141414] content-center text-white py-2 px-6 border border-[#262626] text-base font-medium  rounded-[10px] ${
                  pathname === "/contact-us" && " bg-[#703BF7] border-none" }`}
          >
            Contact
          </Link>

          <button className="lg:hidden">
            <Image
              src="/navMenu.png"
              alt="Navigation Menu"
              width={28}
              height={28}
              // className="dark:invert"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
