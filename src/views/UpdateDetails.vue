<template>
  	<div>
		<div class="bg-gray-100 pt-10 pb-20 px-10">
			<div class="max-w-2xl mx-auto">
				<h1 class="font-semibold text-2xl my-10 p-6 capitalize">{{ update.title }}</h1>

				<div class="update-content p-6 text-lg" v-html="update.content"></div>
			</div>
		</div>
  	</div>
</template>

<script type="text/javascript">
	'use strict';

	import { mapActions, mapGetters } from 'vuex';

	const Releases = {
		data: () => ({}),

		created () {
			this.fetchPosts();
		},

		computed: {
			...mapGetters([ 'postBySlug' ]),

			update () {
				return this.postBySlug(this.$route.params.updateSlug)
			}
		},

		methods: {
			...mapActions([ 'fetchPosts' ]),
		},

		watch: {
			update (val) {
				document.title = `${val.title} : Dbilovd`;
				let meta = document.createElement('meta');
				meta.name = "description";
				meta.content = val.intro;
				document.getElementsByTagName('head')[0].appendChild(meta);
			}
		}
	};

	export default Releases;
</script>