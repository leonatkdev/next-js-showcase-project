import React from "react";
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
  showPagination?: boolean;
}

interface SectionHeaderProps {
  title: string;
  desc: string;
}

interface CallToActionProps {
  linkTitle: string;
}

// Module component
const Module = ({
  title,
  desc,
  moduleName,
  linktitle,
  showPagination = false,
}: ModuleProps) => {
  const Pagination = () => (
    <div className="flex items-center gap-[10px] pt-4 lg:col-span-full">
      <button className=" w-11 h-11  justify-items-center rounded-full border border-[#262626] bg-[#1A1A1A] lg:order-2">
        <ArrowLeft />
      </button>
      <span className="text-[#999999] lg:order-1 lg:mr-auto">
        <span className=" text-white">01</span>
        of 60
      </span>
      <button className=" w-11 h-11 justify-items-center rounded-full border border-[#262626] bg-[#1A1A1A] lg:order-3">
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
        className="col-span-full"
      />
      <h2 className="text-[38px] text-[#FFFFFF] col-span-full lg:col-[1/2] lg:row-[2]">
        {title}
      </h2>
      <p className="text-[#999999] col-span-full lg:col-[1/2]">{desc}</p>
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
    <div className="max-w-7xl m-auto w-full px-4 py-[40px] grid grid-cols-2 lg:grid-cols-[1fr_180px]  lg:py-[60px]">
      <SectionHeader title={title} desc={desc} />
      {linktitle && <CallToAction linkTitle={linktitle} />}
      {ModuleChild && (
        <div className="border-b border-[#262626] py-[30px] col-span-full">
          <ModuleChild />
        </div>
      )}
      {showPagination && <Pagination />}
    </div>
  );
};

export default Module;
