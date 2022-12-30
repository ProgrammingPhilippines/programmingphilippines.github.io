<script>
	import DiscordIcon from '../icons/DiscordIcon.svelte';
	import FacebookIcon from '../icons/FacebookIcon.svelte';
	import GithubIcon from '../icons/GithubIcon.svelte';
</script>

<footer class="bg-base-100 text-base-content">
	<div class="divider"></div>
	<div class="p-10 footer wrap max-w-5xl m-auto">
		<div>
			<h1 class="text-xl font-bold text-primary">Programming PH</h1>
			<p>
				Developed and maintained by the contributors.
			</p>
		</div>
		<div>
			<span class="footer-title">SOCIALS</span>
			<div class="flex flex-col items-start justify-center gap-2 text-primary">
				<a
					href="https://discord.gg/MmWwgXQezf"
					class="flex items-center justify-start gap-2"
					rel="noreferrer"
					target="_blank"
				>
					<DiscordIcon className="w-4 h-4" /> Discord
				</a>
				<a
					href="https://github.com/programmingphilippines"
					class="flex items-center justify-start gap-2"
					rel="noreferrer"
					target="_blank"
				>
					<GithubIcon className="w-4 h-4" /> Github
				</a>
				<a
					href="https://www.facebook.com/groups/programmingphilippines"
					class="flex items-center justify-start gap-2"
					rel="noreferrer"
					target="_blank"
				>
					<FacebookIcon className="w-4 h-4" /> Facebook
				</a>
			</div>
		</div>
	</div>
</footer>
