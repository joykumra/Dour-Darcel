import React from "react";

const UpLine = (props) => {
  return (
    <div className="relative">
      <div className="text-white font-header absolute bottom-[calc(15vh+32px)] left-[-95px] text-center">
        <div className="w-60 h-[180px]">
          <img src={props.url} alt="image" />
        </div>
      </div>
      <div className="absolute bottom-[calc(10vh+32px)] left-4">
        <div className="w-[1px] h-[5vh] bg-white"></div>
      </div>
      <div className="text-white font-header absolute bottom-[calc(5vh+32px)] left-[-82px] text-center">
        <p className="bg-black px-5 py-3 rounded-full w-52">{props.name}</p>
      </div>
      <div className="absolute bottom-8 left-4">
        <div className="w-[1px] h-[5vh] bg-white"></div>
      </div>
      <div className="timeline-large-circle">
        <div className="timeline-small-circle"></div>
      </div>
    </div>
  );
};

export default UpLine;
