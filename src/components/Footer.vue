<template>
	<div class="flex flex-col">
		<h3 class="font-semibold text-gray-100">Subscribe for updates</h3>
		<p class="text-sm text-gray-400">Be the first to know when I release new music.</p>
		<form class="w-full max-w-lg mt-4" @submit.prevent="subscribe">
			<div class="w-full flex items-center border-b border-b-2 border-orange-100 py-2">
				<input class="appearance-none bg-transparent border-none w-1/5 text-gray-300 placeholder-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="John" aria-label="First name">
				<input class="appearance-none bg-transparent border-none w-1/5 text-gray-300 placeholder-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Doe" aria-label="Last name">
				<input class="appearance-none bg-transparent border-none w-2/5 text-gray-300 placeholder-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="you@gmail.com" aria-label="Email">
				<button class="flex-shrink-0 bg-orange-100 hover:bg-orange-300 border-orange-100 hover:border-orange-300 text-sm border-4 text-gray-800 py-1 px-2 rounded w-1/5" 
					type="button" @click.prevent="subscribe">
					Subscribe
				</button>
				</div>
		</form>
	</div>
</template>

<script type="text/javascript">
	'use strict';

	const FooterComponent = {
		props: {},

		data: () => ({}),

		methods: {
			subscribe () {
				alert('subscribing...')
			}
		}
	};

	export default FooterComponent;
</script>