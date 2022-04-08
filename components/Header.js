import React from "react";

const Header = () => {
  return (
    <header className="fixed top-8 pl-4 pr-2 w-[232px] flex items-center justify-between z-[999] left-[50%] translate-x-[-50%] customSm:w-[560px] h-16 bg-black text-white rounded-full">
      <div className="flex items-center">
        <a
          href="https://discord.gg/dourdarcels"
          target="_blank"
          className="cursor-pointer"
        >
          <img
            src="../social-media-icons/icon-discord.png"
            className="h-12 customSm:h-16 p-3 customSm:p-4"
            alt="discord"
          />
        </a>
        <a
          href="https://twitter.com/DourDarcelsNFT"
          target="_blank"
          className="cursor-pointer"
        >
          <img
            src="../social-media-icons/icon-twitter.png"
            className="h-12 customSm:h-16 p-3 customSm:p-4"
            alt="twitter"
          />
        </a>
        <a
          href="https://opensea.io/collection/dourdarcels"
          target="_blank"
          className="cursor-pointer"
        >
          <img
            src="../social-media-icons/icon-opensea.png"
            className="h-12 customSm:h-16 p-3 customSm:p-4"
            alt="opensea"
          />
        </a>
        <a
          href="https://instagram.com/dourdarcelsnft"
          target="_blank"
          className="cursor-pointer"
        >
          <img
            src="../social-media-icons/icon-ig.png"
            className="h-12 customSm:h-16 p-3 customSm:p-4"
            alt="instagram"
          />
        </a>
      </div>
      <div className="hidden customSm:block py-[10px] px-8 rounded-full bg-[rgba(256,256,256,0.25)] text-black font-black font-header text-lg cursor-pointer">
        Connect Wallet
      </div>
    </header>
  );
};

export default Header;
