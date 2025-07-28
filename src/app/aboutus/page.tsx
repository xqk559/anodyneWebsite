import Header from '../header';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col row-start-2">
        <header className="text-5xl">About Us</header>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        ©2025 by AnodyneGames. All rights reserved.
      </footer>
    </div>
  );
}

