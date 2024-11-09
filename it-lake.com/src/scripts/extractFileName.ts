export function extractFileName(src: string | ImageMetadata): string {
  src = typeof src === "string" ? src : (src as ImageMetadata).src;
  const cleanPath = src.split('?')[0].split('#')[0];
  const segments = cleanPath.split('/');
  const lastSegment = segments.pop() || '';

  const dotIndex = lastSegment.lastIndexOf('.');
  if (dotIndex === -1) return lastSegment;

  return lastSegment.substring(0, dotIndex);
}