<template>
	<div>
		<div class="bg-gray-100 pt-10 pb-20 px-10">
			<div class="max-w-2xl mx-auto p-6">
				<h1 class="font-semibold text-2xl mt-10 capitalize">{{ update.title }}</h1>
				<p class="font-semibold text-sm mt-2 mb-10">{{ formatDate(update.date) }}</p>

				<div class="update-content text-lg" v-html="update.content"></div>
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
				return this.postBySlug(this.$route.params.slug)
			}
		},

		head() {
			return {
				title: `Update: ${this.update.title} | Dbilovd`
			}
		},

		methods: {
			...mapActions([ 'fetchPosts' ]),

			formatDate (date) {
				return (new Date(date)).toDateString();
			}
		},

		watch: {
			update (val) {
				if (val) {
					document.title = `${val.title} : Dbilovd`;
					let meta = document.createElement('meta');
					meta.name = "description";
					meta.content = val.intro;
					document.getElementsByTagName('head')[0].appendChild(meta);

					let ogTitle = document.createElement('meta');
					ogTitle.setAttribute('property', 'og:title');
					ogTitle.content = `${val.title} : Dbilovd`;
					document.getElementsByTagName('head')[0].appendChild(ogTitle);

					let ogDescription = document.createElement('meta');
					ogDescription.setAttribute('property', 'og:description');
					ogDescription.content = val.intro;
					document.getElementsByTagName('head')[0].appendChild(ogDescription);

					if (val.image) {
						let ogImage = document.createElement('meta');
						ogImage.setAttribute('property', 'og:image');
						ogImage.content = val.image;
						document.getElementsByTagName('head')[0].appendChild(ogImage);
					}
				}
			}
		}
	};

	export default Releases;
</script>