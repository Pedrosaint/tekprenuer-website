/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
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
import { IoMdSend } from "react-icons/io";

const INDICATOR_HEIGHT = 64; // h-16

const WhatWeDo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [indicatorTop, setIndicatorTop] = useState(0);

    const [message, setMessage] = useState("");

    const phoneNumber = "+2347081280274";
    const companyName = "Tekprenuers";
    const welcomeMessage =
      "Hi, welcome to Tekprenuers, how can we help you today 😊";

    // WhatsApp-style background pattern (Light grey doodle)
    const whatsappBg = {
      backgroundColor: "#e5ddd5",
      backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded51.png")`,
      backgroundOpacity: "0.4",
    };

    const handleSendMessage = () => {
      if (message.trim()) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        setMessage("");
      }
    };

    const handleKeyPress = (e: any) => {
      if (e.key === "Enter" && message.trim()) {
        handleSendMessage();
      }
    };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    const maxScroll = scrollHeight - clientHeight;
    const progress = scrollTop / maxScroll;

    const maxIndicatorMove = clientHeight - INDICATOR_HEIGHT;
    setIndicatorTop(progress * maxIndicatorMove);
  };

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

  const values = [
    {
      title: "Creativity without limits",
      description:
        "At Tekpreneur we push boundaries to develop Projects that stands out.",
    },
    {
      title: "Your success, our mission",
      description: "We strive to provide the best solutions that help you grow",
    },
    {
      title: "Client collaboration",
      description:
        "Your vision, combined with our expertise, creates market leading impact.",
    },
    {
      title: "Award Winning Company",
      description: "Over the years we have achieved awards and recognitions",
    },
  ];

  return (
    <section className="relative bg-[#010A36] py-20">
      <div className="mx-auto container px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <img src={Fly} alt="" className="absolute left-50 top-9" />

            <div className="">
              {" "}
              <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-white/80">
                {" "}
                WHAT WE DO{" "}
              </h2>{" "}
              <img src={Vector} alt="" />{" "}
            </div>

            <h1 className="mb-2 text-3xl font-bold leading-tight text-white md:text-5xl ubuntu-font">
              We offer a wide range of services
            </h1>

            <img
              src={VectorLine}
              alt=""
              className="hidden md:blockabsolute left-190"
            />

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a1628] transition hover:bg-slate-100 cursor-pointer"
            >
              Let's Talk!
            </motion.button>
          </motion.div>

          {/* SERVICES */}
          <div className="max-h-130 overflow-y-auto space-y-4 pr-2">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* VALUES SECTION */}
      <section className="py-20">
        <div className="mx-auto container px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT VALUES */}
            <div className="relative flex">
              {/* LEFT ORANGE INDICATOR */}
              <div className="relative mr-4 w-0.5 h-105 bg-orange-500/30">
                <motion.div
                  className="absolute left-0 w-full h-16 bg-orange-500 rounded-full transition-transform duration-100"
                  style={{ transform: `translateY(${indicatorTop}px)` }}
                />
              </div>

              {/* SCROLLABLE CONTENT (NO WHITE SCROLLBAR) */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="max-h-105 overflow-y-auto no-scrollbar pl-6 pr-4 space-y-8"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-300">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="flex gap-6">
              {/* Left big image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 overflow-hidden rounded-3xl shadow-2xl max-h-100  lg:mt-35"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Right two stacked images */}
              <div className="flex flex-1 flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1000"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

           {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-87.5 sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                  {/* Header - Matching the Dark Green Style */}
                  <div className="bg-[#075e54] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {/* Profile Pic Placeholder */}
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                          {/* <svg
                            className="w-8 h-8 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg> */}
                          <div className="text-blue-700 font-black">TK</div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075e54] rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm leading-tight">
                          {companyName}
                        </h3>
                        <p className="text-green-100 text-[11px] opacity-90">
                          Typically replies within 10 minutes
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white opacity-80 hover:opacity-100 transition"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
        
                  {/* Messages Area with Doodle Background */}
                  <div
                    className="h-60 overflow-y-auto p-4 flex flex-col relative"
                    style={whatsappBg}
                  >
                    <div className="flex justify-start mb-4">
                      <div className="bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg px-3 py-2 max-w-[85%] shadow-sm relative">
                        {/* The "Tail" of the message bubble */}
                        <div className="absolute top-0 -left-2 w-0 h-0 border-t-10 border-t-white border-l-10 border-l-transparent"></div>
        
                        <p className="text-[#303030] text-[13.5px] font-medium mb-1">
                          {companyName}
                        </p>
                        <p className="text-gray-800 text-[14px] leading-relaxed">
                          {welcomeMessage}
                        </p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                          <span className="text-[10px] text-gray-500 uppercase">
                            03:52 PM
                          </span>
                          <span className="text-blue-400 text-xs">✓✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* Input Area */}
                  <div className="bg-[#f0f0f0] p-3 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center shadow-sm">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message.."
                        className="w-full focus:outline-none text-[15px] bg-transparent"
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="text-[#919191] hover:text-[#075e54] disabled:opacity-30 transition-colors cursor-pointer"
                    >
                      <IoMdSend size={30} />
                    </button>
                  </div>
                </div>
              )}
      </section>
    </section>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-white/10 bg-white p-6 transition hover:shadow-xl"
  >
    <div className="flex gap-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="rounded-lg p-3"
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default WhatWeDo;
