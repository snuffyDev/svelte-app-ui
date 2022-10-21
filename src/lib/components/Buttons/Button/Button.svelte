<script lang="ts">
	import type { UIBaseColor } from "src/lib/types/ui";
	import type { StyleDict } from "src/lib/types/util";

	export let size: "default" | "small" | "large" = "default";
	export let expand: "block" | "full" | undefined = undefined;
	export let fill: "clear" | "outline" | "solid" | "default" = "solid";
	export let color: UIBaseColor = "dark";
	export let pill = false;
	export let disabled = false;
	export let href = "";

	export let strong = false;

	export let type: "button" | "submit" = "button";

	const buttonSizes: StyleDict<typeof size, "size"> = {
		default: "size-default",
		small: "size-small",
		large: "size-large",
	} as const;

	const buttonFill: StyleDict<typeof fill, "fill"> = {
		clear: "fill-clear",
		default: "fill-default",
		outline: "fill-outline",
		solid: "fill-solid",
	} as const;

	const buttonColor: StyleDict<UIBaseColor, "color"> = {
		danger: "color-danger",
		dark: "color-dark",
		light: "color-light",
		medium: "color-medium",
		primary: "color-primary",
		secondary: "color-secondary",
		success: "color-success",
		tertiary: "color-tertiary",
		warning: "color-warning",
	} as const;
</script>

<svelte:element this={href.length ? 'a' : 'button'}
		href={href.length ? href : undefined}
		class:expand
		class:pill
		{color}
		on:blur
		on:focus
		on:click
		class:strong
		class="{buttonSizes[size]} {buttonFill[fill]} {buttonColor[color]}"
	>
		<slot>Missing Content</slot>
</svelte:element>

<style src="./index.scss" lang="scss">
</style>
