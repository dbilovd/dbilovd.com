<template>
  <div class="bg-gray-100">
		<Head>
			<Title>About David - Dbilovd</Title>
		</Head>
		<div class="bg-gray-100 py-20 px-10">
			<div class="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start">
				<div class="w-full md:w-1/3">
					<img src="/images/press/5-min.jpg" alt="D'bilovd" class="w-full h-auto object-cover object-center rounded shadow-lg">
				</div>
				<div class="w-full md:w-2/3 mt-10 md:mt-0 pl-0 md:pl-8 text-lg text-center md:text-left">
					<p class="font-semibold italic text-xl mb-10">
						"God is most glorified in us when we are most satisfied in him." <span>~ John Piper</span>
					</p>
					<p class="mb-2" v-for="(line, lineIndex) in descriptionLines" :key="lineIndex">{{ line }}</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script type="text/javascript">
	'use strict';
	
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters([ 'descriptionLines' ])
		},

		head() {
			return {
				title: "About | Dbilovd"
			}
		}
	}
</script>