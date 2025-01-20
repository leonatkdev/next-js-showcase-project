import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const menuLinks = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About US",
      link: "",
    },
    {
      name: "Properties",
      link: "",
    },
    {
      name: "Service",
      link: "",
    },
  ];

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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/properties">Properties</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>

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
