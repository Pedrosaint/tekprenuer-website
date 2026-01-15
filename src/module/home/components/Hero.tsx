import React, {  } from "react";
import { ArrowRight, Rocket, Puzzle, Package } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../../../layout/Navbar";
import HeroImage from "../../../assets/images/image .png";
import BlurImage from "../../../assets/images/blur_hero_image.png";
import Blur3 from "../../../assets/images/blur-3.png";
import Blur2 from "../../../assets/images/blur-2.png";
import Blur1 from "../../../assets/images/blur-1.png";
import Nuvile from "../../../assets/images/nuville.png";
import GetElectric from "../../../assets/images/getelectric.svg";
import Perch from "../../../assets/images/perch.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const controls = useAnimation();

  const handleClick = async () => {
    // 1️⃣ Animate the arrow to the right
    await controls.start({ x: 15, transition: { duration: 0.8 } });

    // 2️⃣ Optional: slide back the arrow
    await controls.start({ x: 0, transition: { duration: 0.3 } });

    // 3️⃣ Scroll to the element AFTER animation
    const element = document.getElementById("what");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-[#010A36] overflow-hidden">
      <div className="">
        <Navbar />
      </div>

      {/* Decorative blurs – desktop only */}
      <motion.img
        src={Blur3}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden lg:block absolute top-20 left-0 w-290 h-150 z-0 pointer-events-none"
      />
      <motion.img
        src={Blur1}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="hidden lg:block absolute top-0 right-0 w-190 h-150 z-0 pointer-events-none"
      />
      <motion.img
        src={Blur2}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden lg:block absolute top-30 right-0 w-6xl h-200 z-0 pointer-events-none"
      />

      <div className="relative mx-auto container px-6 mb-5 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-center relative">
          {/* LEFT CONTENT */}
          <motion.div
            className="text-white text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ubuntu-font"
            >
              Promote Your Business With <br className="hidden sm:block" />
              Tech
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-2xl leading-relaxed text-slate-300"
            >
              We empower startups and entrepreneurs with enterprise grade
              technology to build, scale, and lead.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className="flex items-center cursor-pointer gap-3 rounded-full bg-linear-to-br from-[#021E9C] to-[#010A36] px-4 py-2 w-full sm:w-auto sm:min-w-16.25 text-sm font-semibold text-white border border-white/30 transition hover:opacity-90"
              >
                <motion.div
                  animate={controls}
                  className="bg-white rounded-full p-3 flex items-center justify-center"
                >
                  <ArrowRight size={20} color="black" />
                </motion.div>
                Explore our services
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col items-center lg:items-start gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src={Nuvile}
                    className="h-9 w-9 rounded-full border-2 border-white bg-amber-50"
                  />
                  <img
                    src={GetElectric}
                    className="h-9 w-9 rounded-full border-2 border-white bg-amber-50"
                  />
                  <img
                    src={Perch}
                    className="h-9 w-9 rounded-full border-2 border-white bg-amber-50"
                  />
                </div>
                <span className="text-sm font-medium">Trusted by 3000+</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-400">Companies worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {" "}
            <motion.div
              // initial={{ opacity: 0, scale: 0.8, x: 100 }}
              // animate={{ opacity: 1, scale: 1, x: 0 }}
              // transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:w-250"
            >
              <motion.img
                src={HeroImage}
                alt="3D City"
                className="lg:absolute lg:-top-40 sm:w-[75%] w-full lg:w-200 lg:right-10"
              />
            </motion.div>
            {/* Extra blur – desktop only */}
            <motion.img
              src={BlurImage}
              alt=""
              className="absolute lg:top-7 lg:left-7 top-36 left-8 w-80 md:left-41 md:top-55 md:w-110 lg:w-90 xl:left-14 xl:top-22 xl:w-110"
            />
          </div>
        </div>

        {/* FEATURE CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 lg:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            icon={<Rocket size={32} />}
            title="Bold Innovators"
            text="We're always on the lookout for new ideas, methods, and technologies that can break the mold and elevate your brand."
          />
          <FeatureCard
            icon={<Puzzle size={32} />}
            title="Team Work"
            text="Our team brings years of experience and industry leading expertise to provide tailored IT solutions that meet your business needs."
          />
          <FeatureCard
            icon={<Package size={32} />}
            title="Project Management"
            text="We Manage your project effectively after project Launch"
          />
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/40 bg-white/10 p-8 text-white backdrop-blur-4xl transition hover:bg-white/15"
    >
      <motion.div whileHover={{ scale: 1.1 }} className="mb-4 text-white/80">
        {icon}
      </motion.div>
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{text}</p>
    </motion.div>
  );
};

export default Hero;
