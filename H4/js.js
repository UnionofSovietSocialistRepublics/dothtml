var Song = [
    "Never gonna give you up", "Never gonna let you down", "Never gonna run around and desert you", "Never gonna make you cry", "Never gonna say goodbye", "Never gonna tell a lie and hurt you"
]


var i = 0;
balls = setInterval(songSing, 1000);

function songSing() {
    document.write(Song[i] + "<br>")
    i++;
}

const stop = setTimeout(songStopper, 5500);

function songStopper() {
    clearInterval(balls);
}