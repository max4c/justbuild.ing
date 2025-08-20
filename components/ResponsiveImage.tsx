import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
}

export default function ResponsiveImage({
  src,
  alt,
  priority = false,
  loading = 'lazy',
  className = '',
  fill = false,
  width,
  height,
  sizes = '100vw',
  quality = 75,
  ...props
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      loading={loading}
      className={className}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      {...props}
    />
  );
}