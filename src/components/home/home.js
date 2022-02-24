import React from "react";
import Banner from "./banner";
import Delete from "./delete";
import Notes from "./notes";
import Option from "./option";

const Home = () => {
  return (
    <section className="container-banner">
      <Banner />
      <Option />
      <Notes />
      <Delete />
    </section>
  );
};

export default Home;
