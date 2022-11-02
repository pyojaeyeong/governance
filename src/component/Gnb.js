import React from "react";
import DropdownMenu from "./DropdownMenu";

const Gnb = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="/image/logo_wemixGovernance.png" alt="Governance" />
        </a>
      </div>
      <div className="menu-container">
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Gnb;
