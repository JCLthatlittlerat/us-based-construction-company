import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Úvod" },
    { href: "#about", label: "O nás" },
    { href: "#projects", label: "Projekty" },
    { href: "#services", label: "Služby" },
    { href: "#testimonials", label: "Reference" },
    { href: "#zajimavosti", label: "Zajímavosti" },
    { href: "#contact", label: "Kontakt" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl text-orange-600">BuildCorp</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-900 hover:text-orange-600 px-3 py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Mám zájem
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleMenuClick}
                      className="text-gray-900 hover:text-orange-600 px-4 py-3 transition-colors border-b border-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 px-4">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Mám zájem
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}