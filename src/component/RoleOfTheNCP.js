import React from "react";

const Role = ({ role }) => {
  return (
    <li className="role">
      <div className="role-zone">{role.image}</div>
      <div className="role-info">
        <strong>{role.title}</strong>
        <span>{role.info}</span>
        <span className="role-option">{role.text}</span>
      </div>
    </li>
  );
};

const RoleOfTheNCP = () => {
  let role = [
    {
      id: 1,
      title: "Integrity & Security",
      info: `As authorized members of node operation, NCPs are responsivle for facilitation of infrastucture or hardware1 as required. They also play a vital role in ensuring integrity and security of the WEMIX newwork by continuously sharing block information to neighboring nodes.`,
      text: "1 Optional",
      image: (
        <img
          className="role-img"
          src={process.env.PUBLIC_URL + "./image/integrity_security.png"}
          alt="integrity and Security"
        ></img>
      ),
    },
    {
      id: 2,
      title: "consensus",
      info: `Crucial data and newwork status for blockchain operation is calculated through SPoA State-based Proof of Authority RAFT Reliable And Fault Tolerant consensus algorithm ensuring consistency of datastores on all nodes in the cluster.`,
      image: (
        <img
          className="role-img"
          src={process.env.PUBLIC_URL + "./image/consensus.png"}
          alt="Consensus"
        ></img>
      ),
    },
    {
      id: 3,
      title: "Governance",
      info: `NCPs are granted on-chain voting rights in decidion-making process to implement changes or improvements in the blockchain protocol.`,
      image: (
        <img
          className="role-img"
          src={process.env.PUBLIC_URL + "./image/governance.png"}
          alt="Governance"
        ></img>
      ),
    },
    {
      id: 4,
      title: "Validation",
      info: `The nodes of selected NCPs receive newly created blocks or transactions on the chain, authorize and validate new blocks and transfer the verified data to other NCP nodes.`,
      image: (
        <img
          className="role-img"
          src={process.env.PUBLIC_URL + "./image/validation.png"}
          alt="Validation"
        ></img>
      ),
    },
  ];
  return (
    <>
      <div className="roles">
        <strong>Roles of NCPs</strong>
        <ul>
          {role.map((role) => (
            <Role role={role} key={role.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default RoleOfTheNCP;
