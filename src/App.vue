<template>
	<div id="app">
		<div class="">
			<nav class="flex flex-row justify-between items-center bg-white px-8 py-4">
				<div class="">
					<router-link to="/releases" class="font-semibold">Music</router-link>
					<a href="https://genius.com/artists/Dbilovd" target="__blank" class="font-semibold ml-6">Lyrics</a>
				</div>
				<h1 class="font-bold text-2xl">
					<router-link to="/">Dbilovd</router-link>
				</h1>
				<div class="">
					<router-link to="/about" class="font-semibold ml-6">About</router-link>
					<router-link to="/support" class="font-semibold ml-6">Support</router-link>
				</div>
			</nav>
		</div>

		<router-view/>

		<FooterComponent></FooterComponent>
	</div>
</template>

<script type="text/javascript">
	'use strict';
	import FooterComponent from '@/components/Footer';

	const App = {
		components: {
			FooterComponent,
		},

		data: () => ({}),
	};

	export default App;
</script>