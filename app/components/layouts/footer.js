import { FaBookOpen } from "react-icons/fa6";
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-blue-700 text-white py-10">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Logo and Description */}
                    <div className="mb-6 lg:mb-0 lg:w-1/5">
                        <div className="flex justify-center lg:justify-start items-center gap-4 hover:scale-110 transition-transform delay-75">
                            <FaBookOpen className="text-8xl" />
                            <Link href="/" className="w-full text-3xl font-bold text-white">
                                <div className="flex flex-col">
                                    <span>Idea-School</span>
                                    <span className="text-sm">Serving the purpose of study</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 lg:mb-0 lg:pl-5 lg:w-1/5">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Ideaschool</h3>
                            <ul className="text-sm">
                                <li className="mb-2"><a href="#" className="hover:underline">Mission</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Vision & Philosophy</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Idea Values</a></li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-4">Academics</h3>
                            <ul className="text-sm">
                                <li className="mb-2"><a href="#" className="hover:underline">Curriculum Overview</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0 lg:w-1/5">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="text-sm">
                                <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Admissions</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Programs</a></li>
                                <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Admission Information */}
                    <div className="lg:w-1/5">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Admission Information</h3>
                            <ul className="text-sm">
                                <li className="mb-2">123 School St,</li>
                                <li className="mb-2">City, </li>
                                <li className="mb-2">Country, Postal Code </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="lg:w-1/5">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="text-sm">
                                <li className="mb-2">Email: info@school.com</li>
                                <li className="mb-2">Phone: (123) 456-7890</li>
                            </ul>
                            <div className="mt-4 flex space-x-4">
                                <a href="#" className="text-white hover:text-gray-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.56v14.88C24 21.4 22.4 23 20.44 23H3.56C1.6 23 0 21.4 0 19.44V4.56C0 2.6 1.6 1 3.56 1h16.88C22.4 1 24 2.6 24 4.56zM7.12 19.64h2.48v-9.76H7.12v9.76zM8.36 8.96c.88 0 1.44-.64 1.44-1.44 0-.88-.56-1.44-1.44-1.44s-1.44.56-1.44 1.44c0 .8.56 1.44 1.44 1.44zm6.72 10.68h2.48v-5.52c0-1.52.56-2.56 1.92-2.56 1.04 0 1.6.8 1.6 2.16v5.92h2.48v-6.4c0-2.64-1.36-4-3.28-4-1.44 0-2.4.8-2.88 1.6h.08v-1.36h-2.48c.08.96 0 9.76 0 9.76z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-gray-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.04 1.25C5.44 1.25 0 6.71 0 13.33c0 5.31 3.35 9.81 7.96 11.4.58.11.8-.25.8-.57v-2.08c-3.29.71-3.95-1.64-3.95-1.64-.52-1.32-1.27-1.68-1.27-1.68-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.17 1.76 1.17 1.03 1.77 2.68 1.26 3.32.96.11-.74.41-1.26.75-1.55-2.62-.3-5.38-1.31-5.38-5.85 0-1.3.46-2.36 1.22-3.19-.12-.31-.54-1.57.12-3.28 0 0 1-.31 3.26 1.22a11.33 11.33 0 013.97-.54c1.35 0 2.7.18 3.97.54 2.28-1.53 3.27-1.22 3.27-1.22.66 1.71.24 2.97.12 3.28.75.83 1.21 1.89 1.21 3.19 0 4.56-2.77 5.55-5.4 5.84.42.36.82 1.1.82 2.22v3.3c0 .32.22.68.8.57A11.99 11.99 0 0024 13.33c0-6.62-5.44-12.08-11.96-12.08z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Copyright and Links */}
                <div className="mt-8 border-t border-blue-600 pt-6 text-center text-sm">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                        <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Idea School. All rights reserved.</div>
                        <div className="flex gap-5">
                            <a href="#" className="text-white hover:text-gray-200">Privacy Policy</a>
                            <a href="#" className="text-white hover:text-gray-200">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
