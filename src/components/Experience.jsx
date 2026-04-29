import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Junior Developer",
    company: "Jeevitam Livelihood Tech Solution Pvt Ltd",
    location: "Chennai",
    duration: "May 2024 – Present",
    responsibilities: [
      "Developed scalable REST APIs using FastAPI",
      "Designed database schemas for performance",
      "Integrated Payment gateway for seamless transactions and Ensure Security by encrypting sensitive data",
      "Enhanced security by implementing stateful Authentication",
      "Built backend services for production systems"
    ]
  },
  // Add more experiences here
  {
    id: 2,
    title: "Python Developer Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    duration: "March 2024 - April 2024",
    responsibilities: [
      "Developed a Python-based automation tool to fetch data from Google Sheets using Google APIs and send personalized emails to contacts listed in the sheet.",
      "Integrated Google Sheets API for data retrieval and automated email delivery based on dynamic spreadsheet inputs.",
      "Improved efficiency by eliminating manual email communication through end-to-end automation."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#111] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 last:mb-0">
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg shadow-blue-500/30 z-10">
                <Briefcase size={18} />
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 text-left'
                }`}
              >
                <div className={`bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative ${
                  index % 2 === 0 ? 'text-left' : 'text-left'
                }`}>
                  {/* Arrow pointer for desktop */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 bg-gray-50 dark:bg-[#1a1a1a] border-t border-r border-gray-100 dark:border-gray-800 rotate-45 ${
                    index % 2 === 0 ? '-right-2 border-l-0 border-b-0' : '-left-2 border-t-0 border-r-0 border-b border-l'
                  }`}></div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{exp.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className={`space-y-2 text-gray-700 dark:text-gray-300 text-sm ${index % 2 === 0 ? 'md:list-inside' : ''}`}>
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-500 mt-1">▹</span>
                        <span className="flex-1">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
