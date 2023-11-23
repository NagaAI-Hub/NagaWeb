// app/utils/cache.ts
type CacheContent = {
    expiry: number;
    data: any;
  };
  
  class Cache {
    private cache: Record<string, CacheContent> = {};
    private defaultTTL: number = 30 * 60 * 1000; // 5 minutes in milliseconds
  
    set(key: string, data: any, ttl: number = this.defaultTTL) {
      const expiry = Date.now() + ttl;
      this.cache[key] = { expiry, data };
    }
  
    get(key: string) {
      const item = this.cache[key];
      if (!item) return null;
  
      if (Date.now() > item.expiry) {
        delete this.cache[key];
        return null;
      }
  
      return item.data;
    }
  }
  
  export const cache = new Cache();
  