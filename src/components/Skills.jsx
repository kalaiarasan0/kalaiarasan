import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Django", "PHP"]
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Postman"]
  },
  {
    category: "Other",
    skills: ["REST APIs", "System Design", "Data Validation", "ELT pipelines"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#111] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-default"
                  >
                    {skill}
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
