import React, { useState, useEffect, useRef } from "react";

const SectionThree = () => {
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
        <h2 className="section-heading">Who is Darcel?</h2>
        <div className="section-description">
          <p className="font-extralight customMid:w-[480px]">
            The cycloptic{" "}
            <a
              href="https://twitter.com/dourdarcel"
              target="_blank"
              className="description-link"
            >
              @darceldisappoints
            </a>{" "}
            has been documenting the highs and lows of life online since 2008.
            He has been published worldwide including in The New York Times and
            Vogue, and in his book{" "}
            <a
              href="https://hypebeast.com/2019/7/darcel-disappoints-in-one-year-in-new-york-book"
              target="_blank"
              className="description-link"
            >
              'One Year in New York'
            </a>
            .
          </p>
          <p className="font-extralight">
            Darcel has covered{" "}
            <a
              href="https://www.nowness.com/topic/darcel-disappoints/darcels-appointment-at-louis-vuitton"
              target="_blank"
              className="description-link"
            >
              Louis Vuitton store openings{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://www.nowness.com/topic/darcel-disappoints/darcels-appointment-at-louis-vuitton"
              target="_blank"
              className="description-link"
            >
              Paris Fashion Week
            </a>{" "}
            and , and has worked with the likes of Coca Cola, Adidas Originals
            and Uniqlo. He collaborated with iconic Parisian store Colette where
            he{" "}
            <a
              href="https://www.nowness.com/topic/darcel-disappoints/darcels-appointment-at-louis-vuitton"
              target="_blank"
              className="description-link"
            >
              exhibited his avatars
            </a>{" "}
            of popular culture figures and with whom he collaborated on projects
            with brands like{" "}
            <a
              href="https://www.nowness.com/topic/darcel-disappoints/darcels-appointment-at-louis-vuitton"
              target="_blank"
              className="description-link"
            >
              IKEA
            </a>
            .
          </p>
        </div>
      </div>
      <img src="../images/bg-4.jpg" alt="bg-3" className="bg-image" />
    </section>
  );
};

export default SectionThree;
