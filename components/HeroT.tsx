"use client";
import React from 'react';
import styled from 'styled-components';
import Cta from './Cta';
import { Core } from '@/conf/cfg';
import TerminalAnimation from './Terminal';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Your Gateway to Cutting-Edge AI Technologies.
        </HeroTitle>
        <HeroDescription>
          Explore the frontier of artificial intelligence with Naga. Offering stable and reliable API access to the latest in AI technology.
        </HeroDescription>
        <TerminalContainer>
          <TerminalAnimation />
        </TerminalContainer>
      </HeroContent>
      <CtaContainer>
        <Cta title="Reach out and let's start a conversation." btnText='Join Discord' btnLink={Core.discord} />
      </CtaContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  margin-top: 1rem;
  background-image: url("/patternpad.svg");
`;

const HeroContent = styled.div`
  margin: 0 auto;
  max-width: 36rem;

  @media (min-width: 1024px) {
    max-width: 48rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, white, #71717a);
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  margin: 0 auto;
  color: #e4e4e7;
  font-size: 1.125rem;
  max-width: 65ch;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TerminalContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  
  @media (min-width: 640px) {
    width: 700px;
    height: 450px;
    padding-bottom: 0;
  }
`;

const CtaContainer = styled.div`
  color: white;
`;

export default HeroSection;