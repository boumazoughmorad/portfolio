"use client";
import React from 'react';
// Countup
import CountUp from 'react-countup';
// Intersection observer
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// Variant
import { fadeIn } from '@/variants';

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex gap-y-16 flex-col items-center lg:gap-x-20 h-screen">
          <h2 className="h2 text-accent text-center">Education</h2>
          <div className="flex flex-col gap-16 lg:flex-row items-center justify-center">
            <motion.div
              variants={fadeIn('top', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="shadow-md bg-white cursor-pointer border rounded-[20px] w-[400px] p-3 h-[400px] flex-col gap-3 flex justify-center items-center"
            >
              <img
                src="/ibnTofail.png"
                className="w-[400px] h-[200px] rounded-t-[20px]"
                alt="Ibn Tofail University"
              />
              <h2 className="text-pink-600 font-bold text-center">
                Master Informatique et Intelligence Artificielle
              </h2>
              <h4 className="text-gray-600 font-medium">
                Université Ibn Tofail (2022 - 2024)
              </h4>
            </motion.div>
            <motion.div
              variants={fadeIn('top', 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="shadow-md bg-white border cursor-pointer rounded-[20px] w-[400px] p-3 h-[400px] flex-col gap-3 flex justify-center items-center"
            >
              <img
                src="/ibnZohr.png"
                className="w-[400px] h-[200px] rounded-t-[20px]"
                alt="Ibn Zohr University"
              />
              <h2 className="text-pink-600 font-bold text-center">
                Licence Fondamentale en Sciences Mathématiques et Informatique
              </h2>
              <h4 className="text-gray-600 font-medium">
                Université Ibn Zohr (2021 - 2022)
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
