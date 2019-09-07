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

		<footer class="bg-gray-800 text-gray-200">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between py-20">
					<div class="w-1/3">
						<h1 class="mb-2 font-semibold">Let's Connect</h1>
						<div class="flex flex-row items-center justify-start mb-6 -ml-4">
							<a class="inline-block ml-4 text-center" 
								v-for="(social, socialIndex) in channels" :key="socialIndex" :href="social.url"
									:target="`__blank_${social.name.toLowerCase()}`">
								<i :class="`fab ${social.icon} block text-lg`"></i>
							</a>
						</div>
						<h3 class="mt-10">&copy; Copyright Dbilovd 2019</h3>
					</div>
					<div class="w-1/2">
						<FooterComponent></FooterComponent>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script type="text/javascript">
	'use strict';

	import { mapState } from 'vuex';
	import FooterComponent from '@/components/Footer';

	const App = {
		components: {
			FooterComponent,
		},

		data: () => ({}),

		computed: {
			...mapState({ 'channels': 'links'})
		}
	};

	export default App;
</script>