import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import contact from '../assets/contact.jpeg';
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/createEmail`, formData);

            if (response.data.success) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 3000);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br  via-blue-50 to-indigo-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8" id='contact'>
            <div className="max-w-6xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600">
                        We'd love to hear from you. Send us a message!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className=" p-8 md:p-12 border border-gray-100">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <Send className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-gray-50 hover:bg-white"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-gray-50 hover:bg-white"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-4 left-4 pointer-events-none">
                                            <MessageSquare className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-gray-50 hover:bg-white resize-none"
                                            placeholder="Tell us about your project or inquiry..."
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                                    className=" mt-6 bg-[#3499c6] hover:bg-[#267fa8] text-white px-6 py-3 rounded-lg font-semibold transition w-full md:w-auto w-full py-4 px-8 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                            src={contact}
                            alt="Contact us"
                            className="w-full h-full object-cover min-h-96"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-3xl font-bold mb-3">We're Here to Help</h3>
                            <p className="text-lg text-blue-50 mb-6">
                                Have questions? Our team is ready to assist you with any inquiries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
