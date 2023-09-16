import React from "react";
import Call from "../assets/call.png";
import Mail from "../assets/mail.png";
import Location from "../assets/location.png";
import ExtLink from "../assets/extLink.svg";

const Contact = () => {
  // Function to open Google Maps with the address
  const openGoogleMaps = () => {
    const address =
      "Outer Ring Rd, near Marathalli, Kaverappa Layout, Kadubeesanahalli, Kadabeesanahalli, Bengaluru, Karnataka 560103";
    const url = "https://maps.app.goo.gl/opX6EjuxG2hLniFw6";
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto mt-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h2 className=" mb-12 text-xl font-semibold text-gray-900">
                Contact Form
              </h2>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border-gray-300 rounded-md"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border-gray-300 rounded-md"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 w-full border-gray-300 rounded-md"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Email Address</h2>
              <div className="flex items-center space-x-2">
                <img src={Mail} alt="Email Icon" className="w-6 h-6" />
                <span>
                  <b>Email:</b> example@example.com
                </span>
              </div>
            </div>
            <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Phone Number</h2>
              <div className="flex items-center space-x-2">
                <img src={Call} alt="Phone Icon" className="w-6 h-6" />
                <span>
                  <b>Phone:</b> +1 123-456-7890
                </span>
              </div>
            </div>
            <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="flex items-start space-x-2">
                <img
                  src={Location}
                  alt="Address Icon"
                  className="w-6 h-6 mt-1"
                />
                <span>
                  <b>Address:</b> Outer Ring Rd, near Marathalli, Kaverappa
                  Layout, Kadubeesanahalli, Kadabeesanahalli, Bengaluru,
                  Karnataka 560103
                </span>
                <button
                  onClick={openGoogleMaps}
                  className="ml-4"
                  title="Open in Google Maps"
                >
                  <img src={ExtLink} alt="link" className="h-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
