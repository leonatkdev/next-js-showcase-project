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
        costumeHeaderClass=""
      />
      <main className="flex flex-col gap-8 row-start-2 bg-[#141414] items-center sm:items-start ">
        <Module
          title="Our Achievements"
          desc="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          moduleName="achievement-card"
          items={[
            {
              title: "3+ Years of Excellence",
              desc: `With over 3 years in the industry, we've amassed a wealth of knowledge and experience.`,
            },
            {
              title: "Happy Clients",
              desc: `Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.`,
            },
            {
              title: "Industry Recognition",
              desc: `We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.`,
            },
          ]}
        />
        <Module
          title="Navigating the Estatein Experience"
          desc="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          moduleName="experience-card"
          items={[
            {
              title: "Discover a World of Possibilities",
              desc: `Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,`,
            },
            {
              title: "Narrowing Down Your Choices",
              desc: `Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`,
            },
            {
              title: "Personalized Guidance",
              desc: `Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.`,
            },
            {
              title: "See It for Yourself",
              desc: `Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.`,
            },
            {
              title: "Making Informed Decisions",
              desc: `Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`,
            },
            {
              title: "Personalized Guidance",
              desc: `Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.`,
            },
          ]}
        />

        <Module
          title="Meet the Estatein Team"
          desc="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          moduleName="team-card"
          desktopGrid={4}
          items={[
            {
              imgSrc: "/max.png",
              name: "Max Mitchell",
              title: "Founder",
            },
            {
              imgSrc: "/sarah.png",
              name: "Sarah Johnson",
              title: "Chief Real Estate Officer",
            },
            {
              imgSrc: "/david.png",
              name: "David Brown",
              title: "Head of Property Management",
            },
            {
              imgSrc: "/micheal.png",
              name: "Michael Turner",
              title: "Michael Turner",
            },
          ]}
        />
      </main>
    </>
  );
};

export default About;
