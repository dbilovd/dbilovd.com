<template>
  <div
    class="w-full mt-20 text-center md:text-left"
    v-if="showAbout"
  >
    <h1 class="font-bold text-xl mb-6">
      D'bilovd - Musical Artist Press Kit
    </h1>
    <p class="mb-4">D'bilovd (The Beloved), is the stage name for David Lartey, a Ghanaian gospel singer-songwriter.
      From a place of fellowship with God and he writes music with lyrics deeply rooted in theology. Despite his
      human imperfections and failures, David's love for God shines through in his music. For him, songwriting
      serves as a means to bear witness to God's enduring love and faithfulness in his life. Each song he crafts
      emerges from a sincere and personal experience of God, weaving the gospel's timeless truth with carefully
      constructed narratives of his own journey. David is acutely aware that while his story is significant, it is
      not the gospel itself; rather, it serves as a vessel to convey the gospel's profound truth.</p>
    <p class="mb-4">His musical style and songwriting are heavily influenced by the Bible and the creative works of
      revered artists such as Nathaniel Bassey, Esther Smith, Brandon Heath, and Switchfoot, among others.</p>
    <p class="mb-4">David has already released five singles to date, and he prepares to unveil his debut EP,
      "Changes" scheduled for release in November 2023. This EP represents his first full-bodied project, telling a
      deeply personal season of change he went through. It promises to be a remarkable milestone in his musical
      journey.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 items-center md:items-start mt-20">
    <div class="w-full">
      <img src="/images/press/5.jpg" alt="David"
        class="w-full h-auto object-cover object-center rounded shadow-lg" />
    </div>
    <div
      class="w-full h-full mt-10 md:mt-0 pl-0 md:pl-8 text-lg text-center md:text-left flex flex-col justify-center align-middle">
      <h3 class="font-bold text-3xl mb-10">
        David is an independent and self-managed artist.
      </h3>
      <h4 class="font-bold text-lg mb-1">Contact David</h4>
      <p>dbilovd.music@gmail.com</p>
      <p>+233547051251</p>
    </div>
  </div>
</template>

<script type="text/javascript">
	const PressMusicBrief = {
    props: {
      showAbout: {
        type: Boolean,
        default: true,
      },
    },

		data: () => ({}),

		methods: {
		}
	};

	export default PressMusicBrief;
</script>