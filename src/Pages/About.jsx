import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          We are committed to delivering high-quality products with the best
          customer experience. Our goal is to provide value, trust, and
          innovation through our ecommerce platform.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Our Story"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with passion and dedication, our company started with a
              simple mission — to make online shopping easy, affordable, and
              reliable for everyone.
            </p>
            <p className="text-gray-600">
              Over the years, we have grown into a trusted ecommerce brand,
              serving thousands of customers worldwide with quality products
              and exceptional service.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide high-quality products at competitive prices while
              ensuring a seamless shopping experience for our customers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a leading ecommerce brand known for trust, innovation,
              and customer satisfaction across the globe.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl font-semibold mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-6 bg-gray-100 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                Quality Products
              </h4>
              <p className="text-gray-600 text-sm">
                We carefully select and test every product before offering it
                to our customers.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                Fast Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                Reliable and quick shipping to ensure your order reaches you
                on time.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                Secure Payment
              </h4>
              <p className="text-gray-600 text-sm">
                Your transactions are fully protected with advanced security
                systems.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600 text-sm">
                Our support team is always ready to assist you anytime.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Start Shopping?
        </h2>
        <p className="mb-8 text-gray-300">
          Explore our collection and discover amazing products today.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

    </div>
  );
};

export default About;
