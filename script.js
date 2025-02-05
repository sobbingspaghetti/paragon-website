
//form

document.getElementById('tv-input').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevents the form from refreshing the page
    
    const keywordInput = document.getElementById('keywordInput');  // Get the input element
    const secretWord = keywordInput.value;  // Get the value of the input
    const errorSound = document.getElementById('error-sound'); // Get the audio element

    const response = await fetch('http://localhost:3000/check-secret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret_word: secretWord })
    });

    const result = await response.json();  // Get the JSON response from the backend

    
    keywordInput.placeholder = result.message;  // Replace placeholder text with response
    keywordInput.value = '';  // Clear the input field
});



//music

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
