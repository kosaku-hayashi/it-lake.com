import { extractFileName } from './extractFileName';

interface ExtractedData {
  pubDate: string;
  slug: string;
}

export function extractDateAndSlug(path: string): ExtractedData {
  const fileName = extractFileName(path, true);
  const pattern = /^(\d{4}-\d{2}-\d{2})-([a-z0-9-]+)\.mdx$/;
  const match = fileName.match(pattern);
  if (!match) {
    throw new Error(
      `Invalid filename format. Expected "{yyyy-mm-dd}-{slug}.mdx", received "${fileName}"`
    );
  }

  const [, pubDate, slug] = match;
  return { pubDate, slug };
}