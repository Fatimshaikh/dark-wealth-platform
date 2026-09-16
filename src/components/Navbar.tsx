"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-6 transition-colors duration-500 ${scrolled
                    ? "bg-bg/95 backdrop-blur-md border-b border-line"
                    : "bg-transparent"
                }`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Logo */}
            <span className="font-display text-lg text-white tracking-wide">
                Vantage <span className="text-gold">Point</span>
            </span>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-10 font-body text-sm text-muted">
                {["Services", "Approach", "Insights", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-white transition-colors duration-300"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <a
                href="#contact"
                className="px-5 py-2 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-bg transition-colors duration-300"
            >
                Request Access
            </a>
        </motion.nav>
    );
}