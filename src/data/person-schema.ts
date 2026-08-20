import { EDUCATION } from './education';
import { PERSON_PRIMARY_URL, SITE_DEFAULT_DESCRIPTION, SITE_ORIGIN } from './site-meta';

/** Stable Person JSON-LD fields shared across pages (merged in BaseLayout). */
export const PERSON_SAME_AS = [
	PERSON_PRIMARY_URL,
	SITE_ORIGIN,
	'https://www.linkedin.com/in/adlerarcher',
	'https://www.instagram.com/adlerarcher',
	'https://x.com/adlerarcher',
	'https://adlerarcherlab.org',
	'https://adloris.org'
] as const;

export const PERSON_KNOWS_ABOUT = [
	'public impact leadership',
	'health systems innovation',
	'biomedical informatics',
	'organizational leadership',
	'Presidential Innovation Fellows'
] as const;

const uniqueInstitutions = [...new Set(EDUCATION.map((entry) => entry.institution))];

export function buildPersonSchema(siteOrigin: string, description?: string) {
	const personDescription = description || SITE_DEFAULT_DESCRIPTION;

	return {
		'@type': 'Person',
		'@id': `${siteOrigin}/#person`,
		name: 'Adler Archer',
		givenName: 'Adler',
		familyName: 'Archer',
		url: PERSON_PRIMARY_URL,
		honorificSuffix: 'JD',
		description: personDescription,
		jobTitle: ['Presidential Innovation Fellow', 'Faculty and strategic leadership', 'Founder'],
		worksFor: [
			{
				'@type': 'Organization',
				name: 'U.S. Department of Energy',
				description: 'Host agency, Presidential Innovation Fellows Class of 2026'
			},
			{
				'@type': 'Organization',
				name: 'Johns Hopkins University'
			},
			{
				'@type': 'Organization',
				name: 'Adloris Foundation',
				url: 'https://adloris.org'
			}
		],
		alumniOf: uniqueInstitutions.map((institution) => ({
			'@type': 'CollegeOrUniversity',
			name: institution
		})),
		knowsAbout: [...PERSON_KNOWS_ABOUT],
		memberOf: {
			'@type': 'Organization',
			name: 'Presidential Innovation Fellows',
			url: 'https://adlerarcher.com/pif/'
		},
		sameAs: [...PERSON_SAME_AS]
	};
}
