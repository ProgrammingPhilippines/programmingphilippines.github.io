<script lang="ts">
	import Card from '../cards/Card.svelte';
	import { adminList } from '$lib/config/admins';
	import { userList } from '$lib/config/users';
	import Member from '../cards/Member.svelte';
</script>

<div id="about-us" class="cotainer m-auto min-h-screen">
	<div class="wrap w-full h-auto flex flex-col items-center justify-center py-4">
		<h1 class="text-neutral text-4xl my-12">About us</h1>
		<div class="admins grid grid-cols-1 grid-rows-4">
			{#each adminList as admin}
				<Card info={admin} />
			{/each}
		</div>
		<div class="container-md m-auto h-auto others mt-4 px-4">
			<h1 class="text-4xl font-normal text-center">Others</h1>
			<div class="grid grid-cols-4 grid-rows-10 md:grid-cols-8 md:grid-rows-4 gap-2 mt-2">
				{#each userList as user}
					<Member info={user} />
				{/each}
			</div>
		</div>
	</div>
</div>