import React from 'react';
import { FaGithub, FaYoutube, FaDribbble, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn } from '../variants';
import Img from '../assets/profile.jpg'




const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-15 justify-center lg:flex-row lg:items-center'>
        <div className='flex-1 text-center font-secondary lg:text-left lg:pr-16'>
          <motion.h1 
            variants={fadeIn('left', 0.6)}
           inital='hidden' 
           whileInView={'show'} 
           viewport={{ once: false, amount: 0.7 }}
           className="mb-4 text-[40px] font-primary font-bold leading-[0.8] lg:text-[110px]">
            Rosa <span class=" bg-gradient-to-b from-purple-600 to-#FFD700-600 lg:text-[70px]">Pet Resuce</span>
            
          </motion.h1>
          <motion.div
          variants={fadeIn('right', 0.6)}
          inital='hidden'
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.7 }}
           className='mb-6 text-[26px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>We are<br></br></span>
            <TypeAnimation sequence={[
              'Based',
              2000,
              'In',
              2000,
              'Liverpool',
              2000
            ]}
            speed={50}
            className='text-[#FFD700]'
            wrapper='span'
            repeat={Infinity}/>
          </motion.div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Rosa Pet Rescue is a Liverpool based team rescuing and rehabilitaing animals in need.
            They tirelessly work to provide medical care and find loving homes for abandoned pets.

            <br></br>
            Through fundraising events, corporate sponsorships, donations, and a charity
            shop, they secure the necessary funds to sustain their life-saving operations.
            With their unwavering passion and community support, Rosa Pet Rescue offers
            hope and a second chance to countless animals in Liverpool and beyond.
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          
          <a href="#">
            <button className='btn btn-lg'>Contact Us</button>
            </a>
            
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <FaLinkedinIn />
            </a>
            <a href='#'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaTwitter/>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative overflow-hidden w-[600px] h-[700px] py-16">
      <img
        className="group-hover:scale-125 transition-all duration-500  absolute top-0 bottom-0 left-0 right-0 border-4 border-white"
        src={Img}
        alt=""
        width="600px"
        style={{ objectFit: "cover",  margin: "200px auto 0"}}
      />
    </div>
      </div>
      </div>
    </section>;
};

export default Banner;
