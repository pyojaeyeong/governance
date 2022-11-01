import React from "react";

const Sns = ({ sns }) => {
  return (
    <li className="more-sns">
      <a href="/">{sns.image}</a>
    </li>
  );
};

const WemixLink = ({ link }) => {
  return (
    <li className="wemix-list">
      <div className="list-title">
        <strong>{link.name}</strong>
        <button>{link.link}</button>
      </div>
      <p>{link.info}</p>
    </li>
  );
};

const MoreAboutWemix = () => {
  let sns = [
    {
      id: 1,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns1.png"}
          alt="WEMIX3.0 info sns1 img"
        ></img>
      ),
    },
    {
      id: 2,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns2.png"}
          alt="WEMIX3.0 info sns2 img"
        ></img>
      ),
    },
    {
      id: 3,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns3.png"}
          alt="WEMIX3.0 info sns3 img"
        ></img>
      ),
    },
    {
      id: 4,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns4.png"}
          alt="WEMIX3.0 info sns4 img"
        ></img>
      ),
    },
    {
      id: 5,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns5.png"}
          alt=" WEMIX3.0 info sns5 img"
        ></img>
      ),
    },
  ];

  let link = [
    {
      id: 1,
      name: "WEMIX",
      info: "Welcome to the open-source programmable future of Web3 era. WEMIX3.0 is an experience-based, platform-driven and service-oriented decentralized blockchain protocol built as the foundation of a borderless mega-ecosystem.",
      link: (
        <a href="/">
          <img
            src="./image/ic_arrow_right.png"
            alt="WEMIX info link page"
          ></img>
        </a>
      ),
    },
    {
      id: 2,
      name: "WEMIXPLAY",
      info: "The world's largest and fastest P&E gaming platform that implements the 'Pay' segment into the experience cycle of global gamers.",
      link: (
        <a href="/">
          <img
            src="./image/ic_arrow_right.png"
            alt="WEMIX info link page"
          ></img>
        </a>
      ),
    },
    {
      id: 3,
      name: "NILE",
      info: "The next generation DAO-powered community platform built for creation, facilitation and management of projects based on smart contracts, innovating opportunities through collective potential.",
      link: (
        <a href="/">
          <img
            src="./image/ic_arrow_right.png"
            alt="WEMIX info link page"
          ></img>
        </a>
      ),
    },
    {
      id: 4,
      name: "WEMIX.Fi",
      info: "A secure on-chain DeFi platform that supports storage, exchange, borrowing, settlement and investment of crypto-assets powered by oracles that collect, analyze, and broadcast data propagated from a variety of sources for security and validation.",
      open: "COMING SOON",
    },
  ];
  return (
    <>
      <div className="more-wemix">
        <strong className="more-title">More about WEMIX3.0</strong>
        <div className="more-sns-zone">
          <div className="more-sns-title">
            <strong>Communications</strong>
          </div>
          <div className="more-sns-list">
            <ul>
              {sns.map((sns) => (
                <Sns sns={sns} key={sns.id} />
              ))}
            </ul>
          </div>
        </div>
        <div className="wemix-link-zone">
          <div className="wemix-link-title">
            <strong>WEMIX Mega-ecosystem</strong>
          </div>
          <div className="wemix-link">
            <ul className="wemix-link-list">
              {link.map((link) => (
                <WemixLink link={link} key={link.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreAboutWemix;
