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
  imageType?: 'hero' | 'background' | 'showcase';
}

// Generate responsive srcSet for retina displays
function generateSrcSet(baseSrc: string, imageType: string): string {
  const baseUrl = baseSrc.replace(/\.[^/.]+$/, ""); // Remove extension
  const responsive = '/assets/responsive/';
  
  if (imageType === 'hero' || imageType === 'background') {
    if (baseSrc.includes('bridge')) {
      return `${responsive}bridge-1600.webp 1600w, ${responsive}bridge-1920.webp 1920w, ${responsive}bridge-2560.webp 2560w, ${responsive}bridge-2880.webp 2880w, ${responsive}bridge-3200.webp 3200w, ${responsive}bridge-3840.webp 3840w`;
    }
    if (baseSrc.includes('events')) {
      return `${responsive}events-1280.webp 1280w, ${responsive}events-1920.webp 1920w, ${responsive}events-2560.webp 2560w`;
    }
  }
  
  if (imageType === 'showcase' && baseSrc.includes('JustBuild')) {
    return `${responsive}justbuild-1600.webp 1600w, ${responsive}justbuild-1920.webp 1920w, ${responsive}justbuild-2560.webp 2560w, ${responsive}justbuild-2880.webp 2880w, ${responsive}justbuild-3200.webp 3200w`;
  }
  
  return '';
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
  imageType = 'background',
  ...props
}: ResponsiveImageProps) {
  
  // For responsive variants with unsharp mask, use picture element
  const srcSet = generateSrcSet(src, imageType);
  
  if (srcSet) {
    // Use the largest responsive variant as fallback
    let fallbackSrc = src;
    if (src.includes('bridge')) {
      fallbackSrc = '/assets/responsive/bridge-3840.webp';
    } else if (src.includes('events')) {
      fallbackSrc = '/assets/responsive/events-2560.webp';
    } else if (src.includes('JustBuild')) {
      fallbackSrc = '/assets/responsive/justbuild-3200.webp';
    }
    
    return (
      <picture>
        <source srcSet={srcSet} sizes={sizes} type="image/webp" />
        <Image
          src={fallbackSrc}
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
      </picture>
    );
  }

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