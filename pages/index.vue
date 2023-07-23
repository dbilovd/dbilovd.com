<template>
  <div class="home">
    <div class="w-full h-screen">
      <div class="w-full h-full">
        <img
          src="/images/header-slider-3.jpg"
          alt=""
          class="w-full h-full object-cover object-right md:object-center"
        />
      </div>
    </div>

    <div class="bg-gray-100 py-20">
      <div class="max-w-2xl mx-auto text-center">
        <div class="p-6 text-lg">
          <p class="font-semibold italic text-xl mb-10">
            "God is most glorified in us when we are most satisfied in him."
            <span>~ John Piper</span>
          </p>
          <p class="mb-2" v-for="line in descriptionLines">{{ line }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white py-20 px-10">
      <div class="max-w-4xl mx-auto">
        <div
          class="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-10"
        >
          <h3 class="uppercase font-semibold text-xl">Latest Updates</h3>
          <nuxt-link
            to="/updates"
            class="block uppercase tracking-wide text-gray-600 border-b-4 border-gray-600 mt-4 md:mt-0"
          >
            See More ...
          </nuxt-link>
        </div>
        <h3 v-if="posts.length == 0" class="capitalize text-3xl mb-20">
          No Update Right Now
        </h3>
        <div
          class="flex flex-col md:flex-row justify-start mb-20 md:-ml-6"
          v-else
        >
          <div
            class="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6"
            v-for="(post, postIndex) in posts"
            :key="postIndex"
          >
            <div
              class="bg-white shadow-lg border rounded w-full overflow-hidden"
            >
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-48 object-cover object-top"
              />
              <div class="p-4">
                <h3 class="font-semibold capitalize text-lg">
                  <a :href="`/updates/${post.slug}`">{{ post.title }}</a>
                  <a :href="`/updates/${post.slug}`">{{ post.title }}</a>
                </h3>
                <p class="text-gray-600 h-20 overflow-hidden">
                  {{ post.intro }}
                </p>
                <a
                  :href="`/updates/${post.slug}`"
                  class="inline-block mt-2 capitalize tracking-wide text-xs font-semibold border-b border-gray-800"
                  >Continue...</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-20 px-10">
      <div class="max-w-4xl mx-auto">
        <div
          class="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-10"
        >
          <h3 class="uppercase font-semibold text-xl">Latest Releases</h3>
          <nuxt-link
            to="/releases"
            class="block uppercase tracking-wide text-gray-600 border-b-4 border-gray-600 mt-4 md:mt-0"
          >
            See More ...
          </nuxt-link>
        </div>

        <h3 v-if="singles.length == 0" class="capitalize text-3xl mb-20">
          <span class="block">Keep watching this space</span>
          <span class="block">There is new music coming soon...</span>
        </h3>
        <div class="flex flex-col md:flex-row justify-start">
          <div
            class="w-full md:w-1/3 mt-4 md:mt-0 md:mr-4"
            v-for="(single, singleIndex) in singles"
            :key="singleIndex"
          >
            <SingleRelease :release="single"></SingleRelease>
          </div>
        </div>

        <div
          class="mt-10 mb-0 md:mb-20 pt-6 flex flex-col md:flex-row justify-between"
        >
          <div
            class="flex flex-row items-center justify-center -ml-8 md:-ml-6 mb-10 md:mb-0"
          >
            <a
              class="inline-block ml-8 md:ml-6 text-center text-gray-800"
              v-for="(channel, channelIndex) in streams"
              :key="channelIndex"
              :href="channel.url"
              :target="channel.url == '#' ? '' : `__blank_${channel.name}`"
            >
              <span>
                <font-awesome-icon
                  :icon="['fab', channel.icon]"
                  class="block text-3xl"
                />
                <span class="hidden md:block mt-2">{{ channel.name }}</span>
              </span>
            </a>
          </div>
          <div class="">
            <nuxt-link
              to="/releases"
              class="w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded text-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-4 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Free Downloads</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
"use strict";

import { mapGetters, mapActions } from "vuex";
import SingleRelease from "~/components/SingleRelease";

const HomePage = {
  components: {
    SingleRelease,
  },

  data: () => ({}),

  created() {
    // this.fetchPosts();
  },

  computed: {
    ...mapGetters({
      singles: "threeMostRecentReleases",
      streams: "musicLinks",
      posts: "latestThreePosts",
      descriptionLines: "descriptionLines",
    }),
  },

  head() {
    return {
      title: "Home | Dbilovd",
    };
  },

  methods: {
    ...mapActions(["fetchPosts"]),
  },
};

export default HomePage;
</script>