import React from "react";

const Sns = ({ sns }) => {
  return (
    <li className="more-sns">
      <a href="/" target="_blank">
        {sns.image}
      </a>
    </li>
  );
};

const moveLink = (e) => {
  console.log(e.target);
};

const WemixLink = ({ link }) => {
  return (
    <li className="wemix-list">
      <button onClick={moveLink} className="list-title">
        <span>{link.name}</span>
        {link.link ? <span>{link.link}</span> : null}
      </button>
      {!link.link && <span className="open">COMING SOON</span>}
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
          alt="WEMIX3.0 info on WEMIX Medium"
        ></img>
      ),
    },
    {
      id: 2,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns2.png"}
          alt="WEMIX3.0 info on Telegram"
        ></img>
      ),
    },
    {
      id: 3,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns3.png"}
          alt="WEMIX3.0 info on Twitter"
        ></img>
      ),
    },
    {
      id: 4,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns4.png"}
          alt="WEMIX3.0 info on Youtube"
        ></img>
      ),
    },
    {
      id: 5,
      image: (
        <img
          className="sns-img"
          src={process.env.PUBLIC_URL + "./image/sns5.png"}
          alt=" WEMIX3.0 info on Facebook"
        ></img>
      ),
    },
  ];

  let link = [
    {
      id: 1,
      name: <img src="./image/wemix_more.png" alt="WEMIX"></img>,
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
      name: <img src="./image/wemixplay_more.png" alt="WEMIXPLAY"></img>,
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
      name: <img src="./image/nile_more.png" alt="NILE"></img>,
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
      name: <img src="./image/wemixfi_more.png" alt="WEMIX.FI"></img>,
      info: "A secure on-chain DeFi platform that supports storage, exchange, borrowing, settlement and investment of crypto-assets powered by oracles that collect, analyze, and broadcast data propagated from a variety of sources for security and validation.",
    },
  ];
  return (
    <>
      <div className="more-wemix">
        <div className="more-title">
          <strong>More about WEMIX3.0</strong>
        </div>
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
