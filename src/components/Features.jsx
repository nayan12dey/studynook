import { FaWifi, FaMugHot, FaShieldHalved } from 'react-icons/fa6';


const Features = () => {

  const features = [
    {
      title: "High-Speed Wi-Fi",
      description: "Every room is equipped with fast, reliable internet to keep you connected and productive.",
      icon: <FaWifi className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Quiet & Private",
      description: "Soundproofed spaces designed specifically for deep focus and uninterrupted study sessions.",
      icon: <FaShieldHalved className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Premium Amenities",
      description: "Access to ergonomic seating, whiteboards, and complimentary coffee in select locations.",
      icon: <FaMugHot className="w-6 h-6 text-indigo-600" />
    }
  ];


  return (
    <div className="py-24 bg-white min-w-[1024px]">
      <div className="w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StudyNook?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to maximize your productivity and ace your goals.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-indigo-50 hover:bg-indigo-100 duration-300 border border-indigo-100">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600  text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;