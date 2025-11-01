import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-4">AG Exterior Cleaning Services</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Delivering exceptional service and restoring valuable time to our clients through dedication and excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#home" className="hover:text-white hover:pl-2 transition-all duration-300 block">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white hover:pl-2 transition-all duration-300 block">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white hover:pl-2 transition-all duration-300 block">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white hover:pl-2 transition-all duration-300 block">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">
                                    South Africa<br />
                                    Cape Town
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                                    Abdullatief Goliath: +27 68 082 6800
                                </a>
                            </li>
                            <a href="mailto:goliathabdullatief@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                agexteriorcleaningservices@gmail.com
                            </a>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} AG Exterior Cleaning Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6"/>
            </button>
        </footer>
    );
};

export default Footer;
