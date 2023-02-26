<script lang="ts">
	import CtaSpecial from './CTASpecial.svelte';

	export let url: string;
</script>

<div
	class="border-2 border-green p-8 flex-col flex justify-start items-center text-center space-y-4"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-16 h-16 text-green"
	>
		<slot name="icon" />
	</svg>
	<h2 class="font-syne text-3xl">
		<slot name="title" />
	</h2>
	<p class="text-gray-400 font-jetbrains py-4">
		<slot name="desc" />
	</p>

	<CtaSpecial txt="Samples" {url} />
</div>
