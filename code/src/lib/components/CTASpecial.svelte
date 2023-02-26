<script lang="ts">
	export let txt: string;
	export let url: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="flex pointer group bg-light-gray px-6 py-4 space-x-4 lg:space-x-8 rounded-sm justify-between items-center lg:hover:text-purple transition duration-300 ease-out shadow-purple/40 hover:shadow-purple/70 shadow-md my-4 hover:shadow-lg"
	on:click={() => {
		document.location = url;
	}}
>
	<p class="text-sm lg:text-lg font-jetbrains">{txt}</p>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		class="w-5 h-5 text-purple lg:group-hover:animate-pulse"
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
			clip-rule="evenodd"
		/>
	</svg>
</div>
