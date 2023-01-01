<script lang="ts">
	type GroupEvent = {
		name: string;
		description: string;
	};

	const events: GroupEvent[] = [
		{
			name: 'DAFAQ session #1',
			description: 'DAFAQ is software engineering?'
		},
		{
			name: 'DAFAQ session #2',
			description: 'DAFAQ is software testing?'
		},
		{
			name: 'DAFAQ session #3',
			description: 'DAFAQ Mathematics?'
		},
		{
			name: 'DAFAQ session #4',
			description: 'DAFAQ Game development?'
		},
		{
			name: 'DAFAQ session #5',
			description: 'DAFAQ Git/Github?'
		}
	];
</script>

<svelte:head>
	<title>Programming PH - Events</title>
	<meta name="description" content="List of events/podcast in Programming PH Community." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pph.vercel.app/" />
	<meta property="og:title" content="Programming Philippines" />
	<meta property="og:description" content="List of events/podcast in Programming PH Community." />
	<meta property="og:image" content="/lightmode_bg.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://pph.vercel.app/" />
	<meta property="twitter:title" content="Programming Philippines" />
	<meta
		property="twitter:description"
		content="List of events/podcast in Programming PH Community."
	/>
	<meta property="twitter:image" content="/lightmode_bg.svg" />
</svelte:head>

<div class="min-h-screen">
	<div class="conatiner max-w-4xl m-auto p-4">
		<h1 class="text-4xl text-center">EVENTS!</h1>
		<span class="mt-2">Da Frequently Ask Questions</span>
		<ul class="steps steps-vertical w-full h-full">
			{#each events as event}
				<li class="step step-primary w-full p-2">
					<p class="tooltip tooltip-bottom md:tooltip-right" data-tip={event.description}>
						{event.name}
					</p>
				</li>
			{/each}
			<li class="step step-neutral w-full p-2">
				<p class="tooltip tooltip-bottom md:tooltip-right" data-tip="Coming soon!">Coming soon!</p>
			</li>
		</ul>
	</div>
</div>
