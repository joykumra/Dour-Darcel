import React, { useState, useEffect, useRef } from "react";

const SectionFive = () => {
  const [isVisible, setIsVisible] = useState(true);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section className="section">
      <div
        ref={domRef}
        className={`section-wrapper left-[75%]  customMid:fade-in-section ${
          isVisible && "customMid:is-visible"
        }`}
      >
        <h2 className="section-heading">The Future</h2>
        <div className="section-description">
          <p className="font-extralight customMid:w-[400px] mx-auto">
            <span className="font-bold text-lg">Dour Darcels</span> is a
            long-term project, like{" "}
            <a
              href="https://twitter.com/dourdarcel"
              target="_blank"
              className="description-link"
            >
              @darceldisappoints
            </a>{" "}
            the aim is to thoughtfully build a brand that endures over time.
          </p>
          <p className="font-extralight">
            The future is focused on the{" "}
            <span className="font-bold text-lg">Dour Darcels</span> community
            &#8211; token holders will be the first to know and always given
            first access.
          </p>
        </div>
      </div>
      <img src="../images/bg-6.jpg" alt="bg-3" className="bg-image" />
    </section>
  );
};

export default SectionFive;
