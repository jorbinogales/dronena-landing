// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
        width: '100%',
        height: '100%',
        videoId: 'jcDZ7TdKvLg',
        playerVars: {'playsinline': 1,  'loop' : 1,'controls': 0, 'showinfo': 0  },
    });
    player = new YT.Player('player2', {
        width: '100%',
        height: '100%',
        videoId: 'jcDZ7TdKvLg',
        playerVars: {'playsinline': 1,  'loop' : 1,'controls': 0, 'showinfo': 0  },
    });
    player = new YT.Player('player3', {
        width: '100%',
        height: '100%',
        videoId: 'jcDZ7TdKvLg',
        playerVars: {'playsinline': 1,  'loop' : 1,'controls': 0, 'showinfo': 0  },
    });
}