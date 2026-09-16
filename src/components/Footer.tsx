"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
    <footer className="border-t border-line py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-xl text-white">
            Vantage <span className="text-gold">Point</span>
          </h3>
          <p className="text-muted text-sm mt-2 max-w-xs">
            Vantage Point Capital Management is a registered investment
            adviser. By invitation only.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-6 text-sm text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {["Disclosures", "Privacy", "Contact"].map((link) => (
            
              key={link}
              href="#"
              className="hover:text-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-line text-xs text-muted">
        © {new Date().getFullYear()} Vantage Point Capital Management. Built with Next.js, TypeScript, Tailwind & Framer Motion.
      </div>
    </footer >
  );
}