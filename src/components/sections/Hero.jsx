import React from "react";

const Hero = () => {
  const one = <h3>Hello! I'm</h3>;
  const two = <h1>Karthik</h1>;
  const three = (
    <h1>I build apps and extensions to make the internet a better place</h1>
  );
  const four = (
    <p>
      Fugiat culpa pariatur exercitation aliqua qui veniam do sint culpa
      exercitation ad commodo.
    </p>
  );
  const items = [one, two, three, four];
  return (
    <div id="root">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default Hero;
