<script lang="ts">
	import Button from "./components/Buttons/Button/Button.svelte";

	let count: number = 0;
	const increment = () => {
		count += 1;
	};
</script>

<Button expand="full" on:click={increment}>
	count is {count}
</Button>
