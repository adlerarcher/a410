// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://helloadler.com',
	trailingSlash: 'always',

	/** Listen on all interfaces so `localhost` (IPv6) and `127.0.0.1` both hit the same dev server. */
	server: {
  host: '0.0.0.0',
  port: 4321
},

	redirects: {
		'/countries': '/passport/',
		'/interests': '/',
		'/interests/bookshelf': '/bookshelf/',
		'/interests/passport': '/passport/',
		'/workshop': '/workshops/',
		'/workshop/possible-selves': '/workshops/'
	},

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			dedupe: ['react', 'react-dom']
		},
		optimizeDeps: {
			include: ['react', 'react-dom']
		}
	},

	integrations: [react(), sitemap()]
});
