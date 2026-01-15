
import {
  Send,
  Star,
} from "lucide-react";
import Vector from "../../../assets/images/Vector 2.png";
import Design from "../../../assets/images/design.png";
import Development from "../../../assets/images/developement.png";
import Launch from "../../../assets/images/launch.png";
import Growth from "../../../assets/images/growth.png";
import Brain from "../../../assets/images/brain.png";

export default function WhyChooseUs() {
  return (
    <div className="bg-white py-16 px-4">
      {/* Support Section */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative">
        <div className="flex justify-center items-center gap-8 mb-6">
          <Send className="w-8 h-8 text-orange-400 absolute top-40 left-10 hidden lg:block" />

          <Star
            fill="orange"
            className="w-8 h-8 text-orange-400 absolute top-40 right-10 hidden lg:block"
          />

          <img
            src={Brain}
            alt=""
            className="absolute object-cover h-10 left-40 lg:top-0"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600">Why CHOOSE US</p>
          <img src={Vector} alt="divider" className="mt-1" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 ubuntu-font">
          We Offer 24/7 Support
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ubuntu-font">
          We are happy to help
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-1">
          Browse topics, find resources, or chat with our customer service. Our
          support have answers to all your questions. Do you have a question, or
          need Customer Service assistance?
        </p>
        <p className="text-gray-700 font-medium">
          Give us a call <span className="">+2347081280274</span>
        </p>
      </div>

      {/* Work Process Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          OUR WORK PROCESS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { img: Design, label: "Design", index: 1 },
            { img: Development, label: "Development", index: 2 },
            { img: Launch, label: "Launch", index: 3 },
            { img: Growth, label: "Growth", index: 4 },
          ].map(({ img, label, index }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="w-25 h-25 flex items-center justify-center mb-4">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-900 font-semibold">
                <span className="text-gray-500">{index}.</span> {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
