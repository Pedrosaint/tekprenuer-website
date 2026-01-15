import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Vector from "../../../assets/images/Vector 2.png";
import Headerfy from "../../../assets/images/headerfy.png";
import Weestore from "../../../assets/images/weestore.png";
import ECOLEX from "../../../assets/images/ecolex.png";
import VectorLine from "../../../assets/images/Vector 5.png";
import Inclined from "../../../assets/images/inclined.png";
import LaunchConnect from "../../../assets/images/Launchconnect.png";
import Perch from "../../../assets/images/perch.png";
import Accessum from "../../../assets/images/accessum-full-logo-white.svg";
import GetElectric from "../../../assets/images/getelectric.svg";
import Nuvile from "../../../assets/images/nuville.png";
import SoftTouch from "../../../assets/images/softtouch.png";

export default function OurWork() {
  const [activeSlide, setActiveSlide] = useState(0);
const [itemsPerSlide, setItemsPerSlide] = useState(() => {
  const w = window.innerWidth;
  if (w < 768) return 1; // mobile
  if (w < 1024) return 2; // md
  return 3; // lg+
});

useEffect(() => {
  const handleResize = () => {
    const w = window.innerWidth;

    if (w < 768) setItemsPerSlide(1);
    else if (w < 1024) setItemsPerSlide(2);
    else setItemsPerSlide(3);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



  const projects = [
    {
      logo: "ECOLEX",
      category: "EdTech Platform",
      title: "Ecolec",
      description:
        "Comprehensive learning management system serving thousands of students",
    },
    {
      logo: "Headerfy",
      category: "Digital Product",
      title: "Headerfy",
      description: "SaaS platform for automated enterprise design",
    },
    {
      logo: "weestore",
      category: "eCommerce platform",
      title: "Weestore",
      description: "Modern eCommerce solution for businesses",
    },
    {
      logo: "LaunchConnect",
      category: "Startup Platform",
      title: "LaunchConnect",
      description: "Platform connecting startups with investors and mentors",
    },
    {
      logo: "Perch",
      category: "Hospital Review Platform",
      title: "Perch",
      description: "Platform for rating and reviewing hospitals",
    },
    {
      logo: "Accessum",
      category: "Gated Community Platform",
      title: "Accessum",
      description:
        "A smart, all-in-one platform to manage visitor access, enhance security, and protect residents in gated",
    },
    {
      logo: "Get Electric",
      category: "Hospital Review Platform",
      title: "Get Electric",
      description:
        "A platform that enables fast electricity payments and instant token delivery with zero delays.",
    },
    {
      logo: "Nuvile Group",
      category: "Property Consultancy Platform",
      title: "Nuvile Group",
      description:
        "A platform delivering expert property consultancy you can trust.",
    },
    {
      logo: "SoftTouch",
      category: "Personalized Physiotherapy Platform",
      title: "SoftTouch",
      description:
        "A platform offering personalized physiotherapy and wellness care focused on pain relief, mobility, and recovery.",
    },
  ];
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const visibleProjects = projects.slice(
    activeSlide * itemsPerSlide,
    activeSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="relative bg-[#010A36] py-10 md:py-24 px-4 overflow-x-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 lg:mb-20"
        >
          <p className="text-white/80 text-xl">OUR WORK</p>
          <img src={Vector} alt="divider" className="mt-1 mb-4 max-w-full" />
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Real solutions we've built
              <br />
              for real businesses
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-medium text-orange-400 mt-4"
          >
            {projects.length} projects
          </motion.p>
        </motion.div>

        {/* Decorative images — DESKTOP ONLY */}
        <img
          src={VectorLine}
          alt=""
          className="hidden lg:block absolute left-122.5 top-30"
        />
        <img
          src={Inclined}
          alt=""
          className="hidden lg:block absolute left-382.5 top-0 w-30"
        />

        {/* === LAYER WRAPPER === */}
        <div className="relative">
          {/* ORANGE BACK LAYER */}
          <div className="absolute inset-x-0 -top-10 z-0">
            <div className="bg-[#8B3A2E] rounded-3xl lg:h-130 lg:max-w-4xl md:h-110 md:max-w-xl mx-auto " />
          </div>

          {/* CARDS */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center"
                >
                  {/* LOGO CARD */}
                  <div className="absolute lg:top-10 bg-white rounded-2xl h-40 w-70 flex items-center justify-center shadow-2xl z-20">
                    {project.logo === "ECOLEX" && (
                      <div className="flex items-center gap-2">
                        <img src={ECOLEX} alt="Ecolex" className="h-12" />
                        <span className="mt-5 text-3xl font-bold text-black">
                          COLEX
                        </span>
                      </div>
                    )}

                    {project.logo === "Headerfy" && (
                      <img
                        src={Headerfy}
                        alt="Headerfy"
                        className="h-12 pl-14"
                      />
                    )}

                    {project.logo === "weestore" && (
                      <img src={Weestore} alt="Weestore" className="h-12" />
                    )}
                    {project.logo === "LaunchConnect" && (
                      <img
                        src={LaunchConnect}
                        alt="LaunchConnect"
                        className="h-12"
                      />
                    )}
                    {project.logo === "Perch" && (
                      <div className="flex items-center gap-2">
                        <img src={Perch} alt="Perch" className="h-12" />
                        <span className="mt-5 -ml-4 text-3xl font-bold text-black/60">
                          erch
                        </span>
                      </div>
                    )}
                    {project.logo === "Accessum" && (
                      <img src={Accessum} alt="Accessum" className="h-50" />
                    )}
                    {project.logo === "Get Electric" && (
                      <img
                        src={GetElectric}
                        alt="Get Electric"
                        className="h-10"
                      />
                    )}
                    {project.logo === "Nuvile Group" && (
                      <img src={Nuvile} alt="Nuvile Group" className="h-20" />
                    )}
                    {project.logo === "SoftTouch" && (
                      <img src={SoftTouch} alt="SoftTouch" className="h-20" />
                    )}
                  </div>

                  {/* INFO CARD */}
                  <div className="mt-25 lg:mt-38 bg-white/10 backdrop-blur-md rounded-2xl h-full px-6 py-6 w-full max-w-sm border border-white shadow-xl">
                    <div className="mt-16">
                      <p className="text-white text-base mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-white text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DOTS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-2 mt-5"
            >
              {new Array(totalSlides).fill(0).map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`
        cursor-pointer rounded-full transition-all duration-300
        ${
          index === activeSlide
            ? "w-10 h-2 bg-white"
            : "w-2 h-2 bg-white/40 hover:bg-white/70"
        }
      `}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
