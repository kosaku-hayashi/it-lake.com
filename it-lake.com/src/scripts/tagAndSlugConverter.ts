const tagMappings: { [displayName: string]: string } = {
  "C#": "csharp",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "HTML": "html",
  "CSS": "css",
};

const inverseTagMappings: { [slug: string]: string } = Object.fromEntries(
  Object.entries(tagMappings).map(([displayName, slug]) => [slug, displayName])
);


export function tagToSlug(tag: string): string {
  return tagMappings[tag] || tag.toLowerCase().replace(/\s+/g, '-');
}

export function slugToTag(slug: string): string {
  const mappedTag = inverseTagMappings[slug];
  if (mappedTag) {
    return mappedTag;
  }

  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}