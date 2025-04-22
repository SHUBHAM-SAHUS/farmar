"use client";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const featuredLinks = [
  { label: "Homepage", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Products", href: "#" },
  { label: "IPM chilly", href: "#" },
  { label: "Contact Us", href: "#" },
];

const otherLinks = [
  { label: "PR & Media", href: "#" },
  { label: "Gallery", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-green-100 relative border-t border-green-400"
      style={{
        backgroundImage: "url('/assets/FooterBackground.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 -16px 32px 0 rgba(0,0,0,0.13)",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
      }}
    >
      {/* Top shadow for separation */}
      <div
        className="absolute top-0 left-0 w-full h-6 pointer-events-none z-10"
        style={{
          boxShadow: "0 -16px 32px 0 rgba(0,0,0,0.13)",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start justify-start col-span-1">
            <Image
              src="/assets/MainLogo.webp"
              alt="TerraGlebe Logo"
              width={180}
              height={60}
              className="mb-2"
              priority
            />
          </div>
          {/* Contact Us */}
          <div className="flex flex-col gap-2 col-span-1">
            <h3 className="text-green-800 font-bold text-lg mb-1 border-b-2 border-green-400 w-fit pb-1">
              Contact Us
            </h3>
            <div className="flex items-center gap-2 text-green-700">
              <Send size={18} />
              <span className="text-gray-800 text-sm">
                terraglebe@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Phone size={18} />
              <span className="text-gray-800 text-sm">+91 089640 87240</span>
            </div>
            <div className="flex items-start gap-2 text-green-700">
              <MapPin size={18} className="mt-1" />
              <span className="text-gray-800 text-sm">
                Shrinath Colony, 13/a, Diversion Rd, Saraswati Nagar,
                <br />
                Khargone, Madhya Pradesh 451001
              </span>
            </div>
          </div>
          {/* Featured Link */}
          <div className="flex flex-col gap-2 col-span-1">
            <h3 className="text-green-800 font-bold text-lg mb-1 border-b-2 border-green-400 w-fit pb-1">
              Featured Link
            </h3>
            <ul className="flex flex-col gap-1">
              {featuredLinks.map((link) => (
                <li
                  key={link.label}
                  className="flex items-center gap-2 text-green-700"
                >
                  <span className="text-green-500 text-lg">•</span>
                  <a
                    href={link.href}
                    className="text-gray-800 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Other */}
          <div className="flex flex-col gap-2 col-span-1">
            <h3 className="text-green-800 font-bold text-lg mb-1 border-b-2 border-green-400 w-fit pb-1">
              Other
            </h3>
            <ul className="flex flex-col gap-1">
              {otherLinks.map((link) => (
                <li
                  key={link.label}
                  className="flex items-center gap-2 text-green-700"
                >
                  <span className="text-green-500 text-lg">•</span>
                  <a
                    href={link.href}
                    className="text-gray-800 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col gap-2 col-span-1">
            <h3 className="text-green-800 font-bold text-lg mb-1 border-b-2 border-green-400 w-fit pb-1">
              Follow Us
            </h3>
            <div className="flex gap-2 mt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="bg-green-500 hover:bg-green-600 rounded-md p-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="text-white" size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
