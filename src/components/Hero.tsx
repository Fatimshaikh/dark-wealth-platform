"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Assets Under Management", value: "$2.4B" },
    { label: "Client Families", value: "180" },
    { label: "Years of Discipline", value: "27" },
];

export default function Hero() {
    return (
        <section className="relative max-w-5xl mx-auto px-6 pt-40 pb-24 text-center">
            <motion.span
                className="text-gold text-xs tracking-[0.3em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Vantage Point
            </motion.span>

            <motion.h1
                className="font-display text-5xl md:text-7xl text-white mt-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                Discipline, not luck.
            </motion.h1>

            <motion.div
                className="w-20 h-px bg-gold mx-auto mt-8"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p
                className="text-muted text-lg mt-8 max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Private wealth management for a select number of families, built on
                patience, discretion, and decades of disciplined stewardship.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-panel border border-line rounded-2xl p-6 glow-gold"
                    >
                        <span className="font-display text-3xl text-gold block">
                            {stat.value}
                        </span>
                        <span className="text-muted text-xs uppercase tracking-widest mt-2 block">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}