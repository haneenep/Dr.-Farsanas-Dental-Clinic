import { Activity, Camera, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MoreButton from "../common/MoreButton";

const DentalServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "root canal",
      subtitle: "treatment",
      description:
        "Advanced endodontic therapy to save infected teeth. Our gentle approach ensures comfort while preserving your natural smile with precision care.",
      backgroundImage:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "digital x-ray",
      subtitle: "imaging",
      description:
        "State-of-the-art digital radiography provides instant, high-resolution images with 90% less radiation exposure for safer, more accurate diagnostics.",
      backgroundImage:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: <Camera className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "teeth cleaning",
      subtitle: "& hygiene",
      description:
        "Professional deep cleaning removes plaque and tartar buildup. Our gentle yet thorough approach leaves your teeth sparkling and your gums healthy.",
      backgroundImage:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: <Sparkles className="w-8 h-8" />,
    },
  ];

  const handleMoreServices = () => {
    navigate("/services");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <div className="bg-background/95 text-foreground py-16 px-4 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <h2 className="text-5xl md:text-6xl font-medium mb-4 text-foreground">
            Services
          </h2>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground">
            at Dr. Farsana's Dental Clinic
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="relative group bg-background/80 border rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/80 to-background/60 dark:from-background/95 dark:via-background/80 dark:to-background/60" />

              <div className="relative z-20 p-6 flex flex-col h-full">
                <div className="flex justify-center items-center mb-6 text-sky-500">
                  {service.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">
                  <span className="text-sky-500 capitalize">
                    {service.title}
                  </span>
                  <br />
                  <span className="text-foreground capitalize">
                    {service.subtitle}
                  </span>
                </h3>

                <p className="text-muted-foreground text-center leading-relaxed flex-grow flex items-center font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <MoreButton onClick={handleMoreServices} children="More Services" />
        </motion.div>
      </div>
    </div>
  );
};

export default DentalServicesSection;
