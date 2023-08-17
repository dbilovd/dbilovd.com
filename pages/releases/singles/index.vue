<template>
	<Head>
		<Title>Singles by Dbilovd</Title>
	</Head>
  <div class="home bg-gray-100">
		<div class="bg-gray-100 py-12 max-w-2xl mx-auto text-center">
			<p class="font-semibold italic text-xl my-10 p-6 text-lg">
				"God is most glorified in us when we are most satisfied in him." <span>~ John Piper</span>
			</p>
		</div>

		<div class="bg-gray-100 py-20 px-10">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Singles</h3>
				</div>

				<h3 v-if="singles.length == 0" class="capitalize text-3xl mb-20">
					<span class="block">There is new music coming soon...</span>
				</h3>
				<div
					v-else
					class="flex flex-col md:flex-row md:flex-wrap justify-start -mx-4"
				>
					<div 
						v-for="(single, singleIndex) in singles"
						:key="singleIndex"
						class="w-full md:w-1/3 mt-4 md:mt-0 md:mr-0 md:p-4"
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