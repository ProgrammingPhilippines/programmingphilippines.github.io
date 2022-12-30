<script lang="ts">
	export let info: CardInfo;
</script>

<div class="container-md">
	<div class="card">
		<div
			class:md:flex-row-reverse={info.flip}
			class="card-body flex flex-col md:flex-row items-start justify-center gap-4"
		>
			<div class="h-full w-full md:w-1/3">
				<img src="https://picsum.photos/200" alt="profile" class="w-full h-full" />
			</div>
			<div
				class="card-title h-full w-full max-w-4xl md:w-1/2 flex flex-col items-start justify-start"
			>
				<h1 class="text-3xl">{info.name}</h1>
				<span class="text-sm text-primary font-normal">{info.position}</span>
				<p class="text-base max-w-4xl tracking-wide leading-7 font-light">{info.description}</p>
			</div>
		</div>
	</div>
</div>