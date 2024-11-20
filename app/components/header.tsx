import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#F1889F] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-2">
            <a href="#" className="text-white hover:text-gray-200">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <TwitterIcon size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <YoutubeIcon size={20} />
            </a>
          </div>
          <div className="text-sm">TOLL FREE 1.888.420.MOVE (6683)</div>
        </div>
      </div>
      <div className="border-t border-pink-400 w-full">
        <div className="w-full bg-white">
          <div className="mx-auto px-4 flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/KLDQN2b/logoefef.png"
                alt="Gay Relocation .com"
                className="h-12"
                width={48}
                height={48}
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#F1889F] hover:text-[#E16B84]">
                HOME
              </Link>
              <Link
                href="/about"
                className="text-[#F1889F] hover:text-[#E16B84]"
              >
                ABOUT US
              </Link>
              <Link
                href="/agents"
                className="text-[#F1889F] hover:text-[#E16B84]"
              >
                INTERNATIONAL AGENTS
              </Link>
              <Link
                href="/relocation"
                className="text-[#F1889F] hover:text-[#E16B84]"
              >
                FREE RELOCATION KIT
              </Link>
              <Link
                href="/resources"
                className="text-[#F1889F] hover:text-[#E16B84]"
              >
                RESOURCES
              </Link>
              <Link
                href="/blog"
                className="text-[#F1889F] hover:text-[#E16B84]"
              >
                BLOG
              </Link>
              <Link
                href="/for-agents"
                className="text-[#F1889F] hover:text-[#E16B84]"
              >
                FOR AGENTS
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
