import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup"
import { motion } from 'framer-motion'
import "./Hero.css";
const hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='padding innerWidth hero-container flexCenter'>
        {/*left side*/}

        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className="orange-circle" />
            <motion.h1 initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }}>Discover
              <br />  Most Suitable <br />
              Property</motion.h1>
          </div>

          <div className='flexColStart hero-des secondaryText font-semibold '>
            <span>Find a variety of properties that suits you very easilty </span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className='flexCenter  search-bar'>
            <HiLocationMarker color='#4066ff' size={25} />
            <input type="text" />
            <button className="button ">Search</button>

          </div>

          <div className='flexCenter stats'>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>

              <span className='secondaryText'> Premium Product </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2000} duration={6} />
                <span>+</span>
              </span>

              <span className='secondaryText'> Happy Customer </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={6} />
                <span>+</span>
              </span>

              <span className='secondaryText'> Awards Winning</span>
            </div>

          </div>

        </div>

        {/*Right side*/}

        <div className=" flexCenter hero-right">

          <motion.div className='image-container' initial={{ x: "7rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
            <img src="./hero-image.png" alt="" />
          </motion.div>


        </div>

      </div>
    </div>
  )
}

export default hero