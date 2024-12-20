"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // To track which phrase we're typing
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    const texts = [
      "uusing chat",
      "gget features",
      "rread user stories",
      "ssee architecture",
      "kknow dependencies",
      "wwitness milestones",
    ];
    let charIndex = 0;
    let interval: NodeJS.Timeout;

    const typeText = () => {
      const currentText = texts[currentIndex];
      if (charIndex < currentText.length - 1) {
        setDisplayText((prev) => prev + currentText[charIndex]);
        charIndex++;
      } else {
        clearInterval(interval);
        if (currentIndex < texts.length - 1) {
          setTimeout(() => {
            setDisplayText(""); // Clear the text for the next phrase
            setCurrentIndex((prev) => prev + 1); // Move to the next phrase
          }, 1000); // Wait for 1 second before starting the next phrase
        } else {
          setLooping(true); // Set looping to true when all texts are displayed
        }
      }
    };

    if (!looping) {
      interval = setInterval(typeText, 60); // Type at an interval, adjusting for the speed
    } else {
      // After completion, reset the typing sequence
      setTimeout(() => {
        setDisplayText(" ");
        setCurrentIndex(0); // Restart from the first phrase
        setLooping(false);
      }, 2000); // Wait for 2 seconds before restarting
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [looping, currentIndex]);

  return (
    <motion.div className="min-h-[60px] text-4xl font-bold text-[#f8c84c] dark:text-[#f8c84c] md:text-6xl">
      {displayText &&
        displayText.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.1, // Delay between each word's appearance for typewriter effect
            }}>
            {word}{" "}
          </motion.span>
        ))}
    </motion.div>
  );
};

export default TypewriterText;
