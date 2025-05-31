import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Social icons - you'll need to install lucide-react or use your preferred icon library
import { Facebook, Instagram, Mail } from "lucide-react";

const clinicDetails = {
  name: "Dr. Farsana's Dental Clinic",
  address: "1st Floor, SMT complex, Maranchery, Kerala, India",
  phone: "+91 9895202100",
  email: "drfarsanasdentalclinic@gmail.com",
  places: ["Maranchery", "Malappuram", "Kerala"],
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.188z"/>
  </svg>
);

const socialLinks = [
  {
    icon: <Facebook className="h-5 w-5" />,
    label: "Facebook",
    href: "https://facebook.com/",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://www.instagram.com/dr.farsanasdentalclinic?igsh=MWJrYW45MHNyZXMyMA==",
  },
  {
    icon: <WhatsAppIcon className="h-5 w-5" />,
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
              Follow us for updates!
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