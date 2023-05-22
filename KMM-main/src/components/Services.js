import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Guidance on how to Look after Pets For Primary School Children',
    description: 'Firstly, pets need love,attention and time. Feeding, providing water, and regular exercise are essential. Establishing a routine helps pets feel secure. Children should also learn about specific pet needs, such as grooming for dogs or cleaning litter boxes for cats.  Teaching kindness, respect, and empathy towards animals is crucial. Children should handle pets gently and understand their body language to avoid distress. Following these guidlines, children can become responsible and compassionate pet owners',
    link: 'Learn more',
  },
  {
    name: 'Rules for Adults regarding Animal Adoption',
    description: 'When it comes to adopting animals, the rules can vary depending on the specific type of animal you are considering. Different animals may have different adoption requirements and regulations. It is best to contact local animal adoption organizations or shelters that specialize in the type of animal you are interested in adopting. They will provide you with the specific rules and guidelines you need to follow that particular type of animal.',
    link: 'Learn more',
  },
  
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.3 }}       
        className='flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 max-h-[620px] max-w-[420px] 
    
    rounded-half  
    my-8
    md:w-[800px]   
    md:p-2'>
          <h2 className='h2 text-accent mb-6'>Information For Adoptions</h2>
          <h3 className='h3 max-w-[455px] mb-16'>

            Primary School Children guidance to Look after pets 
            &
            Adult Adopters rules for Adoptions
          </h3>
          <a href='#home'>
          <button className='btn btn-sm'>Home Screen</button>
          </a>
        </motion.div>
          {/* services */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}  
        className='flex-1'>
          <div>
            {services.map((service, index)=> {
              const {name, description, link} = service;
              return (
                <div className='border-b border-white/20 h-[350px] mb-[48px] flex' key={index}> 
                  <div className='max-w-[556px]'>
                    <h4 className='text-[30px] tracking-wider font-primary font-semibold mb-5'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                    <div className='flex flex-col flex-1 items-end '>
                      <a href='#' className='btn w-8 h-6 mb-[42px] flex justify-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
              </div>
              );
              
            })}
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
