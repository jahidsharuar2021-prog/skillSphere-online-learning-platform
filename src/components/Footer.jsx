import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="SkillSphere logo"
                width={42}
                height={42}
              />
              <h2 className="text-xl font-semibold text-black dark:text-white">
                SkillSphere
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              SkillSphere is an online learning platform designed to help you
              learn modern skills, build projects, and grow your career.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-black dark:text-white">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-black dark:text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Contact
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: support@jahidhasan.com
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Phone: +880 19xxxxxx99
            </p>

            {/* Social Links */}
            <div className="flex gap-4 text-sm mt-2">
              <div className="flex gap-2 items-center ">
                <FaFacebook />
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Facebook
                </a>
              </div>
              <div className="flex gap-2 items-center ">
                <FaTwitter /> 
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Twitter
                </a>
              </div>
              <div className="flex gap-2 items-center ">
                <FaLinkedinIn/>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  LinkedIn
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
