export const state = () => ({
	releases: [
		{
			'id': 'project-changes',
			'type': 'album',
			'title': 'Changes',
			'image': '/images/changes/changes-ep.jpg',
			'releasedDate': 'Sept to Nov, 2023',
			'completed': false,
			'description': "Life and it's changes",
			'links': [
			],
		},
		{
			'id': 'hft',
			'type': 'album',
			'title': 'Hymns for Tomorrow',
			'image': '/images/hft.png',
			'releasedDate': 'Sept, 2019',
			'completed': true,
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
		// {
		// 	'id': 'thou-who-changest-not',
		// 	'type': 'single',
		// 	'albumId': 'project-changes',
		// 	'albumOrder': 5,
		// 	'title': "Oh Thou Who Changest Not",
		// 	'image': '/images/changes/oh-thou-who-changest-not.jpg',
		// 	'lyrics': 'https://genius.com/Dbilovd-little-songwriter-boy-lyrics',
		// 	'releasedDate': '10th November, 2023',
		// 	'links': [],
		// 	'secondaryLinks': [],
		// },
		{
			'id': 'changes',
			'type': 'single',
			'albumId': 'project-changes',
			'albumOrder': 3,
			'title': "Changes",
			'image': '/images/changes/changes.jpg',
			'lyrics': 'https://genius.com/Dbilovd-changes-lyrics',
			'releasedDate': '27th October, 2023',
			'downloadLink': 'https://dbilovdmusic.ck.page/f1b8d0883d',
			'soundcloudEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/JySwiHWn8Qc?si=oNoG273aWccH2GSK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
			'links': [
				{
					'name': "Youtube",
					'url': 'https://youtu.be/JySwiHWn8Qc',
					'actionText': 'Watch on Youtube',
					'icon': 'fa-youtube'
				},
				{
					'name': "Spotify",
					'url': 'https://open.spotify.com/album/7h1UTHS5QDSe7UYre06AnW?si=-2wIcK4eSe6STA27zXEZLA',
					'actionText': 'Listen on Spotify',
					'icon': 'fa-spotify'
				},
				{
					'name': "Apple Music",
					'url': 'https://music.apple.com/gh/album/changes-single/1704650542',
					'actionText': 'Listen on Apple Music',
					'icon': 'fa-apple'
				}
			],
			'secondaryLinks': [],
		},
		{
			'id': 'pictured-differently',
			'type': 'single',
			'albumId': 'project-changes',
			'albumOrder': 2,
			'title': "Pictured Differently",
			'image': '/images/changes/pictured-differently.jpg',
			'lyrics': 'https://genius.com/Dbilovd-pictured-differently-lyrics',
			'releasedDate': '13th October, 2023',
			'downloadLink': 'https://dbilovdmusic.ck.page/f1b8d0883d',
			'soundcloudEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/lkNwEVjTDDc?si=E_8_PMdT8M1IgBTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
			'links': [
				{
					'name': "Youtube",
					'url': 'https://youtu.be/lkNwEVjTDDc',
					'actionText': 'Watch on Youtube',
					'icon': 'fa-youtube'
				},
				{
					'name': "Spotify",
					'url': 'https://open.spotify.com/track/2frITbDDLRmckLxoDVCeJ9?si=68fff043b36e47fc',
					'actionText': 'Listen on Spotify',
					'icon': 'fa-spotify'
				},
				{
					'name': "Apple Music",
					'url': 'https://music.apple.com/gh/album/a-dreamers-song-working-for-good/1704641420?i=1704641423',
					'actionText': 'Listen on Apple Music',
					'icon': 'fa-apple'
				}
			],
			'secondaryLinks': [],
		},
		{
			'id': 'a-dreamers-song',
			'type': 'single',
			'albumId': 'project-changes',
			'albumOrder': 1,
			'title': "A Dreamer's Song (Working for Good)",
			'image': '/images/changes/dreamers-song.jpg',
			'lyrics': 'https://genius.com/Dbilovd-a-dreamers-song-working-for-good-lyrics',
			'releasedDate': '22nd September, 2023',
			'soundcloudEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/LqitT1_VOo4?si=opYiJnPhrO1M9aPN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
			'links': [
				{
					'name': "Youtube",
					'url': 'https://youtu.be/um5CcwqD1gM',
					'actionText': 'Watch on Youtube',
					'icon': 'fa-youtube'
				},
				{
					'name': "Spotify",
					'url': 'https://open.spotify.com/track/04aHexUJy4mDKoSbV9qLdb?si=68f34ff475a6454e',
					'actionText': 'Listen on Spotify',
					'icon': 'fa-spotify'
				},
				{
					'name': "Apple Music",
					'url': 'https://music.apple.com/gh/album/a-dreamers-song-working-for-good-band-version/1704641420?i=1704641425',
					'actionText': 'Listen on Apple Music',
					'icon': 'fa-apple'
				}
			],
			'downloadLink': 'https://dbilovdmusic.ck.page/f1b8d0883d',
			'secondaryLinks': [],
			'press': {
				'about': [
					"This is the first single in my upcoming EP titled Changes. Changes is a reflection on the changes of life and the God who never changes amidst all of them. That God has promised that we will be fine at the end of the day.",
					"This song is about perseverance and keeping faith in the midst of life's changes (positive or negative), because, God is in control over the lives of His children. It is a piano ballad with a backing saxophone to create a beautifully calm sound.",
				],
				'embed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1607480214%3Fsecret_token%3Ds-vn4GYgk6fLh&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
				'lyrics': [
					"I've had dreams,<br />Fantasies<br />Many things I thought that I will be<br />But here I am<br />A different man with different plans<br />New hopes for what can be<br />Then steps in the could-have-beens<br />Whispering to me: “I'm not where I should be”<br />Yet in the midst of these doubts<br />This one thing keeps me going,<br />Knowing",
					"I'm not my own<br />I belong to Him who is in control<br />This one thing I know <br />And unto which I hold<br />That all of life plays this one role<br />Working working for my good<br />Working working for my good<br />",
					"I still dream<br />I'm praying and planning<br />Working to change things<br />I do my best<br />Then do some more<br />Yet I find rest in the purpose of my Lord<br />For except the Lord does a thing<br />And fulfils a dream<br />The dreamer dreams in vain<br />So I won't worry about tomorrow<br />For Jesus says I shouldn't because<br />",
					"I'm not my own<br />I am a child of God<br />And God is in control<br />And this one thing I know<br />And unto which I hold<br />That all of life plays this one role<br />Working, working for my good<br />Working, working for my good<br />",
					"I don't know who I'll become<br />Or what tomorrow has for me<br />Broken dreams or fulfilled ones<br />Better than what I imagined<br />But no matter what comes<br />No matter what doesn't<br />My faith will stay strong<br />For I have found my place in Him<br />",
					"I'm no longer my own<br />I belong to God<br />And God is in control<br />And this one thing I know <br />And unto which I hold<br />That all of life plays this one role<br />Working, working for my good<br />Working, working for my good<br />",
					"It's all working, <br />It's all working for my good<br />Working, working for my good<br />They're all working, <br />They're all working, working for my good<br />Yes, they're all working, <br />They're all working, working for my good<br />The highs are working<br />The lows are working<br />Working for my good<br />The ebbs are working<br />The flows are working<br />Working for my good<br />Working, working for my good<br />It's all working for my good<br />",
				],
			},
		},
		{
			'id': 'a-dreamers-song-band',
			'type': 'single',
			'albumId': 'project-changes',
			'albumOrder': 5,
			'title': "A Dreamer's Song (Working for Good) - Band Version",
			'image': '/images/changes/dreamers-song-band.jpg',
			'lyrics': 'https://genius.com/Dbilovd-a-dreamers-song-working-for-good-lyrics',
			'soundcloudEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/um5CcwqD1gM?si=YH5pTMM9Aox4UypM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
			'releasedDate': '22nd September, 2023',
			'links': [
				{
					'name': "Youtube",
					'url': 'https://youtu.be/LqitT1_VOo4',
					'actionText': 'Watch on Youtube',
					'icon': 'fa-youtube'
				},
				{
					'name': "Spotify",
					'url': 'https://open.spotify.com/track/15m36pLsd8WP7Y21auTGXs?si=51488cc751ac42c6',
					'actionText': 'Listen on Spotify',
					'icon': 'fa-spotify'
				},
				{
					'name': "Apple Music",
					'url': 'https://music.apple.com/gh/album/a-dreamers-song-working-for-good/1704641420?i=1704641423',
					'actionText': 'Listen on Apple Music',
					'icon': 'fa-apple'
				}
			],
			'downloadLink': 'https://dbilovdmusic.ck.page/f1b8d0883d',
			'secondaryLinks': [],
			'press': {
				'about': [
					"This is the first single in my upcoming EP titled Changes. Changes is a reflection on the changes of life and the God who never changes amidst all of them. That God has promised that we will be fine at the end of the day.",
					"This song is about perseverance and keeping faith in the midst of life's changes (positive or negative), because, God is in control over the lives of His children. It is a piano ballad with a backing saxophone to create a beautifully calm sound.",
				],
				'embed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1607480214%3Fsecret_token%3Ds-vn4GYgk6fLh&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
				'lyrics': [
					"I've had dreams,<br />Fantasies<br />Many things I thought that I will be<br />But here I am<br />A different man with different plans<br />New hopes for what can be<br />Then steps in the could-have-beens<br />Whispering to me: “I'm not where I should be”<br />Yet in the midst of these doubts<br />This one thing keeps me going,<br />Knowing",
					"I'm not my own<br />I belong to Him who is in control<br />This one thing I know <br />And unto which I hold<br />That all of life plays this one role<br />Working working for my good<br />Working working for my good<br />",
					"I still dream<br />I'm praying and planning<br />Working to change things<br />I do my best<br />Then do some more<br />Yet I find rest in the purpose of my Lord<br />For except the Lord does a thing<br />And fulfils a dream<br />The dreamer dreams in vain<br />So I won't worry about tomorrow<br />For Jesus says I shouldn't because<br />",
					"I'm not my own<br />I am a child of God<br />And God is in control<br />And this one thing I know<br />And unto which I hold<br />That all of life plays this one role<br />Working, working for my good<br />Working, working for my good<br />",
					"I don't know who I'll become<br />Or what tomorrow has for me<br />Broken dreams or fulfilled ones<br />Better than what I imagined<br />But no matter what comes<br />No matter what doesn't<br />My faith will stay strong<br />For I have found my place in Him<br />",
					"I'm no longer my own<br />I belong to God<br />And God is in control<br />And this one thing I know <br />And unto which I hold<br />That all of life plays this one role<br />Working, working for my good<br />Working, working for my good<br />",
					"It's all working, <br />It's all working for my good<br />Working, working for my good<br />They're all working, <br />They're all working, working for my good<br />Yes, they're all working, <br />They're all working, working for my good<br />The highs are working<br />The lows are working<br />Working for my good<br />The ebbs are working<br />The flows are working<br />Working for my good<br />Working, working for my good<br />It's all working for my good<br />",
				],
			},
		},
		{
			'id': 'little-songwriter-boy',
			'type': 'single',
			'albumId': '',
			'title': 'Little Songwriter Boy',
			'image': '/images/little-songwriter-body.png',
			'lyrics': 'https://genius.com/Dbilovd-little-songwriter-boy-lyrics',
			'releasedDate': '22nd December, 2022',
			'links': [
				{
					'name': "Youtube",
					'url': 'https://www.youtube.com/watch?v=aN212TRCruc',
					'actionText': 'Watch on Youtube',
					'icon': 'fa-youtube'
				},
				{
					'name': "Spotify",
					'url': 'https://share.amuse.io/track/dbilovd-little-songwriter-boy',
					'actionText': 'Listen on Spotify',
					'icon': 'fa-spotify'
				},
				{
					'name': "Apple Music",
					'url': 'https://share.amuse.io/track/dbilovd-little-songwriter-boy',
					'actionText': 'Listen on Apple Music',
					'icon': 'fa-apple'
				}
				/*
				, 
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
				*/
			],
			'secondaryLinks': [
				/*
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
				*/
			],
			// 'soundcloudEmbed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/800665378&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
			// 'youtubeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/gCaG3hZLFyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			// 'downloadLink': ''
		},
		{
			'id': 'hft-be-my-satisfaction',
			'type': 'single',
			'albumId': 'hft',
			'title': 'Be My Satisfaction',
			'image': '/images/beMySatisfaction.png',
			'lyrics': 'https://genius.com/Dbilovd-be-my-satisfaction-lyrics',
			'releasedDate': '5th June, 2020',
			'links': [
				/*
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
				*/
			],
			'secondaryLinks': [
				/*
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
				*/
			],
			// 'soundcloudEmbed': '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687502972&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
			// 'downloadLink': 'https://www.dropbox.com/s/zqf2db83h5kbpm1/Journey.mp3?dl=0'
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
			'soundcloudEmbed': '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/800665378&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
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
			'name': "Instagram",
			'type': 'social',
			'url': 'https://instagram.com/DbilovdMusic',
			'icon': 'fa-instagram'
		},
		{
			'name': "Tiktok",
			'type': 'social',
			'url': 'https://www.tiktok.com/@dbilovdmusic?lang=en',
			'icon': 'fa-tiktok'
		},
		{
			'name': "Facebook",
			'type': 'social',
			'url': 'https://web.facebook.com/Dbilovd-648603108976540/',
			'icon': 'fa-facebook'
		},
		{
			'name': "YouTube",
			'type': 'social',
			'url': 'https://youtube.com/@DiblovdMusic',
			'icon': 'fa-youtube'
		},
		{
			'name': "Twitter",
			'type': 'social',
			'url': 'https://twitter.com/DbilovdMusic',
			'icon': 'fa-twitter'
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
			'name': "Amazon Music",
			'type': 'music',
			'url': 'https://www.amazon.com/music/player/artists/B07XCY6VWM/dbilovd',
			'icon': 'fa-amazon'
		},
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
});

export const getters = {
	albumReleases: (state)  => state.releases.filter((release) => release.type == 'album'),
	singleReleases: (state)  => state.releases.filter((release) => release.type == 'single'),
	albumSingles: (state)  => (albumId) => {
		return state.releases.filter(
			(release) => release.type == 'single' && release.albumId == albumId
		).sort((first, second) => first.albumOrder - second.albumOrder)
	},
	release: (state) => (id) => {
		return state.releases.find((release) => release.id == id)
	},
	threeMostRecentReleases: (state) => {
		return state.releases.filter((release) => release.type == 'single')
			.slice(0, 3);
	},
	musicLinks: (state)  => state.links.filter((link) => link.type == 'music'),
	socialMediaLinks: (state)  => state.links.filter((link) => link.type == 'social'),
	latestThreePosts: (state) => state.posts.slice(0, 3),
	postBySlug: (state) => (slug) => {
		return state.posts.find((release) => release.slug == slug)
	},
	descriptionLines: (state) => state.about.descriptionLines,
	supportDescriptionLines: (state) => state.support.descriptionLines,
};

export const mutations = {
	'SET_BLOG_POSTS' (state, payload) {
		state.posts = payload
	}
};

export const actions = {
	fetchPosts ({ commit }) {
		fetch('//dbilovd-blog.herokuapp.com/api?tags[]=music&limit=30')
			.then((res) => res.json())
			.then((data) => {
				let posts = data.posts.map((post) => {
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
				commit('SET_BLOG_POSTS', posts);
			})
			.catch((err) => {
			});
	}
};
