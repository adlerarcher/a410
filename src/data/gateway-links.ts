export type GatewayLinkKind = 'image' | 'svg' | 'wordmark';

export type GatewayLinkGroup = 'affiliation' | 'entity' | 'writing';

export type GatewaySvgIcon = 'linkedin' | 'instagram' | 'x';

export interface GatewayLink {
	id: string;
	label: string;
	href: string;
	external?: boolean;
	kind: GatewayLinkKind;
	group: GatewayLinkGroup;
	imageSrc?: string;
	wordmark?: string;
	/** Wordmark typography — defaults to site Monoton (Adloris). */
	wordmarkFont?: 'monoton' | 'fraunces';
}

export interface SocialLink {
	id: string;
	label: string;
	href: string;
	icon: GatewaySvgIcon;
}

/** Hero orbit — affiliations and entities only. */
export const GATEWAY_LINKS: GatewayLink[] = [
	{
		id: 'pif',
		label: 'Presidential Innovation Fellows',
		href: 'https://adlerarcher.com/pif/',
		external: true,
		kind: 'image',
		group: 'affiliation',
		imageSrc: '/images/pif-logo.png'
	},
	{
		id: 'adlerarcher',
		label: 'Adler Archer',
		href: 'https://adlerarcher.com',
		external: true,
		kind: 'image',
		group: 'writing',
		imageSrc: '/images/adler-archer-site-logo.png'
	},
	{
		id: 'lab',
		label: 'Adler Archer Lab',
		href: 'https://adlerarcherlab.org',
		external: true,
		kind: 'image',
		group: 'entity',
		imageSrc: '/images/adler-archer-lab-logo.png'
	},
	{
		id: 'allasys',
		label: 'Allasys',
		href: 'https://allasys.com',
		external: true,
		kind: 'image',
		group: 'entity',
		imageSrc: '/images/allasys-logo.png'
	},
	{
		id: 'adloris',
		label: 'Adloris Foundation',
		href: 'https://adloris.org',
		external: true,
		kind: 'image',
		group: 'entity',
		imageSrc: '/images/adloris-foundation-logo.png'
	},
	{
		id: 'thermal-underground',
		label: 'The Thermal Underground',
		href: 'https://thermalunderground.org',
		external: true,
		kind: 'image',
		group: 'entity',
		imageSrc: '/images/thermal-underground-logo.png'
	}
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/adlerarcher',
		icon: 'linkedin'
	},
	{
		id: 'instagram',
		label: 'Instagram',
		href: 'https://www.instagram.com/adlerarcher',
		icon: 'instagram'
	},
	{
		id: 'x',
		label: 'X',
		href: 'https://x.com/adlerarcher',
		icon: 'x'
	}
];

export const GATEWAY_GROUP_LABELS: Record<GatewayLinkGroup, string> = {
	affiliation: 'Affiliation',
	entity: 'Entities',
	writing: 'Writing'
};
