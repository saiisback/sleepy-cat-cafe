
import type { FC } from "react";

const Home: FC = () => {




  
  return (
    <main
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("./home_background.png")',
        backgroundSize: "cover",
      }}
    >
      {/* Floating Header Box */}
      <div className="absolute top-10 left-4 right-4 bg-black/20 border-2 border-pink-300 rounded-lg px-6 py-6 text-center z-10 shadow-2xl backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wider drop-shadow-lg">
          Hello My Jaansdasd!
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-pink-200 mb-2 drop-shadow">
          This is <span className="text-pink-100 font-bold">your tea café</span>
        </h2>
        <p className="italic text-base md:text-lg text-pink-100 drop-shadow-sm">
          Where every cup is a hug and every cat is a friend.
        </p>
      </div>

      {/* Bottom Play Button */}
      <div className="absolute bottom-21 left-0 right-0 flex justify-center">
        <a
          href="/game/main"
          className="bg-pink-300 text-gray-900 font-bold text-md px-8 py-3 
          border-4 border-pink-500 rounded-none shadow-lg 
          hover:bg-white hover:text-pink-600 transition-all duration-200 
          focus:outline-none focus:ring-2 focus:ring-pink-300 flex items-center justify-center"
        >
          ▒ Play! ▒
        </a>
      </div>
    </main>
  );
};

export default Home;