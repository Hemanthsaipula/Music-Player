let play = document.querySelector(".button2");
let music = 0;
let progress = document.querySelector(".progress");
let song = document.querySelector(".audio audio");
let before = document.querySelector(".button1");
let next = document.querySelector(".button3");
let nextsong = document.querySelector(".song");
let id = document.querySelector(".id");
let actor = document.querySelector(".actor");
let musicdir = document.querySelector(".music");
let picture = document.querySelector(".picture img");
let holder = 0;

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

song.ontimeupdate = function() {
    progress.value = song.currentTime;
};

const updatePlayPauseIcon = () => {
    let icon = play.querySelector('i');
    if (music === 0) {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
};

play.addEventListener("click", () => {
    if (music === 0) {
        song.play();
        music = 1;
    } else {
        song.pause();
        music = 0;
    }
    updatePlayPauseIcon();
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

const changeAudioSource = (newSrc) => {
    nextsong.src = newSrc;
    song.load();
    song.play();
    music = 1;
    updatePlayPauseIcon();
};

const changeSong = () => {
    if (holder === 0) {
        id.innerText = "Hungry Cheetah";
        actor.innerText = "PawanKalyan, Priyanka Arul Mohan";
        musicdir.innerText = "Thaman";
        picture.src = "photo.png";
        changeAudioSource("Hungry Cheetah.mp3");
    } else if (holder === 1) {
        id.innerText = "Ammaye Sannaga";
        actor.innerText = "PawanKalyan, Bhoomika";
        musicdir.innerText = "Mani Sharma";
        picture.src = "photo1.png";
        changeAudioSource("Ammaye Sannaga.mp3");
    } else if (holder === 2) {
        id.innerText = "Sarigamapadanisa Jalsa";
        actor.innerText = "PawanKalyan, Ileana";
        musicdir.innerText = "DSP";
        picture.src = "photo2.png";
        changeAudioSource("Jalsa.mp3");
    }
};

next.addEventListener("click", () => {
    holder = (holder + 1) % 3;
    changeSong();
});

before.addEventListener("click", () => {
    holder = (holder - 1 + 3) % 3;
    changeSong();
});
