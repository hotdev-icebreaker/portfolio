import React from "react";
import { Github, ExternalLink } from "lucide-react";
import twilio from "../assets/images/twilio.png";
import voiceagent from "../assets/images/voiceagent.png";
import yolohealth from "../assets/images/yolohealth.png";
import loverse from "../assets/images/loverse.png";
import virtualchatbot from "../assets/images/virtualchatbot.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "LOVERSE",
      description:
        "LOVERSE is a project dedicated to transforming children's photos into one-of-a-kind portraits that fuel their creativity and boost self-confidence. By combining the power of technology and artistry, we create personalized pieces that not only spark joy but also leave families with cherished memories for years to come.",
      tags: ["AI App Development", "Stable Diffusion", "AI Image Generation", "Realistic"],
      image: loverse,
    },
    {
      title: "Yolohealth - Telehealth Platform",
      description:
        "YoloHealth is an innovative health technology company that provides comprehensive telehealth solutions through its advanced HealthATM kiosks and mobile medical units. These platforms integrate certified medical IoT devices with a HIPAA-compliant backend to deliver real-time diagnostics, virtual consultations, and personalized health insights.",
      tags: ["Next.js", "Tailwind CSS", "GraphQL", "TRPC", "Prisma", "Supabase"],
      image: yolohealth,
    },
    {
      title: "AI-Powered Virtual Companion Chatbot",
      description:
        "This project features an AI Girlfriend Chatbot designed to offer personalized, continuous interactions, with dynamic personality adjustments and advanced photo generation capabilities. Additionally, I am working on ensuring the system can scale to accommodate a large number of users and bots.",
      tags: ["Python", "LangChain", "Next.js", "AI Chatbot"],
      image: virtualchatbot,
    },
    {
      title: "AI-Powered Voice Agent for Inbound and Outbound Calls",
      description:
        "Unlock the power of AI-driven voice agents to revolutionize inbound and outbound call management. Recognize speech and comprehend intent for smarter conversations and Direct integration with CRMs and marketing platforms for streamlined workflows. Experience increased efficiency, higher lead conversion rates, and reduced operational costs with our cutting-edge AI Voice Agent technology.",
      tags: ["AI Voice Agent", "LLM", "CRMs", "TTS/STT"],
      image: voiceagent,
    },
    {
      title: "Smart SMS Chatbot Powered by AI with Twilio and Firebase Integration",
      description:
        "We built an advanced AI chatbot powered by ChatGPT, fully integrated with Twilio for SMS communication and Firebase for real-time conversation management and analytics.",
      tags: ["Make.com", "Twilio", "AI Chatbot", "Firebase", "ChatGPT"],
      image: twilio,
    },
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br h-100 from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
