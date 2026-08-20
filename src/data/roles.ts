export interface RoleEntry {
	role: string;
	organization: string;
	summary: string;
	href?: string;
	external?: boolean;
}

/** Present-tense roles and affiliations only — no career history. */
export const CURRENT_ROLES: RoleEntry[] = [
	{
		role: 'Presidential Innovation Fellow',
		organization: 'U.S. Department of Energy',
		summary: 'Class of 2026. Public impact leadership on energy security and innovation capability.',
		href: 'https://adlerarcher.com/pif/',
		external: true
	},
	{
		role: 'Faculty & strategic leadership',
		organization: 'Johns Hopkins University',
		summary: 'Appointments across biomedical engineering, medicine, and business.',
		href: 'https://www.jhu.edu',
		external: true
	},
	{
		role: 'Founder',
		organization: 'Adloris Foundation',
		summary: '501(c)(3) nonprofit since 2013.',
		href: 'https://adloris.org',
		external: true
	},
	{
		role: 'Founder / principal',
		organization: 'Archer Lab',
		summary: 'Research and innovation lab.',
		href: 'https://adlerarcherlab.org',
		external: true
	},
	{
		role: 'Founder',
		organization: 'Allasys',
		summary: 'Technology and systems venture.',
		href: 'https://allasys.com',
		external: true
	}
];
