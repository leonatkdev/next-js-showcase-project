import React from "react";
import Header from "@/components/organism/header";
import HeaderTabs from "@/components/atoms/header-tabs";
import ModuleWrapper from "@/components/molecules/moduleWrapper";
 
interface tabProps {
  name: string
}

interface FormFieldProps {
  title: string,
  placeholder: string,
  costumeStyle?: string
}

const Page = () => {

  const Tab = ({ name }: tabProps) => {
    return (
      <div className="border border-[#262626] bg-[#1A1A1A] rounded-[28px] py-[6px] px-[14px]">
        {name}
      </div>
    );
  };

  const LocationCard = () => {
    return (
      <div className=" text-white bg-[#141414] p-6 border border-[#262626] rounded-lg">
        <span className=" block mb-1 text-sm font-medium">
          Main Headquarters
        </span>
        <p className=" font-semibold text-xl mb-2">
          123 Estatein Plaza, City Center, Metropolis
        </p>
        <span className="text-[#999999] text-sm">
          Our main headquarters serve as the heart of Estatein. Located in the
          bustling city center, this is where our core team of experts operates,
          driving the excellence and innovation that define us.
        </span>
        <div className="flex flex-wrap gap-[6px] py-5">
          <Tab  name="info@estatein.com" />
          <Tab  name="+1 (123) 456-7890" />
          <Tab name="Metropolis" />
        </div>
        <button className="bg-[#703BF7] py-[14px] px-5 rounded-lg text-sm w-full">
          View Property Details
        </button>
      </div>
    );
  };

  const FormField = ({ title, placeholder, costumeStyle }: FormFieldProps) => {
    return (
      <div className={`flex flex-col gap-[14px]  ${costumeStyle}`}>
        <label className=" text-white text-base font-semibold">{title}</label>
        <input
          placeholder={placeholder}
          className=" px-5 py-4 mt-auto font-medium  text-base text-[#666666] bg-[#1A1A1A] rounded-md border border-[#262626] "
        />
      </div>
    );
  };

  return (
    <>
      <Header
        title="Get in Touch with Estatein"
        desc="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        costumeHeaderClass={" bg-gradientToRight py-[50px] lg:py-[150px]"}
      />
      <HeaderTabs />
      <main className="flex flex-col row-start-2 bg-[#141414] items-center sm:items-start ">
        <ModuleWrapper
          title="Let's Connect"
          desc="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        >
          <div className="grid p-5 gap-5 max-w-7xl m-auto w-full mb-[60px] rounded-xl border border-[#262626] lg:grid-cols-3 lg:p-[50px] lg:gap-[30px]">
            <FormField title="First Name" placeholder="Enter First Name" />
            <FormField title="Last Name" placeholder="Enter Last Name" />
            <FormField title="Email" placeholder="Enter your Email" />
            <FormField title="Phone" placeholder="Enter Phone Number" />
            <FormField title="Inquiry Type" placeholder="Select Inquiry Type" />
            <FormField
              title="How Did You Hear About Us?"
              placeholder="Select"
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
          title="Discover Our Office Locations"
          desc="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
        >
          <div className="flex gap-[10px] p-[10px] bg-[#1A1A1A] rounded-lg w-fit mb-8">
            {["All", "Regional", "International"].map((elm, index) => (
              <span
                key={index}
                className="block px-5 py-[14px] border border-[#262626] rounded-lg bg-[#141414] text-sm font-medium text-[white] "
              >
                {elm}
              </span>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-2 ">
            <LocationCard />
            <LocationCard />
          </div>
        </ModuleWrapper>
      </main>
    </>
  );
};

export default Page;
