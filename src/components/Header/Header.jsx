"use client";

import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)



  const getMenuStyles = (menuIsOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuIsOpen && "-100%" }
    }
  }

  const TOP_OFFSET = 10;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);






  return (
    <section className={`p-4 ${showBackground ? "active" : " h-wrapper "}`}>
      <div className="h-container  flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />


        <OutsideClickHandler onOutsideClick={() => {
          setMenuIsOpen(false)

        }}>
          <div className='flexCenter   h-menu' style={getMenuStyles(menuIsOpen)}>

            <Link activeClass="active"
              to="Residencies"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >Residencies</Link>
            <Link activeClass="active"
              to="Values"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >Our Values</Link>
            <Link activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >Contact Us</Link>
            <Link activeClass="active"
              to="GetStarted"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >Get Started</Link>
            <button className='button'><Link activeClass="active"
              to="ContactUs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >Contact Us</Link></button>

          </div>

        </OutsideClickHandler>


        <div className="menu-icon" onClick={() => setMenuIsOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </section>
  )
}

export default Header