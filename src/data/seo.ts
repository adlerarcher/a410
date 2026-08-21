import {
	PERSON_PRIMARY_URL,
	PERSON_SAME_AS,
	SITE_DEFAULT_DESCRIPTION,
	SITE_HOME_DESCRIPTION,
	SITE_NAME,
	SITE_ORIGIN,
	SITE_PERSON_NAME,
	SITE_PERSON_NAME_FULL,
	SITE_TAGLINE,
	SITE_TOPICS
} from './site-meta';

export function absoluteUrl(path: string, origin = SITE_ORIGIN): string {
	if (path.startsWith('http://') || path.startsWith('https://')) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return new URL(normalized, origin).href;
}

export function buildPersonSchema(siteOrigin: string) {
	return {
		'@type': 'Person',
		'@id': `${siteOrigin}/#person`,
		name: SITE_PERSON_NAME,
		alternateName: [SITE_PERSON_NAME_FULL, 'Adler Archer JD'],
		url: PERSON_PRIMARY_URL,
		sameAs: [...PERSON_SAME_AS],
		knowsAbout: [
			'artificial intelligence',
			'large language models',
			'AI systems',
			'plain-language AI education'
		],
		description:
			'Adler Archer writes AI410, a personal site that explains artificial intelligence in plain language for busy professionals.'
	};
}

export function buildWebsiteSchema(siteOrigin: string, description = SITE_DEFAULT_DESCRIPTION) {
	return {
		'@type': 'WebSite',
		'@id': `${siteOrigin}/#website`,
		url: `${siteOrigin}/`,
		name: SITE_NAME,
		alternateName: [
			SITE_TAGLINE,
			'ai410.org',
			'www.ai410.org',
			'AI410 by Adler Archer',
			'Adler Archer AI410'
		],
		description: description || SITE_HOME_DESCRIPTION,
		inLanguage: 'en-US',
		about: [
			{ '@type': 'Thing', name: 'artificial intelligence' },
			{ '@type': 'Thing', name: 'Adler Archer' },
			...SITE_TOPICS.filter((t) => t !== 'Adler Archer' && t !== 'artificial intelligence').map(
				(name) => ({ '@type': 'Thing', name })
			)
		],
		publisher: { '@id': `${siteOrigin}/#person` },
		author: { '@id': `${siteOrigin}/#person` },
		creator: { '@id': `${siteOrigin}/#person` },
		keywords: SITE_TOPICS.join(', ')
	};
}

export function buildLearningResourceSchema(opts: {
	siteOrigin: string;
	url: string;
	title: string;
	description: string;
	learningResourceType?: string;
}) {
	const {
		siteOrigin,
		url,
		title,
		description,
		learningResourceType = 'Lesson'
	} = opts;

	return {
		'@type': 'LearningResource',
		'@id': `${url}#lesson`,
		url,
		name: title,
		headline: title,
		description,
		inLanguage: 'en-US',
		learningResourceType,
		educationalLevel: 'adult continuing education',
		isAccessibleForFree: true,
		about: [
			{ '@type': 'Thing', name: 'artificial intelligence' },
			{ '@type': 'Thing', name: 'AI systems' }
		],
		author: { '@id': `${siteOrigin}/#person` },
		creator: { '@id': `${siteOrigin}/#person` },
		publisher: { '@id': `${siteOrigin}/#person` },
		isPartOf: { '@id': `${siteOrigin}/#website` }
	};
}

export function buildBreadcrumbSchema(
	siteOrigin: string,
	items: { name: string; path: string }[]
) {
	return {
		'@type': 'BreadcrumbList',
		'@id': `${absoluteUrl(items[items.length - 1]?.path ?? '/', siteOrigin)}#breadcrumb`,
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path, siteOrigin)
		}))
	};
}
