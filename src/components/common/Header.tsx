import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "../ui/ThemeToggle";

// Nav items shared between components
const navItems = [
  "Home",
  "About", 
  "Services",
  "Gallery",
  "Contact Us",
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 sm:h-16 items-center px-4 sm:px-8">
          {/* Mobile menu button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu
                </SheetDescription>
              </SheetHeader>
              <MobileNav />
            </SheetContent>
          </Sheet>

          {/* Logo + Clinic Name */}
          <div className="flex items-center flex-grow md:flex-grow-0 md:mr-4">
            <img
              src="/logo.svg"
              alt="Clinic Logo"
              width={55}
              height={55}
              className="rounded-full mr-3 object-cover"
            />
            <div className="flex flex-col leading-none">
              <h1 className="text-black dark:text-white font-extrabold text-xl sm:text-2xl leading-none">
                Dr. Farsana&apos;s
              </h1>
              <p className="text-foreground font-medium text-sm sm:text-base tracking-wide -mt-0.5">
                Dental Clinic
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-grow justify-center items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-2 rounded-md text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-sm font-medium whitespace-nowrap transition-all duration-200 ease-in-out"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Book Appointment Button */}
            <Button
              className="hidden md:inline-flex bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-full px-4 sm:px-6 py-2 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
              style={{ 
                boxShadow: "0 4px 15px rgba(255, 87, 34, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 87, 34, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 87, 34, 0.3)";
              }}
            >
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book here</span>
            </Button>

            <ModeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      {/* Logo in mobile */}
      <div className="flex items-center justify-center mb-4">
        <img
          src="/logo.svg"
          alt="Clinic Logo"
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
      </div>
      
                    <div className="border-t border-gray-200 dark:border-gray-700 mb-4" />
      
      {/* Navigation items */}
      <div className="flex flex-col space-y-1">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block px-4 py-3 text-center text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-md transition-colors"
          >
            {item}
          </a>
        ))}
        
        {/* Mobile Book Appointment Button */}
        <Button
          className="mx-4 mt-4 bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-full font-semibold"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
}

export default Header;