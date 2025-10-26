import React from "react";
import { Award, Users, Target, Sparkles } from "lucide-react";

const About: React.FC = () => {
    return (
        <section className="w-full py-20 via-blue-50 to-blue-50 overflow-hidden" id="about">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dedicated to delivering exceptional service and restoring valuable time to our clients
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                With a short period in the business, however, coming from public services and many years of serving the public, we continuously strive to grow and contribute to our communities by delivering exceptional service that restores our clients' valuable time.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our foundation is built on years of public service experience, bringing a unique perspective to understanding and meeting our clients' needs with dedication and excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Users className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Client-Focused</h3>
                                <p className="text-sm text-gray-600">Your success is our priority</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Award className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Excellence</h3>
                                <p className="text-sm text-gray-600">Committed to quality</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="https://www.shutterstock.com/image-photo/male-cleaners-posing-smiling-man-600nw-2475726943.jpg"
                                alt="Our team working together"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-100 rounded-xl p-3">
                                    <Sparkles className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Years of Experience</p>
                                    <p className="text-sm text-gray-600">In public service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Target className="h-10 w-10 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Impact</h3>
                            <p className="text-gray-600">
                                We strive to make meaningful contributions to our communities through dedicated service and genuine care.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Award className="h-10 w-10 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                            <p className="text-gray-600">
                                Our commitment to exceptional service comes from years of experience in public service and client care.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-10 w-10 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Client Success</h3>
                            <p className="text-gray-600">
                                We restore valuable time to our clients, allowing them to focus on what matters most to them.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;