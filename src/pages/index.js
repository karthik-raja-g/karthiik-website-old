import React, { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
// import { animated, useSpring, config } from "react-spring";

// const Home = () => {
//   const [flip, set] = useState(false);
//   const { number } = useSpring({
//     reset: true,
//     reverse: flip,
//     from: { number: 0 },
//     number: Math.random(),
//     delay: 500,
//     config: config.molasses,
//     onRest: () => set(!flip),
//   });

//   return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;
// };


const Home = () => (
  <Layout>
    <Hero />
    hola
    <p>jdhdh</p>
  </Layout>
);

export default Home;