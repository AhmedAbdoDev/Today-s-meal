import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaBriefcase,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm font-medium tracking-wide">
          Follow us on social media
        </p>
        <div className="flex gap-4 mb-4 sm:mb-0">
          <Link href="https://github.com/AhmedAbdoDev" passHref target="_blank">
            <FaGithub
              size={28}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/3bkrenodev"
            passHref
            target="_blank"
          >
            <FaLinkedinIn
              size={28}
              className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
            />
          </Link>
          <Link
            href="https://www.facebook.com/ahmed.abdo.618141"
            passHref
            target="_blank"
          >
            <FaFacebook
              size={28}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
            />
          </Link>
          <Link
            href="https://ahmedabdodev.github.io/Portfolio/"
            passHref
            target="_blank"
          >
            <FaBriefcase
              size={28}
              className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
