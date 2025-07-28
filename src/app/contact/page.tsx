import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 flex gap-[24px] flex-wrap w-full">
        <Image
          className="dark:invert items-left justify-items-left"
          src="/anodyneLogoWhite.png"
          alt="Anodyne logo"
          width={180}
          height={38}
          priority
        />
        <a
          className="flex gap-2 hover:underline hover:underline-offset-4 ml-auto self-center"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header>Contact</header>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        ©2025 by AnodyneGames. All rights reserved.
      </footer>
    </div>
  );
}
