"use client";
import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';
import Cta from './Cta';
import Core from '@/conf/cfg';
const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 450 * 2,
        height: 450 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [39.0291678, 125.5862294], size: 0.02 },
          { location: [50.80940011, 19.0403719], size: 0.02 },
          { location: [39.9390304, 116.2326555], size: 0.02 },
          { location: [48.6040185, 37.9690239], size: 0.02 },
          { location: [31.5017034, 34.4571027], size: 0.02 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        }
      });

      return () => globe.destroy();
    }
  }, []);

  return (
    <div className="flex flex-col text-white mt-4" style={{ backgroundImage: 'url("/patternpad.svg")' }}>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 py-4">
          Your Gateway to Cutting-Edge AI Technologies.
        </h1>
        <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
          Explore the frontier of artificial intelligence with Naga. Offering stable and reliable API access to the latest in AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <canvas ref={canvasRef} style={{ width: 450, height: 450, aspectRatio: 1 }} />
        </div>
      </div>
      <div className="text-white">
        <Cta title="Reach out and let's start a conversation." btnText='Join Discord' btnLink={Core.discord}/>
      </div>
    </div>
  );
};

export default HeroSection;
