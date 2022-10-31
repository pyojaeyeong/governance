import React from "react";
import Top from "./Top";
import "../App.css";
import Frame from "./Frame";
import RoleOfTheNCP from "./RoleOfTheNCP";
import Become from "./Become";
import Gnb from "./Gnb";
import OurWonders from "./OurWonders";
import Roadmap from "./RoadMap";
import MoreAboutWemix from "./MoreAboutWemix";
import Pretendard from "./Pretendard";

const Home = () => {
  return (
    <>
      <Gnb />
      <Top />
      <Frame />
      <RoleOfTheNCP />
      <Become />
      <OurWonders />
      <Roadmap />
      <MoreAboutWemix />
      <Pretendard />
    </>
  );
};

export default Home;
