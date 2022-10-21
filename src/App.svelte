<script lang="ts">
	import "./app.scss";

	import svelteLogo from "./assets/svelte.svg";
	import Button from "./lib/components/Buttons/Button/Button.svelte";
	import Container from "./lib/components/Container";
	import Navbar from "./lib/components/Layout/Navbar/Navbar.svelte";
	import Panel from "./lib/components/Panel";
	import Counter from "./lib/Counter.svelte";

	const overlayVariants = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];
</script>

<div class="scrollable">
	<main>
		<Panel>
			<h1>Vite + Svelte</h1>
		</Panel>

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
			<Button fill="solid" pill color="tertiary">Test Pill Button</Button>
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
			<h2>Depth</h2>
			<Container
				style="display: grid; gap: 0.5rem; grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));"
			>
				{#each overlayVariants as num}
					<Panel
						class="overlay-{num}"
						style="padding: 1em; border-radius: 8px; display: inline-flex;"
					>
						Overlay-{num}
					</Panel>
				{/each}
			</Container>
		</Container>
		<br />
		<Container>
			<h2>Header level 2</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				temporibus explicabo accusantium, ab molestias dignissimos at sunt!
				Corrupti ut odit iusto dicta consequuntur ipsa fuga molestiae inventore
				modi, voluptatem omnis.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
				distinctio beatae iure pariatur dolor tempora vitae voluptates dolore
				qui quia temporibus rerum deserunt dicta eum cum, reprehenderit
				consequuntur? Quas, ratione?<br />
			</p>
			<p>
				Obcaecati explicabo, aliquam quo aut ut sed autem blanditiis aperiam
				quasi natus voluptatibus saepe quos quidem soluta? Eos magni tenetur sit
				ducimus repellat! Nobis eum quisquam temporibus dicta, in quam?<br />
			</p>
			<p>
				Ullam quis, beatae mollitia sint voluptatum autem, laboriosam, velit
				expedita sed rerum officiis voluptates? Esse, vel cupiditate
				exercitationem adipisci ullam rerum doloremque, facilis eius ratione
				enim voluptatum, dignissimos nemo eveniet!<br />
			</p>
			<p>
				Laboriosam, eius voluptate ex molestias in labore delectus perferendis
				quia praesentium aliquam repudiandae repellendus voluptatibus
				reprehenderit quidem, laudantium debitis modi, quas recusandae nesciunt
				inventore suscipit nobis dolore reiciendis! At, pariatur.<br />
			</p>
			<p>
				Quam accusantium et quidem impedit eum voluptate suscipit quibusdam
				quisquam sapiente animi, laudantium rem enim! Fugiat, magnam, harum enim
				itaque rerum ipsam temporibus sapiente, aperiam nemo at animi a quaerat.<br
				/>
			</p>
		</Container>
		<hr />

		<Container>
			<h2>Header Level 2</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				temporibus explicabo accusantium, ab molestias dignissimos at sunt!
				Corrupti ut odit iusto dicta consequuntur ipsa fuga molestiae inventore
				modi, voluptatem omnis.
			</p>
			<h3>Header level 3</h3>
			<p>This is a sub-section of the parent section</p>
		</Container>
		<hr />
		<Container>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				temporibus explicabo accusantium, ab molestias dignissimos at sunt!
				Corrupti ut odit iusto dicta consequuntur ipsa fuga molestiae inventore
				modi, voluptatem omnis.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
				distinctio beatae iure pariatur dolor tempora vitae voluptates dolore
				qui quia temporibus rerum deserunt dicta eum cum, reprehenderit
				consequuntur? Quas, ratione?<br />
			</p>
			<p>
				Obcaecati explicabo, aliquam quo aut ut sed autem blanditiis aperiam
				quasi natus voluptatibus saepe quos quidem soluta? Eos magni tenetur sit
				ducimus repellat! Nobis eum quisquam temporibus dicta, in quam?<br />
			</p>
			<p>
				Ullam quis, beatae mollitia sint voluptatum autem, laboriosam, velit
				expedita sed rerum officiis voluptates? Esse, vel cupiditate
				exercitationem adipisci ullam rerum doloremque, facilis eius ratione
				enim voluptatum, dignissimos nemo eveniet!<br />
			</p>
			<p>
				Laboriosam, eius voluptate ex molestias in labore delectus perferendis
				quia praesentium aliquam repudiandae repellendus voluptatibus
				reprehenderit quidem, laudantium debitis modi, quas recusandae nesciunt
				inventore suscipit nobis dolore reiciendis! At, pariatur.<br />
			</p>
			<p>
				Quam accusantium et quidem impedit eum voluptate suscipit quibusdam
				quisquam sapiente animi, laudantium rem enim! Fugiat, magnam, harum enim
				itaque rerum ipsam temporibus sapiente, aperiam nemo at animi a quaerat.<br
				/>
			</p>
		</Container>
		<Container>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				temporibus explicabo accusantium, ab molestias dignissimos at sunt!
				Corrupti ut odit iusto dicta consequuntur ipsa fuga molestiae inventore
				modi, voluptatem omnis.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
				distinctio beatae iure pariatur dolor tempora vitae voluptates dolore
				qui quia temporibus rerum deserunt dicta eum cum, reprehenderit
				consequuntur? Quas, ratione?<br />
			</p>
			<p>
				Obcaecati explicabo, aliquam quo aut ut sed autem blanditiis aperiam
				quasi natus voluptatibus saepe quos quidem soluta? Eos magni tenetur sit
				ducimus repellat! Nobis eum quisquam temporibus dicta, in quam?<br />
			</p>
			<p>
				Ullam quis, beatae mollitia sint voluptatum autem, laboriosam, velit
				expedita sed rerum officiis voluptates? Esse, vel cupiditate
				exercitationem adipisci ullam rerum doloremque, facilis eius ratione
				enim voluptatum, dignissimos nemo eveniet!<br />
			</p>
			<p>
				Laboriosam, eius voluptate ex molestias in labore delectus perferendis
				quia praesentium aliquam repudiandae repellendus voluptatibus
				reprehenderit quidem, laudantium debitis modi, quas recusandae nesciunt
				inventore suscipit nobis dolore reiciendis! At, pariatur.<br />
			</p>
			<p>
				Quam accusantium et quidem impedit eum voluptate suscipit quibusdam
				quisquam sapiente animi, laudantium rem enim! Fugiat, magnam, harum enim
				itaque rerum ipsam temporibus sapiente, aperiam nemo at animi a quaerat.<br
				/>
			</p>
		</Container>
		<hr />

		<Container>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				temporibus explicabo accusantium, ab molestias dignissimos at sunt!
				Corrupti ut odit iusto dicta consequuntur ipsa fuga molestiae inventore
				modi, voluptatem omnis.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
				distinctio beatae iure pariatur dolor tempora vitae voluptates dolore
				qui quia temporibus rerum deserunt dicta eum cum, reprehenderit
				consequuntur? Quas, ratione?<br />
			</p>
			<p>
				Obcaecati explicabo, aliquam quo aut ut sed autem blanditiis aperiam
				quasi natus voluptatibus saepe quos quidem soluta? Eos magni tenetur sit
				ducimus repellat! Nobis eum quisquam temporibus dicta, in quam?<br />
			</p>
			<p>
				Ullam quis, beatae mollitia sint voluptatum autem, laboriosam, velit
				expedita sed rerum officiis voluptates? Esse, vel cupiditate
				exercitationem adipisci ullam rerum doloremque, facilis eius ratione
				enim voluptatum, dignissimos nemo eveniet!<br />
			</p>
			<p>
				Laboriosam, eius voluptate ex molestias in labore delectus perferendis
				quia praesentium aliquam repudiandae repellendus voluptatibus
				reprehenderit quidem, laudantium debitis modi, quas recusandae nesciunt
				inventore suscipit nobis dolore reiciendis! At, pariatur.<br />
			</p>
			<p>
				Quam accusantium et quidem impedit eum voluptate suscipit quibusdam
				quisquam sapiente animi, laudantium rem enim! Fugiat, magnam, harum enim
				itaque rerum ipsam temporibus sapiente, aperiam nemo at animi a quaerat.<br
				/>
			</p>
		</Container>
		<hr />

		<Container>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
				temporibus explicabo accusantium, ab molestias dignissimos at sunt!
				Corrupti ut odit iusto dicta consequuntur ipsa fuga molestiae inventore
				modi, voluptatem omnis.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
				distinctio beatae iure pariatur dolor tempora vitae voluptates dolore
				qui quia temporibus rerum deserunt dicta eum cum, reprehenderit
				consequuntur? Quas, ratione?<br />
			</p>
			<p>
				Obcaecati explicabo, aliquam quo aut ut sed autem blanditiis aperiam
				quasi natus voluptatibus saepe quos quidem soluta? Eos magni tenetur sit
				ducimus repellat! Nobis eum quisquam temporibus dicta, in quam?<br />
			</p>
			<p>
				Ullam quis, beatae mollitia sint voluptatum autem, laboriosam, velit
				expedita sed rerum officiis voluptates? Esse, vel cupiditate
				exercitationem adipisci ullam rerum doloremque, facilis eius ratione
				enim voluptatum, dignissimos nemo eveniet!<br />
			</p>
			<p>
				Laboriosam, eius voluptate ex molestias in labore delectus perferendis
				quia praesentium aliquam repudiandae repellendus voluptatibus
				reprehenderit quidem, laudantium debitis modi, quas recusandae nesciunt
				inventore suscipit nobis dolore reiciendis! At, pariatur.<br />
			</p>
			<p>
				Quam accusantium et quidem impedit eum voluptate suscipit quibusdam
				quisquam sapiente animi, laudantium rem enim! Fugiat, magnam, harum enim
				itaque rerum ipsam temporibus sapiente, aperiam nemo at animi a quaerat.<br
				/>
			</p>
		</Container>
	</main>
</div>

<style lang="scss" global>
	main {
		position: relative;
		width: 100%;
		// height: 100%;
		/* position: absolute; */
		min-height: 100vh;
		padding: 3vw 1em 0 1em;
		contain: paint;
	}
	.scrollable {
		position: absolute;
		margin-block-start: var(--top-bar-height);
		overflow-y: scroll;
		contain: strict;
		overscroll-behavior: contain;
		/* height: 100%; */
		/* max-height: 100%; */
		inset: 0;
	}
</style>
