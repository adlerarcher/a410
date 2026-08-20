export type OrganizationKind = 'controlled' | 'affiliation' | 'program';

export interface OrganizationEntry {
	name: string;
	description: string;
	href?: string;
	external?: boolean;
	kind: OrganizationKind;
}

export const ORGANIZATIONS: OrganizationEntry[] = [
	{
		name: 'Adloris Foundation',
		description: '501(c)(3) nonprofit. Health infrastructure, partnerships, and social determinants of health.',
		href: 'https://adloris.org',
		external: true,
		kind: 'controlled'
	},
	{
		name: 'Archer Lab',
		description: 'Research and innovation lab (adlerarcherlab.org).',
		href: 'https://adlerarcherlab.org',
		external: true,
		kind: 'controlled'
	},
	{
		name: 'Allasys',
		description: 'Technology and systems venture.',
		href: 'https://allasys.com',
		external: true,
		kind: 'controlled'
	},
	{
		name: 'U.S. Department of Energy',
		description: 'Host agency, Presidential Innovation Fellows Class of 2026.',
		href: 'https://adlerarcher.com/pif/',
		external: true,
		kind: 'affiliation'
	},
	{
		name: 'Johns Hopkins University',
		description: 'Faculty and strategic leadership appointments.',
		href: 'https://www.jhu.edu',
		external: true,
		kind: 'affiliation'
	},
	{
		name: 'Nexus Harbor',
		description: 'Collaborative program — details and public site pending.',
		kind: 'program'
	},
	{
		name: 'Counterbalance',
		description: 'Essay series on leader capacity. Hosted separately from this gateway.',
		href: 'https://counterbalance.adlerarcher.com',
		external: true,
		kind: 'program'
	}
];
