import React from "react";
import Header from "@/components/organism/header";
import Module from "@/components/molecules/module";
import HeaderTabs from "@/components/atoms/header-tabs";

const Page = () => {
  return (
    <>
      <Header
        title="Elevate Your Real Estate Experience"
        desc="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        costumeHeaderClass={" bg-gradientToRight py-[50px] lg:py-[150px]"}

      />
      <HeaderTabs />
      <main className="flex flex-col row-start-2 bg-[#141414] items-center sm:items-start "></main>
    </>
  );
};

export default Page;
