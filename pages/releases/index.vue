<template>
  <div class="home bg-gray-100">
		<Head>
			<Title>Music - Dbilovd</Title>
		</Head>
		<div class="bg-gray-100 py-12 max-w-2xl mx-auto text-center">
			<p class="font-semibold italic text-xl my-10 p-6 text-lg">
				"God is most glorified in us when we are most satisfied in him." <span>~ John Piper</span>
			</p>
		</div>

		<div class="bg-white py-20 px-10">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Albums & Projects</h3>
				</div>

				<h3 v-if="albums.length == 0" class="capitalize text-3xl mb-20">
					<span class="block">There is new music coming soon...</span>
				</h3>
				<div class="flex flex-col justify-start">
					<div class="flex flex-col md:flex-row justify-start mb-6"
						v-for="(album, albumIndex) in albums" :key="albumIndex">
						<div class="w-full md:w-1/3">
							<div class="border shadow rounded w-full overflow-hidden h-64">
								<img :src="album.image" :alt="album.title" class="w-full h-full object-cover object-center">
							</div>
						</div>
						<div class="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
							<div>
								<h4 class="flex flex-row items-center justify-start font-semibold text-gray-600">
									<span 
										v-show="!album.completed"
										class="bg-teal-600 text-gray-100 text-xs px-3 inline-block rounded uppercase font-semibold tracking-wide mr-2"
									>
										ongoing
									</span>
									<span>From {{ album.releasedDate }}</span>
								</h4>
								<h3 class="text-xl font-semibold mt-1">{{ album.title }}</h3>
								<p class="mt-2">{{ album.description }}</p>
								<div class="my-8">
									Songs: 
									<div class="flex flex-col">
										<nuxt-link v-for="(single, singleId) in getAlbumSingles(album.id)" 
											:key="singleId"
											:to="`/releases/singles/${single.id}`"
											class="border-b border-gray-400 mr-4 font-semibold w-fit">
											{{ single.title }}
										</nuxt-link>
									</div>
								</div>
							</div>
							<div class="flex flex-row items-center justify-start mt-6 md:mt-0 -ml-6">
								<a class="inline-block ml-6 text-center" 
									v-for="(channel, channelIndex) in album.links" :key="channelIndex" :href="channel.url"
									:target="`__blank_${channel.name}`">
									<!-- <i :class="`fab ${channel.icon} block text-xl`"></i> -->

									<font-awesome-icon
										:icon="['fab', channel.icon]"
										class="block text-xl"
									/>
									<span class="block mt-1 text-xs">{{ channel.name }}</span>
								</a>
							</div>
							<hr 
								v-if="albumIndex < (albums.length - 1)"
								class="my-6"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100 py-20 px-10">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Singles</h3>
				</div>

				<h3 v-if="singles.length == 0" class="capitalize text-3xl mb-20">
					<span class="block">There is new music coming soon...</span>
				</h3>
				<div class="flex flex-col md:flex-row md:flex-wrap justify-start -mx-4">
					<div 
						class="w-full md:w-1/3 mt-4 md:mt-0 md:mr-0 md:p-4"
						v-for="single in singles"
						:key="single.id"
					>
						<SingleRelease :release="single"></SingleRelease>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script type="text/javascript">
	'use strict';

	import { mapGetters } from 'vuex';
  import SingleRelease from '~/components/SingleRelease';

	const Releases = {
		components: {
			SingleRelease,
		},

		data: () => ({}),

		computed: {
			...mapGetters({ 
				'albums': 'albumReleases',
				'singles': 'singleReleases',
				'albumSingles': 'albumSingles',
			})
		},

		head() {
			return {
				title: 'Music | Dbilovd'
			}
		},

		methods: {
			getAlbumSingles (id) {
				return this.albumSingles(id);
			},
		}
	};

	export default Releases;
</script>