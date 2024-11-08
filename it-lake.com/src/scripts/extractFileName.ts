export function extractFileName(path: string): string {
    const cleanPath = path.split('?')[0].split('#')[0];
    const segments = cleanPath.split('/');
    const lastSegment = segments.pop() || '';

    const dotIndex = lastSegment.lastIndexOf('.');
    if (dotIndex === -1) return lastSegment;

    return lastSegment.substring(0, dotIndex);
  }