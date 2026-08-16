"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return null;
}
