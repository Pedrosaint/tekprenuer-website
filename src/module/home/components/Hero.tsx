import React from "react";
import { ArrowRight, Rocket, Puzzle, Package } from "lucide-react";
import Navbar from "../../../layout/Navbar";
import HeroImage from "../../../assets/images/hero_img.png";
import BlurImage from "../../../assets/images/blur_hero_image.png";
import Blur3 from "../../../assets/images/blur-3.png"
import Blur2 from "../../../assets/images/blur-2.png"
import Blur1 from "../../../assets/images/blur-1.png"



const Hero = () => {
  return (
    <section className="relative h-screen bg-[#010A36]">
      <Navbar />

      <img src={Blur3} alt="" className="absolute top-20 left-0 w-290  h-150" />

      <img src={Blur1} alt="" className="absolute top-0 right-0 w-190  h-150" />

      <img
        src={Blur2}
        alt=""
        className="absolute top-30  right-0 w-6xl h-200"
      />

      <div className="relative mx-auto container px-6 py-16">
        <div className="grid items-center gap-16 lg:grid-cols-2 relative">
          {/* LEFT CONTENT */}
          <div className="text-white mt-10">
            <h1 className="text-5xl font-bold leading-tight ubuntu-font">
              Promote Your Business With
              <br />
              Tech
            </h1>

            <p className="mt-6 max-w-xl text-2xl leading-relaxed text-slate-300">
              We empower startups and entrepreneurs with enterprise grade
              technology to build, scale, and lead.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <button className="flex items-center gap-2 rounded-full bg-linear-to-br from-[#021E9C] to-[#010A36] px-2 py-2 w-full max-w-62 text-sm font-semibold text-[#ffffff] border border-gray-300 transition cursor-pointer hover:bg-slate-100">
                <div className="bg-white rounded-full p-3">
                  <ArrowRight size={20} color="black" />
                </div>
                Explore our services
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-2">
              {/* Avatars */}
              <div className="inline-flex items-center gap-3">
                {/* Avatars */}
                <div className="flex -space-x-3">
                  <img
                    src="/avatars/user1.jpg"
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/avatars/user2.jpg"
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/avatars/user3.jpg"
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />
                </div>

                {/* Text */}
                <span className="text-sm font-medium text-white">
                  Trusted by 3000+
                </span>
              </div>

              {/* Text */}
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-slate-400">Companies worldwide</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - 3D City */}
          <div className="relative flex justify-center w-190">
            <img
              src={HeroImage}
              alt="3D City"
              className="absolute -top-50 -left-20 w-full"
            />
          </div>

          <img
            src={BlurImage}
            alt="Blur Image"
            className="absolute top-86 left-214"
          />
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
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
        </div>
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
    <div className="rounded-3xl border border-white/50 bg-white/10 p-8 mt-5 text-white backdrop-blur-4xl transition hover:bg-white/10">
      <div className="mb-4 text-white/80">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{text}</p>
    </div>
  );
};

export default Hero;
