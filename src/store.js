import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		releases: [
			{
				'id': 'hft',
				'type': 'album',
				'title': 'Hymns for Tomorrow',
				'image': '/images/hft.png',
				'releasedDate': 'Sept, 2019',
				'description': "I'm putting together about 6 to 8 songs that has greatly helped me this past few months",
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/playlist/3AH5dCJ88TVvrTAildQM3K?si=MKUxiB9cQvOiYAdnRWfJ_w',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Soundcloud",
						'url': 'https://soundcloud.com/dbilovd/sets/the-hymns-for-tomorrow-project',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
				],
			},
			{
				'id': 'hft-anvil',
				'type': 'single',
				'albumId': 'hft',
				'title': 'Anvil',
				'image': '/images/anvil.png',
				'lyrics': 'https://genius.com/Dbilovd-anvil-lyrics',
				'releasedDate': '17th April, 2020',
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/track/0TVnyGajMftOEC7YR7Srt2?si=-XPG7QMKTJmSmSGCEaSFyw',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Apple Music",
						'url': 'https://music.apple.com/gh/album/anvil-single/1506723206',
						'actionText': 'Listen on Apple Music',
						'icon': 'fa-apple'
					},
					{
						'name': "Youtube",
						'url': 'https://www.youtube.com/watch?v=gCaG3hZLFyg',
						'actionText': 'Watch on Youtube',
						'icon': 'fa-youtube'
					},
					{
						'name': "Soundcloud",
						'url': 'https://soundcloud.com/dbilovd/anvil',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
					{
						'name': "Google Play",
						'url': '',
						'actionText': 'Buy from Google Play',
						'icon': 'fa-google-play'
					},
					{
						'name': "Amazon",
						'url': '',
						'actionText': 'Buy from Amazon.com',
						'icon': 'fa-amazon'
					}
				],
				'secondaryLinks': [
					{
						'name': "Deezer",
						'url': 'https://www.deezer.com/track/140458592',
					},
					{
						'name': "Tidal",
						'url': '',
					},
					{
						'name': "Pandora",
						'url': '',
					}
				],
				'soundcloudEmbed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/800665378&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
				'youtubeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/gCaG3hZLFyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				'downloadLink': 'https://www.dropbox.com/s/m3ry040s9pfgsv3/Anvil.mp3?dl=0'
			},
			{
				'id': 'hft-journey',
				'type': 'single',
				'albumId': 'hft',
				'title': 'Journey',
				'image': '/images/journey.png',
				'lyrics': 'https://genius.com/Dbilovd-journey-lyrics',
				'releasedDate': '27th September, 2019',
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/track/6MsWjxpIUB18I1HBFiHeYX?si=n8mSdLjhRsC1SlQ-PT1vNQ',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Apple Music",
						'url': 'https://music.apple.com/gh/album/journey/1479884495?i=1479884496',
						'actionText': 'Listen on Apple Music',
						'icon': 'fa-apple'
					},
					{
						'name': "Youtube",
						'url': 'https://www.youtube.com/watch?v=1WmJ0qKjD8U',
						'actionText': 'Watch on Youtube',
						'icon': 'fa-youtube'
					},
					{
						'name': "Soundcloud",
						'url': 'https://soundcloud.com/dbilovd/journey',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
					{
						'name': "Google Play",
						'url': '',
						'actionText': 'Buy from Google Play',
						'icon': 'fa-google-play'
					},
					{
						'name': "Amazon",
						'url': '',
						'actionText': 'Buy from Amazon.com',
						'icon': 'fa-amazon'
					}
				],
				'secondaryLinks': [
					{
						'name': "Deezer",
						'url': 'https://www.deezer.com/track/747467632',
					},
					{
						'name': "Tidal",
						'url': '',
					},
					{
						'name': "Pandora",
						'url': '',
					}
				],
				'soundcloudEmbed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687502972&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
				'downloadLink': 'https://www.dropbox.com/s/zqf2db83h5kbpm1/Journey.mp3?dl=0'
			},
			{
				'id': 'hft-my-all',
				'type': 'single',
				'albumId': 'hft',
				'title': 'My All',
				'image': '/images/myall.png',
				'releasedDate': '27th September, 2019',
				'lyrics': 'https://genius.com/Dbilovd-my-all-lyrics',
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/track/4Y5IslIuEjttUIqAqe9l2w?si=z9QwbaapQCqvqD0WtGbH4w',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Apple Music",
						'url': 'https://music.apple.com/gh/album/my-all/1479884341?i=1479884342',
						'actionText': 'Listen on Apple Music',
						'icon': 'fa-apple'
					},
					{
						'name': "Youtube",
						'url': 'https://www.youtube.com/watch?v=2LbTIHCg2DM',
						'actionText': 'Watch on Youtube',
						'icon': 'fa-youtube'
					},
					{
						'name': "Soundcloud",
						'url': 'https://soundcloud.com/dbilovd/my-all',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
					{
						'name': "Google Play",
						'url': '',
						'actionText': 'Buy from Google Play',
						'icon': 'fa-google-play'
					},
					{
						'name': "Amazon",
						'url': '',
						'actionText': 'Buy from Amazon.com',
						'icon': 'fa-amazon'
					}
				],
				'secondaryLinks': [
					{
						'name': "Deezer",
						'url': 'https://www.deezer.com/track/745618842',
					},
					{
						'name': "Tidal",
						'url': '',
					},
					{
						'name': "Pandora",
						'url': '',
					}
				],
				'soundcloudEmbed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687501688&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
				'downloadLink': 'https://www.dropbox.com/s/wyz13nk9naecf30/My%20All.mp3?dl=0'
			}
		],
		links:[
			{
				'name': "Contact",
				'type': 'social',
				'url': 'mailto:dbilovd@gmail.com',
				'icon': 'fas fa-envelope'
			},
			{
				'name': "Twitter",
				'type': 'social',
				'url': 'https://twitter.com/DbilovdMusic',
				'icon': 'fa-twitter'
			},
			{
				'name': "Instagram",
				'type': 'social',
				'url': 'https://instagram.com/DbilovdMusic',
				'icon': 'fa-instagram'
			},
			{
				'name': "Facebook",
				'type': 'social',
				'url': 'https://web.facebook.com/Dbilovd-648603108976540/',
				'icon': 'fa-facebook'
			},
			{
				'name': "Spotify",
				'type': 'music',
				'url': 'https://open.spotify.com/artist/5xvyAXQfTzG95lXHos2ZDn',
				'icon': 'fa-spotify'
			},
			{
				'name': "Apple Music",
				'type': 'music',
				'url': 'https://music.apple.com/gh/artist/dbilovd/1479884134',
				'icon': 'fa-apple'
			},
			{
				'name': "Youtube",
				'type': 'music',
				'url': 'https://www.youtube.com/channel/UCamdhKx59S70KBP5l3D-UfA',
				'icon': 'fa-youtube'
			},
			{
				'name': "Soundcloud",
				'type': 'music',
				'url': 'https://soundcloud.com/Dbilovd',
				'icon': 'fa-soundcloud'
			},
			{
				'name': "Google Play",
				'type': 'music',
				'url': '',
				'icon': 'fa-google-play'
			},
			{
				'name': "Amazon",
				'type': 'music',
				'url': '',
				'icon': 'fa-amazon'
			}
		],
		posts: [],
		about: {
			descriptionLines: [ 
				'My name is David and I make music under the name Dbilovd (The Beloved)',
				'I love Jesus and I believe I was made to see and show Him glorious. One way I have seen His glory is in the steadfastness of His love to me. Despite my desire to always give Him the glory, I have fallen short many times, yet He still loves me. Songwriting for me is another way I can testify of His love and faithfulness to me.',
				'My prayer is that God reveals Himself and His glory to you as you listen to these testimonies I share.'
			],
			quotes: [],
		},
		support: {
			descriptionLines: [ 
				'<h1 class="text-center font-semibold text-lg uppercase">Coming Soon...</h1>',
			],
			quotes: [],
		},
	},

	getters: {
		albumReleases: (state)  => state.releases.filter((release) => release.type == 'album'),
		singleReleases: (state)  => state.releases.filter((release) => release.type == 'single'),
		albumSingles: (state)  => (albumId) => {
			return state.releases.filter(
				(release) => release.type == 'single' && release.albumId == albumId
			)
		},
		release: (state) => (id) => {
			return state.releases.find((release) => release.id == id)
		},
		musicLinks: (state)  => state.links.filter((link) => link.type == 'music'),
		socialMediaLinks: (state)  => state.links.filter((link) => link.type == 'social'),
		latestThreePosts: (state) => state.posts.slice(0, 3),
		postBySlug: (state) => (slug) => {
			return state.posts.find((release) => release.slug == slug)
		},
		descriptionLines: (state) => state.about.descriptionLines,
		supportDescriptionLines: (state) => state.support.descriptionLines,
	},

	mutations: {
		'FETCH_INITIAL_BLOG_POSTS' (state) {
			fetch('//dbilovd-blog.herokuapp.com/api?tags[]=music&limit=30')
				.then((res) => res.json())
				.then((data) => {
					state.posts = data.posts.map((post) => {
						return {
							'id'			: post.id,
							'slug'		: post.slug,
							'title'		: post.title,
							'intro'		: post.excerpt,
							'image'		: post.featured_image,
							'url'			: '#',
							'type'		: 'podcast',
							'content'	: post.body,
							'date'		: post.publish_date
						}
					});
				})
				// .catch((err) => {
				// 	// console.error(err);
				// })
				;
		}
	},

	actions: {
		fetchPosts ({ commit }) {
			commit('FETCH_INITIAL_BLOG_POSTS');
		}
	}
})
