<script lang="ts">
	let _class = "";
	export { _class as class };
</script>

<div class="container {_class}">
	<slot>Missing content</slot>
</div>

<style src="./index.scss" lang="scss">
</style>
