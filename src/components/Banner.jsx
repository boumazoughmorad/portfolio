"use client";
import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaYoutube, FaDribbble, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from '@/variants'

export default function Banner() {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
    <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            {/* Text */}
            <div className="flex-1 text-center font-secondary lg:text-left">
                <motion.h1
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={'show'} 
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
                >
                    Morad <span>Boumazough</span>
                </motion.h1>

                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                >
                    <span className="text-white mr-4">I am a</span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Developer Full Stack',
                         
                            'Java / Angular..♥',
                            'Java / React..♥',
                            'JEE..♥',
                            'Developer Full Stack',
                            2000,
                         
                            
                        ]}
                        speed={1}
                        className="text-accent"
                        wrapper="span"
                        repeat={Infinity}
                    />
                </motion.div>

                <motion.p
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="mb-8 max-w-lg mx-auto lg:mx-0"
                >
                    Développeur full-stack Java JEE | Spring Boot | Angular avec expérience dans la création d’applications web
                    performantes et évolutives. Passionné par les technologies modernes et la conception d’architectures robustes.
                </motion.p>

                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
                >
                    <button className="btn btn-lg">Contact me</button>

                    <a href="#home" className="text-gradient btn-link">
                        My Portfolio
                    </a>
                </motion.div>

                {/* Socials */}
                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
                >
                    <a href="https://www.linkedin.com/in/boumazough-morad/" target='__black'>
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/boumazoughmorad" target='__black'>
                        <FaGithub />
                    </a>

  
                </motion.div>
            </div>

            {/* Image */}
            <motion.div
                variants={fadeIn('down', 0.5)}
                initial="hidden"
                whileInView={'show'}
                className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
            >
                <img src="/2.png" alt=""  className='rounded-b-full rounded-bl-md'/>
            </motion.div>
        </div>
    </div>
</section>
  )
}
