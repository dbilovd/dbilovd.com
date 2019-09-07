<template>
  	<div class="home">
		<div class="w-full h-screen">
			<div class="w-full h-full">
				<img src="/images/header-slider-1.jpg" alt="" class="w-full h-full object-cover object-center">		
			</div>
		</div>

		<div class="bg-gray-100 py-20" id="about">
			<div class="max-w-2xl mx-auto text-center">
				<div class="p-6 text-lg">
					<p class="font-semibold italic text-xl mb-10">
						"God is most glorified in us when we are most satisfied in him." <span>~ John Piper</span>
					</p>
					<p class="mb-2">Hello, my name is David. I make music under the name Dbilovd (The Beloved)</p>
					<p class="mb-2">I love Jesus and I want to do everything for His glory. One way I have seen Him glorious is in His the steadfastness of His love to me. The songs I write are my testimonies of this love and faithfulness I have received.</p>
					<p class="mb-2">I pray that God reveals Himself - and Jesus, His son - to you as you listen to these testimonies I share.</p>
				</div>
			</div>
		</div>

		<div class="bg-white py-20" id="listen">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Latest Releases</h3>
					<router-link to="/releases" class="block uppercase tracking-wide border-b-4 border-gray-600">
						See More ...
					</router-link>
				</div>

				<div class="flex flex-row justify-start">
					<div class="w-1/3 mr-4" v-for="release in releases">
						<div class="border rounded w-full overflow-hidden h-64">
							<img :src="release.image" :alt="release.title" class="w-full h-full object-cover object-center">
						</div>
					</div>
				</div>

				<div class="mt-10 mb-20 pt-6 flex flex-row justify-between">
					<div class="flex flex-row items-center justify-center -ml-6">
						<a class="inline-block ml-6 text-center" :target="`__blank_${channel.name}`" 
							v-for="(channel, channelIndex) in channels" :key="channelIndex" :href="channel.url">
							<i :class="`fab ${channel.icon} block text-xl`"></i>
							<span class="block mt-2">{{ channel.name }}</span>
						</a>
						<a href="#" class="inline-block ml-6 text-xl">...</a>
					</div>
					<div class="">
						<router-link to="/releases" class="block bg-white hover:bg-gray-100 text-gray-800 font-semibold font-bold py-3 px-8 border border-gray-400 rounded shadow rounded items-center">
							<svg class="fill-current w-4 h-4 mr-4 inline-block" xmlns="http://www.w3.org/2000/svg" 
								viewBox="0 0 20 20">
								<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
							</svg>
							<span>Free Downloads</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100 py-20">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Blog Posts & Podcasts</h3>
					<a href="#" class="block uppercase tracking-wide border-b-4 border-gray-600">See More ...</a>
				</div>
				<div class="flex flex-row justify-start mb-20">
					<div class="w-1/3 mr-4" v-for="(post, postIndex) in posts" :key="postIndex">
						<div class="bg-white shadow-lg border rounded w-full overflow-hidden">
							<img :src="post.image" :alt="post.title" class="w-full h-48 object-cover object-center">
							<div class="p-4">
								<h3 class="font-semibold capitalize text-lg">
									<a :href="post.url">{{ post.title }}</a>
								</h3>
								<p class="text-gray-600 h-20 overflow-hidden">{{ post.intro }}</p>
								<a :href="post.url" class="inline-block mt-2 capitalize tracking-wide text-xs font-semibold border-b border-gray-800">Continue...</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script type="text/javascript">
	'use strict';

	const HomePage = {
		data: () => ({
			releases: [
				{
					'title': 'Journey',
					'image': '/images/release-1.png',
				},
				{
					'title': 'My All',
					'image': '/images/release-2.png',
				}
			],
			channels: [
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
					'name': "Youtube",
					'url': '#',
					'icon': 'fa-youtube'
				}
			],
			posts: [
				{
					'title': 'New Song: Journey',
					'intro': 'One of two songs making up the first instalment of the Hymns for Tomorrow project.',
					'image': '/images/release-1.png',
					'url': '#',
					'type': 'podcast'
				},
				{
					'title': 'New Song: My All',
					'intro': 'One of two songs making up the first instalment of the Hymns for Tomorrow project.',
					'image': '/images/release-2.png',
					'url': '#',
					'type': 'podcast'
				}
			],
		})
	};

	export default HomePage;
</script>
