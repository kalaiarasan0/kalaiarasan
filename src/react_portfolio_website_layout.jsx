import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kalaiarasan E</h1>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
      {/* <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24"> */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg opacity-90 mb-6">
              I build secure, scalable, high‑performance web applications using FastAPI & React.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow">View Projects</a>
              <a href="#contact" className="border border-white px-6 py-3 rounded-xl font-semibold">Contact Me</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/157881666?v=4"
              // src="https://media.licdn.com/dms/image/v2/D5635AQEPp-C8RsGjWA/profile-framedphoto-shrink_400_400/B56ZsnmTjjKIAc-/0/1765895912052?e=1771491600&v=beta&t=K3cEu7PIUSsxq3Xia0yb9nwbE7weCO8nHbNYz8Y31Fw"
              alt="Profile"
              className="w-60 h-60 rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          I am a Full Stack Developer with strong experience in FastAPI, React, PHP, and SQL.
          Currently building a Farm Product & Animal Management System with real‑world business logic,
          authentication, pagination, inventory tracking and event logging.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["FastAPI", "React", "Python", "PHP", "MySQL", "PostgreSQL", "AWS", "Docker", "Git", "Linux"].map(skill => (
              <div key={skill} className="bg-gray-100 rounded-xl p-4 text-center font-semibold shadow">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[{
            title: "Farm Product & Animal Management System",
            desc: "Complete livestock tracking, milk event logging, inventory movement, authentication and reporting system.",
            tech: "FastAPI, React, SQLAlchemy, MySQL"
          }, 
          // {
          //   title: "Business Partner Profile Platform",
          //   desc: "Secure profile management, file uploads, AWS S3 integration, geo-location features.",
          //   tech: "PHP, MySQL, AWS S3"
          // }
        ].map((proj, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
              <p className="text-gray-600 mb-3">{proj.desc}</p>
              <span className="text-sm font-medium text-blue-600">{proj.tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Let’s Build Something Great</h3>
          <p className="mb-10">Open for full‑time roles, freelance, and exciting projects.</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:kalaiarasanpvs@gmail.com" className="bg-white text-indigo-600 p-3 rounded-full shadow"><Mail /></a>
            <a href="https://github.com/kalaiarasan0/" target="_blank" className="bg-white text-indigo-600 p-3 rounded-full shadow"><Github /></a>
            <a href="https://www.linkedin.com/in/ekalaiarasan890/" target="_blank" className="bg-white text-indigo-600 p-3 rounded-full shadow"><Linkedin /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} Kalaiarasan E — Full Stack Developer
      </footer>
    </div>
  );
}
