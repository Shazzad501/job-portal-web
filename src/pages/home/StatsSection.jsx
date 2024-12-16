import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "25 K+", title: "Completed Cases" },
    { number: "17 K+", title: "Our Office" },
    { number: "86 K+", title: "Skilled People" },
    { number: "28 K+", title: "Happy Clients" },
  ];

  return (
    <section className="bg-white py-12 px-4 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Number */}
            <h2 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h2>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {stat.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">
              We always provide people a complete solution upon focused of any business
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
