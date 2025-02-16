"use client"
import React from 'react';
// Icon
import { BsArrowUpRight } from 'react-icons/bs'
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '@/variants'

// Services data
const services = [
    {
		name: 'BackEnd developemnt',
		description: 'Server Management / Database Management / API Development / Authentication and Authorization /Testing and Debugging.',
        tools: ['Spring Boot', 'JEE','Node.js', 'Flask'],
		link: 'Learn more',
	},
    {
		name: 'FrontEnd Developement',
		description: 'User Interface (UI) Design / Core Technologies /Frontend Frameworks and Libraries / API Integration.',
        tools: ['React', 'Vue.js', 'Angular', 'Tailwind CSS', 'Bootstrap'], 
        link: 'Learn more',
	},
    {
        name: 'UI/UX Design',
        description: 'User Experience (UX) Principles / User Interface (UI) Design / Wireframing & Prototyping / Design Systems & Accessibility.',
        tools: ['Figma', 'Adobe XD'],
        link: 'Learn more'
    },
    
	
]

export default function  Services()  {
	return (
		<section className="section" id="services">
			<div className="container mx-auto">
				<div className='flex flex-col lg:flex-row'>
					{/* Text & Image */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
					>
						<h2 className='h2 text-accent mb-6'>What I Do.</h2>
						<h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
						<button className='btn btn-sm'>See my work</button>
					</motion.div>

					{/* Services */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
					>
						{/* Service list */}
						<div>
							{
								services.map((service, index) => {
									// destructure service
									const { name, description,tools, link } = service;
									return (
										<div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
											<div className='max-w-[476px]'>
												<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
													{name}
												</h4>
												<p className='font-secondary leading-tight'>
													{description}
												</p>
                                                <p className='font-secondary text-gray-500 flex gap-2'>
                                                {tools.map((tool, i) => {
                                                    return(
                                                        <span
                                                        key={i}
                                                        className="underline underline-offset-4 decoration-4 decoration-transparent relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-gradient-to-r after:from-[#406aff] after:via-[#3bace2] after:to-[#ff56f6] after:rounded-full"
                                                        >
                                                        {tool}
                                                        </span>


                                                       )
                                                })
                                                }
													
												</p>
											</div>
											<div className='flex flex-col flex-1 items-end'>
												<a href="#services" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
													<BsArrowUpRight />
												</a>
												<a href="#services" className='text-gradient text-sm'>
													{link}
												</a>
											</div>
										</div>
									)
								})
							}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};


