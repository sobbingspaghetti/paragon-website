let targetX = 0; // Target position for the background
let currentX = 0; // Current position of the background
const speed = 0.05; // How fast the background moves

// This function will calculate the movement dynamically based on the window width
function handleMouseMove(e) {
    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;

    // Define the threshold for moving the background (e.g., 50px from the edges)
    const edgeThreshold = 50;

    // Check if the cursor is near the left or right edge of the window
    if (mouseX <= edgeThreshold || mouseX >= windowWidth - edgeThreshold) {
        // Calculate target position for the background based on mouse position
        targetX = (mouseX / windowWidth) * 11; // The percentage position of the mouse
    }
}

// Smooth animation of background based on currentX and targetX
function animateBackground() {
    const background = document.querySelector('.background');
    

    //transition currentX towards the targetX
    currentX += (targetX - currentX) * speed;

    //smooth transform
    background.style.transform = `translateX(-${currentX}%)`;

    // Request next frame
    requestAnimationFrame(animateBackground);
}

// Set up the event listener for mousemove
document.addEventListener('mousemove', handleMouseMove);

// Start the animation loop
animateBackground();





//form

document.getElementById('tv-input').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevents the form from refreshing the page
    
    const secretWord = document.getElementById('keywordInput').value;  // Get the value of the input
    
    const response = await fetch('http://localhost:3000/check-secret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret_word: secretWord })
    });

    const result = await response.json();  // Get the JSON response from the backend
    document.getElementById('answer').innerText = result.message;  // Display the message
});



