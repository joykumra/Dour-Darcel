import React, { useState, useEffect, useRef } from "react";

const ACOOUNTS = [
  {
    name: "@dourdarcel",
    title: "ARTIST & FOUNDER",
    img: "../team-images/team-darcel.jpg",
    url: "https://twitter.com/dourdarcel",
  },
  {
    name: "@westcoastnft",
    title: "DEVELOPERS",
    img: "../team-images/team-westcoast.jpg",
    url: "https://twitter.com/westcoastnft",
  },
  {
    name: "@shillrxyz",
    title: "CONSULTING",
    img: "../team-images/team-shillr.jpg",
    url: "https://twitter.com/shillrxyz",
  },
  {
    name: "@mindofimpact",
    title: "3D",
    img: "../team-images/team-impact.jpg",
    url: "https://twitter.com/mindofimpact",
  },
  {
    name: "@This_is_BonBon",
    title: "3D",
    img: "../team-images/team-ebony.jpg",
    url: "https://twitter.com/This_is_BonBon",
  },
  {
    name: "@_awj5",
    title: "WEB",
    img: "../team-images/team-awj5.jpg",
    url: "https://twitter.com/_awj5",
  },
];

const SectionSix = () => {
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
        className={`section-wrapper p-5 customSm:p-12 left-[25%]  customMid:fade-in-section ${
          isVisible && "customMid:is-visible"
        }`}
      >
        <h2 className="section-heading">The Team</h2>
        <div className="grid grid-cols-2 customSm:grid-cols-3 customMid:gap-x-12 gap-4 justify-center cursor-pointer">
          {ACOOUNTS.map((account, index) => {
            return (
              <a
                href={account.url}
                target="_blank"
                key={index}
                className="basis-[1/3]"
              >
                <img
                  src={account.img}
                  alt={account.name}
                  className="team-image"
                />
                <p className="font-bold">{account.name}</p>
                <p className="text-xs font-extralight">{account.title}</p>
              </a>
            );
          })}
        </div>
      </div>
      <img
        src="../images/bg-7.jpg"
        alt="bg-3"
        className="bg-image translate-x-[-50%] customMid:translate-x-0"
      />
    </section>
  );
};

export default SectionSix;
