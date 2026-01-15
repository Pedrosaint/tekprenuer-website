import Logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#010A36] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center text-sm text-slate-300">
        {/* Brand */}
        <img src={Logo} alt="" />

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} Tekprenuers. All rights reserved.
        </p>

        {/* Website */}
        <a
          href="https://www.tekprenuers.com"
          className="text-xs text-slate-300 hover:text-white transition"
        >
          www.tekprenuers.com
        </a>

        {/* Social Links */}
        <div className="flex flex-col gap-1 text-xs">
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
