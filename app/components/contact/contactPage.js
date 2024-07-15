import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFax, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Malibagh Branch</h2>
          <p className="mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            123 Demo Street, Dhaka-1219
          </p>
          <p className="mb-2">
            <FaEnvelope className="inline-block mr-2" />
            malibagh@idealschool.com
          </p>
          <p className="mb-2">
            <FaPhoneAlt className="inline-block mr-2" />
            +8801 2345 6789
          </p>
          <p className="mb-2">
            <FaPhoneAlt className="inline-block mr-2" />
            +8801 9876 5432
          </p>
          <p className="mb-8">
            <FaFax className="inline-block mr-2" />
            www.idealschool.com
          </p>

          <h2 className="text-2xl font-semibold mb-4">Mohammadpur Branch</h2>
          <p className="mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            456 Example Avenue, Mohammadpur, Dhaka 1207
          </p>
          <p className="mb-2">
            <FaEnvelope className="inline-block mr-2" />
            mohammadpur@idealschool.com
          </p>
          <p className="mb-2">
            <FaPhoneAlt className="inline-block mr-2" />
            +8801 1111 2222
          </p>
          <p className="mb-8">
            <FaFax className="inline-block mr-2" />
            www.idealschool.com
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7828032983965!2d90.38425341490562!3d23.813233484556154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c709c7f93a3b%3A0x73f2bf429e79b5e8!2sPremier%20School%20Dhaka!5e0!3m2!1sen!2sbd!4v1625646589753!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-4">Leave us your info and we will get back to you.</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
