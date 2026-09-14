import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16">
      <form className="w-full max-w-2xl px-2 sm:px-6 md:px-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 px-4 py-3 text-sm sm:text-base rounded-lg outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-200 transition duration-300"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Your Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-4 py-3 text-sm sm:text-base rounded-lg outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-200 transition duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Your Message
          </label>

          <textarea
            placeholder="Write your message..."
            rows="5"
            className="w-full border border-gray-300 px-4 py-3 text-sm sm:text-base rounded-lg outline-none resize-y focus:border-gray-800 focus:ring-2 focus:ring-gray-200 transition duration-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-400 text-white py-3 px-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-orange-600 active:bg-orange-700 transition duration-300"
        >
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;