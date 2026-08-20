export interface ExperienceEntry {
	role: string;
	organization: string;
	summary: string;
	/** When set, the organization name links to this path (e.g. /pif). */
	href?: string;
}

/** Reverse chronological; aligns with the About narrative. */
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
	{
		role: 'Public Impact Leadership',
		organization: 'White House Presidential Innovation Fellows',
		href: 'https://adlerarcher.com/pif/',
		summary:
			'Class of 2026 at the U.S. Department of Energy. Public impact leadership on pressing priority initiatives.'
	},
	{
		role: 'Faculty & strategic leadership',
		organization: 'Johns Hopkins University',
		summary:
			'Appointments across biomedical engineering, medicine, and business; engineering-school initiatives, innovation programs, and research supported by NIH, NSF, the Department of Commerce, and the Kauffman Foundation.'
	},
	{
		role: 'Founder',
		organization: 'Adloris Foundation',
		summary:
			'501(c)(3) nonprofit since 2013. Technology, partnerships, and infrastructure that shape health outcomes for underserved populations across social determinants of health.'
	},
	{
		role: 'Founder',
		organization: 'Federal technology consultancy',
		summary:
			'Served NASA, the VA, and the Departments of Defense and Commerce on technology and strategy engagements.'
	},
	{
		role: 'Aerospace engineering',
		organization: 'Boeing & Lockheed Martin',
		summary:
			'Launch schedules for satellite defense programs and technical leadership across the United States and Europe.'
	},
	{
		role: 'Treaty monitoring & systems intelligence',
		organization: 'United States Air Force',
		summary:
			'Seismic and satellite detection supporting nuclear treaty compliance—watching for signatures that were not supposed to appear.'
	}
];
