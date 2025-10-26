import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import newlogo from '../assets/newlogo.png'

const Navigationbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const prevWidthRef = useRef<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    const navigationTabs = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const prevWidth = prevWidthRef.current;

            if (newWidth > prevWidth && isMenuOpen && newWidth >= 768) {
                setIsMenuOpen(false);
            }

            prevWidthRef.current = newWidth;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-xl py-3"
                : "bg-white shadow-md py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => handleSmoothScroll(e, "#home")}
                    className="flex items-center gap-3"
                >
                    <img
                        src={newlogo}
                        alt="Company Logo"
                        className={`transition-all duration-300 hover:scale-105 ${isScrolled ? "h-12" : "h-16"} w-auto object-contain drop-shadow-lg`}
                    />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navigationTabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            onClick={(e) => handleSmoothScroll(e, tab.href)}
                            className="text-gray-800 hover:text-blue-600 font-semibold text-base transition-colors duration-200 relative group"
                        >
                            {tab.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                <button
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-gray-700" />
                    ) : (
                        <Menu className="h-6 w-6 text-gray-700" />
                    )}
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 py-4 bg-white border-t-2 border-gray-200 shadow-xl">
                    <div className="flex flex-col gap-2">
                        {navigationTabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                onClick={(e) => handleSmoothScroll(e, tab.href)}
                                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
                            >
                                {tab.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigationbar;