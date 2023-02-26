<script lang="ts">
	import HomeHeroCta from '../lib/components/HomeHeroCTA.svelte';
	import CTASpecial from '../lib/components/CTASpecial.svelte'; 

</script>

<nav class="flex justify-end p-6 lg:px-10 lg:py-8 border-b-2 border-gray-400">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-8 h-8 text-green lg:hidden"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
</nav>

<section class="lg:flex lg:flex-col items-center justify-around lg:h-screen">
	<div class="mt-8 mx-16 lg:m-64 font-sans lg:flex justify-between items-center space-y-4">
		<div class="mr-16 lg:mr-24">
			<h3 class="text-2xl lg:text-4xl font-bebas">👋, I'm</h3>
			<h1 class="text-5xl lg:text-9xl font-syne">
				<span class="text-green">B</span>irnadin
				<span class="text-green">E</span>rick
			</h1>
			<h2 class="text-3xl lg:text-5xl font-syne mt-4 lg:mt-6 mb-2">
				<span class="text-green">B</span>ackend
				<span class="text-green">E</span>ngineer @Day
			</h2>
			<h2 class="text-3xl lg:text-5xl font-syne">
				<span class="text-green">B</span>logging
				<span class="text-green">E</span>nthusiast @Nyt
			</h2>
		</div>

		<div class="my-8 space-y-2 lg:space-y-4">
			<CTASpecial txt="profit off of me" url="/profit-for-you" />
			<HomeHeroCta txt="know me more" url="/me" />
			<HomeHeroCta txt="fyi, my blogs" url="/fyi" />
			<HomeHeroCta txt="what have I done" url="/projects" />
		</div>
	</div>

</section>

<section class="my-16 p-16">

<p class="text-5xl font-syne">
For <span class="text-green">You</span> <br> <span class="text-purple">I can</span>
</p>

</section>
