import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 flex gap-[24px] flex-wrap w-full">
        <Link 
          href="/"
          className="flex gap-2 hover:underline hover:underline-offset-4 ml-[10px] self-center"
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
          className="flex gap-2 hover:underline hover:underline-offset-4 ml-[10px] self-center"
          >
            About Us
          </Link>
          <Link 
            href="/games"
            className="flex gap-2 hover:underline hover:underline-offset-4 ml-auto self-center"
          >
            Games
          </Link>
          <Link 
            href="/contact"
            className="flex gap-2 hover:underline hover:underline-offset-4 ml-auto self-center"
          >
            Contact Us
          </Link>
        </div>
      </header>
      <main className="flex flex-col row-start-2">
        <header className="text-[36px]">Games</header>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        ©2025 by AnodyneGames. All rights reserved.
      </footer>
    </div>
  );
}

