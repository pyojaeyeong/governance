import React from "react";

const FamilyList = ({ familyApp }) => {
  return (
    <li className="family-list">
      <a href="/">{familyApp.name}</a>
    </li>
  );
};

const FooterService = ({ footerContent }) => {
  return <li className="footer-content-list">{footerContent.name}</li>;
};

const FooterSns = ({ footerSns }) => {
  return (
    <li className="footer-sns-list">
      <a href="/">{footerSns.image}</a>
    </li>
  );
};

const Pretendard = () => {
  let familyApp = [
    {
      id: 1,
      name: "WEMIX",
    },
    {
      id: 2,
      name: "WEMIX PLAY",
    },
    {
      id: 3,
      name: "NILE",
    },
    {
      id: 4,
      name: "WEMIX.Fi",
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
      name: (
        <button>
          <img src="./image/gnb_black.png" alt="footer gnb change img" />
        </button>
      ),
    },
  ];

  let footerSns = [
    {
      id: 1,
      image: <img src="./image/sns_black1.png" alt="footer sns link img" />,
    },
    {
      id: 2,
      image: <img src="./image/sns_black2.png" alt="footer sns link img" />,
    },
    {
      id: 3,
      image: <img src="./image/sns_black3.png" alt="footer sns link img" />,
    },
    {
      id: 4,
      image: <img src="./image/sns_black4.png" alt="footer sns link img" />,
    },
    {
      id: 5,
      image: <img src="./image/sns_black5.png" alt="footer sns link img" />,
    },
  ];
  return (
    <div className="footer-family">
      <div>
        <a href="/">
          <img src="./image/logo_black.png" alt=""></img>
        </a>
        <p className="family-Sites">Family Sites</p>
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
          <p className="wemix-pte">© WEMIX PTE. LTD. All rights reserved.</p>
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