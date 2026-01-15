/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { IoMdSend } from "react-icons/io";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
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

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-pulse fixed bottom-6 right-6 z-50 bg-[#25d366] text-white rounded-full p-4 shadow-lg cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <ImWhatsapp size={32} />
      </button>
    </>
  );
}
