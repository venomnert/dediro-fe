'use client';

import { Typography } from '@mui/material';
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from 'framer-motion';
import { useRef } from 'react';

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const numberStyles = {
  color: 'var(--black)',
  fontWeight: 600,
  fontSize: '40px',
  width: 'fit-content',
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <Typography sx={numberStyles} ref={ref} />;
};

export default AnimatedCounter;
