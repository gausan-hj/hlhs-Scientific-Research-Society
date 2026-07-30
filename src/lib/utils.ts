/**
 * Format a date string to locale date string (zh-CN)
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

/**
 * Format a date to ISO string
 */
export function toISODate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

/**
 * Truncate text to a given length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Build a full URL with the site base
 */
export function siteUrl(path: string): string {
  const base = import.meta.env.SITE || 'https://research-society.vercel.app';
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
}

/**
 * Extract plain text from Portable Text blocks (for descriptions)
 */
export function blocksToText(blocks: Array<{ children?: Array<{ text?: string }> }> = []): string {
  return blocks
    .flatMap((block) => block.children?.map((child) => child.text || '') ?? [])
    .join(' ')
    .slice(0, 200);
}

/**
 * Generate pagination range
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  delta = 2
): (number | '...')[] {
  const range: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }
  return range;
}
