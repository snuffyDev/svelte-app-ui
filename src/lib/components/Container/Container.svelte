<script lang="ts">
	let _class = "";
	export let style = "";
	export { _class as class };
</script>

<div class="container {_class}" {style}>
	<slot>Missing content</slot>
</div>

<style src="./index.scss" lang="scss">
</style>
