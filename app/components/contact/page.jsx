"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-background mb-32">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center gap-12 mb-32">
          <a
            href="mailto:bohofland@gmail.com"
            className="contact-icon-link group"
            aria-label="Email"
          >
            <div className="contact-icon-wrapper bg-orange-500 md:bg-gray-700/50 md:group-hover:bg-orange-500 transition-colors duration-300">
              <FaEnvelope className="contact-icon text-white" />
            </div>
            <span className="contact-label text-orange-500 md:text-gray-300 md:group-hover:text-orange-500 transition-colors duration-300">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bo-hofland-861b21348/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link group"
            aria-label="LinkedIn"
          >
            <div className="contact-icon-wrapper bg-blue-600 md:bg-gray-700/50 md:group-hover:bg-blue-600 transition-colors duration-300">
              <FaLinkedin className="contact-icon text-white" />
            </div>
            <span className="contact-label text-blue-600 md:text-gray-300 md:group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
          </a>

          <a
            href="https://github.com/BoHofland"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link group"
            aria-label="GitHub"
          >
            <div className="contact-icon-wrapper bg-purple-600 md:bg-gray-700/50 md:group-hover:bg-purple-600 transition-colors duration-300">
              <FaGithub className="contact-icon text-white" />
            </div>
            <span className="contact-label text-purple-600 md:text-gray-300 md:group-hover:text-purple-600 transition-colors duration-300">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
