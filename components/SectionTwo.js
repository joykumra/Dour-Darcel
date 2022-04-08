import React, { useState, useEffect, useRef } from "react";

const SectionTwo = () => {
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
        className={`section-wrapper left-[25%] customMid:fade-in-section ${
          isVisible && "customMid:is-visible"
        }`}
        ref={domRef}
      >
        <h2 className="section-heading">Hi Frens</h2>
        <div className="section-description">
          <h3 className="font-bold">
            Dour Darcels are a collection of 10,000 moody frens from the world
            of Darcel Disappoints.
          </h3>
          <p className="font-light">
            The collection is focused on quality art with 200+ colorful traits
            and variations. All Darcels are individual and unique &#8211; just
            like frens IRL.
          </p>
          <p className="font-light">
            Each <span className="text-lg font-bold">Dour Darcel</span> is a
            unique NFT that lives on the Ethereum blockchain.
          </p>
          <p className="customSm:text-xl text-base font-bold">
            SOLD OUT 😳 THANK YOU FRENS 🙌
          </p>
          <a
            href="https://opensea.io/collection/dourdarcels"
            target="_blank"
            className="block max-w-[200px] mx-auto text-black font-black bg-white hover:bg-yellow-400 px-2 py-3 rounded-full transition-colors cursor-pointer"
          >
            View on OpenSea
          </a>
        </div>
      </div>
      <img
        src="../images/bg-3.jpg"
        alt="bg-2"
        className="bg-image translate-x-[-50%] customMid:translate-x-0"
      />
    </section>
  );
};

export default SectionTwo;
