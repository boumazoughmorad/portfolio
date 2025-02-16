"use client"
import React from 'react';
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '@/variants'
import Card from './Card';
// Img
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
const data=[
    {
        id:1,
        image:"/image.png",
        title:'cofee management',
        github:'https://github.com/boumazoughmorad/Cafe_Management',
        tools:'Spring Boot - ReactJs - MySQL',
        demo : "" 
	},
    {
        id:2,
        image:"/image2.png",
        title:'Microservices Based System for Customer Management',
        github:'https://github.com/boumazoughmorad/Microservices-Based-System-for-Customer-Management',
        tools:'Spring Boot ',
        demo : "" 
	},
    {
        id:3,
        image:"/image3.jpeg",
        title:'hotels reservation systems',
        github:'https://github.com/Booking-IIA',
        tools:'Spring Boot - Angular - Oracle',
        demo : "" 
	},
    {
        id:4,
        image:"/image4.png",
        title:'Application for Management and Invoice Creation',
        github:'https://github.com/boumazoughmorad/Application-for-Management-and-Invoice-Creation',
        tools:'Spring Boot - ReactJs - MySQL',
        demo : "" 
	},
    {
        id:5,
        image:"/image5.png",
        title:'Logistics Chain Management Application for Factories',
        github:'https://github.com/boumazoughmorad/Logistics-Chain-Management-Application-for-Factories',
        tools:'Laravel - Angular - MySQL',
        demo : "" 

    }
]

export default function  Work () {
	return (
		<section className="section" id="work">
		<div className="container mx-auto">
			<div className='flex flex-col lg:flex-row gap-x-10'>
				<motion.div
					variants={fadeIn("right", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}
					className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
				>
					{/* Text */}
					<div>
						<h2 className='h2 leading-tight text-accent'>
							My Latest <br />
							Work
						</h2>
						<p className='max-w-sm mb-16'>
						Welcome! These are my 3 latest projects. They are full-stack projects. I have many other projects I've created, and some are still in progress. If you want to see more, click the button.
						</p>
						<button className='btn btn-sm' href="https://github.com/boumazoughmorad">View all projects</button>
					</div>
					{/* Image */}
					<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
						{/* Overlay */}
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
						{/* Img */}
						<img className='group-hover:scale-125 transition-all duration-500 w-full  h-full' src={"/image.png"} alt="" />
						{/* Pretitle */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
							<a className='text-gradient cursor-pointer' href='https://github.com/boumazoughmorad/Cafe_Management' target='__black'>
							Github
							</a>
						</div>
						{/* Title */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
							<span className='text-[14px] text-white'>
							Cofee management (Spring Boot - ReactJs - MySQL)
							</span>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={fadeIn("left", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}
					className='flex-1 flex flex-col gap-y-12 '
				>
					
					<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-16'>
						{/* Overlay */}
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
						{/* Img */}
						<img className='group-hover:scale-125 transition-all duration-500 w-full  h-full' src={"/app.png"} alt="" />
						{/* Pretitle */}
						<div className='absolute  -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
						<a className='text-gradient cursor-pointer' href='https://github.com/boumazoughmorad/Cafe_Management' target='__black'>
							Github
							</a>
							<a className='btn btn-sm ml-4 cursor-pointer' href='https://application-movies-manage-git-4dd90c-morad-boumazoughs-projects.vercel.app/' target='__black'>
							link
							</a>
						</div>
						{/* Title */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
							<span className='text-[14px] text-white'>
								Movies Management
							</span>
						</div>
					</div>
					{/* Image */}
					<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
						{/* Overlay */}
						<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
						{/* Img */}
						<img className='group-hover:scale-125 transition-all duration-500 w-full  h-full' src={"/image2.png"} alt="" />
						{/* Pretitle */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
						<a className='text-gradient cursor-pointer' href='https://github.com/boumazoughmorad/Microservices-Based-System-for-Customer-Management' target='__black'>
							Github
							</a>
						</div>
						{/* Title */}
						<div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
							<span className='text-[14px] text-white'>
							Microservices Based System for Customer Management (Spring Boot)
							</span>
						</div>
					</div>

				</motion.div>
			</div>
		</div>
	</section>
	);
};


