<template>
	<footer class="bg-gray-800 text-gray-200 ">
		<div class="max-w-4xl mx-auto">
			<div class="flex flex-col md:flex-row justify-between py-20 px-10">
				<div class="w-full md:w-2/5 order-last md:order-first">
					<h1 class="mb-2 font-semibold">Let's Connect</h1>
					<div class="flex flex-row flex-wrap items-center justify-start mb-6 -ml-8 md:-ml-4">
						<a class="inline-block ml-8 md:ml-4 mt-4 text-center" 
							v-for="(social, socialIndex) in channels" :key="socialIndex" :href="social.url"
								:target="`__blank_${social.name.toLowerCase()}`">
							<i :class="`fab ${social.icon} block text-lg`"></i>
						</a>
					</div>
					<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:5xvyAXQfTzG95lXHos2ZDn&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
					<h3 class="mt-10 text-center md:text-left">&copy; Copyright Dbilovd 2019</h3>
				</div>
				<div class="w-full md:w-3/5 order-first md:order-last mb-10 md:mb-0 md:pl-10">
					<div class="flex flex-col">
						<h3 class="font-semibold text-gray-100">Subscribe for updates</h3>
						<p class="text-sm text-gray-400">Be the first to know when I release new music.</p>
						<form class="w-full max-w-lg mt-4" @submit.prevent="subscribe">
							<div class="w-full flex flex-row flex-wrap md:flex-no-wrap items-center md:border-b md:border-b-2 md:border-orange-100 py-2">
								<input class="appearance-none bg-transparent border-none w-full md:w-1/5 text-gray-300 placeholder-gray-600 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="John" aria-label="First name">
								<hr class="block md:hidden w-full border-b border-b-2 border-orange-100 mt-1">
								<input class="appearance-none bg-transparent border-none w-full md:w-1/5 text-gray-300 placeholder-gray-600 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Doe" aria-label="Last name">
								<hr class="block md:hidden w-full border-b border-b-2 border-orange-100 mt-1">
								<input class="appearance-none bg-transparent border-none w-full md:w-2/5 text-gray-300 placeholder-gray-600 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="you@gmail.com" aria-label="Email">
								<hr class="block md:hidden w-full border-b border-b-2 border-orange-100 mt-1">
								<button class="flex-shrink-0 bg-orange-100 hover:bg-orange-300 border-orange-100 hover:border-orange-300 text-sm border-4 text-gray-800 mt-3 md:mt-0 py-1 px-2 rounded w-full md:w-1/5" 
									type="button" @click.prevent="subscribe">
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script type="text/javascript">
	'use strict';

	import { mapState } from 'vuex';

	const FooterComponent = {
		props: {},

		data: () => ({}),

		computed: {
			...mapState({ 'channels': 'links'})
		},

		methods: {
			subscribe () {
				alert('subscribing...')
			}
		}
	};

	export default FooterComponent;
</script>