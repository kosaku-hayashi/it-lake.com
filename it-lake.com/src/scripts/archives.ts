import type { CollectionEntry } from 'astro:content';
import { extractDateAndSlug } from './extractDateAndSlug';

export function getAllArchives(allPosts: CollectionEntry<'posts'>[]): { year: number; month: number }[] {
  const archivesSet = new Set<string>();

  allPosts.forEach(post => {
    const pubDate = extractDateAndSlug(post.id).pubDate;
    const date = new Date(pubDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため+1
    archivesSet.add(`${year}-${month.toString().padStart(2, '0')}`);
  });

  const archivesArray = Array.from(archivesSet).map(str => {
    const [year, month] = str.split('-').map(Number);
    return { year, month };
  });

  archivesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  });

  return archivesArray;
}