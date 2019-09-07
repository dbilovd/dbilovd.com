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
					<div class="w-1/2 flex flex-col">
						<h3 class="font-semibold text-gray-100">Subscribe for updates</h3>
						<p class="text-sm text-gray-400">Be the first to know when I release new music.</p>
						<form class="w-full max-w-lg mt-4">
							<div class="w-full flex items-center border-b border-b-2 border-orange-100 py-2">
								<input class="appearance-none bg-transparent border-none w-1/5 text-gray-300 placeholder-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="John" aria-label="First name">
								<input class="appearance-none bg-transparent border-none w-1/5 text-gray-300 placeholder-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Doe" aria-label="Last name">
								<input class="appearance-none bg-transparent border-none w-2/5 text-gray-300 placeholder-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="you@gmail.com" aria-label="Email">
								<button class="flex-shrink-0 bg-orange-100 hover:bg-orange-300 border-orange-100 hover:border-orange-300 text-sm border-4 text-gray-800 py-1 px-2 rounded w-1/5" type="button">
									Subscribe
								</button>
  							</div>
  						</form>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script type="text/javascript">
	const App = {
		data: () => ({
			channels: [
				{
					'name': "Twitter",
					'url': 'https://twitter.com/DbilovdMusic',
					'icon': 'fa-twitter'
				},
				{
					'name': "Instagram",
					'url': 'https://instagram.com/DbilovdMusic',
					'icon': 'fa-instagram'
				},
				{
					'name': "Facebook",
					'url': 'https://web.facebook.com/Dbilovd-648603108976540/',
					'icon': 'fa-facebook'
				},
				{
					'name': "Youtube",
					'url': '#',
					'icon': 'fa-youtube'
				},
				{
					'name': "Spotify",
					'url': 'https://open.spotify.com/artist/5xvyAXQfTzG95lXHos2ZDn',
					'icon': 'fa-spotify'
				},
				{
					'name': "Apple Music",
					'url': '#',
					'icon': 'fa-apple'
				},
				{
					'name': "Amazon",
					'url': '#',
					'icon': 'fa-amazon'
				}
			],
		})
	};

	export default App;
</script>