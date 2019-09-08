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
						'url': 'https://open.spotify.com/playlist/6uQjWI8u1TuNCjwDFjwuxM?si=mn-SKUZyTry-s8W_3pCEmA',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
				],
			},
			{
				'id': 'hft-journey',
				'type': 'single',
				'title': 'Journey',
				'image': '/images/journey.png',
				'lyrics': 'https://genius.com/Dbilovd-journey-lyrics',
				'releasedDate': '27th September, 2019',
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/artist/5xvyAXQfTzG95lXHos2ZDn',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Apple Music",
						'url': '#',
						'actionText': 'Listen on Apple Music',
						'icon': 'fa-apple'
					},
					{
						'name': "Youtube",
						'url': '#',
						'actionText': 'Watch on Youtube',
						'icon': 'fa-youtube'
					},
					{
						'name': "Soundcloud",
						'url': '#',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
					{
						'name': "iTunes",
						'url': '#',
						'actionText': 'Buy from iTunes',
						'icon': 'fa-itunes-note'
					},
					{
						'name': "Google Play",
						'url': '#',
						'actionText': 'Buy from Google Play',
						'icon': 'fa-google-play'
					},
					{
						'name': "Amazon",
						'url': '#',
						'actionText': 'Buy from Amazon.com',
						'icon': 'fa-amazon'
					}
				],
				'secondaryLinks': [
					{
						'name': "Deezer",
						'url': '',
					},
					{
						'name': "Tidal",
						'url': '',
					},
					{
						'name': "Pandora",
						'url': '',
					}
				]
			},
			{
				'id': 'hft-my-all',
				'type': 'single',
				'title': 'My All',
				'image': '/images/myall.png',
				'releasedDate': '27th September, 2019',
				'lyrics': 'https://genius.com/Dbilovd-my-all-lyrics',
				'links': [
					{
						'name': "Spotify",
						'url': 'https://open.spotify.com/artist/5xvyAXQfTzG95lXHos2ZDn',
						'actionText': 'Listen on Spotify',
						'icon': 'fa-spotify'
					},
					{
						'name': "Apple Music",
						'url': '#',
						'actionText': 'Listen on Apple Music',
						'icon': 'fa-apple'
					},
					{
						'name': "Youtube",
						'url': '#',
						'actionText': 'Watch on Youtube',
						'icon': 'fa-youtube'
					},
					{
						'name': "Soundcloud",
						'url': '#',
						'actionText': 'Listen on Soundcloud',
						'icon': 'fa-soundcloud'
					},
					{
						'name': "iTunes",
						'url': '#',
						'actionText': 'Buy from iTunes',
						'icon': 'fa-itunes-note'
					},
					{
						'name': "Google Play",
						'url': '#',
						'actionText': 'Buy from Google Play',
						'icon': 'fa-google-play'
					},
					{
						'name': "Amazon",
						'url': '#',
						'actionText': 'Buy from Amazon.com',
						'icon': 'fa-amazon'
					}
				],
				'secondaryLinks': [
					{
						'name': "Deezer",
						'url': '',
					},
					{
						'name': "Tidal",
						'url': '',
					},
					{
						'name': "Pandora",
						'url': '',
					}
				]
			},
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
				'url': '#',
				'icon': 'fa-apple'
			},
			{
				'name': "Youtube",
				'type': 'music',
				'url': '#',
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
				'url': '#',
				'icon': 'fa-google-play'
			},
			{
				'name': "Amazon",
				'type': 'music',
				'url': '#',
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
	},

	getters: {
		albumReleases: (state)  => state.releases.filter((release) => release.type == 'album'),
		singleReleases: (state)  => state.releases.filter((release) => release.type == 'single'),
		release: (state) => (id) => {
			return state.releases.find((release) => release.id == id)
		},
		musicLinks: (state)  => state.links.filter((link) => link.type == 'music'),
		socialMediaLinks: (state)  => state.links.filter((link) => link.type == 'social'),
		latestThreePosts: (state) => state.posts.slice(0, 3),
		descriptionLines: (state) => state.about.descriptionLines,
	},

	mutations: {
		'FETCH_INITIAL_BLOG_POSTS' (state) {
			// fetch('//dbilovd-blog.herokuapp.com/api')
			fetch('//dbilovd-blog.herokuapp.com/api?tags[]=music')
				.then((res) => res.json())
				.then((data) => {
					state.posts = data.posts.map((post) => {
						return {
							'id'	: post.id,
							'slug'	: post.slug,
							'title'	: post.title,
							'intro'	: post.excerpt,
							'image'	: post.featured_image,
							'url'	: '#',
							'type'	: 'podcast'
						}
					});
				})
				.catch((err) => {
					debugger;
					console.error("An Error Occurred: " + err);
				});
		}
	},

	actions: {
		fetchPosts ({ commit }) {
			commit('FETCH_INITIAL_BLOG_POSTS');
		}
	}
})
