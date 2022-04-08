import React from "react";
import HorizontalTimeline from "./Timeline/HorizontalTimeline";

const SectionFour = () => {
  return (
    <section className="section">
      <div className="absolute inset-0 overflow-scroll">
        <div className="absolute top-[50%] left-[33%] customMid:left-[25%] translate-x-[-50%] translate-y-[-50%] flex items-center text-center">
          <h2 className="section-heading">
            A Brief <br /> History <br /> of <br /> Darcel
          </h2>
        </div>
        <div className="absolute top-[50%] left-[66%] customMid:left-[50%] translate-y-[-50%] ml-10">
          <HorizontalTimeline></HorizontalTimeline>
        </div>
      </div>

      <img src="../images/bg-5.jpg" alt="bg-3" className="block h-[90vh]" />
    </section>
  );
};

export default SectionFour;
