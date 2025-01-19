import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div></div>
      <p>Exceptional Service!</p>
      <span>
        Our experience with Estatein was outstanding. Their team's dedication
        and professionalism made finding our dream home a breeze. Highly
        recommended!
      </span>
      <div>
        <Image src="/avatar.png" width={50} height={50} alt="Avatar" />
        <div>
          <p>Wade Warren</p>
          <span>USA, California</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
