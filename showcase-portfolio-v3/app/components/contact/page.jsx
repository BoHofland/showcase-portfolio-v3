"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center gap-12">
          <a
            href="mailto:bohofland@gmail.com"
            className="contact-icon-link group"
            aria-label="Email"
          >
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <span className="contact-label">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link group"
            aria-label="LinkedIn"
          >
            <div className="contact-icon-wrapper">
              <FaLinkedin className="contact-icon" />
            </div>
            <span className="contact-label">LinkedIn</span>
          </a>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link group"
            aria-label="GitHub"
          >
            <div className="contact-icon-wrapper">
              <FaGithub className="contact-icon" />
            </div>
            <span className="contact-label">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
