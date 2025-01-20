import React from "react";
import Header from "@/components/organism/header";
import Module from "@/components/molecules/module";
import HeaderTabs from "@/components/atoms/header-tabs";


const Page = () => {
  return (
    <>
      <Header
        title="Get in Touch with Estatein"
        desc="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        costumeHeaderClass={" bg-gradientToRight py-[50px] lg:py-[150px]"}
      />
      <HeaderTabs />
      <main className="flex flex-col row-start-2 bg-[#141414] items-center sm:items-start ">

        
      </main>
    </>
  );
};

export default Page;
