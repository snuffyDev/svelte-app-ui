/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onclickOutside?: () => void;
		ondragmove?: (e: any) => void;
		onenterViewport?: () => void;
		onlosefocus?: () => void;
		onpan?: (event: any) => void;
		onpanend?: (event: any) => void;
	}
}