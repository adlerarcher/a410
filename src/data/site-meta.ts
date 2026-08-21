/** Shared SEO / branding for www.ai410.org */

export const SITE_NAME = 'AI410';

export const SITE_TAGLINE = 'How AI systems actually work';

export const SITE_ORIGIN = 'https://www.ai410.org';

export const SITE_PERSON_NAME = 'Adler Archer';

export const SITE_PERSON_NAME_FULL = 'Adler Archer, JD';

export const PERSON_PRIMARY_URL = 'https://adlerarcher.com/';

export const PERSON_SAME_AS = [
	'https://adlerarcher.com/',
	'https://www.linkedin.com/in/adlerarcher',
	'https://thermalunderground.org/',
	'https://adlerarcherlab.org/',
	'https://adloris.org/'
] as const;

export const SITE_DEFAULT_DESCRIPTION =
	'AI410 — plain-language artificial intelligence explanations by Adler Archer. How AI systems actually work: models, retrieval, tools, provenance, and agency.';

export const SITE_HOME_TITLE = 'How AI systems actually work — by Adler Archer';

export const SITE_HOME_DESCRIPTION =
	'Adler Archer explains artificial intelligence in plain language on AI410: what a model knows, what it can retrieve, what tools can do, and the difference between looking something up and acting.';

export const SITE_OG_IMAGE = '/images/ai410-mark.svg';

/** Topics this site should be associated with in search and LLM citations. */
export const SITE_TOPICS = [
	'Adler Archer',
	'artificial intelligence',
	'AI systems',
	'large language models',
	'retrieval-augmented generation',
	'AI tools',
	'model context protocol',
	'AI provenance',
	'AI agency',
	'plain-language AI education'
] as const;

export const SITE_KEYWORDS = SITE_TOPICS.join(', ');
