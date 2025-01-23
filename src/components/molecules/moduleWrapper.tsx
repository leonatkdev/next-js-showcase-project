import React from "react";
import Image from "next/image";

// Proper typing for children
interface ModuleWrapperProps {
  title: string;
  desc: string;
  children: React.ReactNode; // Updated to React.ReactNode instead of 'any'
}

const ModuleWrapper: React.FC<ModuleWrapperProps> = ({ title, desc, children }) => {
  return (
    <div className="max-w-7xl m-auto px-4 lg:py-[60px]">
      <Image
        src="/starSection.png"
        width={60}
        height={24}
        alt="Section icon"
        className="col-span-full"
      />
      <h2 className="text-[38px] text-[#FFFFFF] col-span-full">{title}</h2>
      <p className="text-[#999999] col-span-full mb-10">{desc}</p>

      {children}
    </div>
  );
};

export default ModuleWrapper;
