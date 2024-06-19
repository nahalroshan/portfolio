import React, { useRef } from 'react'
import './parallax.scss'
import { motion,useScroll,useTransform } from 'framer-motion'
export const Parallax = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start" , 'end start']
    })
    const yText = useTransform(scrollYProgress,[0,1],["0%","100%"])
    const xBg = useTransform(scrollYProgress,[0,1],["-10%","50%"])
    const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"])
  return (
    <div className='parallax'>
        <motion.h1 style={{y:yText}}>What I Did ?</motion.h1>
        <motion.div className='mountains' style={{y:yBg}}></motion.div>
        
        <motion.div className='stars'  style={{x:xBg}}></motion.div>
    </div>
  )
}
