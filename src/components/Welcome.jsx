import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";

const translations = [
  "Welcome",
  "வணக்கம்",
  "ഹലോ",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "नमस्ते",
  "ہیلو",
  "Hola",
  "Hallo",
  "Bonjour",
  "مرحبا",
  "你好",
  "こんにちは",
  "Hallo",
];

const Welcome = () => {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: Math.random() * (13 - 0) + 0,
    delay: 500,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const num = number.to((n) => n.toFixed())
  return (
    // <animated.div>{translations[number.to((n) => n.toFixed())]}</animated.div>
    <animated.div style={{color: 'white'}}>{num}</animated.div>
  );
};

export default Welcome;
