"use client";

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="row-start-1 flex gap-[24px] flex-wrap w-full">
      <Link 
        href="/"
        className="flex gap-2 hover:underline hover:underline-offset-4 self-center"
      >
        <Image
          className="dark:invert"
          src="/anodyneLogoWhite.png"
          alt="Anodyne logo"
          width={180}
          height={38}
          priority
        />
      </Link>
      <div className="flex gap-[24px] flex-wrap ml-auto">
        <Link 
        href="/aboutus"
        className={`flex gap-2 hover:underline hover:underline-offset-4 ml-auto self-center ${pathname == "/aboutus" ? "text-red-600" : "text-white"}`}
        >
          About Us
        </Link>
        <Link 
          href="/games"
          className={`flex gap-2 hover:underline hover:underline-offset-4 ml-auto self-center ${pathname === "/games" ? "text-red-600" : "text-white"}`}
        >
          Games
        </Link>
        <Link 
          href="/contact"
          className={`flex gap-2 hover:underline hover:underline-offset-4 ml-auto self-center ${pathname == "/contact" ? "text-red-600" : "text-white"}`}
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}
