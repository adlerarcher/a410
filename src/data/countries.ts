/** Approximate geographic centers; United States first, then alphabetical. */
export interface CountryMarker {
	name: string;
	lat: number;
	lng: number;
	/** ISO 3166-1 alpha-2 for flag PNGs (flagcdn.com). */
	flagCode: string;
}

export type CountryRegionId = 'americas' | 'europe' | 'asia-pacific' | 'mea';

export interface CountryRegion {
	id: CountryRegionId;
	label: string;
	description: string;
	accent: string;
}

export const COUNTRY_REGIONS: CountryRegion[] = [
	{
		id: 'americas',
		label: 'Americas',
		description: 'North, Central, and South America plus the Caribbean.',
		accent: '#6b9e7a'
	},
	{
		id: 'europe',
		label: 'Europe',
		description: 'From the Atlantic to the Balkans and the Mediterranean.',
		accent: '#7a8fae'
	},
	{
		id: 'asia-pacific',
		label: 'Asia-Pacific',
		description: 'East and Southeast Asia—where much of the world wakes up first.',
		accent: '#b86b6b'
	},
	{
		id: 'mea',
		label: 'Middle East & Africa',
		description: 'Crossroads of ancient trade routes and modern ambition.',
		accent: '#c9a962'
	}
];

const REGION_BY_FLAG: Record<string, CountryRegionId> = {
	us: 'americas',
	ca: 'americas',
	mx: 'americas',
	co: 'americas',
	cr: 'americas',
	ec: 'americas',
	pa: 'americas',
	mf: 'americas',
	sx: 'americas',
	al: 'europe',
	at: 'europe',
	be: 'europe',
	bg: 'europe',
	hr: 'europe',
	cy: 'europe',
	cz: 'europe',
	dk: 'europe',
	ee: 'europe',
	fi: 'europe',
	fr: 'europe',
	de: 'europe',
	gr: 'europe',
	hu: 'europe',
	is: 'europe',
	ie: 'europe',
	it: 'europe',
	lv: 'europe',
	li: 'europe',
	lt: 'europe',
	lu: 'europe',
	mt: 'europe',
	mc: 'europe',
	nl: 'europe',
	no: 'europe',
	pl: 'europe',
	pt: 'europe',
	ro: 'europe',
	rs: 'europe',
	sk: 'europe',
	si: 'europe',
	es: 'europe',
	se: 'europe',
	ch: 'europe',
	gb: 'europe',
	va: 'europe',
	kh: 'asia-pacific',
	cn: 'asia-pacific',
	id: 'asia-pacific',
	jp: 'asia-pacific',
	my: 'asia-pacific',
	sg: 'asia-pacific',
	kr: 'asia-pacific',
	th: 'asia-pacific',
	eg: 'mea',
	sa: 'mea',
	tr: 'mea',
	ae: 'mea'
};

export function getCountryRegionId(marker: CountryMarker): CountryRegionId {
	return REGION_BY_FLAG[marker.flagCode] ?? 'europe';
}

const nameCollator = new Intl.Collator(undefined, { sensitivity: 'base' });

export function getGroupedCountries(): { region: CountryRegion; countries: CountryMarker[] }[] {
	return COUNTRY_REGIONS.map((region) => ({
		region,
		countries: COUNTRY_MARKERS.filter((c) => getCountryRegionId(c) === region.id).sort((a, b) => {
			if (region.id === 'americas' && a.flagCode === 'us') return -1;
			if (region.id === 'americas' && b.flagCode === 'us') return 1;
			return nameCollator.compare(a.name, b.name);
		})
	})).filter((group) => group.countries.length > 0);
}

export const COUNTRY_MARKERS: CountryMarker[] = [
	{ name: 'United States', lat: 37.0902, lng: -95.7129, flagCode: 'us' },
	{ name: 'Albania', lat: 41.1533, lng: 20.1683, flagCode: 'al' },
	{ name: 'Austria', lat: 47.5162, lng: 14.5501, flagCode: 'at' },
	{ name: 'Belgium', lat: 50.5039, lng: 4.4699, flagCode: 'be' },
	{ name: 'Bulgaria', lat: 42.7339, lng: 25.4858, flagCode: 'bg' },
	{ name: 'Cambodia', lat: 12.5657, lng: 104.991, flagCode: 'kh' },
	{ name: 'Canada', lat: 56.1304, lng: -106.3468, flagCode: 'ca' },
	{ name: 'China', lat: 35.8617, lng: 104.1954, flagCode: 'cn' },
	{ name: 'Colombia', lat: 4.5709, lng: -74.2973, flagCode: 'co' },
	{ name: 'Costa Rica', lat: 9.7489, lng: -83.7534, flagCode: 'cr' },
	{ name: 'Croatia', lat: 45.1, lng: 15.2, flagCode: 'hr' },
	{ name: 'Cyprus', lat: 35.1264, lng: 33.4299, flagCode: 'cy' },
	{ name: 'Czech Republic', lat: 49.8175, lng: 15.473, flagCode: 'cz' },
	{ name: 'Denmark', lat: 56.2639, lng: 9.5018, flagCode: 'dk' },
	{ name: 'Ecuador', lat: -1.8312, lng: -78.1834, flagCode: 'ec' },
	{ name: 'Egypt', lat: 26.8206, lng: 30.8025, flagCode: 'eg' },
	{ name: 'Estonia', lat: 58.5953, lng: 25.0136, flagCode: 'ee' },
	{ name: 'Finland', lat: 61.9241, lng: 25.7482, flagCode: 'fi' },
	{ name: 'France', lat: 46.2276, lng: 2.2137, flagCode: 'fr' },
	{ name: 'Germany', lat: 51.1657, lng: 10.4515, flagCode: 'de' },
	{ name: 'Greece', lat: 39.0742, lng: 21.8243, flagCode: 'gr' },
	{ name: 'Hungary', lat: 47.1625, lng: 19.5033, flagCode: 'hu' },
	{ name: 'Iceland', lat: 64.9631, lng: -19.0208, flagCode: 'is' },
	{ name: 'Indonesia', lat: -0.7893, lng: 113.9213, flagCode: 'id' },
	{ name: 'Ireland', lat: 53.4129, lng: -8.2439, flagCode: 'ie' },
	{ name: 'Italy', lat: 41.8719, lng: 12.5674, flagCode: 'it' },
	{ name: 'Japan', lat: 36.2048, lng: 138.2529, flagCode: 'jp' },
	{ name: 'Latvia', lat: 56.8796, lng: 24.6032, flagCode: 'lv' },
	{ name: 'Liechtenstein', lat: 47.166, lng: 9.5554, flagCode: 'li' },
	{ name: 'Lithuania', lat: 55.1694, lng: 23.8813, flagCode: 'lt' },
	{ name: 'Luxembourg', lat: 49.8153, lng: 6.1296, flagCode: 'lu' },
	{ name: 'Malaysia', lat: 4.2105, lng: 101.9758, flagCode: 'my' },
	{ name: 'Malta', lat: 35.9375, lng: 14.3754, flagCode: 'mt' },
	{ name: 'Mexico', lat: 23.6345, lng: -102.5528, flagCode: 'mx' },
	{ name: 'Monaco', lat: 43.7384, lng: 7.4246, flagCode: 'mc' },
	{ name: 'Netherlands', lat: 52.1326, lng: 5.2913, flagCode: 'nl' },
	{ name: 'Norway', lat: 60.472, lng: 8.4689, flagCode: 'no' },
	{ name: 'Panama', lat: 8.538, lng: -80.7821, flagCode: 'pa' },
	{ name: 'Poland', lat: 51.9194, lng: 19.1451, flagCode: 'pl' },
	{ name: 'Portugal', lat: 39.3999, lng: -8.2245, flagCode: 'pt' },
	{ name: 'Romania', lat: 45.9432, lng: 24.9668, flagCode: 'ro' },
	{ name: 'Saint Martin', lat: 18.0708, lng: -63.0501, flagCode: 'mf' },
	{ name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792, flagCode: 'sa' },
	{ name: 'Serbia', lat: 44.0165, lng: 21.0059, flagCode: 'rs' },
	{ name: 'Singapore', lat: 1.3521, lng: 103.8198, flagCode: 'sg' },
	{ name: 'Sint Maarten', lat: 18.0347, lng: -63.0661, flagCode: 'sx' },
	{ name: 'Slovakia', lat: 48.669, lng: 19.699, flagCode: 'sk' },
	{ name: 'Slovenia', lat: 46.1512, lng: 14.9955, flagCode: 'si' },
	{ name: 'South Korea', lat: 35.9078, lng: 127.7669, flagCode: 'kr' },
	{ name: 'Spain', lat: 40.4637, lng: -3.7492, flagCode: 'es' },
	{ name: 'Sweden', lat: 60.1282, lng: 18.6435, flagCode: 'se' },
	{ name: 'Switzerland', lat: 46.8182, lng: 8.2275, flagCode: 'ch' },
	{ name: 'Thailand', lat: 15.87, lng: 100.9925, flagCode: 'th' },
	{ name: 'Türkiye', lat: 38.9637, lng: 35.2433, flagCode: 'tr' },
	{ name: 'UAE', lat: 23.4241, lng: 53.8478, flagCode: 'ae' },
	{ name: 'United Kingdom', lat: 55.3781, lng: -3.436, flagCode: 'gb' },
	{ name: 'Vatican City', lat: 41.9029, lng: 12.4534, flagCode: 'va' }
];

/** PNG flag URL (transparent-friendly assets, CDN). */
export function flagPngUrl(flagCode: string): string {
	return `https://flagcdn.com/w80/${flagCode.toLowerCase()}.png`;
}
