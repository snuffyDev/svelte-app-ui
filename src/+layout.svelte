<script lang="ts">
	import "./app.scss";

	import profile from "./assets/me.webp";
	import Button from "./lib/components/Buttons/Button/Button.svelte";
	import Container from "./lib/components/Container";
	import Panel from "./lib/components/Panel";
	import Counter from "./lib/Counter.svelte";
	import Navbar from "./lib/components/Layout/Navbar/Navbar.svelte";
	import Sidebar from "./lib/components/Layout/Sidebar";
	import { isDesktopMQM, isMobileMQ } from "./lib/stores/mediaQuery";
    $: isDesktop = !$isMobileMQ;
    let showing: boolean = false;
	$: showing = isDesktop ? true : showing;
	function toggleNavbar(event: CustomEvent<{ state: boolean }>) {
		showing = event.detail.state;
	}
</script>

<Sidebar {showing} on:toggled={toggleNavbar}>
	<div class="header" slot="header">
		<div class="nav-profile-img">
			<img src={profile} width={64} height={64} />
		</div>
        <div class="metadata" hidden={$isDesktopMQM}><span>snuffyDev@snuffydev.ml</span></div>
	</div>
    <svelte:fragment slot="links">
        {#each ["Messages", "Notifications", "Profile", "Settings"] as item}
            <div class="sidebar-link">
                <a href="#">{item}</a>
            </div>
        {/each}
    </svelte:fragment>
</Sidebar>
<div class="main">
	<Navbar>
		<svelte:fragment slot="left">
			<div
				class="nav-profile-img"
				on:click={() => !isDesktop && (showing = !showing)}
			>
				<img src={profile} width={48} height={48} />
			</div>
		</svelte:fragment>

		<svelte:fragment slot="center">
			<input type="text" placeholder="Do some things" />
		</svelte:fragment>
	</Navbar>
	<slot />
</div>

<style lang="scss" global>
	@import "@fontsource/inter/variable.css";
	.nav-profile-img {
		position: relative;
		display: flex;
		border-radius: 100%;
		min-width: 2.8em;
		min-height: 2.8em;
		overflow: hidden;
	}
	.nav-profile-img > img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		position: absolute;
		inset: 0;
		border-radius: 50%;
	}
	.header {
		display: flex;
		flex: 1 0;
		padding: 1em;
		flex-wrap: wrap;
        gap: 1em;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
    .metadata {
        display: flex;
        align-items: center;
		font-size: 0.95em;

    }

    .sidebar-link {
        display: block;
        background-color: hsla(0, 0%, 100%, 0);
        transition: background-color 100ms;
        &:hover {
            background-color: hsla(0, 0%, 92%, 0.075);
        }
    }

    a {
        display: block;
        padding: 1em;
        text-decoration: none;
        font-size: 1.125em;
    }

	@media screen and (min-width: 720px) {
		.main {
			position: relative;
			width: 100%;
			min-height: 100vh;
			margin-left: var(--side-bar-width);
		}
	}
</style>
