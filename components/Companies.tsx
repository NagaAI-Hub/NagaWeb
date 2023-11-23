"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface InfiniteLooperProps {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}

const InfiniteLooper: React.FC<InfiniteLooperProps> = ({
  speed,
  direction,
  children,
}) => {
  const [looperInstances, setLooperInstances] = useState<number>(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const resetAnimation = useCallback(() => {
    const currentInnerRef = innerRef.current;
    if (currentInnerRef) {
      currentInnerRef.setAttribute("data-animate", "false");

      setTimeout(() => {
        currentInnerRef.setAttribute("data-animate", "true");
      }, 10);
    }
  }, [innerRef]);

  const setupInstances = useCallback(() => {
    const currentOuterRef = outerRef.current;
    const currentInnerRef = innerRef.current;
    if (!currentInnerRef || !currentOuterRef) return;

    const { width } = currentInnerRef.getBoundingClientRect();
    const { width: parentWidth } = currentOuterRef.getBoundingClientRect();

    const widthDeficit = parentWidth - width;
    const instanceWidth = width / currentInnerRef.children.length;

    if (widthDeficit) {
      setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
    }

    resetAnimation();
  }, [looperInstances, resetAnimation]);

  useEffect(() => {
    setupInstances();
  }, [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);
    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ModelCompaniesProps {
  images: string[];
}

const ModelCompanies: React.FC<ModelCompaniesProps> = ({ images }) => (
  <InfiniteLooper speed={10} direction="right">
    <div className="contentBlock contentBlock--two">
      {images.map((image, index) => (
        <Image style={{color:"white"}} className="p-2" src={`/logos/${image}`} width={120} height={100} key={index} alt="image" />
      ))}
      
    </div>
    
  </InfiniteLooper>
);

export default ModelCompanies;
