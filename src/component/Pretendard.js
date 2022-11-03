import React from "react";
import DropupMenu from "./DropupMenu";

const FamilyList = ({ familyApp }) => {
  return (
    <>
      <li className="family-list">
        <span>{familyApp.link}</span>
        {familyApp.link ? null : <span className="comming-soon">WEMIX.FI</span>}
      </li>
    </>
  );
};

const FooterService = ({ footerContent }) => {
  return <li className="footer-content-list">{footerContent.name}</li>;
};

const FooterSns = ({ footerSns }) => {
  return (
    <li className="footer-sns-list">
      <a href="/" target="_blank">
        {footerSns.image}
      </a>
    </li>
  );
};

const Pretendard = () => {
  let familyApp = [
    {
      id: 1,
      link: (
        <a href="/" target="_blank">
          WEMIX
        </a>
      ),
    },
    {
      id: 2,
      link: (
        <a href="/" target="_blank">
          WEMIX PLAY
        </a>
      ),
    },
    {
      id: 3,
      link: (
        <a href="/" target="_blank">
          NILE
        </a>
      ),
    },
    {
      id: 4,
      name: "WEMIX.FI",
    },
  ];

  let footerContent = [
    {
      id: 1,
      name: <a href="/">Terms of Service</a>,
    },
    {
      id: 2,
      name: <a href="/">Privacy Policy</a>,
    },
    {
      id: 3,
      name: <a href="/">Contact</a>,
    },
    {
      id: 4,
      name: <DropupMenu />,
    },
  ];

  let footerSns = [
    {
      id: 1,
      image: (
        <img src="./image/sns_black1.png" alt="Click to move wemix medium" />
      ),
    },
    {
      id: 2,
      image: <img src="./image/sns_black2.png" alt="Click to move " />,
    },
    {
      id: 3,
      image: <img src="./image/sns_black3.png" alt="Click to move tweeter" />,
    },
    {
      id: 4,
      image: <img src="./image/sns_black4.png" alt="Click to move youtube" />,
    },
    {
      id: 5,
      image: <img src="./image/sns_black5.png" alt="Click to move facebook" />,
    },
  ];

  return (
    <div className="footer-family">
      <div>
        <div className="footer-select">
          <a href="/">
            <img src="./image/logo_black.png" alt="GOVERNANCE"></img>
          </a>
          <select>
            <option defaultValue="Family Sites" disabled>
              Family Sites
            </option>
            <option value="WEMIX">WEMIX</option>
            <option value="WEMIXPLAY">WEMIX PLAY</option>
            <option value="NILE">NILE</option>
            <option value="WEMIX.FI">WEMIX.FI</option>
          </select>
        </div>
        <span className="family-Sites">Family Sites</span>

        <ul className="family-list-zone">
          {familyApp.map((familyApp) => (
            <FamilyList familyApp={familyApp} key={familyApp.id} />
          ))}
        </ul>
      </div>
      <div className="footer-info">
        <div>
          <ul className="footer-content">
            {footerContent.map((footerContent) => (
              <FooterService
                footerContent={footerContent}
                key={footerContent.id}
              />
            ))}
          </ul>
          <span className="wemix-pte">
            © WEMIX PTE. LTD. All rights reserved.
          </span>
        </div>
        <div className="footer-sns">
          <ul>
            {footerSns.map((footerSns) => (
              <FooterSns footerSns={footerSns} key={footerSns.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pretendard;
