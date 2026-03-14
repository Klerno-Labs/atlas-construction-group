"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Safety Record" },
  { value: 50, suffix: "M", label: "Sq Ft Built" },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        if (step > steps) {
          clearInterval(timer);
          setCurrent(value);
        } else {
          setCurrent(Math.floor(stepValue * step));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {current}{suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-accent font-medium">
        {label}
      </div>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-primary py-16 border-y border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}