import { useState } from 'react';
import fallbackImage from '@/assets/logo.jpeg';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Convertir l'URL pour utiliser WebP si disponible
  const webpSrc = src.replace(/\.(jpeg|jpg|png)$/, '.webp');

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
          <img
            src={fallbackImage}
            alt={alt}
            width={width}
            height={height}
            className="h-20 w-20 object-contain opacity-70"
          />
        </div>
      ) : (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            width={width}
            height={height}
          />
        </picture>
      )}
    </div>
  );
}