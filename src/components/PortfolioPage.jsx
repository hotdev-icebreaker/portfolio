import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            I’m <b><i>Oleh Ozymok</i></b>, an AI-first Full Stack Developer from Ukraine with over 8 years of experience building intelligent, production-ready software. I specialize in integrating LLMs, voice interfaces, and RAG into real-world applications. My work empowers startups and enterprises to automate complex workflows, enhance user experiences, and scale smarter. I bridge AI research with scalable systems using tools like React, Node.js, Python, and AWS. Whether it's a GPT-4 chatbot, a voice agent, or an AI-powered dashboard, I turn ambitious ideas into impact-driven solutions.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
