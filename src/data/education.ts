export interface DegreeEntry {
	credential: string;
	/** Program or focus; omitted when the line is only credential and school. */
	field: string | null;
	institution: string;
}

export const EDUCATION_DOCTORATE: DegreeEntry[] = [
	{ credential: 'JD', field: 'Jurisprudence', institution: 'New York Law School' }
];

export const EDUCATION_MASTERS: DegreeEntry[] = [
	{
		credential: 'MS',
		field: 'Biomedical Informatics',
		institution: 'Johns Hopkins Medicine'
	},
	{
		credential: 'MSc',
		field: 'Mindfulness Neuroscience',
		institution: "King's College London"
	},
	{
		credential: 'MA',
		field: 'Organizational Comms',
		institution: 'University of Denver'
	}
];

export const EDUCATION_GRADUATE_CERTIFICATE: DegreeEntry[] = [
	{
		credential: 'Graduate Certificate',
		field: 'Business of Healthcare',
		institution: 'Johns Hopkins Carey Business School'
	}
];

export const EDUCATION_UNDERGRADUATE: DegreeEntry[] = [
	{ credential: 'BA', field: 'General Studies', institution: 'Columbia College' },
	{
		credential: 'AAS',
		field: 'Scientific Analysis Technology',
		institution: 'Community College of the Air Force'
	}
];

/** Flat list (doctorate through undergraduate) for counts or legacy use. */
export const EDUCATION: DegreeEntry[] = [
	...EDUCATION_DOCTORATE,
	...EDUCATION_MASTERS,
	...EDUCATION_GRADUATE_CERTIFICATE,
	...EDUCATION_UNDERGRADUATE
];
