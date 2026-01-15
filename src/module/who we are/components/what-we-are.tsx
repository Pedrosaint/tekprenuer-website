import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import VectorLine from "../../../assets/images/Vector 2.png";
import VectorSnake from "../../../assets/images/Vector 1.png";
import Image1 from "../../../assets/images/image-1.png";
import Image2 from "../../../assets/images/image-2.png";
import Ring from "../../../assets/images/ring.png";

const WhoWeAre = () => {
  const [designProgress, setDesignProgress] = useState(0);
  const [devProgress, setDevProgress] = useState(0);

  // Stats animation state
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clientSatisfaction: 0,
    experience: 0,
    support: 0,
  });

  useEffect(() => {
    // Animate progress bars
    const designInterval = setInterval(() => {
      setDesignProgress((prev) => {
        if (prev >= 100) {
          clearInterval(designInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const devInterval = setInterval(() => {
      setDevProgress((prev) => {
        if (prev >= 100) {
          clearInterval(devInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Animate stats
    let projects = 0;
    let client = 0;
    let exp = 0;
    let support = 0;

    const statsInterval = setInterval(() => {
      projects = Math.min(projects + 1, 50);
      client = Math.min(client + 2, 98);
      exp = Math.min(exp + 1, 2);
      support = Math.min(support + 1, 24);

      setAnimatedStats({
        projects,
        clientSatisfaction: client,
        experience: exp,
        support,
      });

      if (projects >= 50 && client >= 98 && exp >= 2 && support >= 24) {
        clearInterval(statsInterval);
      }
    }, 50);

    return () => {
      clearInterval(designInterval);
      clearInterval(devInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <section className="relative bg-linear-to-b from-slate-50 to-white py-10">
      <div className="mx-auto container px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Section Label */}
            <div className="mb-6 inline-block">
              <h2 className="relative text-2xl font-bold uppercase tracking-wider bg-linear-to-r from-[#021E9C] to-[#010A36] bg-clip-text text-transparent">
                WHO WE ARE
                <img src={VectorLine} alt="" />
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="mb-2 text-4xl font-bold leading-relaxed text-gray-900 ubuntu-font">
              Tekprenuers bridges technology and entrepreneurship.
            </h1>

            {/* Decorative Icon */}
            <div className="absolute left-[40%] top-40 hidden lg:block">
              <img src={VectorSnake} alt="" />
            </div>

            {/* Description */}
            <p className="mb-6 text-lg text-gray-600 mt-4">
              We partner with founders and growing businesses to design and
              build scalable digital solutions that drive real growth.
            </p>

            <p className=" mb-8 text-lg ">
              <span className="font-semibold text-gray-900">
                Our focus is simple
              </span>
              :{" "}
              <span className="text-gray-600">
                using technology to help entrepreneurs build, scale, and
                succeed.
              </span>
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Design</span>
                  <span className="font-bold text-gray-900">
                    {designProgress}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: `${designProgress}%` }}
                    className="h-full bg-gray-900 transition-all duration-300"
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    Development
                  </span>
                  <span className="font-bold text-gray-900">
                    {devProgress}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: `${devProgress}%` }}
                    className="h-full bg-gray-900 transition-all duration-300"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <img
              src={Image2}
              alt=""
              className="absolute rounded-2xl 2xl:left-30 object-contain -bottom-5 w-80"
            />
            <img
              src={Image1}
              alt=""
              className="absolute rounded-2xl 2xl:left-45 lg:left-15 object-contain -top-5 w-80"
            />
            <img
              src={Ring}
              alt=""
              className="bg-[#021E9C] px-5 py-2 rounded-full absolute -top-10 2xl:right-45 xl:right-40 lg:right-10 w-45 border-15 border-white"
            />

            <div className="absolute -top-50 2xl:right-50 xl:right-30 lg:right-25 h-5 w-5 rounded-full bg-slate-900" />
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-11 grid gap-8 rounded-3xl bg-white p-4 shadow-lg md:grid-cols-4">
          <StatCard
            number={`${animatedStats.projects}+`}
            label="Projects Delivered"
          />
          <StatCard
            number={`${animatedStats.clientSatisfaction}%`}
            label="Client Satisfaction"
          />
          <StatCard
            number={`${animatedStats.experience}+`}
            label="Years Experience"
          />
          <StatCard
            number={`${animatedStats.support}/7`}
            label="Support Available"
          />
        </div>

        {/* CONTACT BUTTON */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="flex items-center gap-2 rounded-full bg-linear-to-br from-[#021E9C] to-[#010A36] px-6 py-3 font-semibold text-white shadow-lg transition cursor-pointer hover:opacity-90"
          >
            Contact Us
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="mb-2 text-3xl font-bold text-blue-900">{number}</div>
      <div className="text-lg text-blue-900">{label}</div>
    </div>
  );
};

export default WhoWeAre;
