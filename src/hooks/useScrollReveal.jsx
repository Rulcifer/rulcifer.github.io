import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that triggers a CSS class when an element scrolls into view.
 * Uses IntersectionObserver for performant, GPU-accelerated reveals.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility ratio to trigger (0-1)
 * @param {string} options.rootMargin - Observer root margin
 * @param {boolean} options.once - Whether to unobserve after first reveal
 * @returns {{ ref, isVisible }}
 */
export const useScrollReveal = ({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

/**
 * Hook for staggered children reveal.
 * Returns ref for parent + array of visibility states for N children.
 */
export const useStaggerReveal = (count, { staggerMs = 100, ...options } = {}) => {
  const { ref, isVisible } = useScrollReveal(options);
  const [visibleItems, setVisibleItems] = useState(new Array(count).fill(false));

  useEffect(() => {
    if (!isVisible) return;

    const timers = [];
    for (let i = 0; i < count; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleItems((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * staggerMs)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [isVisible, count, staggerMs]);

  return { ref, isVisible, visibleItems };
};
