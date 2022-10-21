import { readable, type StartStopNotifier, type Subscriber } from "svelte/store";

function mediaQuery(query: string): StartStopNotifier<boolean> {
	return (set: Subscriber<boolean>) => {
		let stop = () => {};
		if (typeof window !== 'undefined') {
			const media = window.matchMedia(query);
			const updateStoreValue = () => set(media.matches);
			media.addEventListener("change", updateStoreValue);
			updateStoreValue();
			stop = () => media.removeEventListener("change", updateStoreValue);
		}
		return stop;
	};
}

export const isMobileMQ = readable(false, mediaQuery("screen and (max-width: 719px)"));

export const isDesktopMQM = readable(false, mediaQuery("screen and (min-width: 720px) and (max-width: 1298.5px)"));
export const isDesktopMQL = readable(false, mediaQuery("screen and (min-width: 1299px)"));