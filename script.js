

// MUSIC //

const songs = [
    { url: "audio/bluevelvet.mp3", title: "Blue Velvet", artist: "Bobby Vinton" },
    { url: "audio/chetbaker1.mp3", title: "I Get Along Without You Very Well (Except Sometimes)", artist: "Chet Baker" },
    { url: "audio/doris.mp3", title: "Dream A Little Dream of Me", artist: "Doris Day" },
    { url: "audio/eotw.mp3", title: "The End of the World", artist: "Skeeter Davis" },
    { url: "audio/hurt.mp3", title: "You Always Hurt The One You Love", artist: "The Mills Brothers" },
    { url: "audio/stardust.mp3", title: "Stardust", artist: "Nat King Cole" }
];

let currentIndex = 0;
let audio = new Audio();
let isPlaying = false;

document.getElementById("play-music").addEventListener("click", function() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        const song = songs[currentIndex];
        audio.src = song.url;
        audio.play();
        isPlaying = true;

    
        showPopup(song.title, song.artist);

      
        currentIndex = (currentIndex + 1) % songs.length;
    }
});

audio.addEventListener("ended", function() {
    isPlaying = false;
    document.getElementById("play-music").textContent = "Play Music";
});

function showPopup(title, artist) {
    const popup = document.getElementById("music-popup");
    const songTitleElement = document.getElementById("popupTitle");
    const artistNameElement = document.getElementById("popupArtist");

    popup.style.opacity = "1"; 
    popup.style.display = "block";


    if (title.length > 20) {
        songTitleElement.innerHTML = `<span class="scrolling-title">${title}</span>`;
    } else {
        songTitleElement.innerHTML = title;
    }

 
    artistNameElement.textContent = artist;

 
    const scrollTime = 6; 
    const fadeTime = 1.5; 

    setTimeout(() => {
        popup.style.animation = `fadeOut ${fadeTime}s forwards`;
        setTimeout(() => {
            popup.style.display = "none";
            popup.style.animation = ""; 
        }, fadeTime * 1000);
    }, scrollTime * 1000);
}




//  entersubmit //

//KEYWORDS//


