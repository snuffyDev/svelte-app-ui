<script lang="ts">
	import { clickOutside } from "../../../actions/clickOutside";
	import { createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";
	import { isDesktopMQM, isMobileMQ } from "../../../stores/mediaQuery";

	export let showing = false;

	function handleToggle() {
		if ($isDesktopMQM || showing === false) return;
		dispatch("toggled", { state: !showing });
	}

	const dispatch = createEventDispatcher<{ toggled: { state: boolean } }>();
</script>

{#if showing && $isMobileMQ}
	<div
		class="backdrop"
		in:fade={{ delay: 200, duration: 200 }}
		out:fade={{ duration: 400 }}
		on:click|self|stopPropagation={handleToggle}
	/>
{/if}
<aside
	use:clickOutside
	on:clickOutside={handleToggle}
	class:showing={$isDesktopMQM ? true : showing}
>
	<div class="sidebar">
		{#if showing}
			<div class="sidebar-header">
				<slot name="header" />
			</div>
		{/if}

		<div class="nav-items">
			<slot name="links" />
		</div>
	</div>
</aside>

<style src="./index.scss" lang="scss">
</style>
