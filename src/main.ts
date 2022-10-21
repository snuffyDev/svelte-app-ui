import Layout from "./+layout.svelte";
import App from "./App.svelte";

const app = new Layout({
	target: document.getElementById("app"),
});

new App({
	target: document.querySelector(".main")!,
	$$inline: true
})

export default app;
