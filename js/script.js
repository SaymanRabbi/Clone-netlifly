// ------song list------
let allMusic = [
    {
        name: 'Harley Bird - Home',
        author: 'Jordan Schor',
        song: "music-1.mp3"
    },
    {
        name: 'Ikson Anywhere – Ikson',
        author: 'Audio Library',
        song: "music-2.mp3"
    },
    {
        name: 'Beauz & Jvna - Crazy',
        author: 'Beauz & Jvna',
        song: "music-3.mp3"
    },
    {
        name: 'Hardwind - Want Me',
        author: 'Mike Archangelo',
        song: "music-4.mp3"
    }
    ,
    {
        name: 'Jim - Sun Goes Down',
        author: 'Jim Yosef x Roy',
        song: "music-5.mp3"
    }
    ,
    {
        name: 'Lost Sky - Vision NCS',
        author: 'NCS Release',
        song: "music-6.mp3"
    }
    ,
    {
        name: 'Boro_Bhalobashi',
        author: 'Tanjib_Sarowar',
        song: "music-7.mp3"
    }
    ,
    {
        name: 'Ekhono-Recall',
        author: 'Recall [FusionBD.Com]',
        song: "music-8.mp3"
    }
    ,
    {
        name: 'Ami tomay na dekhi',
        author: 'সন্ধি',
        song: "music-9.mp3"
    }
    ,
    {
        name: 'asal me tum nahi ho mere',
        author: 'Dharshan',
        song: "music-10.mp3"
    }
];
let incress = 0;
// ----start----
const start = document.getElementById('start');
const duration = document.getElementById('duration');
// ---song name----
const songName = document.getElementById('song-name');
const authorName = document.getElementById('author');
// ----play button-----
const play = document.getElementById('ply-btn');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
// -------music list-----
const audio = document.getElementById('audio');
// ----changes music-----

// changes img-----
const img = document.getElementById('img');
// -----progress Bar-----
const progress = document.getElementById('progress-Bar');
// ----progress bar-Container
const progressContainer = document.getElementById('progress-container');
playButton.addEventListener('click', () => {
    pauseAudio();
    document.getElementById('opacity').style.opacity = 0;
   })
pauseButton.addEventListener('click', () => {
    audioPlay();
    document.getElementById('opacity').style.opacity = 1;
})
document.getElementById('next').addEventListener('click', (e) => {
    nextSong()
})
document.getElementById('previous').addEventListener('click', () => {
    previous()
})
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPer = (currentTime / duration) * 100;
    progress.style.width = `${progressPer}%`;
    const inMinute = Math.floor(audio.currentTime / 60);
    let inSecond = Math.floor(audio.currentTime % 60);
    if (inSecond<10) {
        inSecond = "0" + inSecond;
    }
    start.innerText = `${inMinute}:${inSecond}`;

})
progressContainer.addEventListener('click', (e) => {
    const offsetX = e.offsetX;
    const width = progressContainer.clientWidth;
    const duration = audio.duration;
    audio.currentTime = (offsetX / width) * duration;
})
// -----love icon----
document.getElementById('love').addEventListener('click', () => {
    love.style.color = "#0d0d0db9";
})
// -----audio play----
function audioPlay (){
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    audio.play();  
}
// -----pause audio------
function pauseAudio() {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    audio.pause();
}
// ----next song----
function nextSong() {
    if (allMusic.length >incress) {
        incress++;
    }
    if (incress==allMusic.length) {
        incress = 0;
    }
    document.getElementById('opacity').style.opacity = 1;
    songName.innerText = allMusic[incress].name;
    authorName.innerText = allMusic[incress].author;
    audio.src = (`./songs/${allMusic[incress].song}`);
    audioPlay ()
}
// ------previous----
function previous() {
    if (incress==0) {
        incress = allMusic.length -1;
    }
    if (incress<allMusic.length) {
        incress--;
    }
    document.getElementById('opacity').style.opacity = 1;
    songName.innerText = allMusic[incress].name;
    authorName.innerText = allMusic[incress].author;
    audio.src = (`./songs/${allMusic[incress].song}`);
    audioPlay()
}
audio.addEventListener('ended', nextSong);
audio.addEventListener('loadeddata', () => {
    const minute = Math.floor(audio.duration / 60);
    let second = Math.floor(audio.duration % 60);
    if (second<10) {
        second = "0" + second;
    }
    duration.innerText = `${minute}:${second}`;
})