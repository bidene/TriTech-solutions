import { useEffect } from 'react';

// Google Analytics 4
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

type Gtag = (...args: [string, ...unknown[]]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Load Google Analytics
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.gtag = window.gtag || ((...args: [string, ...unknown[]]) => {
        const queue = ((window as Window & { dataLayer?: unknown[][] }).dataLayer ||= []);
        queue.push(args);
      });

      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);
    }
  }, []);

  return null;
}