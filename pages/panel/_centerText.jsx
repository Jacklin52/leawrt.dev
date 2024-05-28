import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
  const texts = ['Stal Bot Owner!', 'Hello, I`m Mehmet, Interested in Javascript and Typescript since 3th Grade. I live in Turkey.', 'I`m Just a Normal Person :)'];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const writeSpeed = 100; // milisaniye cinsinden
  const eraseSpeed = 50; // milisaniye cinsinden
  const waitTime = 1000; // milisaniye cinsinden

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const writeText = async () => {
      for (let i = 0; i <= texts[currentTextIndex].length; i++) {
        setDisplayedText(texts[currentTextIndex].substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, writeSpeed));
      }

      await new Promise((resolve) => setTimeout(resolve, waitTime));

      const totalEraseTime = texts[currentTextIndex].length * eraseSpeed;
      for (let i = texts[currentTextIndex].length; i >= 0; i--) {
        setDisplayedText(texts[currentTextIndex].substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, eraseSpeed));
      }

      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    writeText();
  }, [currentTextIndex]);

  return <div>{displayedText}</div>;
};

export default TextAnimation;
