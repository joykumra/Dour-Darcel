import React from "react";

const SectionOne = () => {
  return (
    <section className="section">
      <img src="../images/bg-1.jpg" alt="bg-1" className="bg-image" />
      <img
        src="../logo.png"
        alt="logo"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60vw] z-10"
      />
    </section>
  );
};

export default SectionOne;
