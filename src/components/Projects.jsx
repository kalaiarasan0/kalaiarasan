import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Farm Order Management System",
    description: "Built backend APIs for managing farm orders. Designed weight tracking system and created analytical dashboards for animal weight trends.",
    tech: ["FastAPI", "React", "MySQL", "SQLAlchemy"],
    github: "https://github.com/kalaiarasan0/Farm-Order-Management-System-API",
    live: "#"
  },
  {
    title: "AI RAG Application",
    description: "Implemented Retrieval-Augmented Generation integrating LLM APIs to build a powerful document search and Q&A system over corporate data.",
    tech: ["Python", "FastAPI", "LangChain", "Custom Tool-kit"],
    github: "https://github.com/kalaiarasan0",
    live: "#"
  },
  {
    title: "Authentication System",
    description: "Robust JWT authentication featuring access and refresh tokens, secure login APIs, and role-based access control (RBAC).",
    tech: ["FastAPI", "MySQL", "JWT", "Security"],
    github: "https://github.com/kalaiarasan0/Farm-Order-Management-System-API",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-[#111] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 hover:-translate-y-2 transition-all group flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold">{proj.title.charAt(0)}</span>
                </div>
                <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {proj.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                {proj.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
