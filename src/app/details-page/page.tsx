import React from "react";
import Module from "@/components/molecules/module";
import ModuleWrapper from "@/components/molecules/moduleWrapper";

const DetailsPage = () => {
  const DescriptionBox = () => {
    return <div>Box</div>;
  };

  const Featuresbox = ({ content }) => {
    return (
      <li className=" text-[#999999] bg-[#1A1A1A] text-sm font-medium py-[10px] px-3 border-l border-l-[#703BF7]">
        {content}
      </li>
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

  const DetailsBoxes = ({ title, btn, data }) => {
    return (
      <div className=" border border-[#262626] p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <span className=" text-lg font-semibold">{title}</span>
          <button className=" rounded-lg border border-[#262626] py-[14px] px-5 bg-[#1A1A1A]">
            {btn}
          </button>
        </div>
        {data && (
          <div className=" grid lg:grid-cols-2">
            {data?.map((box, index) => (
              <div
                className={`border-b border-[#262626] py-5 ${
                  index % 2 !== 0 &&
                  " pl-5 after:content-empty relative after:absolute after:top-1/4 after:left-0 after:w-[1px] after:h-1/2 after:bg-[#262626]"
                }`}
              >
                <p className="block text-[#999999] text-sm font-medium mb-[10px]">
                  {box.title}
                </p>
                <div className="flex items-center gap-3">
                  <p className=" text-lg font-semibold">{box.value}</p>
                  <div className="text-[#999999] text-sm font-medium px-3 py-[6px] border border-[#262626] rounded-md">
                    {box.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" text-white mt-10">
      <div className="max-w-7xl m-auto px-4 flex flex-col gap-[10px] lg:gap-5 lg:flex-row">
        <h1 className=" text-xl font-semibold">Seaside Serenity Villa</h1>
        <div className="flex items-center flex-row gap-5 flex-1 lg:justify-between ">
          <p className=" border border-[#262626] rounded-md p-2 text-sm">
            Malibu, California
          </p>

          <div className=" flex flex-row gap-1 items-center  text-sm font-medium text-[#999999] lg:flex-col lg:items-start">
            Price
            <span className=" text-lg font-semibold text-white">
              $1,250,000
            </span>
          </div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl m-auto px-4 grid gap-5 lg:grid-cols-2  ">
          <div className="border border-[#262626] p-5 rounded-[10px]">
            <span className="block font-semibold text-lg mb-1">
              Description
            </span>
            <p className=" text-[#999999] text-sm font-medium">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
            <div className=" grid  lg:grid-cols-3">
              <DescriptionBox />
              <DescriptionBox />
              <DescriptionBox />
            </div>
          </div>
          <div className="border border-[#262626] p-5 rounded-[10px]">
            <span className="block font-semibold text-lg mb-5">
              Key Features and Amenities
            </span>
            <ul className="flex flex-col gap-[18px]">
              <Featuresbox content="Expansive oceanfront terrace for outdoor entertaining" />
              <Featuresbox content="Gourmet kitchen with top-of-the-line appliances" />
              <Featuresbox content="Private beach access for morning strolls and sunset views" />
              <Featuresbox content="Master suite with a spa-inspired bathroom and ocean-facing balcony" />
              <Featuresbox content="Private garage and ample storage space" />
            </ul>
          </div>
        </div>

        <ModuleWrapper
          title="Let's Connect"
          desc="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        >
          <div className="grid p-5 gap-5 max-w-7xl m-auto w-full mb-[60px] rounded-xl border border-[#262626] lg:grid-cols-2 lg:p-[50px] lg:gap-[30px]">
            <FormField title="First Name" placeholder="Enter First Name" />
            <FormField title="Last Name" placeholder="Enter Last Name" />
            <FormField title="Email" placeholder="Enter your Email" />
            <FormField title="Phone" placeholder="Enter Phone Number" />
            <FormField
              title="How Did You Hear About Us?"
              placeholder="Select"
              costumeStyle="col-span-full"
            />

            <div className="flex flex-col gap-[14px] col-span-full">
              <label className=" text-white text-base font-semibold">
                Message
              </label>
              <textarea className=" px-5 py-4 font-medium  text-base text-[#666666] bg-[#1A1A1A] rounded-md border border-[#262626] " />
            </div>

            <div className="flex flex-col gap-5  items-center justify-between col-span-full lg:flex-row">
              <div className="flex gap-[10px]">
                <input type="checkbox" className="w-7 h-7" />
                <label className="text-[#999999] font-medium text-lg">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>
              <button className=" w-full bg-[#703BF7] rounded-md  px-9 py-[14px] text-white lg:w-fit ">
                Send Your Message
              </button>
            </div>
          </div>
        </ModuleWrapper>

        <ModuleWrapper
          title="Comprehensive Pricing Details"
          desc="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        >
          <DetailsBoxes
            title="Additional Fees"
            btn="Load More"
            data={[
              {
                title: "Property Transfer Tax",
                desc: "Based on the sale price and local regulations",
                value: "$25,000",
              },
              {
                title: "Property Transfer Tax",
                desc: "Based on the sale price and local regulations",
                value: "$25,000",
              },
              {
                title: "Property Transfer Tax",
                desc: "Based on the sale price and local regulations",
                value: "$25,000",
              },
              {
                title: "Property Transfer Tax",
                desc: "Based on the sale price and local regulations",
                value: "$25,000",
              },
              {
                title: "Property Transfer Tax",
                desc: "Based on the sale price and local regulations",
                value: "$25,000",
              },
            ]}
          />
        </ModuleWrapper>

        <Module
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          linktitle="View All FAQ’s"
          moduleName="faq"
          showPagination={true}
        />
      </main>
    </div>
  );
};

export default DetailsPage;
