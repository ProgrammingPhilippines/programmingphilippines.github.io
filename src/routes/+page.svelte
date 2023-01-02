<script>
	import AboutUs from '$lib/components/home/AboutUs.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Programming Philippines</title>
	<meta name="title" content="Programming Philippines" />
	<meta
		name="description"
		content="Welcome to the Programming Philippines Community website! We are an extension of the
	Programming Philippines Facebook Group and a place for programmers of all skill levels to
	connect, ask questions, and share resources and knowledge. Our server covers a wide range of
	programming-related topics, including languages like Java, Python, and C++, as well as
	frameworks and technologies like Android development, machine learning, and web development.
	Our community is open and welcoming, with opportunities for both beginners and experienced
	developers to learn and contribute. On our server, you'll find resources such as channels
	for asking questions, sharing code and projects, and networking with other programmers, as
	well as events and activities such as workshops and hackathons."
	/><meta property="type" content="website" />
	<meta property="url" content="https://programmingph.vercel.app/" />
	<meta property="image" content="/lightmode_bg.svg" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://programmingph.vercel.app/" />
	<meta property="og:title" content="Programming Philippines" />
	<meta
		property="og:description"
		content="Welcome to the Programming Philippines Community website! We are an extension of the
	Programming Philippines Facebook Group and a place for programmers of all skill levels to
	connect, ask questions, and share resources and knowledge. Our server covers a wide range of
	programming-related topics, including languages like Java, Python, and C++, as well as
	frameworks and technologies like Android development, machine learning, and web development.
	Our community is open and welcoming, with opportunities for both beginners and experienced
	developers to learn and contribute. On our server, you'll find resources such as channels
	for asking questions, sharing code and projects, and networking with other programmers, as
	well as events and activities such as workshops and hackathons."
	/>
	<meta property="og:image" content="/lightmode_bg.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://programmingph.vercel.app/" />
	<meta property="twitter:title" content="Programming Philippines" />
	<meta
		property="twitter:description"
		content="Welcome to the Programming Philippines Community website! We are an extension of the
	Programming Philippines Facebook Group and a place for programmers of all skill levels to
	connect, ask questions, and share resources and knowledge. Our server covers a wide range of
	programming-related topics, including languages like Java, Python, and C++, as well as
	frameworks and technologies like Android development, machine learning, and web development.
	Our community is open and welcoming, with opportunities for both beginners and experienced
	developers to learn and contribute. On our server, you'll find resources such as channels
	for asking questions, sharing code and projects, and networking with other programmers, as
	well as events and activities such as workshops and hackathons."
	/>
	<meta property="twitter:image" content="/lightmode_bg.svg" />
</svelte:head>

<Hero />
<AboutUs />
