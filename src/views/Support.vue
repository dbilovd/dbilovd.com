<template>
  	<div class="home">
		<div class="bg-gray-100 py-12 max-w-2xl mx-auto text-center">
			<p class="font-semibold italic text-xl my-10 p-6 text-lg">
				"... you say I'm King of kings but son, I don't get it how you could trust me for eternity but can't trust me for now" <span>~ Propaganda</span>
			</p>
		</div>

		<div class="bg-white py-20 px-10">
			<div class="max-w-2xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start">
				<div class="w-full mt-10 pl-0 text-lg text-left">
					<p class="mb-2" v-for="line in descriptionLines" v-html="line"></p>
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
		}
	};

	export default Releases;
</script>