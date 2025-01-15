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
            <div className="contact-icon-wrapper bg-gray-700/50 group-hover:bg-orange-500 transition-colors duration-300">
              <FaEnvelope className="contact-icon text-white" />
            </div>
            <span className="contact-label group-hover:text-orange-500 transition-colors duration-300">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link group"
            aria-label="LinkedIn"
          >
            <div className="contact-icon-wrapper bg-gray-700/50 group-hover:bg-blue-600 transition-colors duration-300">
              <FaLinkedin className="contact-icon text-white" />
            </div>
            <span className="contact-label group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
          </a>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link group"
            aria-label="GitHub"
          >
            <div className="contact-icon-wrapper bg-gray-700/50 group-hover:bg-purple-600 transition-colors duration-300">
              <FaGithub className="contact-icon text-white" />
            </div>
            <span className="contact-label group-hover:text-purple-600 transition-colors duration-300">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
