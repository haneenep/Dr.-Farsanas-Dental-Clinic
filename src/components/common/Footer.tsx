import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Social icons - you'll need to install lucide-react or use your preferred icon library
import { Facebook, Instagram, MessageCircle, Mail } from "lucide-react";

const clinicDetails = {
  name: "Dr. Farsana's Dental Clinic",
  address: "1st Floor, City Mall, Main Road, Calicut, Kerala, India",
  phone: "+91 98765 43210",
  email: "contact@farsanadental.com",
  places: ["Calicut", "Kozhikode", "Kerala"],
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

const socialLinks = [
  {
    icon: <Facebook className="h-5 w-5" />,
    label: "Facebook",
    href: "https://facebook.com/",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    href: `mailto:${clinicDetails.email}`,
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background pt-16 pb-8 mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            {/* Logo + Name */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.svg"
                alt="Clinic Logo"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-primary leading-tight">
                  Dr. Farsana's
                </h3>
                <p className="text-lg font-medium text-foreground tracking-wide -mt-1">
                  Dental Clinic
                </p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{clinicDetails.address}</p>
              
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href={`tel:${clinicDetails.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {clinicDetails.phone}
                </a>
              </p>
              
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${clinicDetails.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {clinicDetails.email}
                </a>
              </p>
              
              <p>
                <span className="font-semibold">Locations:</span>{" "}
                {clinicDetails.places.join(", ")}
              </p>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground tracking-wide">
              Clinic Hours
            </h3>
            
            <div className="space-y-1">
              {clinicDetails.hours.map((h) => (
                <p
                  key={h.day}
                  className={`text-sm ${
                    h.day === "Sunday" 
                      ? "text-destructive font-bold" 
                      : "text-muted-foreground"
                  }`}
                >
                  {h.day}: {h.time}
                </p>
              ))}
            </div>
            
            <p className="text-xs text-muted-foreground italic">
              Walk-ins & appointments welcome
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-lg font-semibold text-foreground tracking-wide">
              Connect With Us
            </h3>
            
            <div className="flex space-x-3 md:justify-end">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground md:text-right">
              Follow us for updates & offers!
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Privacy Policy and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <a
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} {clinicDetails.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;