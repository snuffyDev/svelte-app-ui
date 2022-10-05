<script lang="ts">
	import "./app.scss";

	import svelteLogo from "./assets/svelte.svg";
	import Button from "./lib/components/Buttons/Button/Button.svelte";
	import Container from "./lib/components/Container";
	import Counter from "./lib/Counter.svelte";
</script>

<main>
	<div>
		<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
	</div>
	<h1>Vite + Svelte</h1>

	<div class="card">
		<Counter />
	</div>
	<Container>
		<h2>Primary Buttons</h2>
		<Button fill="clear" color="primary">Primary</Button>
		<Button fill="outline" color="primary">Primary</Button>
		<Button fill="solid" color="primary">Primary</Button>
	</Container>
	<Container>
		<h2>Secondary Buttons</h2>
		<Button fill="clear" color="secondary">Secondary</Button>
		<Button fill="outline" color="secondary">Secondary</Button>
		<Button fill="solid" color="secondary">Secondary</Button>
	</Container>
	<Container>
		<h2>Tertiary Buttons</h2>
		<Button fill="clear" color="tertiary">Test</Button>
		<Button fill="outline" color="tertiary">Test</Button>
		<Button fill="solid" color="tertiary">Test</Button>
	</Container>
	<Container>
		<h2>Other Buttons</h2>
		<Button fill="clear" color="danger">Test</Button>
		<Button fill="outline" color="danger">Test</Button>
		<Button fill="solid" color="danger">Test</Button>
		<Button fill="solid" color="success">Test</Button>

		<Button fill="solid" color="warning">Test</Button>
		<Button fill="solid" color="medium">Test</Button>
		<Button fill="solid" color="light">Test</Button>
	</Container>

	<Container>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus
		explicabo accusantium, ab molestias dignissimos at sunt! Corrupti ut odit
		iusto dicta consequuntur ipsa fuga molestiae inventore modi, voluptatem
		omnis.
	</Container>
</main>

<style lang="scss" global>
	@import "@fontsource/inter/variable.css";
</style>
