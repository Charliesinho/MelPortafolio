import React from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants'
import "./Header.scss"

import { AppWrap } from "../../wrapper"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [ -100, 0 ], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className='app__header-info'      
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <img className='app__profilePicture' src={images.profilePic} alt='profile'/>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Mélina</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Mosaiste</p>
            <p className='p-text'>Peintre</p>
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
      className='app__header-img'  
      >
        {/* <img src={images.profile} alt='profile_img' /> */}
        {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, easeInOut: "easeInOut" }}        
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
        /> */}
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {/* {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))} */}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header , "home");