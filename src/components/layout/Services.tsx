import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-100 mt-8 px-4 sm:px-6 md:px-10 py-12 sm:py-16">

      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Services
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Personal Training
          </h3>

          <p className="text-gray-800 leading-relaxed">
            Customized workout plans tailored to your goals with 1-on-1
            coaching.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Group Classes
          </h3>

          <p className="text-gray-800 leading-relaxed">
            High-energy fitness classes including HIIT, Zumba, Yoga, and more.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Nutrition Guidance
          </h3>

          <p className="text-gray-800 leading-relaxed">
            Personalized diet plans from certified nutritionists to fuel your
            fitness journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;