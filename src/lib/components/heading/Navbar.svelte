<script>
	import { slide } from 'svelte/transition';
	import Logo from '../icons/Logo.svelte';
	import MenuIcon from '../icons/MenuIcon.svelte';
	import XMark from '../icons/XMark.svelte';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/#about-us', label: 'About us' },
		{ href: '/community-projects', label: 'Community projects' },
		{ href: '/events', label: 'Events' }
	];

	let isOpen = false;
	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<div class="navbar duration-150 max-w-4xl m-auto">
	<div class="navbar-start">
		<Logo className="w-16 h-16" />
	</div>
	<ul
		class="hidden md:flex md:items-center md:justify-center md:gap-8 md:w-full md:navbar-center font-normal"
	>
		{#each navLinks as link}
			<li class="hover:scale-110 duration-100"><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
	<div class="navbar-end flex w-full items-center justify-end md:hidden">
		<button on:click={toggleMenu} class="btn btn-square btn-ghost">
			<MenuIcon className="w-6 h-6 stroke-primary" />
		</button>
	</div>
	{#if isOpen}
		<div
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 200 }}
			class="container bg-base-200 fixed z-10 top-0 left-0 h-screen"
		>
			<div class="close-btn absolute top-0 right-0 flex items-center justify-center">
				<button on:click={toggleMenu} class="btn btn-circle btn-ghost">
					<XMark className="w-6 h-6 stroke-primary" />
				</button>
			</div>
			<ul class="navbar-center w-full flex flex-col items-center gap-4">
				{#each navLinks as link}
					<li on:keydown={toggleMenu} on:click={toggleMenu}>
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
