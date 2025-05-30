import { Activity, Camera, Sparkles } from 'lucide-react';

const DentalServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "root canal",
      subtitle: "treatment",
      description: "Advanced endodontic therapy to save infected teeth. Our gentle approach ensures comfort while preserving your natural smile with precision care.",
      backgroundImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: <Activity className="w-8 h-8" />
    },
    {
      id: 2,
      title: "digital x-ray",
      subtitle: "imaging",
      description: "State-of-the-art digital radiography provides instant, high-resolution images with 90% less radiation exposure for safer, more accurate diagnostics.",
      backgroundImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: <Camera className="w-8 h-8" />
    },
    {
      id: 3,
      title: "teeth cleaning",
      subtitle: "& hygiene",
      description: "Professional deep cleaning removes plaque and tartar buildup. Our gentle yet thorough approach leaves your teeth sparkling and your gums healthy.",
      backgroundImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  const handleMoreServices = () => {
    // Replace with your actual navigation logic
    console.log("Navigate to services page");
    // Example: window.location.href = '/services';
    // Or if using React Router: navigate('/services');
  };

  return (
    <div className="bg-background/95 text-foreground py-16 px-4 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium mb-4 text-foreground">
            Services
          </h2>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground">
            at Dr. Farsana's Dental Clinic
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-background/80 border rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/80 to-background/60 dark:from-background/95 dark:via-background/80 dark:to-background/60" />
              
              {/* Content */}
              <div className="relative z-20 p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="flex justify-center items-center mb-6 text-sky-500">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">
                  <span className="text-sky-500 capitalize">{service.title}</span>
                  <br />
                  <span className="text-foreground capitalize">{service.subtitle}</span>
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed flex-grow flex items-center font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="text-center">
          <button
            onClick={handleMoreServices}
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="mr-2">More Services</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DentalServicesSection;