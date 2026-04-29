import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, BrainCircuit, Code2 } from 'lucide-react';

const highlights = [
  { icon: <Server size={24} />, title: "Backend Expertise", desc: "Building fast, reliable services using Python, PHP and FastAPI." },
  { icon: <Code2 size={24} />, title: "API Design", desc: "RESTful architecture, security, and performance optimization." },
  { icon: <Database size={24} />, title: "Database Design", desc: "Scalable schema design for MySQL." },
  { icon: <BrainCircuit size={24} />, title: "AI Integration", desc: "Implementing LLMs and RAG systems." }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#111] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a backend developer with a deep passion for building scalable, high-performance systems. With over 2 years of experience, I specialize in designing APIs that power complex business logic and robust integrations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My learning mindset drives me to constantly explore modern technologies, from asynchronous Python with FastAPI to implementing cutting-edge AI features like Retrieval-Augmented Generation (RAG) into business applications.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Clean Code Practices
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Scalable Architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> REST API Development
              </li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-shadow group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
