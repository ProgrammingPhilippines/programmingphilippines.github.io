<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="min-h-screen h-screen w-full">
	<div class="h-full w-full flex flex-col items-center justify-center">
		<h1 class="text-4xl">{$page.status}</h1>
		<p class="text-xl">{$page.error?.message}</p>
	</div>
</div>
