import React from "react";
import { motion } from "framer-motion";
import cleaning from "../assets/cleaning.png";

const Home: React.FC = () => {
    return (
        <section
            id="home"
            className="relative w-screen h-screen overflow-hidden bg-black"
        >
            <motion.img
                src={cleaning}
                alt="cleaning"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

            <div className="absolute inset-0 flex items-center">
                <motion.div
                    className="px-6 md:pl-16 text-white max-w-lg w-full md:w-auto mx-auto md:mx-0 text-center md:text-left"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Rediscover the Peace of a Perfectly Tidy Home
                    </motion.h1>

                    <motion.p
                        className="text-base md:text-lg drop-shadow-md max-w-prose mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        We'd love to give you the transformative power of professional
                        exterior cleaning and help you regain the peace of mind of coming
                        home to a beautifully clean and tidy home.
                    </motion.p>

                    <motion.button
                        className="mt-6 bg-[#3499c6] hover:bg-[#267fa8] text-white px-6 py-3 rounded-lg font-semibold transition w-full md:w-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => {
                            const section = document.getElementById("services");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Get Started
                    </motion.button>

                </motion.div>
            </div>
        </section>
    );
};

export default Home;
