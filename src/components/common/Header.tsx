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
import AppointmentButton from "./AppointmentButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Nav items shared between components
const navItems = ["Home", "Services", "Before & After"];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/home" || location.pathname === "/";
  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };
  return (
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
            <MobileNav setMobileOpen={setMobileOpen} />
          </SheetContent>
        </Sheet>

        {/* Logo + Clinic Name */}
        <div className="flex items-center flex-grow md:flex-grow-0 md:mr-4">
          <img
            onClick={handleLogoClick}
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
          {navItems.map((item) => {
            const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
            const isActive = location.pathname === path;
            return (
              <Link
                to={path}
                key={item}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ease-in-out border-b-2
                  ${
                    isActive
                      ? "border-sky-500 text-sky-600 dark:text-sky-400"
                      : "border-transparent text-foreground hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400"
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Book Appointment Button */}
          <AppointmentButton
            className="hidden md:inline-flex rounded-full px-4 sm:px-6 py-2 text-sm shadow-lg hover:shadow-xl"
            size="default"
            showIcon={false}
          >
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="sm:hidden">Book here</span>
          </AppointmentButton>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ setMobileOpen }: { setMobileOpen: (open: boolean) => void }) {
  const location = useLocation();
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
        {navItems.map((item) => {
          const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
          const isActive = location.pathname === path;
          return (
            <Link
              to={path}
              key={item}
              onClick={() => setMobileOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ease-in-out border-b-2
                ${
                  isActive
                    ? "border-sky-500 text-sky-600 dark:text-sky-400"
                    : "border-transparent text-foreground hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400"
                }`}
            >
              {item}
            </Link>
          );
        })}

        {/* Mobile Book Appointment Button */}
        <AppointmentButton
          className="mx-4 mt-4 rounded-full font-semibold"
          size="default"
          showIcon={false}
          onClick={() => setMobileOpen(false)}
        >
          Book Appointment
        </AppointmentButton>
      </div>
    </div>
  );
}

export default Header;
