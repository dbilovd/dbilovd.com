<template>
	<router-link :to="link">
		<div class="border shadow rounded w-full overflow-hidden h-64">
			<img :src="release.image" :alt="release.title" class="w-full h-full object-cover object-center">
		</div>
	</router-link>
</template>

<script type="text/javascript">
	const SingleReleaseComponent = {
		props: {
			release: {
				type: Object,
				required: true
			}
		},

		data: () => ({}),

		computed: {
			link () { 
				return `/releases/singles/${this.release.id}`;
			}
		}
	};

	export default SingleReleaseComponent;
</script>