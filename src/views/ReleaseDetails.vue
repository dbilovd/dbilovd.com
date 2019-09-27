<template>
  	<div>
		<div class="bg-gray-100 pt-10 pb-20 px-10">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-col md:flex-row justify-between items-top">
					<h3 class="w-full md:w-1/2 uppercase font-semibold text-2xl">
						<span class="block">{{ release.title }}</span>
						<span class="block text-gray-600 text-sm">{{ release.releasedDate }}</span>
					</h3>
					<h4 class="w-full md:w-1/2 mt-6 md:mt-0 flex flex-row justify-start md:justify-end font-semibold text-gray-600">
						<a :href="release.lyrics" class="uppercase tracking-wide">
							<i class="fas fa-external-link-alt fa-lite text-xs mr-2"></i>
							<span>Lyrics</span>
						</a>
					</h4>
				</div>
				<div class="flex flex-col md:flex-row justify-between mt-8">
					<div class="w-full md:w-1/3">
						<img :src="release.image" alt="release.title" 
							class="w-full object-cover object-center rounded shadow-lg">
					</div>
					<div class="w-full md:w-2/3 md:pl-6 text-lg">
						<div class="w-full mb-20">
							<div v-html="release.soundcloudEmbed"></div>
						</div>
						<div class="w-full flex flex-col md:flex-row justify-between">
							<div class="mt-6 md:mt-0 flex flex-col justify-start">
								<a class="block"
									v-for="(link, linkIndex) in release.links" :key="linkIndex" :href="link.url" 
									v-if="link.url" :target="`__blank_${link.name}`">
									<i :class="`fab ${link.icon} inline-block text-xl mr-2 mb-4`"></i>
									<span>{{ link.actionText }}</span>
								</a>
								<div class="mt-2">
									<h5 class="font-semibold text-gray-600 capitalize tracking-wide inline-block mr-3">
										More:
									</h5>
									<a class="inline-block mr-1 underline"
										v-for="(link, linkIndex) in release.secondaryLinks" :key="linkIndex" :href="link.url"
										v-if="link.url" :target="`__blank_${link.name}`">
										<span>{{ link.name }}</span>
										<span v-show="linkIndex < (release.secondaryLinks.length - 1)">,</span>
									</a>
								</div>
							</div>
							<div class="mt-6 md:mt-0">
								<button class="w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center">
									<svg class="fill-current w-3 h-4 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 20 20">
										<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
									</svg>
									<span class="">Download for Free</span>
								</button>
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

	import { mapGetters } from 'vuex';

	const Releases = {
		data: () => ({}),

		computed: {
			...mapGetters({ 'releaseById': 'release' }),

			release () {
				return this.releaseById(this.$route.params.release)

				return {
				'title': 'Journey',
				'image': '/images/release-1.png',
				'releasedDate': '27th September, 2019',
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/artist/5xvyAXQfTzG95lXHos2ZDn',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Apple Music",
						'url': '#',
						'actionText': 'Listen on Apple Music',
						'icon': 'fa-apple'
					},
					{
						'name': "Youtube",
						'url': '#',
						'actionText': 'Watch on Youtube',
						'icon': 'fa-youtube'
					},
					{
						'name': "Soundcloud",
						'url': '#',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
					{
						'name': "iTunes",
						'url': '#',
						'actionText': 'Buy from iTunes',
						'icon': 'fa-itunes'
					},
					{
						'name': "Google Play",
						'url': '#',
						'actionText': 'Buy from Google Play',
						'icon': 'fa-google-play'
					},
					{
						'name': "Amazon",
						'url': '#',
						'actionText': 'Buy from Amazon.com',
						'icon': 'fa-amazon'
					}
				],
				'secondaryLinks': [
					{
						'name': "Deezer",
						'url': '',
					},
					{
						'name': "Tidal",
						'url': '',
					},
					{
						'name': "Pandora",
						'url': '',
					}
				]
				}
			}
		}
	};

	export default Releases;
</script>