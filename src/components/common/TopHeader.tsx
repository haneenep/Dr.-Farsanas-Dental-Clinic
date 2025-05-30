import { Phone, Mail } from "lucide-react";

function TopHeader() {
  return (
    <div className="hidden md:block w-full bg-sky-600 text-white">
      <div className="flex items-center justify-between px-4 sm:px-8 py-2 text-sm">
        {/* Left side - Opening hours */}
        <div className="flex items-center space-x-1">
          <span className="font-medium">Opens:</span>
          <span>Monday to Saturday 10:00 AM - 6:00 PM</span>
        </div>

        {/* Right side - Contact info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+91 9895 202 100</span>
          </div>
          <div className="flex items-center space-x-2">
            <a
            href="mailto:contact@dentalwellnessthrissur.com"
            className="flex items-center space-x-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <Mail className="h-4 w-4" />
            <span>contact@dentalwellnessthrissur.com</span>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;