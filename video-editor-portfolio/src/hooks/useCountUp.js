import { useState } from 'react';

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  const reset = () => {
    setCount(start);
    setIsAnimating(false);
  };

  return { count, startAnimation, reset, isAnimating };
};

export default useCountUp;