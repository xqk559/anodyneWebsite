import Header from '../header';
import Footer from '../footer';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col row-start-2">
        <header className="text-5xl">About Us</header>
      </main>
      <Footer />
    </div>
  );
}

