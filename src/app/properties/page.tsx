import React from "react";
import Header from "@/components/organism/header";
import Module from "@/components/molecules/module";

const Page = () => {
  return (
    <>
      <Header
        title="Find Your Dream Property"
        desc="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
        costumeHeaderClass={" bg-gradientToRight py-[50px] lg:py-[150px]"}
      />
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
      </main>
    </>
  );
};

export default Page;
