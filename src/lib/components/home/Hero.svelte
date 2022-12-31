<script>
	import DiscordIcon from '$lib/components/icons/DiscordIcon.svelte';
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
</script>

<div class="relative hero min-h-screen">
	<div class="hero-content max-w-5xl m-auto md:justify-start md:items-start md:w-full">
		<div class="lg:-mt-24">
			<h1 class="text-3xl md:text-4xl lg:text-6xl tracking-wide">Programming Philippines</h1>
			<p class="tracking-wide leading-6 max-w-2xl text-sm md:text-base mt-2">
				Welcome to the Programming Philippines Community website! We are an extension of the
				Programming Philippines Facebook Group and a place for programmers of all skill levels to
				connect, ask questions, and share resources and knowledge. Our server covers a wide range of
				programming-related topics, including languages like Java, Python, and C++, as well as
				frameworks and technologies like Android development, machine learning, and web development.
				Our community is open and welcoming, with opportunities for both beginners and experienced
				developers to learn and contribute. On our server, you'll find resources such as channels
				for asking questions, sharing code and projects, and networking with other programmers, as
				well as events and activities such as workshops and hackathons.
			</p>
			<div class="w-full">
				<div class="md:w-1/4">
					<a
						href="https://discord.gg/MmWwgXQezf"
						class="btn btn-ghost btn-md btn-circle hover:btn-primary-content"
						rel="noreferrer"
						target="_blank"
					>
						<DiscordIcon className="w-6 h-6 duration-75" />
					</a>
					<a
						href="https://github.com/programmingphilippines"
						class=" btn btn-ghost btn-md btn-circle hover:btn-primary-content"
						rel="noreferrer"
						target="_blank"
					>
						<GithubIcon className="w-6 h-6" />
					</a>
					<a
						href="https://www.facebook.com/groups/programmingphilippines"
						class="btn btn-ghost btn-md btn-circle hover:btn-primary-content"
						rel="noreferrer"
						target="_blank"
					>
						<FacebookIcon className="w-6 h-6" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<img class="absolute bottom-0 right-0 -z-10" src="/lightmode_bg.svg" alt="light mode background" />
</div>

<!-- <style lang="postcss">
	.hero {
		background-image: url('/lightmode_bg.svg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style> -->
