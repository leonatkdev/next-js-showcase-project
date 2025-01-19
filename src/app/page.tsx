import Image from "next/image";
import { Metadata } from "next";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Module from "@/components/molecules/module";

export const metadata: Metadata = {
  title: "Estate Project",
  description: "The official Next.js Course Dashboard, built with App Router.",
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Home() {
  const tempData = [
    {
      value: "200+",
      key: "Happy Customers",
    },
    {
      value: "10+",
      key: "Properties For Clients",
    },
    {
      value: "16+",
      key: "Years of Experience",
    },
  ];

  const data = [
    {
      text: "Find Your Dream Home",
    },
    {
      text: "Unlock Property Value",
    },
    {
      text: "Effortless Property Management",
    },
    {
      text: "Smart Investments, Informed Decisions",
    },
  ];

  return (
    <>
      <header className="flex flex-col px-4 pt-8 bg-[#141414] text-white">
        <div className="flex flex-col items-center lg:flex-row-reverse max-w-7xl m-auto">
          <div>
            <Image
              src="/homepage.png"
              width={960}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h1 className=" text-[28px] font-semibold lg:text-5xl">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="text-[#999999] pt-4 font-medium lg:text-base lg:pt-5">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:mt-12">
              <button className=" px-5 py-[14px] border border-[#262626] rounded-lg">
                Learn More
              </button>
              <button className=" px-5 py-[14px] rounded-lg bg-[#703BF7]">
                Browse Properties
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:mt-12">
              {tempData?.map((elm, index) => (
                <div
                  key={index}
                  className=" px-5 py-[14px] bg-[#1A1A1A] border border-[#262626] rounded-lg mb-10"
                >
                  <span className=" text-2xl text-center font-bold lg:text-3xl lg:font-bold">
                    {elm?.value}
                  </span>
                  <p className=" text-[14px] font-medium text-[#999999] lg:text-base">
                    {elm?.key}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[10px] lg:grid-cols-4 ">
          {data?.map((elm, index) => (
            <div
              key={index}
              className=" relative py-5 px-[14px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] "
            >
              <MdArrowOutward className="absolute right-4" />
              <FaCircleCheck
                width={60}
                height={60}
                className="w-16 h-16 place-self-center"
              />
              <span className="block pt-4 text-center">{elm?.text}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 bg-[#141414] items-center sm:items-start ">
        <Module
          title="Featured Properties"
          desc=" Explore our handpicked selection of featured properties. Each
      listing offers a glimpse into exceptional homes and investments
      available through Estatein."
          linktitle=" View All Properties"
          moduleName="property-cards"
        />

        <Module
          title="What Our Clients Say"
          desc=" Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          linktitle="View All Testimonials"
          moduleName="testimonials"
        />

        <Module
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          linktitle="View All FAQ’s"
          moduleName="faq"
        />
      </main>
    </>
  );
}
