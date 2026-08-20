export type EcosystemKind = 'controlled' | 'affiliation' | 'program' | 'corpus';

export interface EcosystemEntry {
	name: string;
	description: string;
	href: string;
	external?: boolean;
	kind: EcosystemKind;
}

/** Homepage ecosystem map — routing layer, not narrative biography. */
export const ECOSYSTEM_CONTROLLED: EcosystemEntry[] = [
	{
		name: 'Adloris Foundation',
		description: '501(c)(3) nonprofit. Technology, partnerships, and infrastructure for health outcomes across social determinants of health.',
		href: 'https://adloris.org',
		external: true,
		kind: 'controlled'
	},
	{
		name: 'Archer Lab',
		description: 'Research and innovation lab. Translational work at the intersection of health, systems, and human capacity.',
		href: 'https://adlerarcherlab.org',
		external: true,
		kind: 'controlled'
	},
	{
		name: 'Allasys',
		description: 'Technology and systems venture. Product and platform work across health and public-sector contexts.',
		href: 'https://allasys.com',
		external: true,
		kind: 'controlled'
	}
];

export const ECOSYSTEM_AFFILIATIONS: EcosystemEntry[] = [
	{
		name: 'Presidential Innovation Fellow',
		description: 'Class of 2026, U.S. Department of Energy. Public impact leadership on energy and innovation priorities.',
		href: 'https://adlerarcher.com/pif/',
		external: true,
		kind: 'affiliation'
	},
	{
		name: 'Johns Hopkins University',
		description: 'Faculty and strategic leadership across biomedical engineering, medicine, and business.',
		href: 'https://www.jhu.edu',
		external: true,
		kind: 'affiliation'
	}
];

export const ECOSYSTEM_PROGRAMS: EcosystemEntry[] = [
	{
		name: 'Nexus Harbor',
		description: 'Collaborative program connecting stakeholders across academia, community, and industry.',
		href: '#organizations',
		kind: 'program'
	}
];

export const ECOSYSTEM_CORPUS: EcosystemEntry = {
	name: 'The writing & ideas',
	description: 'Essays, reflective work, bookshelf, passport, and workshops — the body-of-work site.',
	href: 'https://adlerarcher.com',
	external: true,
	kind: 'corpus'
};
