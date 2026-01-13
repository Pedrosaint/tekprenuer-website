import React from "react";
import {
  Brain,
  Code,
  Monitor,
  Cpu,
  Palette,
  Briefcase,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import VectorLine from "../../../assets/images/Vector 4.png";
import Vector from "../../../assets/images/Vector 3.png";
import Fly from "../../../assets/images/fly.png";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Solutions",
      description:
        "Enhance customer engagement with intelligent, automated responses.",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Web & App Development",
      description:
        "Developing responsive websites and mobile apps that are fast, reliable, and user-friendly.",
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and scalable user experiences that support efficiency, accuracy, and user satisfaction.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: "Software Development",
      description:
        "Building robust software applications optimized for performance, security, and seamless user experience.",
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: "Branding & Design",
      description:
        "Building memorable identities with stunning visuals and cohesive brand strategies.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Project Management",
      description:
        "Let's manage your websites & Mobile Apps projects, we offer 24/7 support.",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "eCommerce Solutions",
      description:
        "Empowering businesses to sell online with custom-built platforms and optimized shopping experiences.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Marketing & Digital",
      description:
        "Crafting impactful campaigns to connect with your audience and grow your brand online and offline.",
    },
  ];

  return (
    <section className="relative bg-[#010A36] py-20">
      {/* Decorative circles top right */}

      <div className="mx-auto container px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <img src={Fly} alt="" className="absolute left-50 top-9" />
            <div className="mb-">
              <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-white/80">
                WHAT WE DO
              </h2>
              <img src={Vector} alt="" />
            </div>

            <h1 className="mb-8 text-3xl font-bold leading-tight text-white md:text-5xl ubuntu-font">
              We offer a wide range of services
            </h1>

            {/* Decorative dotted line */}
            <img src={VectorLine} alt="" className="absolute left-190" />

            <button className="w-fit text-[#0a1628] rounded-full bg-white px-8 py-3 text-sm font-semibold transition hover:bg-slate-100 cursor-pointer">
              Let's Talk!
            </button>
          </div>

          {/* RIGHT CONTENT - SERVICE CARDS */}
          {/* RIGHT CONTENT - SERVICE CARDS */}
          <div className="max-h-130 overflow-y-auto space-y-4 pr-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white p-6 transition hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-lg p-3">
          {icon}
        </div>

        <div className="pr-2">
          <h3 className="mb-2 text-lg font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
