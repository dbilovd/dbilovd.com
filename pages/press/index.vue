<template>
  <div class="bg-gray-100">
    <Head>
      <Title>D'bilovd Musical Artist Press Kit - Dbilovd</Title>
    </Head>
    <div class="bg-gray-100 py-20 px-10">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <div class="w-full md:w-3/5 text-center md:text-left">
            <h1 class="font-bold text-xl mb-6">
              D'bilovd - Musical Artist Press Kit
            </h1>
            <p class="mb-4">D'bilovd (The Beloved), is the stage name for David Lartey, a Ghanaian gospel singer-songwriter.  From a place of fellowship with God and he writes music with lyrics deeply rooted in theology. Despite his human imperfections and failures, David's love for God shines through in his music. For him, songwriting serves as a means to bear witness to God's enduring love and faithfulness in his life. Each song he crafts emerges from a sincere and personal experience of God, weaving the gospel's timeless truth with carefully constructed narratives of his own journey. David is acutely aware that while his story is significant, it is not the gospel itself; rather, it serves as a vessel to convey the gospel's profound truth.</p>
            <p class="mb-4">His musical style and songwriting are heavily influenced by the Bible and the creative works of revered artists such as Nathaniel Bassey, Esther Smith, Brandon Heath, and Switchfoot, among others.</p>
            <p class="mb-4">David has already released five singles to date, and he prepares to unveil his debut EP, "Changes" scheduled for release in November 2023. This EP represents his first full-bodied project, telling a deeply personal season of change he went through. It promises to be a remarkable milestone in his musical journey.</p>
          </div>
          <div class="w-full md:w-2/5 pl-0 md:pl-8 mt-10 md:mt-0 ">
            <iframe width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1682753838%3Fsecret_token%3Ds-79RTQwxhGYi&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dbilovd" title="Dbilovd" target="_blank" style="color: #cccccc; text-decoration: none;">Dbilovd</a> · <a href="https://soundcloud.com/dbilovd/sets/unreleased-music/s-79RTQwxhGYi" title="Unreleased Music" target="_blank" style="color: #cccccc; text-decoration: none;">Unreleased Music</a></div>
          </div>
        </div>

        <div class="w-full mt-20">
          <h1 class="font-bold text-xl mb-6">
            Press Photos
          </h1>
          <div class="flex flex-col md:flex-row justify-start">
            <div 
              class="w-full md:w-1/3 mt-4 md:mt-0 md:mr-4"
              v-for="(image, imageIndex) in pressImages"
              :key="imageIndex"
            >
              <a :href="image.image" target="_blank_download_image">
                <img
                  :src="image.image"
                  class="w-full h-full object-cover object-center"
                >
              </a>
            </div>
          </div>
        </div>

        <div class="w-full mt-20">
          <h1 class="font-bold text-xl mb-6">
            Videos
          </h1>
          <div class="flex flex-col md:flex-row justify-start space-x-2">
            <div 
              class="w-full md:w-1/2 mt-4 md:mt-0"
              v-for="(video, videoIndex) in videos"
              :key="videoIndex"
            >
            <iframe class="w-full"  height="315" :src="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 items-center md:items-start mt-20">
          <div class="w-full">
            <img src="/images/press/5.jpg" alt="David" class="w-full h-auto object-cover object-center rounded shadow-lg">
          </div>
          <div class="w-full h-full mt-10 md:mt-0 pl-0 md:pl-8 text-lg text-center md:text-left flex flex-col justify-center align-middle">
            <h3 class="font-bold text-3xl mb-10">
              David is an independent and self-managed artist.
            </h3>
            <h4 class="font-bold text-lg mb-1">Contact David</h4>
            <p>dbilovd.music@gmail.com</p>
            <p>+233547051251</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
"use strict";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      videos: [
        'https://www.youtube.com/embed/gCaG3hZLFyg',
        'https://www.youtube.com/embed/51W90WCH8jI',
      ],
      pressImages: [
        {
          'thumbnail': 'images/press/1-min.jpg',
          'image': 'images/press/1.jpg',
        },
        {
          'thumbnail': 'images/press/2-min.jpg',
          'image': 'images/press/2.jpg',
        },
        {
          'thumbnail': 'images/press/3-min.jpg',
          'image': 'images/press/3.jpg',
        },
        // {
        //   'thumbnail': 'images/press/5-min.jpg',
        //   'image': 'images/press/5.jpg',
        // },
        // {
        //   'thumbnail': 'images/press/7.jpeg',
        //   'image': 'images/press/7.jpeg',
        // },
        {
          'thumbnail': 'images/press/6.jpeg',
          'image': 'images/press/6.jpeg',
        },
      ]
    }
  },

  computed: {
    ...mapGetters(["descriptionLines"]),
  },

  head() {
    return {
      title: "About | Dbilovd",
    };
  },
};
</script>