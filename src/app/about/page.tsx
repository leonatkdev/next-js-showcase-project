import Module from "@/components/molecules/module";
import Header from "@/components/organism/header";
import React from "react";

const About = () => {
  return (
    <>
      <Header
        title="Our Journey"
        desc="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
        imgSrc="/aboutus.png"
        showHeaderTabs={true}
      />
      <main className="flex flex-col gap-8 row-start-2 bg-[#141414] items-center sm:items-start ">
        <Module
          title="Our Achievements"
          desc="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          moduleName="achievement-card"
       />
         <Module
          title="Navigating the Estatein Experience"
          desc="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          moduleName="experience-card"
       />

          <Module
          title="Meet the Estatein Team"
          desc="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          moduleName="team-card"
       />
      </main>
    </>
  );
};

export default About;
