import React from "react";

const OurPartners = ({ partner }) => {
  return (
    <li className="partner">
      <div className="partner-img-zone">{partner.image}</div>
      <div className="partner-info">
        <div>
          <span>{partner.title}</span>
          <a href="/" target="_blank">
            <img src="./image/ic_link.png" alt="partner link" />
          </a>
        </div>
        {partner.info}
      </div>
    </li>
  );
};

const OurWonders = () => {
  let partner = [
    {
      id: 1,
      title: "Circle",
      info: "Circle leads the global financial technology through digital currency innovation and creation of financial infrastructure. It also provides growth opportunities for businesses and investors by linking existing financial systems and global leading public chains.",
      image: (
        <img
          className="partner-img"
          src={process.env.PUBLIC_URL + "./image/circle.png"}
          alt="Partner Circle"
        ></img>
      ),
    },
    {
      id: 2,
      title: "Blockdaemon",
      info: "Blockdaemon, founded in new York in 2017, provides top-tier infrastructure building tools for blockchain companies. Blockdaemon's services help blockchain companies to swiifly deploy and manage blocks.",
      image: (
        <img
          className="partner-img"
          src={process.env.PUBLIC_URL + "./image/blockdaemon.png"}
          alt="Partner blockdaemon"
        ></img>
      ),
    },
    {
      id: 3,
      title: "Multichain",
      info: "As an open-source blockchain platform, Multichain provides a world-class solution that enables users to freely transact across chains, pushing the boundaries of blockchain",
      image: (
        <img
          className="partner-img"
          src={process.env.PUBLIC_URL + "./image/multichain.png"}
          alt="partner multichain"
        ></img>
      ),
    },
    {
      id: 4,
      title: "DSPV Labs",
      info: "DSRV Labs is a blockchain validator that provides service to enable clients to participate safely and easily in the Proof of Stake network though block validation and network monitoring.",
      image: (
        <img
          className="partner-img"
          src={process.env.PUBLIC_URL + "./image/dsrv.png"}
          alt="partner DSPV Labs"
        ></img>
      ),
    },
  ];
  return (
    <div className="partners-zone">
      <div className="our-partners">
        <strong></strong>
        <p>
          World leaders in verious fields and industries, collaborating with
          WEMIX3.0 to bring about change to your on-chain experience.
        </p>
      </div>
      <div className="partners">
        <ul>
          {partner.map((partner) => (
            <OurPartners partner={partner} key={partner.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurWonders;
