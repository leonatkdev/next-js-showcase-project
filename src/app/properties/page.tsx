import React from "react";
import Header from "@/components/organism/header";
import Module from "@/components/molecules/module";
import { CiSearch } from "react-icons/ci";
import { HiLocationMarker } from "react-icons/hi";

const Page = () => {
  const Section = () => {
    return (
      <div className=" flex items-center border border-[#262626] bg-[#141414] text-[#999999] rounded-lg px-[14px] py-3 w-full">
        <HiLocationMarker color="#999999" width={20} height={20} />
        <span>Location</span>
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className="max-w-7xl m-auto bg-transparent">
        <div className="relative mx-4">
          <input
            type="text"
            placeholder="Search For A Property"
            className="bg-[#141414] rounded-xl border border-[#262626] text-base font-medium text-[#666666] px-4 py-[16px] w-full shadow-propertySearch"
          />
          <button className=" flex gap-[6px] absolute right-[10px] lg:right-4 top-2  items-center bg-[#703BF7] py-[14px] px-5 rounded-lg">
            <CiSearch color="#fff" width={20} height={20} />
            <span className="hidden text-white font-medium lg:block">
              Find Property
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-5 mt-5 bg-[#1A1A1A] p-5 rounded-xl lg:flex-row lg:mt-0">
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
      </div>
    );
  };

  const FormField = ({ title, placeholder, costumeStyle }) => {
    return (
      <div className={`flex flex-col gap-[14px]  ${costumeStyle}`}>
        <label className=" text-white text-base font-semibold">{title}</label>
        <input
          placeholder="placeholder"
          className=" px-5 py-4 mt-auto font-medium  text-base text-[#666666] bg-[#1A1A1A] rounded-md border border-[#262626] "
        />
      </div>
    );
  };

  return (
    <>
      <Header
        title="Find Your Dream Property"
        desc="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
        costumeHeaderClass={" bg-gradientToRight py-[50px] lg:py-[150px]"}
      />
      <SearchBar />
      <main className="flex flex-col row-start-2 bg-[#141414] items-center sm:items-start ">
        <Module
          title="Featured Properties"
          desc=" Explore our handpicked selection of featured properties. Each
    listing offers a glimpse into exceptional homes and investments
    available through Estatein."
          linktitle=" View All Properties"
          moduleName="property-cards"
          showPagination={true}
        />
        <Module
          title="Let's Make it Happen"
          desc="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        />
        <div className="grid p-5 gap-5 max-w-7xl m-auto w-full mb-[60px] rounded-xl border border-[#262626] lg:grid-cols-4 lg:p-[50px] lg:gap-[30px]">
          <FormField title="First Name" placeholder="Enter First Name" />
          <FormField title="Last Name" placeholder="Enter Last Name" />
          <FormField title="Email" placeholder="Enter your Email" />
          <FormField title="Phone" placeholder="Enter Phone Number" />
          <FormField title="Preferred Location" placeholder="Select Location" />
          <FormField title="Property Type" placeholder="Select Property Type" />
          <FormField
            title="No. of Bathrooms"
            placeholder="Select no. of Bedrooms"
          />
          <FormField
            title="No. of Bedrooms"
            placeholder="Select no. of Bedrooms"
          />
          <FormField
            title="Budget"
            placeholder="Select Budget"
            costumeStyle=" lg:col-[1/3]"
          />

          <FormField
            title="Preferred Contact Method"
            placeholder="Enter Your Number"
          />
          <FormField title="" placeholder="Enter Your Email" />

          <div className="flex flex-col gap-[14px] col-span-full">
            <label className=" text-white text-base font-semibold">
              Message
            </label>
            <textarea className=" px-5 py-4 font-medium  text-base text-[#666666] bg-[#1A1A1A] rounded-md border border-[#262626] " />
          </div>

          <div className="flex flex-col gap-5  items-center justify-between col-span-full lg:flex-row">
            <div className="flex gap-[10px]">
              <input type="checkbox" className="w-7 h-7" />
              <label className="text-[#999999] font-medium text-lg">I agree with Terms of Use and Privacy Policy</label>
            </div>
            <button className=" w-full bg-[#703BF7] rounded-md  px-9 py-[14px] text-white lg:w-fit ">
              Send Your Message
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
