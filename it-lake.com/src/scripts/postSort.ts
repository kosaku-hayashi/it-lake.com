import { type CollectionEntry } from 'astro:content';
import { extractDateAndSlug } from './extractDateAndSlug';

export function postSort(allPosts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
    const sortedPosts = allPosts.sort((a, b) => {
        const bDate = extractDateAndSlug(b.id).pubDate;
        const aDate = extractDateAndSlug(a.id).pubDate;
        return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
    return sortedPosts;
}