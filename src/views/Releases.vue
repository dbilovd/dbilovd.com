<template>
  	<div class="home">
		<div class="bg-gray-100 py-12 max-w-2xl mx-auto text-center">
			<p class="font-semibold italic text-xl my-10 p-6 text-lg">
				"God is most glorified in us when we are most satisfied in him." <span>~ John Piper</span>
			</p>
		</div>

		<!--
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
		-->

		<div class="bg-white py-20">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Albums</h3>
				</div>

				<div class="flex flex-col justify-start">
					<div class="flex flex-row justify-start" v-for="album in albums">
						<div class="w-1/3">
							<div class="border shadow rounded w-full overflow-hidden h-64">
								<img :src="album.image" :alt="album.title" class="w-full h-full object-cover object-center">
							</div>
						</div>
						<div class="w-2/3 ml-6">
							<h4 class="flex flex-row items-center justify-start font-semibold text-gray-600">
								<span class="bg-teal-600 text-gray-100 text-xs px-3 inline-block rounded uppercase font-semibold tracking-wide mr-2">ongoing</span>
								<span>From {{ album.releasedDate }}</span>
							</h4>
							<h3 class="text-xl font-semibold mt-1">{{ album.title }}</h3>
							<p class="mt-2">{{ album.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100 py-20">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Singles</h3>
				</div>

				<div class="flex flex-row justify-start">
					<div class="w-1/3 mr-4" v-for="single in singles">
						<div class="border shadow rounded w-full overflow-hidden h-64">
							<img :src="single.image" :alt="single.title" class="w-full h-full object-cover object-center">
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script type="text/javascript">
	'use strict';

	const Releases = {
		data: () => ({
			albums: [
				{
					'title': 'Hymns for Tomorrow',
					'image': '/images/release-1.png',
					'releasedDate': 'Sept, 2019',
					'description': "I'm putting together about 6 to 8 songs that has greatly helped me this past few months"
				},
			],
			singles: [
				{
					'id': 'journey',
					'title': 'Journey',
					'image': '/images/release-1.png',
				},
				{
					'id': 'my-all',
					'title': 'My All',
					'image': '/images/release-2.png',
				}
			],
		})
	};

	export default Releases;
</script>