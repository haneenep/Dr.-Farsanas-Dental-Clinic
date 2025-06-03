
const BeforeAfterHero = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop"
        alt="Before & After Gallery"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Before & After Gallery
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Transforming Smiles, Changing Lives
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterHero;
