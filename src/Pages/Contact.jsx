import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Have questions or need assistance? We're here to help. Reach out to
          us anytime and our team will respond as soon as possible.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-600">
                123 Main Street, Your City, Your Country
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">
                support@example.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">
                +1 234 567 890
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Working Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <form className="space-y-6">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 sm:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-600">
              Google Map Embed Here
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
