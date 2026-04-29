import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-2">
            Hi, I'm Kalaiarasan
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 dark:text-white">
            <Typewriter
              options={{
                strings: [
                  'Backend Developer',
                  'FastAPI Specialist',
                  'API Architect'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
            A passionate backend developer with over 2 years of experience building scalable APIs, AI-integrated systems, and robust database architectures. Focused on performance, clean architecture, and real-world problem solving.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            {/* <a
              href="#"
              className="cursor-pointer border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Geometric background behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] -rotate-3 blur-sm opacity-50 dark:opacity-30"></div>
            
            <img
              src="https://avatars.githubusercontent.com/u/157881666?v=4"
              alt="Kalaiarasan Profile"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
