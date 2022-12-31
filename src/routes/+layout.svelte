<script>
	import Navbar from '$lib/components/heading/Navbar.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
	import "@fontsource/montserrat";
	import '../app.css';
</script>

<Navbar />
<slot />
<Footer />