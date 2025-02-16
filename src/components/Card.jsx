"use client"

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants'

const Card = ({ id, title, image }) => {
  return (
    <motion.div
      key={id}
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex-1 flex flex-col gap-y-6 lg:gap-y-8 mb-12 lg:mb-16 bg-cover p-4 rounded-md"
      style={{ backgroundImage: `url(${image})` }} 
    >
      {/* Text Section */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-primary leading-tight mb-4">{title}</h2>
        <p className="text-sm lg:text-base text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deserunt numquam deleniti accusamus magnam non. Ipsum illum nostrum nihil.
        </p>
        <button className="btn bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          View All Projects
        </button>
      </div>

      {/* Image Section */}
      <div className="group relative overflow-hidden border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Overlay */}
        <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>

        {/* Image */}
        {/* <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          src={image}
          alt={title}
        /> */}

        {/* Pretitle */}
        <div className="absolute bottom-12 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50">
          <span className="text-lg font-medium text-accent">
            UI/UX Design
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50">
          <span className="text-3xl font-semibold text-white">
            Project Title
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
