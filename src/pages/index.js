import React, { useState } from "react";
import Layout from "../components/Layout";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";

const Home = () => (
  <Layout>
    <Hero />
    {/* <Skills /> */}
    <About/>
  </Layout>
);

export default Home;
