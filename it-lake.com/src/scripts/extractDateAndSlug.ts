interface ExtractedData {
  pubDate: string;
  slug: string;
}

export function extractDateAndSlug(filename: string): ExtractedData {
  const pattern = /^(\d{4}-\d{2}-\d{2})-([a-z0-9-]+)\.mdx$/;
  const match = filename.match(pattern);
  if (!match) {
    throw new Error(
      `Invalid filename format. Expected "{yyyy-mm-dd}-{slug}.mdx", received "${filename}"`
    );
  }

  const [, pubDate, slug] = match;
  return { pubDate, slug };
}