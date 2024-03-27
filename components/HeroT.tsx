"use client";
import React from "react";
import Cta from "./Cta";
import { Core } from "@/conf/cfg";
import TerminalAnimation from "./Terminal";

const HeroSection: React.FC = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroContent">
        <div className="HeroTitle">
          Unlock the Power of Advanced AI with NagaAI
        </div>
        <div className="HeroDescription">
          Elevate your applications with cutting-edge artificial intelligence
          capabilities. NagaAI provides reliable API access to the latest in AI
          technology, including GPT-4 language models, image generation,
          text-to-speech, transcription, translation, moderation and more.
        </div>
        <div className="container">
          <TerminalAnimation />
        </div>
      </div>
      <div className="CtaContainer">
        <Cta
          title="Join our community of AI innovators."
          btnText="Join Discord"
          btnLink={Core.discord}
        />
      </div>
    </div>
  );
};

export default HeroSection;
