"use client";
import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';
import Cta from './Cta';
import {Core} from '@/conf/cfg';
const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (canvasRef.current) {
      let width = 0;
      const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
      window.addEventListener('resize', onResize)
      onResize()
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2 * 0.4,
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
          state.width = width * 2
          state.height = width * 2 * 0.6
        }
      });

      return () => globe.destroy();
    }
  }, []);

  return (
    <div className="flex flex-col text-white mt-4" style={{ backgroundImage: 'url("/patternpad.svg")' }}>
      <div className="text-center mx-auto sm:max-w-1xl lg:max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 py-4">
          Your Gateway to Cutting-Edge AI Technologies.
        </h1>
        <p className="mx-auto text-zinc-200 dark:text-zinc-100 md:text-xl max-w-prose">
          Explore the frontier of artificial intelligence with Naga. Offering stable and reliable API access to the latest in AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div style={{
    width: '100%',
    aspectRatio: 1/.6,
    margin: 'auto',
    position: 'relative',
  }}>
           <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 1,
        transition: 'opacity 1s ease',
      }}
    />
        </div>
        </div>
      </div>
      <div className="text-white">
        <Cta title="Reach out and let's start a conversation." btnText='Join Discord' btnLink={Core.discord}/>
      </div>
    </div>
  );
};

export default HeroSection;
