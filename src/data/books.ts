export type BookShelfId =
	| 'practice'
	| 'relationships'
	| 'mind-body'
	| 'self-knowledge'
	| 'work'
	| 'history';

export interface BookShelf {
	id: BookShelfId;
	label: string;
	/** One-line shelf description shown under the section title */
	description: string;
	/** Accent color for borders, icons, and shelf tint */
	accent: string;
}

export interface BookEntry {
	/** Short title line for the card */
	title: string;
	author: string;
	/** Cover image under `public/` (JPEG from Open Library cover IDs) */
	coverSrc: string;
	/** Short description for the cover image */
	imageAlt: string;
	shelf: BookShelfId;
	/** Optional takeaway or why it matters */
	insight?: string;
	/** Optional link to publisher, bookstore, or library page */
	bookUrl?: string;
}

export const BOOK_SHELVES: BookShelf[] = [
	{
		id: 'practice',
		label: 'Practice & philosophy',
		description: 'Stoics, Buddhism, faith, and the daily work of inner life.',
		accent: '#7a9e8e'
	},
	{
		id: 'relationships',
		label: 'Relationships & intimacy',
		description: 'Love, attachment, desire, and showing up for other people.',
		accent: '#b86b7a'
	},
	{
		id: 'mind-body',
		label: 'Mind, body & resilience',
		description: 'Breath, recovery, anxiety, and building a body that holds up.',
		accent: '#6b8fae'
	},
	{
		id: 'self-knowledge',
		label: 'Self-knowledge & reinvention',
		description: 'Identity, habits, money mindset, and becoming someone new.',
		accent: '#c9a962'
	},
	{
		id: 'work',
		label: 'Work, systems & strategy',
		description: 'Productivity, negotiation, power, and how organizations work.',
		accent: '#8a7fb8'
	},
	{
		id: 'history',
		label: 'History, culture & systems',
		description: 'Big history, memoir, technology, and how the world got here.',
		accent: '#a67c52'
	}
];

/** All titles; grouped for display via `getGroupedBooks()`. */
export const BOOKS: BookEntry[] = [
	{
		title: '12 Rules for Life',
		author: 'Jordan B. Peterson',
		coverSrc: '/images/books/covers/12-rules.jpg',
		imageAlt: 'Book cover: 12 Rules for Life by Jordan B. Peterson',
		shelf: 'self-knowledge',
		insight:
			'An antidote to chaos, sort yourself out, tell the truth, shoulder responsibility, and meet life as something to be negotiated, not merely endured.',
		bookUrl: 'https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021'
	},
	{
		title: 'Atlas of AI',
		author: 'Kate Crawford',
		coverSrc: '/images/books/covers/atlas.jpg',
		imageAlt: 'Book cover: Atlas of AI by Kate Crawford',
		shelf: 'history',
		insight:
			'AI as extraction and infrastructure, labor, data, minerals, and power, mapped as a political and planetary story, not just code.',
		bookUrl: 'https://www.amazon.com/Atlas-AI-Planetary-Artificial-Intelligence/dp/0300264631'
	},
	{
		title: 'Awareness',
		author: 'Anthony de Mello',
		coverSrc: '/images/books/covers/awareness.jpg',
		imageAlt: 'Book cover: Awareness by Anthony de Mello',
		shelf: 'practice',
		insight:
			'Short talks on waking up, seeing what is real, loosening the stories that trap us, and meeting life without the usual defenses.',
		bookUrl: 'https://www.amazon.com/Awareness-Opportunities-Reality-Anthony-Mello/dp/0385249373'
	},
	{
		title: 'Becoming',
		author: 'Michelle Obama',
		coverSrc: '/images/books/covers/becoming.jpg',
		imageAlt: 'Book cover: Becoming by Michelle Obama',
		shelf: 'history',
		insight:
			'A memoir in three acts, from Chicago\'s South Side to the world stage, on identity, partnership, and finding your voice when the room keeps changing.',
		bookUrl: 'https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136'
	},
	{
		title: 'Between the World and Me',
		author: 'Ta-Nehisi Coates',
		coverSrc: '/images/books/covers/between-the-world-and-me.jpg',
		imageAlt: 'Book cover: Between the World and Me by Ta-Nehisi Coates',
		shelf: 'history',
		insight:
			'A letter to his son on race, fear, and the American body, written with moral urgency about what it means to live inside a history that is not yet finished.',
		bookUrl: 'https://www.amazon.com/Between-World-Me-Ta-Nehisi-Coates/dp/0812993543'
	},
	{
		title: 'Becoming Bulletproof',
		author: 'Evy Poumpouras',
		coverSrc: '/images/books/covers/bulletproof.jpg',
		imageAlt: 'Book cover: Becoming Bulletproof by Evy Poumpouras',
		shelf: 'mind-body',
		insight:
			'Lessons from the Secret Service, reading people, hard conversations, and moving from fear to fearlessness when strength is built in the mind first.',
		bookUrl: 'https://snailonthewall.com/book/9781982103767'
	},
	{
		title: 'Breath',
		author: 'James Nestor',
		coverSrc: '/images/books/covers/breath.jpg',
		imageAlt: 'Book cover: Breath by James Nestor',
		shelf: 'mind-body',
		insight:
			'How we lost the art of breathing well, what modern research says about nose breathing and CO2, and simple practices that change sleep, stress, and endurance.',
		bookUrl: 'https://www.amazon.com/Breath-New-Science-Lost-Art/dp/0735213615'
	},
	{
		title: 'Braving the Wilderness',
		author: 'Brené Brown',
		coverSrc: '/images/books/covers/braving-the-wilderness.jpg',
		imageAlt: 'Book cover: Braving the Wilderness by Brené Brown',
		shelf: 'relationships',
		insight:
			'True belonging without betraying yourself, courage to stand alone in your values when the crowd wants a softer compromise.',
		bookUrl: 'https://www.amazon.com/Braving-Wilderness-Brene-Brown-audiobook/dp/B074G5P4WN'
	},
	{
		title: 'Attached',
		author: 'Amir Levine & Rachel Heller',
		coverSrc: '/images/books/covers/attached.jpg',
		imageAlt: 'Book cover: Attached by Amir Levine and Rachel Heller',
		shelf: 'relationships',
		insight:
			'Attachment styles explained with clarity, why we reach and withdraw in love, and how understanding your pattern can change who you choose and how you stay.',
		bookUrl: 'https://www.amazon.com/Attached-Science-Help-You-Find/dp/1585429139'
	},
	{
		title: 'Breaking the Habit of Being Yourself',
		author: 'Joe Dispenza',
		coverSrc: '/images/books/covers/breaking-the-habit-of-being-yourself.jpg',
		imageAlt: 'Book cover: Breaking the Habit of Being Yourself by Joe Dispenza',
		shelf: 'practice',
		insight:
			'Neuroscience and meditation on rewiring thought patterns, stepping out of the old self, and creating a new mind through attention and practice.',
		bookUrl: 'https://www.amazon.com/Breaking-Habit-Being-Yourself/dp/1401938094'
	},
	{
		title: 'Battlefield of the Mind',
		author: 'Joyce Meyer',
		coverSrc: '/images/books/covers/battlefield-of-the-mind.jpg',
		imageAlt: 'Book cover: Battlefield of the Mind by Joyce Meyer',
		shelf: 'practice',
		insight:
			'Winning the war of anxious and destructive thoughts, recognizing mental patterns that steal peace, and choosing truth over rumination day by day.',
		bookUrl: 'https://www.amazon.com/Battlefield-Mind-Winning-Battle-Your/dp/0446691097'
	},
	{
		title: 'Buy Yourself the F*cking Lilies',
		author: 'Tara Schuster',
		coverSrc: '/images/books/covers/lilies.jpg',
		imageAlt: 'Book cover: Buy Yourself the F*cking Lilies by Tara Schuster',
		shelf: 'self-knowledge',
		insight:
			'Daily rituals and re-parenting yourself with humor, excavating old wounds, quieting the inner critic, and building a life you actually want.',
		bookUrl:
			'https://www.emmasbookshop.com/product/show/9780525509905/buy-yourself-the-fucking-lilies'
	},
	{
		title: "Can't Hurt Me",
		author: 'David Goggins',
		coverSrc: '/images/books/covers/cant-hurt-me.jpg',
		imageAlt: "Book cover: Can't Hurt Me by David Goggins",
		shelf: 'mind-body',
		insight:
			'From hardship to SEAL and ultramarathon life, mental toughness, the 40% rule, and pushing past the stories that limit what you think possible.',
		bookUrl: 'https://www.amazon.com/Cant-Hurt-Me-Master-Your-Mind/dp/1544512277'
	},
	{
		title: 'Competitive Strategy',
		author: 'Michael E. Porter',
		coverSrc: '/images/books/covers/competitive-strategy.jpg',
		imageAlt: 'Book cover: Competitive Strategy by Michael E. Porter',
		shelf: 'work',
		insight:
			'The classic framework for industry analysis, five forces, competitive advantage, and how firms choose where to compete and how to win.',
		bookUrl: 'https://www.amazon.com/Competitive-Strategy-Techniques-Industries-Competitors/dp/0684841487'
	},
	{
		title: 'Do Over',
		author: 'Jon Acuff',
		coverSrc: '/images/books/covers/do-over.jpg',
		imageAlt: 'Book cover: Do Over by Jon Acuff',
		shelf: 'self-knowledge',
		insight:
			'Career resets without the shame spiral, rescuing Monday, reinventing your work, and building momentum when you feel stuck.',
		bookUrl: 'https://www.amazon.com/Do-Over-Jon-Acuff-audiobook/dp/B00VQRL096'
	},
	{
		title: 'Getting the Love You Want',
		author: 'Harville Hendrix & Helen LaKelly Hunt',
		coverSrc: '/images/books/covers/getting-the-love-you-want.jpg',
		imageAlt: 'Book cover: Getting the Love You Want by Harville Hendrix and Helen LaKelly Hunt',
		shelf: 'relationships',
		insight:
			'Imago relationship work, seeing your partner as teacher, not antagonist, and building dialogue that turns old wounds into real intimacy.',
		bookUrl: 'https://www.amazon.com/Getting-Love-You-Want-Anniversary/dp/0805087001'
	},
	{
		title: 'Good Sex',
		author: 'Jessica Graham',
		coverSrc: '/images/books/covers/good-sex.jpg',
		imageAlt: 'Book cover: Good Sex by Jessica Graham',
		shelf: 'relationships',
		insight:
			'Mindfulness and adventure in the bedroom, a sex-positive guide to presence, trauma recovery, and building intimacy without checking out mid-encounter.',
		bookUrl: 'https://www.amazon.com/Good-Sex-Getting-Without-Checking/dp/1623172349'
	},
	{
		title: 'Love Unf*cked',
		author: 'Gary John Bishop',
		coverSrc: '/images/books/covers/love-unfucked.jpg',
		imageAlt: 'Book cover: Love Unf*cked by Gary John Bishop',
		shelf: 'relationships',
		insight:
			'Tough love for relationships, taking responsibility for your patterns instead of trying to fix your partner, with blunt advice for making love actually work.',
		bookUrl: 'https://www.amazon.com/Love-Unfu-ked-Relationship-Together/dp/0062952314'
	},
	{
		title: 'Getting Things Done',
		author: 'David Allen',
		coverSrc: '/images/books/covers/getting-things-done.jpg',
		imageAlt: 'Book cover: Getting Things Done by David Allen',
		shelf: 'work',
		insight:
			'A trusted system for capturing commitments, clarifying next actions, and closing open loops so your mind stays clear and work stays under control.',
		bookUrl: 'https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563'
	},
	{
		title: 'Never Split the Difference',
		author: 'Chris Voss',
		coverSrc: '/images/books/covers/never-split-the-difference.jpg',
		imageAlt: 'Book cover: Never Split the Difference by Chris Voss',
		shelf: 'work',
		insight:
			'Tactical empathy from FBI hostage negotiation, calibrated questions, and pushing for real alignment instead of splitting the difference too early.',
		bookUrl: 'https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407806'
	},
	{
		title: 'Power',
		author: 'Jeffrey Pfeffer',
		coverSrc: '/images/books/covers/power-pfeffer.jpg',
		imageAlt: 'Book cover: Power by Jeffrey Pfeffer',
		shelf: 'work',
		insight:
			'How power actually works in organizations, why performance alone is not enough, and the politics of building influence without pretending meritocracy is the whole game.',
		bookUrl: 'https://www.amazon.com/Power-Some-People-Have-Others/dp/0061789089'
	},
	{
		title: 'How We Live Is How We Die',
		author: 'Pema Chödrön',
		coverSrc: '/images/books/covers/how-you-live-is-how-you-die.jpg',
		imageAlt: 'Book cover: How We Live Is How We Die by Pema Chödrön',
		shelf: 'practice',
		insight:
			'Buddhist guidance on facing mortality, bringing awareness to how you meet each moment, and living with honesty as the ground for dying with ease.',
		bookUrl: 'https://www.amazon.com/How-We-Live-How-Die/dp/161180924X'
	},
	{
		title: 'Insight',
		author: 'Tasha Eurich',
		coverSrc: '/images/books/covers/insight.jpg',
		imageAlt: 'Book cover: Insight by Tasha Eurich',
		shelf: 'self-knowledge',
		insight:
			'Self-awareness is a learnable skill, research, Fortune 500 practice, and a clear path past the myths that keep us from seeing ourselves clearly.',
		bookUrl: 'https://www.insight-book.com'
	},
	{
		title: 'Life Strategies',
		author: 'Phillip C. McGraw',
		coverSrc: '/images/books/covers/life-strategies.jpg',
		imageAlt: 'Book cover: Life Strategies by Phillip C. McGraw',
		shelf: 'self-knowledge',
		insight:
			'Ten laws for meeting life on your terms, facing hard truths about what works and what does not, and taking responsibility for the choices that shape your outcomes.',
		bookUrl: 'https://www.amazon.com/Life-Strategies-Doing-Works-Doesnt/dp/0786883776'
	},
	{
		title: 'Life Entrepreneurs',
		author: 'Christopher Gergen & Gregg Vanourek',
		coverSrc: '/images/books/covers/life-entrepreneurs.jpg',
		imageAlt: 'Book cover: Life Entrepreneurs by Christopher Gergen and Gregg Vanourek',
		shelf: 'self-knowledge',
		insight:
			'Ordinary people building lives around integrated work and purpose, stories and frameworks for designing a life that is yours rather than a default script.',
		bookUrl: 'https://www.amazon.com/Life-Entrepreneurs-Ordinary-Creating-Extraordinary/dp/0787988317'
	},
	{
		title: 'Pivot',
		author: 'Jenny Blake',
		coverSrc: '/images/books/covers/pivot.jpg',
		imageAlt: 'Book cover: Pivot by Jenny Blake',
		shelf: 'self-knowledge',
		insight:
			'Career change without starting from zero, doubling down on strengths, and making your next move through small experiments instead of one big leap.',
		bookUrl: 'https://www.amazon.com/Pivot-Only-Move-Matters-Next/dp/0399578206'
	},
	{
		title: 'The 9 Steps to Financial Freedom',
		author: 'Suze Orman',
		coverSrc: '/images/books/covers/the-9-steps-to-financial-freedom.jpg',
		imageAlt: 'Book cover: The 9 Steps to Financial Freedom by Suze Orman',
		shelf: 'self-knowledge',
		insight:
			'Money as a mirror for fear and choice, nine steps to face financial truth, build security, and align spending with the life you want to live.',
		bookUrl: 'https://www.amazon.com/Steps-Financial-Freedom-Practical-Spiritual/dp/030734584X'
	},
	{
		title: 'Letters from a Stoic',
		author: 'Seneca',
		coverSrc: '/images/books/covers/letters-from-a-stoic-seneca.jpg',
		imageAlt: 'Book cover: Letters from a Stoic by Seneca',
		shelf: 'practice',
		insight:
			'Epistolary wisdom from a Roman statesman on discipline, friendship, death, and the daily work of living with equanimity under pressure.',
		bookUrl: 'https://www.amazon.com/Letters-Stoic-Penguin-Little-Black/dp/0141395854'
	},
	{
		title: "Man's Search for Meaning",
		author: 'Viktor E. Frankl',
		coverSrc: '/images/books/covers/frankl.jpg',
		imageAlt: "Book cover: Man's Search for Meaning by Viktor E. Frankl",
		shelf: 'practice',
		insight:
			'From the camps to logotherapy: meaning can be found even in suffering, through work, love, and the stance we take toward the unavoidable.'
	},
	{
		title: 'Mating in Captivity',
		author: 'Esther Perel',
		coverSrc: '/images/books/covers/mating-in-captivity.jpg',
		imageAlt: 'Book cover: Mating in Captivity by Esther Perel',
		shelf: 'relationships',
		insight:
			'Desire and domestic life, why closeness can dull erotic charge, and how couples rethink intimacy without choosing between security and aliveness.',
		bookUrl: 'https://www.amazon.com/Mating-in-Captivity-Esther-Perel-audiobook/dp/B000IB0EYI'
	},
	{
		title: 'Maybe You Should Talk to Someone',
		author: 'Lori Gottlieb',
		coverSrc: '/images/books/covers/gottlieb.jpg',
		imageAlt: 'Book cover: Maybe You Should Talk to Someone by Lori Gottlieb',
		shelf: 'relationships',
		insight:
			'A therapist in therapy, humor and heart on the stories we tell ourselves, the work of change, and what it really means to show up for a life.',
		bookUrl: 'https://www.amazon.com/Maybe-You-Should-Talk-Someone/dp/1328662055'
	},
	{
		title: 'Meditations',
		author: 'Marcus Aurelius',
		coverSrc: '/images/books/covers/meditations.jpg',
		imageAlt: 'Book cover: Meditations by Marcus Aurelius',
		shelf: 'practice',
		insight:
			'Private notes from a Roman emperor on ruling yourself first, acceptance, duty, and keeping the inner life aligned when the world will not cooperate.'
	},
	{
		title: 'Nervous Energy',
		author: 'Dr. Chloe Carmichael',
		coverSrc: '/images/books/covers/nervous-energy.jpg',
		imageAlt: 'Book cover: Nervous Energy by Dr. Chloe Carmichael',
		shelf: 'mind-body',
		insight:
			'Harnessing anxiety as fuel, turning nervous energy into planning, problem-solving, and action instead of spinning in worry.',
		bookUrl: 'https://www.amazon.com/Nervous-Energy-Harness-Power-Anxiety/dp/0062910576'
	},
	{
		title: 'Sapiens',
		author: 'Yuval Noah Harari',
		coverSrc: '/images/books/covers/sapiens.jpg',
		imageAlt: 'Book cover: Sapiens by Yuval Noah Harari',
		shelf: 'history',
		insight:
			'A history of our species from cognitive revolution to empires and science, asking how Homo sapiens came to dominate and what we might become next.',
		bookUrl: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095'
	},
	{
		title: 'Homo Deus',
		author: 'Yuval Noah Harari',
		coverSrc: '/images/books/covers/homo-deus.jpg',
		imageAlt: 'Book cover: Homo Deus by Yuval Noah Harari',
		shelf: 'history',
		insight:
			'Where Sapiens asked how we conquered the planet, this asks what happens when medicine, AI, and biotech let us pursue happiness, immortality, and divine power.',
		bookUrl: 'https://www.amazon.com/Homo-Deus-Brief-History-Tomorrow/dp/006246434X'
	},
	{
		title: 'The Red Book',
		author: 'C. G. Jung',
		coverSrc: '/images/books/covers/the-red-book.jpg',
		imageAlt: 'Book cover: The Red Book by C. G. Jung',
		shelf: 'history',
		insight:
			'Jung’s private illuminated journal of visions and myth, the raw source material behind analytical psychology and a landmark document of inner exploration.',
		bookUrl: 'https://www.amazon.com/Red-Book-Liber-Novus/dp/0395639009'
	},
	{
		title: 'Will',
		author: 'Will Smith',
		coverSrc: '/images/books/covers/will.jpg',
		imageAlt: 'Book cover: Will by Will Smith',
		shelf: 'history',
		insight:
			'A memoir of fame, family, and fear, told with blunt honesty about the drive that built a career and the wounds that took longer to name.',
		bookUrl: 'https://www.amazon.com/Will-Smith/dp/1984877925'
	},
	{
		title: 'Self Matters',
		author: 'Phillip C. McGraw',
		coverSrc: '/images/books/covers/self-matters.jpg',
		imageAlt: 'Book cover: Self Matters by Phillip C. McGraw',
		shelf: 'self-knowledge',
		insight:
			'Creating your life from the inside out, naming the self you never let speak, and owning the choices that kept you on the sidelines.',
		bookUrl: 'https://www.amazon.com/Self-Matters-Creating-Your-Inside/dp/0743227255'
	},
	{
		title: 'State of Affairs',
		author: 'Esther Perel',
		coverSrc: '/images/books/covers/state-of-affairs.jpg',
		imageAlt: 'Book cover: State of Affairs by Esther Perel',
		shelf: 'relationships',
		insight:
			'Infidelity as a window into modern love, why people stray, what affairs reveal about desire, and how couples can reckon with betrayal without easy moralizing.',
		bookUrl: 'https://www.amazon.com/State-Affairs-Rethinking-Infidelity/dp/006232263X'
	},
	{
		title: 'The 48 Laws of Power',
		author: 'Robert Greene',
		coverSrc: '/images/books/covers/the-48-laws-of-power.jpg',
		imageAlt: 'Book cover: The 48 Laws of Power by Robert Greene',
		shelf: 'work',
		insight:
			'Timeless patterns of influence and reputation drawn from history, distilled into laws about how power is gained, kept, and lost in competitive environments.',
		bookUrl: 'https://www.amazon.com/48-Laws-Power-Robert-Greene/dp/0140280197'
	},
	{
		title: 'The 33 Strategies of War',
		author: 'Robert Greene',
		coverSrc: '/images/books/covers/33-strategies-of-war.jpg',
		imageAlt: 'Book cover: The 33 Strategies of War by Robert Greene',
		shelf: 'work',
		insight:
			'Historical campaigns distilled into patterns, when to engage, when to feign weakness, and how power moves in conflict, politics, and everyday maneuvering.',
		bookUrl: 'https://www.amazon.com/Strategies-War-Joost-Elffers-Books/dp/0143112783'
	},
	{
		title: 'The 4-Hour Workweek',
		author: 'Timothy Ferriss',
		coverSrc: '/images/books/covers/4-hour-workweek.jpg',
		imageAlt: 'Book cover: The 4-Hour Workweek by Timothy Ferriss',
		shelf: 'work',
		insight:
			'Lifestyle design over default career scripts, systems, outsourcing, and questioning what “work” has to look like before you trade decades for it.',
		bookUrl: 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357'
	},
	{
		title: 'The 4-Hour Body',
		author: 'Timothy Ferriss',
		coverSrc: '/images/books/covers/the-4-hour-body.jpg',
		imageAlt: 'Book cover: The 4-Hour Body by Timothy Ferriss',
		shelf: 'mind-body',
		insight:
			'Self-experimentation on fat loss, strength, sleep, and recovery, treating the body as a system you can test, measure, and improve with minimal effective dose.',
		bookUrl: 'https://www.amazon.com/4-Hour-Body-Uncommon-Incredible-Superhuman/dp/030746363X'
	},
	{
		title: 'The 7 Habits of Highly Effective People',
		author: 'Stephen R. Covey',
		coverSrc: '/images/books/covers/the-7-habits-of-highly-effective-people.jpg',
		imageAlt: 'Book cover: The 7 Habits of Highly Effective People by Stephen R. Covey',
		shelf: 'work',
		insight:
			'Principles-led personal leadership, from proactivity and vision to empathic influence and renewal, built as habits you practice over a lifetime.',
		bookUrl: 'https://www.amazon.com/Habits-Highly-Effective-People-Anniversary/dp/1982137274'
	},
	{
		title: 'The Last Best Cure',
		author: 'Donna Jackson Nakazawa',
		coverSrc: '/images/books/covers/the-last-best-cure.jpg',
		imageAlt: 'Book cover: The Last Best Cure by Donna Jackson Nakazawa',
		shelf: 'mind-body',
		insight:
			'Personal memoir and science on using mind-body practices to heal chronic illness when standard care stalls, and how attention can shift immunity and pain.',
		bookUrl: 'https://www.amazon.com/Last-Best-Cure-Chronic-Illness/dp/1623360280'
	},
	{
		title: 'The Upward Spiral',
		author: 'Alex Korb',
		coverSrc: '/images/books/covers/upward-spiral.jpg',
		imageAlt: 'Book cover: The Upward Spiral by Alex Korb',
		shelf: 'mind-body',
		insight:
			'How depression loops in the brain, and how small, concrete shifts in sleep, movement, and attention can nudge the system toward relief.',
		bookUrl: 'https://www.amazon.com/Upward-Spiral-Second-Neuroscience-Depression/dp/B0F3B19C8V'
	},
	{
		title: 'The Wisdom of a Broken Heart',
		author: 'Susan Piver',
		coverSrc: '/images/books/covers/wisdom-broken-heart.jpg',
		imageAlt: 'Book cover: The Wisdom of a Broken Heart by Susan Piver',
		shelf: 'practice',
		insight:
			'Heartbreak as a path, Buddhist-influenced guidance on grief without drowning in it, and finding clarity and compassion on the other side of loss.',
		bookUrl: 'https://www.amazon.com/Wisdom-Broken-Heart-Uncommon-Healing/dp/1416593152'
	},
	{
		title: 'When Things Fall Apart',
		author: 'Pema Chödrön',
		coverSrc: '/images/books/covers/when-things.jpg',
		imageAlt: 'Book cover: When Things Fall Apart by Pema Chödrön',
		shelf: 'practice',
		insight:
			'Heart advice for difficult times, moving toward pain with curiosity, relaxing into groundlessness, and finding what does not break when life does.',
		bookUrl: 'https://pemachodronfoundation.org/product/when-things-fall-apart-book/'
	},
	{
		title: 'Your Best Life Now',
		author: 'Joel Osteen',
		coverSrc: '/images/books/covers/your-best-life-now.jpg',
		imageAlt: 'Book cover: Your Best Life Now by Joel Osteen',
		shelf: 'practice',
		insight:
			'Seven steps toward expecting better, releasing bitterness, and building daily habits that move you from survival toward a fuller, more hopeful life.',
		bookUrl: 'https://www.amazon.com/Your-Best-Life-Now-Steps/dp/044653952X'
	}
];

const titleCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

/** Shelves in display order with titles sorted A–Z within each. */
export function getGroupedBooks(): { shelf: BookShelf; books: BookEntry[] }[] {
	return BOOK_SHELVES.map((shelf) => ({
		shelf,
		books: BOOKS.filter((book) => book.shelf === shelf.id).sort((a, b) =>
			titleCollator.compare(a.title, b.title)
		)
	})).filter((group) => group.books.length > 0);
}
