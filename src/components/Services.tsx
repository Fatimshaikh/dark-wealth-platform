"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            <motion.h2
                className="font-display text-3xl md:text-4xl text-white text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                What We Do
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                    <motion.div
                        key={service.number}
                        className="bg-panel border border-line rounded-2xl p-8 hover:border-gold/40 transition-colors duration-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <span className="font-display text-gold text-2xl">
                            {service.number}
                        </span>
                        <h3 className="font-display text-xl text-white mt-4">
                            {service.title}
                        </h3>
                        <p className="text-muted text-sm mt-3 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}