function switchService() {
    var sidebar = document.querySelector('.sidebar_left');
    var button = sidebar.querySelector('button');
    var links = sidebar.querySelectorAll('a');

    if (sidebar.classList.contains('spotify')) {
        // Wijzig naar Apple Music
        sidebar.classList.remove('spotify');
        sidebar.classList.add('apple');
        button.textContent = 'Switch to Spotify';

        // Update links voor Apple Music
        links[0].href = "https://music.apple.com/nl/playlist/project-reflectie-op-digitale-cultuur/pl.u-76oNko6tWAzPLv1?l=en-GB";
        links[1].href = "https://music.apple.com/nl/playlist/u250/pl.u-mJy8gW4Czm1aEN4?l=en-GB";
        links[2].href = "https://music.apple.com/nl/playlist/apple-music-mid/pl.u-aZb0NoxF1lblyGV";
    } else {
        // Wijzig terug naar Spotify
        sidebar.classList.remove('apple');
        sidebar.classList.add('spotify');
        button.textContent = 'Switch to Apple Music';

        // Update links voor Spotify
        links[0].href = "https://open.spotify.com/playlist/0Cb7NuLrS722iT2OONQ9La?si=1db7285c36284f20";
        links[1].href = "https://open.spotify.com/playlist/3YudzgAEfBIWlDK5Hss5cU?si=f54df619485e4294";
        links[2].href = "https://open.spotify.com/playlist/6rZMZQW5i9DZoHr6Fi3z64?si=3fd5dc4d7ad746fe";
    }
}
