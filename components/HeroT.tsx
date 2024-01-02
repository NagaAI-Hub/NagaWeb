"use client";
import React from 'react';

import Cta from './Cta';
import {Core} from '@/conf/cfg';
import dynamic from 'next/dynamic'
import Promotion from './Promotion';
const HeroSection: React.FC = () => {
  const DynamicGlobe = dynamic(() => import('./Globe'), {
    loading: () => <p>Loading...</p>,
  })

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
          <DynamicGlobe />
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
