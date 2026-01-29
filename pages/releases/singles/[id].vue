<template>
	<div>

		<Head>
			<Title>{{ release.title }} - Dbilovd</Title>
		</Head>
		<DownloadDialog :download-link="release.downloadLink" :showing-dialog="showingDownloadDialog"
			v-on:close-dialog="closeDownloadDialog"></DownloadDialog>
		<div class="bg-gray-100 pt-10 pb-20 px-10">
			<div class="max-w-4xl mx-auto">
				<div class="flex flex-col md:flex-row justify-between items-top">
					<h3 class="w-full md:w-4/5 uppercase font-semibold text-2xl">
						<span class="block">{{ release.title }}</span>
						<span class="block text-gray-600 text-sm">{{
							release.releasedDate
						}}</span>
					</h3>
					<h4
						class="w-full md:w-1/5 mt-6 md:mt-0 flex flex-row justify-start md:justify-end font-semibold text-gray-600">
						<a :href="release.lyrics || '#lyrics'" class="uppercase tracking-wide" target="__blank_genius">
							<i class="fas fa-external-link-alt fa-lite text-xs mr-2"></i>
							<span>Lyrics</span>
						</a>
					</h4>
				</div>
				<div class="flex flex-col md:flex-row justify-between mt-8">
					<div class="w-full md:w-1/3">
						<img :src="release.image" alt="release.title" class="w-full object-cover object-center rounded shadow-lg" />
					</div>
					<div class="w-full md:w-2/3 md:pl-6 text-lg">
						<div class="w-full my-10 md:my-0 md:mb-20" v-if="release.youtubeEmbed || release.soundcloudEmbed">
							<div class="mb-10" v-if="release.youtubeEmbed" v-html="release.youtubeEmbed"></div>
							<div v-if="release.soundcloudEmbed" v-html="release.soundcloudEmbed"></div>
						</div>
						<div class="w-full flex flex-col md:flex-row justify-between">
							<div class="mt-6 md:mt-0 space-y-2 flex flex-col justify-start">
								<a class="block" v-for="(link, linkIndex) in links" :key="linkIndex" :href="link.url"
									:target="`__blank_${link.name}`">
									<!-- <i :class="`fab ${link.icon} inline-block text-xl mr-2 mb-4`"></i> -->
									<font-awesome-icon :icon="['fab', link.icon]" class="inline-block text-xl mr-2" />
									<span>{{ link.actionText }}</span>
								</a>
								<div class="mt-2" v-if="release.secondaryLinks.length > 0">
									<h5 class="font-semibold text-gray-600 capitalize tracking-wide inline-block mr-3">
										More:
									</h5>
									<a class="inline-block mr-1 underline" v-for="(link, linkIndex) in secondaryLinks" :key="linkIndex"
										:href="link.url" :target="`__blank_${link.name}`">
										<span>{{ link.name }}</span>
										<span v-show="linkIndex < release.secondaryLinks.length - 1">,</span>
									</a>
								</div>
							</div>
							<div class="mt-6 md:mt-0">
								<a class="w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center"
									v-if="release.downloadLink" :href="release.downloadLink" target="__blank_download">
									<svg class="fill-current w-3 h-4 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20">
										<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
									</svg>
									<span class="">Free Download</span>
								</a>
							</div>
						</div>
						<div v-if="release.fullLyrics" class="my-10 prose" id="lyrics">
							<h2>Lyrics</h2>
							<div v-html="release.fullLyrics"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
"use strict";

import { mapGetters } from "vuex";
import DownloadDialog from "~/components/DownloadDialog.vue";

const Releases = {
	components: {
		DownloadDialog,
	},

	data: () => ({
		showingDownloadDialog: false,
	}),

	computed: {
		...mapGetters({ releaseById: "release" }),

		release() {
			return this.releaseById(this.$route.params.id);
		},

		links() {
			return this.release.links.filter((link) => !!link.url);
		},

		secondaryLinks() {
			return this.release.secondaryLinks.filter((link) => !!link.url);
		},
	},

	head() {
		return {
			title: `${this.release.title} | Dbilovd`,
		};
	},

	methods: {
		closeDownloadDialog() {
			this.showingDownloadDialog = false;
			document.querySelector("body").classList.remove("modal-active");
		},

		showDownloadDialog() {
			document.querySelector("body").classList.add("modal-active");
			this.showingDownloadDialog = true;
		},
	},
};

export default Releases;
</script>
