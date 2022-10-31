import React from "react";

const Frame = () => {
  return (
    <div className="ncp">
      <div className="wonders">
        <strong>
          WONDERS<sup>1</sup>, also known as NCPs<sup>2</sup>, are the authority
          members chosen to represent the interests of the WEMIX community as a
          whole via governance.
        </strong>
        <p>
          <sup>1</sup>WONDER : WEMIX On-chain Network of Decentralized Ecosystem
          Regulators
        </p>
        <p>
          <sup>2</sup>NCP : Node Council Partner
        </p>
      </div>
      <div>
        <ul className="users">
          <li className="user-list">
            <p className="user-title">Staking Required</p>
            <strong className="staking-user">1.5M</strong>
            <p>
              Each NCP is required to stake 1,500,000 WEMIX to their allocated
              vaildator node. As official council members and representatives of
              the community, NCPs are then given full authority over consensus
              and access to mainnet parameters through governance.
            </p>
          </li>
          <li className="user-list">
            <p className="user-title">Guaranteed APR</p>
            <strong>21.024%</strong>
            <p>
              The PMR<sub>permanent Minting Reward</sub> is distributed
              automatically as 40% To ncp (each WONDER node receives 1%
              <sup>*</sup>), 10% to stakers, 25% for ecosystem and 25% towards
              the maintenance of the mainnet and the ecosystem.
            </p>
            <p>
              <sup>*</sup>1% per node is equivalent to approximately 21.024% APR
              per node.
            </p>
          </li>
          <li className="user-list">
            <p className="user-title">Allocation of rewards</p>
            <ul className="rewards">
              <li className="rewards-item">
                <p>PMR ⓘ</p>
                <strong>40%</strong>
                <p>1% per WONDER</p>
              </li>
              <li className="rewards-item">
                <p>Staking</p>
                <strong>10%</strong>
              </li>
              <li className="rewards-item">
                <p>Ecosystem</p>
                <strong>25%</strong>
              </li>
              <li className="rewards-item">
                <p>Maintenance</p>
                <strong>25%</strong>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Frame;
