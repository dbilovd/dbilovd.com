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
				'description': "I'm putting together about 6 to 8 songs that has greatly helped me this past few months"
			},
			{
				'id': 'hft-journey',
				'type': 'single',
				'title': 'Journey',
				'image': '/images/journey.png',
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
						'icon': 'fa-itunes'
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
						'icon': 'fa-itunes'
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
	},
	getters: {
		albumReleases: (state)  => state.releases.filter((release) => release.type == 'album'),
		singleReleases: (state)  => state.releases.filter((release) => release.type == 'single'),
		release: (state) => (id) => {
			return state.releases.find((release) => release.id == id)
		},
		musicLinks: (state)  => state.links.filter((link) => link.type == 'music'),
		socialMediaLinks: (state)  => state.links.filter((link) => link.type == 'social'),
	},
	mutations: {

	},
	actions: {

	}
})
