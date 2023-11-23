'use client'
import HeroSection from '@/components/HeroT'
import Reel from '@/components/Reel'

import SectionB from '@/components/SectionB'
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
    <HeroSection  />
    
    <SectionB/>
    <Reel/>
    
</motion.div>

  )
}
