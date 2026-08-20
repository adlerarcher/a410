export interface InterestEntry {
	/** Display line, e.g. "Yoga" */
	label: string;
	/** Path under `public/` */
	imageSrc: string;
	imageAlt: string;
}

export const INTERESTS: InterestEntry[] = [
	{
		label: 'Automobiles',
		imageSrc: '/images/hobbies/suv-icon.svg',
		imageAlt: 'SUV icon representing automobiles'
	},
	{
		label: 'Home Improvement',
		imageSrc: '/images/hobbies/home-improvement-icon.svg',
		imageAlt: 'Home improvement icon — house with hammer'
	},
	{
		label: 'Sushi',
		imageSrc: '/images/hobbies/sushi-icon.svg',
		imageAlt: 'Sushi icon — maki on a plate with chopsticks'
	},
	{
		label: 'Yoga',
		imageSrc: '/images/hobbies/yoga-icon.svg',
		imageAlt: 'Yoga icon — figure seated in meditation on a mat'
	},
	{
		label: 'Hiking',
		imageSrc: '/images/hobbies/hiking-icon.svg',
		imageAlt: 'Hiking icon — hiker with backpack and poles on a winding trail'
	},
	{
		label: 'Board Games',
		imageSrc: '/images/hobbies/board-games-icon.svg',
		imageAlt: 'Board games icon — grid board, pawn, and dice'
	},
	{
		label: 'National Parks',
		imageSrc: '/images/hobbies/national-parks-icon.svg',
		imageAlt: 'National parks icon — mountains, pine trees, and sun'
	},
	{
		label: 'Wine Tasting',
		imageSrc: '/images/hobbies/wine-tasting-icon.svg',
		imageAlt: 'Wine tasting icon — bottle, glass, and grapes'
	},
	{
		label: 'Weight Training',
		imageSrc: '/images/hobbies/weight-training-icon.svg',
		imageAlt: 'Weight training icon — barbell with plates'
	},
	{
		label: 'Travel',
		imageSrc: '/images/hobbies/travel-icon.svg',
		imageAlt: 'Travel icon — globe, airplane, and suitcase'
	}
];
