'use client'
import HeroSection from '@/components/HeroT'
import Nav from '@/components/Nav'
import Reel from '@/components/Reel'

import SectionB from '@/components/SectionB'
import Core from '@/conf/cfg'
import { motion } from 'framer-motion'


export default function Home() {
  
  return (
    <motion.div 
    className='container'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Nav title={Core.title} version={Core.version} discord={Core.discord} />
    <HeroSection  />
    
    <SectionB/>
    <Reel/>
    
</motion.div>

  )
}
