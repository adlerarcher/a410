export interface PublicationRecord {
	title: string;
	authors: string;
	venue: string;
	year: number;
	doi?: string;
	url?: string;
}

/** Citable records only — reflective writing lives on adlerarcher.com. */
export const PUBLICATION_RECORDS: PublicationRecord[] = [];
