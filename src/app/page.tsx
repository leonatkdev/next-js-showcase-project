import Image from "next/image";
import { Metadata } from "next";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Module from "@/components/molecules/module";
import Header from "@/components/organism/header";

export const metadata: Metadata = {
  title: "Estate Project",
  description: "The official Next.js Course Dashboard, built with App Router.",
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Home() {
  return (
    <>
      <Header
        title="Discover Your Dream Property with Estatein"
        desc="Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams."
        imgSrc="/homepage.png"
        showButtons={true}
        showHeaderTabs={true}
        showSecondTabs={true}
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

        <Module
          title="What Our Clients Say"
          desc=" Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          linktitle="View All Testimonials"
          moduleName="testimonials"
          showPagination={true}
        />

        <Module
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          linktitle="View All FAQ’s"
          moduleName="faq"
          showPagination={true}
        />

        <Module
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          linktitle="View All FAQ’s"
          moduleName="faq"
          showPagination={true}
        />
      </main>
    </>
  );
}
