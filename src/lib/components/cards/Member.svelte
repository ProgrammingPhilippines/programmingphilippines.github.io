<script lang="ts">
	export let info: MemberInfo;
</script>

<div class="tooltip tooltip-top" data-tip={info.name}>
	<div class="btn btn-circle btn-lg">
		{#if !info.githubUsername}
			<div class="avatar placeholder">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
					<span class="text-xl">
						{info.name[0].toUpperCase()}
					</span>
				</div>
			</div>
		{:else}
			<div class="avatar">
				<a
					href={'https://github.com/' + info.githubUsername}
					rel="noreferrer"
					target="_blank"
					class="btn btn-md btn-circle w-full h-full"
				>
					<img
						class="rounded-full w-full h-full"
						src={'https://avatars.githubusercontent.com/u/' + info.githubNodeId + '?v=4'}
						alt={info.name}
					/>
				</a>
			</div>
		{/if}
	</div>
</div>
