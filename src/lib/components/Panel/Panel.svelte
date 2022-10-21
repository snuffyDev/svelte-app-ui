<script lang="ts">
	import type { UIElevationKey, UIElevationMap } from "./../../types/ui";

    export let outline = false;
    export let column = true;
    export let style = "";

	let _class = "";
	export { _class as class };
</script>

<div class="panel {_class}" {style} class:outline class:column>
    <slot/>
</div>

<style src="./index.scss" lang="scss">
</style>
