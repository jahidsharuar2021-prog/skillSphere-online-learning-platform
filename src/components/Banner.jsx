import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Upgrade Your Skills Today 🚀
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Learn from Industry Experts and achieve your career goals
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Start Learning
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
