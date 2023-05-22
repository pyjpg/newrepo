import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import Img from '../assets/profile.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Slider from './Slider';
import { SliderData } from './SliderData';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto flex lg:flex">
  <div className="lg:w-1/2 py-20">
    <h2 className="h2 text-accent">Facts + Showcase</h2>
    <h3 className="h3 mb-4">
      Some Fun Facts About Our Animals
    </h3>
    <p className="mb-4 mb-md-5 mb-lg-6">Fact 1: The African Elephant is the largest land animal, but did you know it can also communicate using infrasound? These low-frequency sounds can travel long distances and are used by elephants for long-range communication.</p>
    <p className="mb-4 mb-md-5 mb-lg-6">Fact 2: The Axolotl, a type of salamander native to Mexico, has incredible regenerative abilities. If it loses a limb, it can regrow a perfect replacement, including bones,muscles and nerves.</p>
    <p className="mb-4 mb-md-5 mb-lg-6">Fact 3: The bearded Vulture has a unique feeding habit. It primarily feeds on bones, and to access the nutritious marrow inside, it drops them from high in the air,shattering them on rocks below.</p>

    <div className="flex gap-x-6 lg:gap-x-10 mb-12">
      <div>
        <div>
          <div className="text-[40px] font-tertiary text-gradient mb-2">
            {inView ? <CountUp start={0} end={435} duration={3} /> : null}
          </div>
          <div className="font-primary text-sm tracking-[2px]">
            Animals Rescued: 
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-[40px] font-tertiary text-gradient mb-2">
            {inView ? (
              <CountUp start={0} end={18.12503} duration={3} />
            ) : null}
          </div>
          <div className="font-primary text-sm tracking-[2px]">
            Countries Visited:
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-[40px] font-tertiary text-gradient mb-2">
            {inView ? <CountUp start={0} end={6} duration={3} /> : null}
          </div>
          <div className="font-primary text-sm tracking-[2px]">
            Branches 
            Available:
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-x-8 items-center">
      <a href="#home">
        <button className="btn btn-lg">Contact Us</button>
      </a>
      <a href="#services" className="text-gradient btn-link">
        Fun Facts
      </a>
    </div>
  </div>
  <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] px-8 '>
          <Slider slides={SliderData} className='rounded-full  
          my-4
          md:w-[800px]   
          md:p-2'/>
    
     
        
</div>


</div>
</div>


  );
};

export default About;
