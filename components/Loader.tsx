"use client";
// Deprecation!
import { useState, useEffect } from "react";

const Loading = () => {
  const [binaryString, setBinaryString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (binaryString.length < 100) {
        setBinaryString((prev) => prev + (Math.random() > 0.5 ? "1" : "0"));
      } else {
        clearInterval(interval);
      }
    }, 1); // Update every 100 milliseconds

    return () => clearInterval(interval);
  }, [binaryString]);

  return <div>{binaryString}</div>;
};

export default Loading;
