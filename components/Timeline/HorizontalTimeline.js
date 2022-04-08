import React from "react";
import DownLine from "./DownLine";
import UpLine from "./UpLine";

const HorizontalTimeline = () => {
  return (
    <div className="flex items-center mr-10">
      <div>
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center font-header text-xl text-white">
            2008
          </div>
        </div>
      </div>
      <div className="timeline-line"></div>
      <UpLine
        name="Darcel Genesis"
        url="../timeline-images/timeline-1.png"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Adidas"
        url="../timeline-images/timeline-2.jpg"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="Louis Vuitton"
        url="../timeline-images/timeline-3.png"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Hyperbeast"
        url="../timeline-images/timeline-4.png"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="Exhibition"
        url="../timeline-images/timeline-5.jpg"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Milan Design Week"
        url="../timeline-images/timeline-6.jpg"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="Fashion Week"
        url="../timeline-images/timeline-7.png"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Exhibition"
        url="../timeline-images/timeline-8.jpg"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="New York Times"
        url="../timeline-images/timeline-9.png"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Vogue"
        url="../timeline-images/timeline-10.png"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="Interview Magazine"
        url="../timeline-images/timeline-11.png"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Warby Parker"
        url="../timeline-images/timeline-12.jpg"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="IKEA Collection"
        url="../timeline-images/timeline-13.jpg"
      ></UpLine>
      <div className="timeline-line"></div>
      <DownLine
        name="Book Release"
        url="../timeline-images/timeline-14.jpg"
      ></DownLine>

      <div className="timeline-line"></div>
      <UpLine
        name="Dour Darcels"
        url="../timeline-images/timeline-15.jpg"
      ></UpLine>
      <div className="timeline-line"></div>
      <div>
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center font-header text-xl text-white">
            2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
