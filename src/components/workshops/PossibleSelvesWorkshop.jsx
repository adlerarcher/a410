import { useEffect, useMemo, useState } from 'react';

const WORKSHOP_STORAGE_KEY = 'counterbalance-workshops';

const GENERIC = new Set([
	'good',
	'bad',
	'nice',
	'things',
	'stuff',
	'very',
	'really',
	'just',
	'thing',
	'lot',
	'get',
	'got',
	'also',
	'like'
]);

function tokenizeWords(text) {
	return text
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((w) => w.toLowerCase().replace(/[^a-z0-9'-]/g, ''))
		.filter(Boolean);
}

function analyzeText(text) {
	const words = tokenizeWords(text);
	const wc = words.length;
	if (wc === 0) {
		return { wc: 0, score: 0, uniqueRatio: 0, avgLen: 0, genericHits: 0, numbers: 0 };
	}
	const stripped = words.map((w) => w.replace(/['-].*$/, ''));
	const uniq = new Set(stripped).size;
	const uniqueRatio = uniq / wc;
	const avgLen = words.reduce((a, w) => a + w.length, 0) / wc;
	const genericHits = stripped.filter((w) => GENERIC.has(w)).length;
	const numbers = (text.match(/\d/g) || []).length;
	const longWords = words.filter((w) => w.length >= 8).length;
	let score =
		wc * 0.55 +
		uniqueRatio * 38 +
		Math.min(avgLen * 2.2, 28) +
		Math.min(longWords * 1.2, 18) +
		numbers * 1.8 -
		genericHits * 4;
	score = Math.max(0, Math.min(100, Math.round(score)));
	return { wc, score, uniqueRatio, avgLen, genericHits, numbers };
}

function bandFromScore(score) {
	if (score >= 72) return 'high';
	if (score >= 42) return 'medium';
	return 'low';
}

function buildAssessment(overall) {
	const band = bandFromScore(overall);
	const nextSteps =
		band === 'high'
			? [
					'Keep anchoring your possible self in concrete scenes and named contexts, which supports identity work over time (Markus and Nurius, 1986).',
					'Use your exemplars as comparison points, not idols. Ibarra emphasizes experimenting with provisional selves rather than copying a single template.',
					'Return to this audit after a major transition. Possible selves shift when incentives and audiences shift.'
				]
			: band === 'medium'
				? [
						'Add one layer of specificity at a time: location, stakeholders, artifacts you produce, and what “good” looks like in a single week.',
						'Rewrite one paragraph in the active voice with proper nouns where possible. Specificity often rises when the setting becomes visible.',
						'Compare your simulation to your exemplars. Where do they diverge? That gap is a roadmap for small experiments.'
					]
				: [
						'Spend ten minutes describing a single Tuesday: calendar blocks, conversations, and outputs. Strauss and colleagues highlight behavioral detail as a window on possible selves.',
						'Replace evaluative words with observables (what someone would see on a screen or in a room).',
						'Draft a two-sentence version you could say aloud without notes. Short forms reveal what is still fuzzy.'
					];

	const summary =
		band === 'high'
			? 'Your responses lean detailed and differentiated. That usually means your possible self is textured enough to guide choices and to update when reality pushes back.'
			: band === 'medium'
				? 'You have a workable sketch of a future, with clear pockets of detail and some areas that still read as summary rather than scene. That is a normal stage before experimentation.'
				: 'The patterns here suggest the future is still stated at a headline level. That is useful as a starting point; the next moves are about turning headings into scenes you can recognize in real time.';

	return { band, summary, nextSteps };
}

export default function PossibleSelvesWorkshop() {
	const [step, setStep] = useState(1);
	const [error, setError] = useState('');
	const [futureVision, setFutureVision] = useState('');
	const [weekSimulation, setWeekSimulation] = useState('');
	const [exemplarA, setExemplarA] = useState('');
	const [exemplarB, setExemplarB] = useState('');
	const [exemplarC, setExemplarC] = useState('');
	const [composite, setComposite] = useState('');
	const [done, setDone] = useState(false);
	const [copyState, setCopyState] = useState('idle');

	const canProceed = useMemo(() => {
		if (step === 1) return futureVision.trim().length > 0;
		if (step === 2) return weekSimulation.trim().length > 0;
		if (step === 3) {
			const any = [exemplarA, exemplarB, exemplarC].some((s) => s.trim().length > 0);
			return any;
		}
		if (step === 4) return composite.trim().length > 0;
		return false;
	}, [step, futureVision, weekSimulation, exemplarA, exemplarB, exemplarC, composite]);

	const analyses = useMemo(() => {
		return {
			futureVision: analyzeText(futureVision),
			weekSimulation: analyzeText(weekSimulation),
			exemplars: analyzeText([exemplarA, exemplarB, exemplarC].join(' \n ')),
			composite: analyzeText(composite)
		};
	}, [futureVision, weekSimulation, exemplarA, exemplarB, exemplarC, composite]);

	const overall = useMemo(() => {
		const a = analyses;
		const parts = [a.futureVision.score, a.weekSimulation.score, a.exemplars.score, a.composite.score];
		return Math.round(parts.reduce((s, n) => s + n, 0) / parts.length);
	}, [analyses]);

	const assessment = useMemo(() => buildAssessment(overall), [overall]);

	useEffect(() => {
		if (!done) return;
		try {
			const prev = localStorage.getItem(WORKSHOP_STORAGE_KEY);
			const data = prev ? JSON.parse(prev) : {};
			data.possibleSelves = {
				completedAt: new Date().toISOString(),
				overall,
				band: assessment.band,
				scores: {
					futureVision: analyses.futureVision.score,
					weekSimulation: analyses.weekSimulation.score,
					exemplars: analyses.exemplars.score,
					composite: analyses.composite.score
				}
			};
			localStorage.setItem(WORKSHOP_STORAGE_KEY, JSON.stringify(data));
		} catch {
			/* ignore quota / private mode */
		}
	}, [done, overall, assessment.band, analyses]);

	function handleNext() {
		if (!canProceed) {
			setError('Please complete the required fields before continuing.');
			return;
		}
		setError('');
		if (step < 4) setStep(step + 1);
		else {
			setDone(true);
		}
	}

	function handleBack() {
		setError('');
		if (done) setDone(false);
		else if (step > 1) setStep(step - 1);
	}

	const reportText = useMemo(() => {
		const lines = [
			'Possible Selves Audit',
			`Overall specificity index: ${overall} (${assessment.band})`,
			'',
			'Name the Future',
			futureVision,
			'',
			'Simulation Test',
			weekSimulation,
			'',
			'Exemplar Audit',
			`Person or figure A: ${exemplarA}`,
			`Person or figure B: ${exemplarB}`,
			`Person or figure C: ${exemplarC}`,
			'',
			'Composite Builder',
			composite,
			'',
			'Summary',
			assessment.summary,
			'',
			'Next steps',
			...assessment.nextSteps.map((s, i) => `${i + 1}. ${s}`)
		];
		return lines.join('\n');
	}, [overall, assessment, futureVision, weekSimulation, exemplarA, exemplarB, exemplarC, composite]);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(reportText);
			setCopyState('copied');
			setTimeout(() => setCopyState('idle'), 2000);
		} catch {
			setCopyState('error');
		}
	}

	const stepTitle = ['Name the Future', 'Simulation Test', 'Exemplar Audit', 'Composite Builder'];

	return (
		<div className="rounded-sm border border-workshop-border bg-site-cream-2 p-6 shadow-sm md:p-10">
			<div className="mb-8 border-b border-workshop-border pb-6">
				<h1 className="font-display text-3xl text-workshop-ink">Possible Selves Audit</h1>
				<p className="mt-3 font-serif text-workshop-muted leading-relaxed">
					Four short steps. Your answers stay in this browser tab unless you copy them yourself.
				</p>
			</div>

			{!done && (
				<>
					<div className="mb-8 flex items-center justify-between gap-4 text-sm text-workshop-muted">
						<span className="font-sans">
							Step {step} of 4 · {stepTitle[step - 1]}
						</span>
						<div className="flex gap-1">
							{[1, 2, 3, 4].map((n) => (
								<span
									key={n}
									className={`h-1.5 w-8 rounded-full ${n <= step ? 'bg-workshop-accent' : 'bg-workshop-border'}`}
								/>
							))}
						</div>
					</div>

					{error && (
						<p className="mb-4 rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
							{error}
						</p>
					)}

					{step === 1 && (
						<div className="space-y-3">
							<label className="block font-sans text-sm font-medium text-workshop-ink" htmlFor="pv-future">
								Describe the professional future you are working toward as vividly as you can right now.
							</label>
							<textarea
								id="pv-future"
								value={futureVision}
								onChange={(e) => setFutureVision(e.target.value)}
								rows={8}
								className="w-full rounded-sm border border-workshop-border bg-white px-4 py-3 font-serif text-workshop-ink leading-relaxed shadow-inner outline-none ring-workshop-accent/30 placeholder:text-workshop-muted focus:ring-2"
								placeholder="Roles, contexts, and what changes in how you spend your attention."
							/>
						</div>
					)}

					{step === 2 && (
						<div className="space-y-3">
							<label className="block font-sans text-sm font-medium text-workshop-ink" htmlFor="pv-sim">
								Imagine a representative week in that future. What is happening, and what are you responsible for?
							</label>
							<textarea
								id="pv-sim"
								value={weekSimulation}
								onChange={(e) => setWeekSimulation(e.target.value)}
								rows={8}
								className="w-full rounded-sm border border-workshop-border bg-white px-4 py-3 font-serif text-workshop-ink leading-relaxed shadow-inner outline-none ring-workshop-accent/30 placeholder:text-workshop-muted focus:ring-2"
								placeholder="Concrete scenes beat slogans. Think calendar, conversations, deliverables."
							/>
						</div>
					)}

					{step === 3 && (
						<div className="space-y-6">
							<p className="font-serif text-workshop-muted leading-relaxed">
								Name one to three people (public figures, mentors, or composites) who carry part of the future you
								want. At least one entry is required.
							</p>
							{[
								['pv-ex-a', exemplarA, setExemplarA, 'Figure one'],
								['pv-ex-b', exemplarB, setExemplarB, 'Figure two (optional)'],
								['pv-ex-c', exemplarC, setExemplarC, 'Figure three (optional)']
							].map(([id, val, setVal, lab]) => (
								<div key={id} className="space-y-2">
									<label className="block font-sans text-sm font-medium text-workshop-ink" htmlFor={id}>
										{lab}
									</label>
									<textarea
										id={id}
										value={val}
										onChange={(e) => setVal(e.target.value)}
										rows={4}
										className="w-full rounded-sm border border-workshop-border bg-white px-4 py-3 font-serif text-workshop-ink leading-relaxed shadow-inner outline-none ring-workshop-accent/30 placeholder:text-workshop-muted focus:ring-2"
										placeholder="What do they embody that you want to borrow or adapt?"
									/>
								</div>
							))}
						</div>
					)}

					{step === 4 && (
						<div className="space-y-3">
							<label className="block font-sans text-sm font-medium text-workshop-ink" htmlFor="pv-comp">
								Synthesize a single paragraph that merges your future, your week, and your exemplars into one
								coherent possible self.
							</label>
							<textarea
								id="pv-comp"
								value={composite}
								onChange={(e) => setComposite(e.target.value)}
								rows={9}
								className="w-full rounded-sm border border-workshop-border bg-white px-4 py-3 font-serif text-workshop-ink leading-relaxed shadow-inner outline-none ring-workshop-accent/30 placeholder:text-workshop-muted focus:ring-2"
								placeholder="Write in the first person, present or near future, as if briefing a trusted colleague."
							/>
						</div>
					)}

					<div className="mt-10 flex flex-wrap items-center justify-between gap-4">
						<button
							type="button"
							onClick={handleBack}
							disabled={step === 1}
							className="rounded-sm px-4 py-2 text-sm font-medium text-workshop-muted transition hover:text-workshop-ink disabled:opacity-30"
						>
							Back
						</button>
						<button
							type="button"
							onClick={handleNext}
							className="rounded-sm bg-workshop-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6d5210]"
						>
							{step === 4 ? 'Finish' : 'Continue'}
						</button>
					</div>
				</>
			)}

			{done && (
				<div className="space-y-8">
					<div>
						<h2 className="font-display text-2xl text-workshop-ink">Your readout</h2>
						<p className="mt-2 font-sans text-sm text-workshop-muted">
							Specificity index: <span className="font-semibold text-workshop-ink">{overall}</span> ·{' '}
							{assessment.band === 'high'
								? 'higher detail'
								: assessment.band === 'medium'
									? 'mixed detail'
									: 'headline-level detail'}
						</p>
					</div>

					<div className="rounded-sm border border-workshop-border bg-white p-5 font-serif leading-relaxed text-workshop-ink shadow-inner">
						<p>{assessment.summary}</p>
					</div>

					<div>
						<h3 className="font-display text-xl text-workshop-ink">Research-grounded next steps</h3>
						<ol className="mt-4 list-decimal space-y-3 pl-5 font-serif text-workshop-ink">
							{assessment.nextSteps.map((s) => (
								<li key={s}>{s}</li>
							))}
						</ol>
					</div>

					<div>
						<h3 className="font-display text-xl text-workshop-ink">Response recap</h3>
						<div className="mt-4 space-y-6 rounded-sm border border-workshop-border bg-white p-5 text-sm shadow-inner">
							<section>
								<h4 className="font-sans font-semibold text-workshop-ink">Name the Future</h4>
								<p className="mt-2 whitespace-pre-wrap font-serif text-workshop-muted">{futureVision}</p>
								<p className="mt-2 text-xs text-workshop-muted">
									Words: {analyses.futureVision.wc} · Local score: {analyses.futureVision.score}
								</p>
							</section>
							<section>
								<h4 className="font-sans font-semibold text-workshop-ink">Simulation Test</h4>
								<p className="mt-2 whitespace-pre-wrap font-serif text-workshop-muted">{weekSimulation}</p>
								<p className="mt-2 text-xs text-workshop-muted">
									Words: {analyses.weekSimulation.wc} · Local score: {analyses.weekSimulation.score}
								</p>
							</section>
							<section>
								<h4 className="font-sans font-semibold text-workshop-ink">Exemplar Audit</h4>
								<p className="mt-2 whitespace-pre-wrap font-serif text-workshop-muted">
									{[exemplarA, exemplarB, exemplarC].filter(Boolean).join('\n\n')}
								</p>
								<p className="mt-2 text-xs text-workshop-muted">
									Words: {analyses.exemplars.wc} · Local score: {analyses.exemplars.score}
								</p>
							</section>
							<section>
								<h4 className="font-sans font-semibold text-workshop-ink">Composite Builder</h4>
								<p className="mt-2 whitespace-pre-wrap font-serif text-workshop-muted">{composite}</p>
								<p className="mt-2 text-xs text-workshop-muted">
									Words: {analyses.composite.wc} · Local score: {analyses.composite.score}
								</p>
							</section>
						</div>
					</div>

					<div className="flex flex-wrap gap-3">
						<button
							type="button"
							onClick={handleCopy}
							className="rounded-sm bg-workshop-ink px-5 py-2.5 text-sm font-semibold text-workshop-paper shadow-sm transition hover:bg-black"
						>
							{copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy blocked' : 'Copy full report'}
						</button>
						<button
							type="button"
							onClick={() => {
								setDone(false);
								setStep(4);
							}}
							className="rounded-sm border border-workshop-border px-5 py-2.5 text-sm font-medium text-workshop-ink transition hover:bg-white"
						>
							Edit last step
						</button>
						<button
							type="button"
							onClick={() => {
								setStep(1);
								setDone(false);
								setFutureVision('');
								setWeekSimulation('');
								setExemplarA('');
								setExemplarB('');
								setExemplarC('');
								setComposite('');
							}}
							className="rounded-sm px-5 py-2.5 text-sm font-medium text-workshop-muted hover:text-workshop-ink"
						>
							Start over
						</button>
					</div>
				</div>
			)}

			<p className="mt-10 border-t border-workshop-border pt-6 text-center text-xs leading-relaxed text-workshop-muted">
				Based on Hazel Markus &amp; Paula Nurius (1986), Strauss, Griffin &amp; Parker (2012), and Herminia Ibarra. A
				Counterbalance workshop by Adler Archer.
			</p>
		</div>
	);
}
