<script lang="ts">
	import { fade } from 'svelte/transition';

	export let tabs: string[];
	export let inverted = false;

	let current = tabs[0];
</script>

<div class="container" class:inverted>
	<div class="navigation">
		{#each tabs as tab}
			<button class:active={current === tab} on:click={() => (current = tab)}>
				{tab}
			</button>
		{/each}
	</div>
	<div class="content">
		{#key current}
			<div class="tab" transition:fade|local>
				<slot tab={current} />
			</div>
		{/key}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.active {
		background-color: oklch(.25 0 0);
		color: white;
	}

	.content {
		flex: 1;
		box-sizing: border-box;
		background-color: #483e33;
		border: 1px solid #ebe6e6;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.inverted {
		button {
			background-color: #69543f;
			border: 1px solid black;
			color: #ff981f;
		}

		.active {
			background-color: #a02623;
			color: #ebe6e6;
		}

		.content {
			background-color: #69543f;
			border: 1px solid black;
		}
	}

	.tab {
		grid-row: 1;
		grid-column: 1;
		padding: 16px;
	}
</style>
