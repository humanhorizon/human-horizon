// Stock photos live in public/photos (Unsplash License; source noted in public/photos/CREDITS.md).
// A slot renders its photo only once the file exists, so layouts never point at a missing image.
import { existsSync } from 'node:fs';

export function photo(path: string): string | null {
  return existsSync(new URL(`../../public/photos/${path}`, import.meta.url)) ? `/photos/${path}` : null;
}
