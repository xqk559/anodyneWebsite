import Header from '../header';
import Footer from '../footer';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col row-start-2">
        <header className="flex text-5xl justify-center mb-20">About Us</header>
        <div className="flex justify-center">
          Anodyne Games is a US based video games studio started by Keith Davis in 2025.  
        </div>
        <div className="flex justify-center">
          We are currently focusing on our debut game "Base Survivors", a Base Building Survivorlike game.  
        </div>
        <div className="flex justify-center">
          Our plan is to release initially on Steam, followed by releases for mobile and consoles.
        </div>
      </main>
      <Footer />
    </div>
  );
}

