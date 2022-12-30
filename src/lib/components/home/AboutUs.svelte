<script lang="ts">
	import UserCard from '../cards/UserCard.svelte';
	import { adminsConfig } from '$lib/config/admins';
	import { usersConfig } from '$lib/config/users';
	import Member from '../cards/Member.svelte';
</script>

<div id="about-us" class="cotainer m-auto min-h-screen">
	<div class="wrap w-full h-auto flex flex-col items-center justify-center py-4">
		<h1 class="text-neutral text-4xl my-12">About us</h1>
		<div class="admins grid grid-cols-1 grid-rows-4">
			{#each adminsConfig as admin}
				<UserCard info={admin} />
			{/each}
		</div>
		<div class="container-md m-auto h-auto others mt-4 px-4">
			<h1 class="text-4xl font-normal text-center">Others</h1>
			<div class="grid grid-cols-4 grid-rows-10 md:grid-cols-8 md:grid-rows-4 gap-2 mt-2">
				{#each usersConfig as user}
					<Member ing={user} />
				{/each}
			</div>
		</div>
	</div>
</div>