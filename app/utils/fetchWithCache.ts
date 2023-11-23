import { cache } from './cache';

export async function fetchWithCache(url: string, ttl?: number) {
  // Check if the data is in the cache
  const cachedData = cache.get(url);
  if (cachedData) return cachedData;

  // Fetch the data from the API
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  const data = await response.json();

  // Cache the data
  cache.set(url, data, ttl);

  return data;
}