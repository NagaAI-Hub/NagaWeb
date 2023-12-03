'use client'
import HeroSection from '@/components/HeroT'
import Nav from '@/components/Nav'
import Reel from '@/components/Reel'

import SectionB from '@/components/SectionB'
import {Core} from '@/conf/cfg'



export default function Home() {
  
  return (
    <div 
    className='container'
  >
    <Nav title={Core.title} version={Core.version} discord={Core.discord} />
    <HeroSection  />
    
    <SectionB/>
    <Reel/>
    
</div>

  )
}
