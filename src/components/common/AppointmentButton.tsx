import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface AppointmentButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({
  children = "Book Appointment",
  showIcon = true,
  className = "",
  ...props
}) => (
  <Button
    size="lg"
    className={
      "bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-2xl px-8 py-4 text-base font-semibold relative transition-all duration-300 ease-in-out hover:-translate-y-1 group " +
      className
    }
    style={{
      boxShadow: "0 4px 15px rgba(255, 87, 34, 0.3)",
      ...(props.style || {}),
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 87, 34, 0.4)";
      props.onMouseEnter?.(e);
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 87, 34, 0.3)";
      props.onMouseLeave?.(e);
    }}
    {...props}
  >
    {children}
    {showIcon && (
      <ArrowUpRight className="absolute top-3 right-2 h-5 w-5 text-white opacity-85 pointer-events-none" />
    )}
  </Button>
);

export default AppointmentButton;