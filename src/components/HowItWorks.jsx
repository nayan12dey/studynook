


const HowItWorks = () => {

  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Browse through our curated list of available study spaces in your area based on your needs."
    },
    {
      number: "2",
      title: "Book",
      description: "Select your preferred time slot and securely reserve your room with just a few clicks."
    },
    {
      number: "3",
      title: "Focus",
      description: "Show up, unlock the door with your digital pass, and enjoy a productive study session."
    }
  ];


  return (
    <div className="py-24 bg-gray-50 min-w-[1024px]">
      <div className="w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your perfect study environment is just three simple steps away.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white hover:bg-indigo-50 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 space-y-1 text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;