"use client"
import HeroSection from '@/components/HeroT'
import Reel from '@/components/Reel'
import SectionB from '@/components/SectionB'
import {Core} from '@/conf/cfg'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
export default function Home() {
  const DynamicXmas = dynamic(() => import('@/components/XmasRain'), {
    loading: () => <p>Loading...</p>,
  })
  return (
    <div 
    className='container'
  >
    <DynamicXmas />
    <Nav title={Core.title} version={Core.version} discord={Core.discord} />
    <HeroSection  />
    <SectionB/>
    <Reel/>
</div>

  )
}
