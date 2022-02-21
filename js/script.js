// ------song list------
let allMusic = [
    {
        img: "music-1.jpg",
        song: "music-1.mp3"
    },
    {
        img: "music-2.jpg",
        song: "music-2.mp3"
    },
    {
        img: "music-3.jpg",
        song: "music-3.mp3"
    },
    {
        img: "music-4.jpg",
        song: "music-4.mp3"
    }
    ,
    {
        img: "music-5.jpg",
        song: "music-5.mp3"
    }
    ,
    {
        img: "music-6.jpg",
        song: "music-6.mp3"
    }
    ,
    {
        img: "music-7.jpg",
        song: "music-7.mp3"
    }
    ,
    {
        img: "music-8.jpg",
        song: "music-8.mp3"
    }
    ,
    {
        img: "music-9.jpg",
        song: "music-9.mp3"
    }
    ,
    {
        img: "music-10.jpg",
        song: "music-10.mp3"
    }
];
let incress = 0;
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
    pauseAudio() 
   })
pauseButton.addEventListener('click', () => {
    audioPlay ()
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
    progress.style.width = `${ progressPer}%`;

})
progressContainer.addEventListener('click', (e) => {
    const offsetX = e.offsetX;
    const width = progressContainer.clientWidth;
    const duration = audio.duration;
    audio.currentTime = (offsetX / width) * duration;
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
    if (allMusic.length >= incress) {
        incress++;
    }
    if (incress==10) {
        incress = 0;
    }
    audio.src = (`./songs/${allMusic[incress].song}`);
    console.log(allMusic[incress])
    img.src = (`./images/${allMusic[incress].img}`);
    audioPlay ()
}
// ------previous----
function previous() {
    if (incress==0) {
        incress = allMusic.length - 1;
    }
    if (incress<allMusic.length) {
        incress--;
    }
    audio.src = (`./songs/${allMusic[incress].song}`);
    console.log(allMusic[incress])
    img.src = (`./images/${allMusic[incress].img}`);
    audioPlay()
}
audio.addEventListener('ended', nextSong);