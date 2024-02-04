

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('randomLinkButton').addEventListener('click', function() {
        var links = [
            "https://open.spotify.com/track/1zi7xx7UVEFkmKfv06H8x0?si=78a21da5bfa74844",
            "https://open.spotify.com/track/7lQ8MOhq6IN2w8EYcFNSUk?si=5f0d67406dba4805",
            "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=953bfb4b3976474e",
            "https://open.spotify.com/track/4VXIryQMWpIdGgYR4TrjT1?si=0fa009dfd5014e3f",
            "https://open.spotify.com/track/7m9OqQk4RVRkw9JJdeAw96?si=98ca0a23f3484aba",
            "https://open.spotify.com/track/2xLMifQCjDGFmkHkpNLD9h?si=3c6136a6809c4736",
            "https://open.spotify.com/track/7KXjTSCq5nL1LoYtL7XAwS?si=bccead1c67a74fe3",
            "https://open.spotify.com/track/0VgkVdmE4gld66l8iyGjgx?si=f5e100877739483d",
            "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr?si=bb25e09c7c6e4ece",
            "https://open.spotify.com/track/7GX5flRQZVHRAGd6B4TmDO?si=683049e4f3294757",
            "https://open.spotify.com/track/37F7E7BKEw2E4O2L7u0IEp?si=0aebc3e4caa84bb8",
            "https://open.spotify.com/track/0trHOzAhNpGCsGBEu7dOJo?si=f4ea2e0a34224bcb",
            "https://open.spotify.com/track/2Vy16OMt19FH30uQNTFdLk?si=605e0ed3de6b40bb",
            "https://open.spotify.com/track/0mXMr1OVZZKYmOinBaofOp?si=58a6327df9e24b1b",
            "https://open.spotify.com/track/0MZGwYb5mTATbmoi671wEg?si=1e764a6f5567478d",
            "https://open.spotify.com/track/0Dk9lP1YnOqssHH0oCeq9u?si=9472eed520d242dc",
            "https://open.spotify.com/track/3gJDgenxLephg09x86IxPs?si=eb3ab81a9a6d4266",
            "https://open.spotify.com/track/43VXG87ajppI8mO1Mxo8vu?si=8168b87899de4a64",
            "https://open.spotify.com/track/06Y14QBRyzmPRqrswAfF4J?si=beabe1bcbca442da",
            "https://open.spotify.com/track/6K2anECyrckidwf5wxS78Q?si=bef6bd2057c146d1",
            "https://open.spotify.com/track/4nWPmn1tqegITYKdZOJpKv?si=bc58cd43939044b5",
            "https://open.spotify.com/track/6WDWXI2fpIvxQmir00JOEB?si=618c5c1a43a949c2",
            "https://open.spotify.com/track/1LNyW0QSIhslp2Y9WaSmcX?si=7ebf8980fbeb4da4",
            "https://open.spotify.com/track/6TxBKHS4EFfcSWTZAo1AaW?si=f4744852a3654c92",
            "https://open.spotify.com/track/0rY3dYEisKkCDJayqQixZP?si=13d309a5ee964102",
            "https://open.spotify.com/track/463yWM5TwZ4cFo8NE03uml?si=0ce159f6c0d6475c",
            "https://open.spotify.com/track/7E3UVjwgSsnkffm8FMQWBo?si=2a2fe3f14ee64dd6",
            "https://open.spotify.com/track/3m4rnyOFP1FGq5AKOCOPfo?si=3b184bb09ecc40f8",
            "https://open.spotify.com/track/6iGRv0leIFB84n2tr3ebAs?si=78711143a1864b00",
            "https://open.spotify.com/track/64MWBixAALtCEUl28AvlMs?si=fa0abe814a0544de"
        ];
        var randomLink = links[Math.floor(Math.random() * links.length)];
        window.open(randomLink, '_blank');
    });
})

