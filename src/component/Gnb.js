import React from "react";
import DropdownMenu from "./DropdownMenu";

const Gnb = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img
            src="/image/logo_wemixGovernance.png"
            alt="거버넌스 로고 이미지"
          />
        </a>
      </div>
      <div className="menu-container">
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Gnb;
