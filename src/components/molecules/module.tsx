"use client";


/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowRight from "@/images/arrowRight";
import ArrowLeft from "@/images/arrowLeft";

import PropertyCards from "../atoms/property-cards";
import Testimonials from "../atoms/testimonials";
import FAQ from "../atoms/faq";
import AchievementCard from "../atoms/achievement-card";
import ExperienceCard from "../atoms/experience-card";
import TeamCard from "../atoms/team-card";

// ModuleName type
type ModuleName =   
  | "property-cards"
  | "testimonials"
  | "faq"
  | "achievement-card"
  | "experience-card"
  | "team-card";

// ModuleComponent type
type ModuleComponentType = React.FC | null;

// Props interfaces
interface ModuleProps {
  title: string;
  desc: string;
  moduleName?: ModuleName; // Updated to allow undefined
  linktitle?: string;
  showPagination?: boolean,
  desktopGrid?: number,
  items?: Array<Record<string, any>>;
}

interface SectionHeaderProps {
  title: string;
  desc: string;
}

interface CallToActionProps {
  linkTitle: string;
}

const Module = ({
  title,
  desc,
  moduleName,
  linktitle,
  showPagination = false,
  desktopGrid = 3,
  items = [],
}: ModuleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default for desktop

  useEffect(() => {
    if (showPagination) {
      // Responsive logic to set the number of items based on screen size
      const handleResize = () => {
        setItemsToShow(window.innerWidth < 768 ? 1 : 3); // 1 for mobile, 3 for desktop
      };

      handleResize(); // Run on component mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [showPagination]);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + itemsToShow < items.length ? prev + itemsToShow : 0
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - itemsToShow >= 0 ? prev - itemsToShow : items.length - itemsToShow
    );
  };

  const Pagination = () => (
    <div className="flex items-center gap-[10px] pt-4 lg:col-span-full">
      <button
        onClick={prev}
        className="w-11 h-11 justify-items-center rounded-full border border-[#262626] bg-[#1A1A1A] lg:order-2"
      >
        <ArrowLeft />
      </button>
      <span className="text-[#999999] lg:order-1 lg:mr-auto">
        <span className="text-white">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>{" "}
        of {String(items.length).padStart(2, "0")}
      </span>
      <button
        onClick={next}
        className="w-11 h-11 justify-items-center rounded-full border border-[#262626] bg-[#1A1A1A] lg:order-3"
      >
        <ArrowRight />
      </button>
    </div>
  );
  const SectionHeader: React.FC<SectionHeaderProps> = ({ title, desc }) => (
    <>
      <Image
        src="/starSection.png"
        width={60}
        height={24}
        alt="Section icon"
        className="col-span-full w-[60px] h-6"
      />
      <h2 className="text-[28px] mb-[6px] font-semibold text-[#FFFFFF] col-span-full lg:mb-[10px] lg:col-[1/2] lg:row-[2] lg:text-[38px] xl:text-5xl">
        {title}
      </h2>
      <p className="text-[#999999] font-medium text-sm col-span-full lg:col-[1/2] lg:text-base">
        {desc}
      </p>
    </>
  );

  const CallToAction: React.FC<CallToActionProps> = ({ linkTitle }) => (
    <button className="bg-[#1A1A1A] border border-[#262626] text-sm px-[20px] py-[14px] rounded-lg text-white col-[1] row-[5] lg:col-[2] lg:row-[2/4] h-fit self-center">
      {linkTitle}
    </button>
  );

  // Handle undefined or invalid moduleName
  const getModule = (moduleName?: ModuleName): ModuleComponentType => {
    switch (moduleName) {
      case "property-cards":
        return PropertyCards;
      case "testimonials":
        return Testimonials;
      case "faq":
        return FAQ;
      case "achievement-card":
        return AchievementCard;
      case "experience-card":
        return ExperienceCard;
      case "team-card":
        return TeamCard;
      default:
        return null;
    }
  };

  const ModuleChild = getModule(moduleName);

  return (
    <div className="max-w-container m-auto w-full px-4 py-[40px] grid grid-cols-2 lg:grid-cols-[1fr_180px] lg:py-[60px]">
      <SectionHeader title={title} desc={desc} />
      {linktitle && <CallToAction linkTitle={linktitle} />}
      {showPagination ? (
        <div className="border-b border-[#262626] py-[30px] col-span-full overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `${100 / itemsToShow}%`, // Dynamically calculate the width
                }}
              >
                <ModuleChild {...item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`grid grid-cols-1 py-[30px] col-span-full gap-5 lg:grid-cols-${desktopGrid} `}>
          {items.map((item, index) => (
            <div
              key={index}
              // className="flex-shrink-0"
              // style={{
              //   width: `${100 / itemsToShow}%`, // Dynamically calculate the width
              // }}
            >
              <ModuleChild {...item} />
            </div>
          ))}
        </div>
      )}
      {showPagination && items.length > itemsToShow && <Pagination />}
    </div>
  );
};

export default Module;
