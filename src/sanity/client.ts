// Re-export the auto-configured Sanity client from @sanity/astro integration
export { sanityClient as client } from 'sanity:client';

import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Use a simple inline config since the project ID/dataset are known at build time
// The builder will be used for constructing image URLs
export function urlFor(source: SanityImageSource) {
  // We need to create a client for the builder. In dev/build we can read from env.
  // For simplicity we use a placeholder — in production this is replaced at build time.
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

  const builder = imageUrlBuilder({
    projectId,
    dataset,
  });

  return builder.image(source);
}

/**
 * Build responsive srcset for a Sanity image
 * Returns an object with src, srcset, and dimensions
 */
export function getImageProps(
  image: SanityImageSource,
  { maxWidth = 1200, sizes = [400, 800, 1200] }: { maxWidth?: number; sizes?: number[] } = {},
) {
  if (!image) return null;

  const img = urlFor(image);
  const src = img.width(maxWidth).auto('format').url();
  const srcset = sizes
    .map((w) => {
      const url = img.width(w).auto('format').url();
      return `${url} ${w}w`;
    })
    .join(', ');

  // Get dimensions if available (for CLS prevention)
  const dimensions = (image as any)?.asset?._ref
    ? null // We need to parse the ref to get dimensions, handled via CSS aspect-ratio
    : null;

  return { src, srcset, sizes: sizes.map((s) => `${s}px`).join(', '), maxWidth, dimensions };
}
