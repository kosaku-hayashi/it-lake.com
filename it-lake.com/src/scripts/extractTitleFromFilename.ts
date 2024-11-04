export function extractTitleFromFilename(filename: string): string {
    const nameWithoutExtension = filename.replace(/\.mdx$/, '');
    const nameWithoutDate = nameWithoutExtension.replace(/-\d{4}-\d{2}-\d{2}$/, '');
    const titleWithSpaces = nameWithoutDate.replace(/-/g, ' ');
    const titledTitle = titleWithSpaces.replace(/\b\w/g, (char) => char.toUpperCase());
    return titledTitle;
  }