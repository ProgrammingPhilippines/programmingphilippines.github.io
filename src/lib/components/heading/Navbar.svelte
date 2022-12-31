<script lang="ts">
	import { slide } from 'svelte/transition';
	import Logo from '../icons/Logo.svelte';
	import MenuIcon from '../icons/MenuIcon.svelte';
	import XMark from '../icons/XMark.svelte';

	type NavLink = {
		href: string;
		label: string;
		external: boolean;
	};

	const navLinks: NavLink[] = [
		{ href: '/#about-us', label: 'About us', external: false },
		{
			href: 'https://github.com/programmingphilippines',
			label: 'Community projects',
			external: true
		},
		{ href: '/events', label: 'Events', external: false }
	];

	let isOpen = false;
	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<div class="navbar duration-150 max-w-4xl m-auto">
	<div class="navbar-start">
		<a href="/">
			<Logo className="w-16 h-16" />
		</a>
	</div>
	<ul
		class="hidden md:flex md:items-center md:justify-center md:gap-8 md:w-full md:navbar-end font-normal"
	>
		{#each navLinks as link}
			<li class="hover:scale-110 duration-100">
				{#if link.external}
					<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
				{:else}
					<a href={link.href}>{link.label}</a>
				{/if}
			</li>
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
			class="bg-base-200 fixed z-10 top-0 left-0 h-screen w-screen"
		>
			<div class="close-btn absolute top-4 right-2 flex items-center justify-center">
				<button on:click={toggleMenu} class="btn btn-circle btn-ghost">
					<XMark className="w-6 h-6 stroke-primary" />
				</button>
			</div>
			<ul class="w-full flex flex-col items-center gap-8">
				{#each navLinks as link}
					<li on:keydown={toggleMenu} on:click={toggleMenu}>
						{#if link.external}
							<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
						{:else}
							<a href={link.href}>{link.label}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
