<template>
  	<div class="home bg-gray-100">
		<div class="bg-gray-100 py-12 max-w-2xl mx-auto text-center">
			<p class="font-semibold italic text-xl my-10 p-6 text-lg">
				"God is most glorified in us when we are most satisfied in him." <span>~ John Piper</span>
			</p>
		</div>

		<div class="bg-white py-20 px-10">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-row justify-between items-center mb-10">
					<h3 class="uppercase font-semibold text-xl">Updates</h3>
				</div>

				<h3 v-if="posts.length == 0" class="capitalize text-3xl mb-20">No Update Right Now</h3>
				<div class="flex flex-col md:flex-row flex-wrap justify-start mb-20 md:-ml-6" v-else>
					<div class="w-full md:w-1/3 mt-6 md:pl-6" v-for="(post, postIndex) in posts" :key="postIndex">
						<div class="bg-white shadow-lg border rounded w-full overflow-hidden">
							<img :src="post.image" :alt="post.title" class="w-full h-48 object-cover object-top">
							<div class="p-4">
								<h3 class="font-semibold capitalize text-lg">
									<a :href="`/updates/${post.slug}`">{{ post.title }}</a>
								</h3>
								<p class="text-gray-600 h-20 overflow-hidden">{{ post.intro }}</p>
								<a :href="`/updates/${post.slug}`" class="inline-block mt-2 capitalize tracking-wide text-xs font-semibold border-b border-gray-800">Continue...</a>
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

	import { mapActions, mapState } from 'vuex';

	const Releases = {
		data: () => ({}),

		created () {
			this.fetchPosts();
		},

		computed: {
			...mapState([ 'posts' ])
		},

		methods: {
			...mapActions([ 'fetchPosts' ])
		}
	};

	export default Releases;
</script>