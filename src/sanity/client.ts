import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'zbnhj067';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

const builder = imageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageProps(
  image: SanityImageSource,
  { maxWidth = 1200, sizes = [400, 800, 1200] }: { maxWidth?: number; sizes?: number[] } = {},
) {
  if (!image) return null;

  // Guard: need an asset reference to build a URL
  if (!(image as any)?.asset && !(image as any)?._ref) {
    return null;
  }

  const img = urlFor(image);
  const src = img.width(maxWidth).auto('format').url();
  const srcset = sizes
    .map((w) => {
      const url = img.width(w).auto('format').url();
      return `${url} ${w}w`;
    })
    .join(', ');

  return { src, srcset, sizes: sizes.map((s) => `${s}px`).join(', '), maxWidth };
}
