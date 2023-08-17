<template>
	<div class="home bg-gray-100">
		<Head>
			<Title>#FreelyGiven - Dbilovd</Title>
		</Head>

		<div class="bg-gray-100 py-12 max-w-2xl mx-auto text-center">
			<p class="font-semibold italic text-xl mt-10 mb-4 p-6 text-lg">
				"... Give as freely as you have received!" <span>~ Matthew 10:8</span>
			</p>
			<p class="font-semibold italic text-xl mt-0 mb-10 p-6 text-lg">
				"... you say I'm King of kings but son, I don't get it how you could trust me for eternity but can't trust me for now" <span>~ Propaganda</span>
			</p>
		</div>

		<div class="bg-white py-20 px-10">
			<div class="max-w-2xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start">
				<div class="w-full mt-10 pl-0 text-lg text-left">
					<p class="mb-2" v-for="line in descriptionLines" v-html="line"></p>
					<div class="pb-40"></div>
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
			...mapGetters({
				'descriptionLines': 'supportDescriptionLines'
			})
		},

		head() {
			return {
				title: "#FreelyGiven | Dbilovd"
			}
		}
	};

	export default Releases;
</script>