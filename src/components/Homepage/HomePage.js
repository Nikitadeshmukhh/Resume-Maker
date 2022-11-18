import HeroBanner from "../HeroBanner/HeroBanner";
import Layout from "../Layout/Layout";
import Fanclub from "../Fanclub/FanClub"
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <HeroBanner />
      <Fanclub/>
    </Layout>
  );
};

export default HomePage;
