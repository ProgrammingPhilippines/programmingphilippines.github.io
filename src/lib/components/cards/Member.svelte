<script lang="ts">
	export let ing: string = 'anonymous';
</script>

<div class="tooltip tooltip-top" data-tip={ing}>
	<div class="btn btn-circle btn-lg">
		<div class="avatar placeholder">
			<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
				<!-- <img
					class="w-full h-full"
					src="https://avatars.githubusercontent.com/u/46004116?v=4"
					alt="avatar"
				/> -->
				<span class="text-xl">
					{ing[0].toUpperCase()}
				</span>
			</div>
		</div>
	</div>
</div>
