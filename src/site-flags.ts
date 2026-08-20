/**
 * Set PUBLIC_UNDER_CONSTRUCTION=true when building for production to show the
 * placeholder homepage. Omit or set false for the full site.
 * Example: PUBLIC_UNDER_CONSTRUCTION=true npm run build
 *
 * (Kept out of `config.ts` — that name can confuse Vite/Astro’s module loader in dev.)
 */
export const siteUnderConstruction =
	typeof import.meta.env?.PUBLIC_UNDER_CONSTRUCTION === 'string' &&
	import.meta.env.PUBLIC_UNDER_CONSTRUCTION === 'true';
