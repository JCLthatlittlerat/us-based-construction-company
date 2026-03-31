import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632398535774-b95738ddff68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjBwcm9qZWN0fGVufDF8fHx8MTc1ODUyNTMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl mb-6 text-white">
            Building Your Dreams Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional construction services with over 25 years of experience. 
            From residential homes to commercial buildings, we deliver excellence in every project.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center h-10 px-8 py-4 text-lg bg-orange-600 hover:bg-orange-700 text-white transition-all rounded-md"
            >
              View Our Projects
            </a>
            <button className="inline-flex items-center justify-center h-10 px-8 py-4 text-lg border border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all rounded-md">
              Get Free Quote
            </button>
            <button className="inline-flex items-center justify-center gap-2 h-10 px-8 py-4 text-lg border border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all rounded-md">
              <Star className="h-5 w-5" />
              Go to Stars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}