import { Metadata } from "next";
import Module from "@/components/molecules/module";
import Header from "@/components/organism/header";
import HeaderTabs from "@/components/atoms/header-tabs";
import { title } from "process";

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
        hasHomepageBadge={true}
      />
      <HeaderTabs />

      <main className="flex flex-col row-start-2 bg-[#141414] items-center sm:items-start ">
        <Module
          title="Featured Properties"
          desc=" Explore our handpicked selection of featured properties. Each
      listing offers a glimpse into exceptional homes and investments
      available through Estatein."
          linktitle=" View All Properties"
          moduleName="property-cards"
          showPagination={true}
          items={[
            {
              imgSrc: "/propertyone.png",
              title: "Seaside Serenity Villa",
              desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
              bedrooms: 4,
              bathrooms: 3, 
              type: 'Villa'
            },
            {
              imgSrc: "/propertytwo.png",
              title: "Metropolitan Haven",
              desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
              bedrooms: 2,
              bathrooms: 2, 
              type: 'Villa'
            },
            {
              imgSrc: "/propertythree.png",
              title: "Rustic Retreat Cottage",
              desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
              bedrooms: 2,
              bathrooms: 3, 
              type: 'Villa'
            },
            {
              imgSrc: "/propertytwo.png",
              title: "Metropolitan Haven",
              desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
              bedrooms: 2,
              bathrooms: 2, 
              type: 'Villa'
            },
          ]}
        />

        <Module
          title="What Our Clients Say"
          desc=" Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          linktitle="View All Testimonials"
          moduleName="testimonials"
          showPagination={true}
          items={[
             {
               authorImg: '/wadeavatar.png',
                authorName: 'Wade Warren',
                authorLocation: 'USA, California',
                title: 'Exceptional Service!',
                desc: `Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!`
             }, 
             {
              authorImg: '/emiliaavatar.png',
               authorName: 'Emelie Thomson',
               authorLocation: 'USA, Florida',
               title: 'Efficient and Reliable',
               desc: `Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.`
            }, 
            {
              authorImg: '/johnavatar.png',
               authorName: 'John Mans',
               authorLocation: 'USA, Nevada',
               title: 'Trusted Advisors',
               desc: `The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!`
            }, 
            {
              authorImg: '/emiliaavatar.png',
               authorName: 'Emelie Thomson',
               authorLocation: 'USA, Florida',
               title: 'Efficient and Reliable',
               desc: `Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.`
            }, 
          ]}
        />

        <Module
          title="Frequently Asked Questions"
          desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          linktitle="View All FAQ’s"
          moduleName="faq"
          showPagination={true}
          items={[
            {
              faqTitle: 'How do I search for properties on Estatein?',
              faqDesc: "Learn how to use our user-friendly search tools to find properties that match your criteria."
            },
            {
              faqTitle: 'What documents do I need to sell my property through Estatein?',
              faqDesc: "Find out about the necessary documentation for listing your property with us."
            },
            {
              faqTitle: 'How can I contact an Estatein agent?',
              faqDesc: "Discover the different ways you can get in touch with our experienced agents."
            },
            {
              faqTitle: 'What documents do I need to sell my property through Estatein?',
              faqDesc: "Find out about the necessary documentation for listing your property with us."
            },
          ]}
        />


      </main>
    </>
  );
}
