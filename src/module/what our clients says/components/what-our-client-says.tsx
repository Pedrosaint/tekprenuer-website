import { MessageCircle, Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Support from "../../../assets/images/customer-support.png";
import LocationImg from "../../../assets/images/location.png";
import Message from "../../../assets/images/message.png";

export default function WhatOurClientSays() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Contact Info Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white px-8 py-3 rounded-full shadow-lg font-semibold text-gray-900 flex items-center gap-3 hover:shadow-xl transition-shadow"
          >
            <div className="w-2 h-2 bg-blue-950 rounded-full"></div>
            CONTACT INFO
            <div className="w-2 h-2 bg-blue-950 rounded-full"></div>
          </motion.button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 ubuntu-font">
            We're Here to Help.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to WeeStore for support, questions, feedback, or
            partnership opportunities. Our friendly team is ready to assist you
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Customer Support */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <img
                src={Support}
                alt="Support"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Customer Support
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:tekprenuers@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  Email: tekprenuers@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+2347081280274"
                  className="hover:text-blue-600 transition-colors"
                >
                  +2347081280274
                </a>
              </div>
              <p className="mt-4 text-gray-500">Available 9am-5pm, Mon-Sat</p>
            </div>
          </motion.div>

          {/* Whatsapp & Socials */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <img
                src={Message}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Whatsapp & Socials
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>+2347081280274</span>
              </div>
              <p className="mt-4 text-gray-700 mb-3">
                Follow us on social media
              </p>
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 bg-linear-to-r from-[#021E9C] to-[#010A36] rounded-full flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 bg-linear-to-r from-[#021E9C] to-[#010A36] rounded-full flex items-center justify-center cursor-pointer transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Office Address */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <img
                src={LocationImg}
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Office Address
            </h3>
            <p className="text-gray-600">Remotely, Lagos Nigeria</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
