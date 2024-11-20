import React from "react";
import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F1889F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">GayRelocation.com</h3>
            <p className="text-sm">
              Connecting LGBTQ+ home buyers and sellers with trusted real estate
              professionals.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-gray-300">
                  Find an Agent
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/relocation-kit" className="hover:text-gray-300">
                  Free Relocation Kit
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage-calculator"
                  className="hover:text-gray-300"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/lgbtq-resources" className="hover:text-gray-300">
                  LGBTQ+ Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-gray-300">
                <TwitterIcon />
              </a>
              <a href="#" className="hover:text-gray-300">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:text-gray-300">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2023 GayRelocation.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
