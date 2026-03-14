"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 25, label: "Years Experience", suffix: "+" },
  { value: 500, label: "Projects Completed", suffix: "+" },
  { value: 100, label: "Safety Record", suffix: "%" },
  { value: 35, label: "Expert Craftsmen", suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const incrementTime = duration / end;
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
    };
  }, [value]);

  return (
    <span ref={nodeRef}>
      {count}{suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-primary py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}