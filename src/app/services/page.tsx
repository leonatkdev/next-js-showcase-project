import React from "react";
import Image from "next/image";
import Header from "@/components/organism/header";
import HeaderTabs from "@/components/atoms/header-tabs";
import ModuleWrapper from "@/components/molecules/moduleWrapper";

interface BoxProps {
  title: string;
  desc: string;
}

interface BigBoxProps {
  title: string;
  desc: string;
  btnText: string;
}

const Page = () => {
  const Box = ({ title, desc }: BoxProps) => {
    return (
      <div className="  border border-[#262626] rounded-[10px] p-6 text-white">
        <span className=" block text-lg font-semibold ">{title}</span>
        <p className=" text-[#999999] text-sm mt-4">{desc}</p>
      </div>
    );
  };

  const BigBox: React.FC<BigBoxProps> = ({ title, desc, btnText }) => {
    return (
      <div className="border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-6 text-white lg:col-[2/4]">
        <div>
          <span className=" block text-xl font-bold ">{title}</span>

          <button>{btnText}</button>
        </div>
        <p className=" text-[#999999] text-sm mt-4">{desc}</p>
      </div>
    );
  };

  return (
    <>
      <Header
        title="Elevate Your Real Estate Experience"
        desc="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        costumeHeaderClass={" bg-gradientToRight py-[50px] lg:py-[150px]"}
      />
      <HeaderTabs />
      <main className="flex flex-col row-start-2 bg-[#141414] items-center sm:items-start ">
        <ModuleWrapper
          title="Unlock Property Value"
          desc="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Box
              title="Valuation Mastery"
              desc="Discover the true worth of your property with our expert valuation services."
            />
            <Box
              title="Strategic Marketing"
              desc="Selling a property requires more than just a listing; it demands a strategic marketing."
            />
            <Box
              title="Negotiation Wizardry"
              desc="Negotiating the best deal is an art, and our negotiation experts are masters of it."
            />
            <Box
              title="Closing Success"
              desc="A successful sale is not complete until the closing. We guide you through the intricate closing process."
            />
            <BigBox
              title="Unlock the Value of Your Property Today"
              btnText="Learn More"
              desc="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
            />
          </div>
        </ModuleWrapper>

        <ModuleWrapper
          title="Effortless Property Management"
          desc="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Box
              title="Tenant Harmony"
              desc="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
            />
            <Box
              title="Maintenance Ease"
              desc="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
            />
            <Box
              title="Financial Peace of Mind"
              desc="Managing property finances can be complex. Our financial experts take care of rent collection"
            />
            <Box
              title="Legal Guardian"
              desc="Stay compliant with property laws and regulations effortlessly."
            />
            <BigBox
              title="Experience Effortless Property Management"
              btnText="Learn More"
              desc="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
            />
          </div>
        </ModuleWrapper>

        <div className=" flex gap-10 flex-col max-w-container m-auto px-4 lg:flex-row lg:py-[60px]">
          <div className="lg:max-w-[519px]">
            <Image
              src="/starSection.png"
              width={60}
              height={24}
              alt="Section icon"
              className="col-span-full"
            />
            <h2 className="text-[38px] text-[#FFFFFF] col-span-full ">
              Smart Investments, Informed Decisions
            </h2>
            <p className="text-[#999999] col-span-full mb-10 ">
              {`Building a real estate portfolio requires a strategic approach.
              Estatein's Investment Advisory Service empowers you to make smart
              investments and informed decisions.`}
            </p>

            <div className="border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-6 text-white">
              <span className=" block text-xl font-bold ">
                Unlock Your Investment Potential
              </span>
              <p className=" text-[#999999] text-sm mt-4">
                Explore our Property Management Service categories and let us
                handle the complexities while you enjoy the benefits of property
                ownership.
              </p>
              <button>Learn More</button>
            </div>
          </div>

          <div className=" grid gap-[10px] lg:grid-cols-2 bg-[#1A1A1A] p-[10px] rounded-xl">
            <Box
              title="Legal Guardian"
              desc="Stay compliant with property laws and regulations effortlessly."
            />
            <Box
              title="Legal Guardian"
              desc="Stay compliant with property laws and regulations effortlessly."
            />
            <Box
              title="Legal Guardian"
              desc="Stay compliant with property laws and regulations effortlessly."
            />
            <Box
              title="Legal Guardian"
              desc="Stay compliant with property laws and regulations effortlessly."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
