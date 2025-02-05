
//form

document.getElementById('tv-input').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevents the form from refreshing the page
    
    const keywordInput = document.getElementById('keywordInput');  // Get the input element
    const secretWord = keywordInput.value;  // Get the value of the input

    const response = await fetch('http://localhost:3000/check-secret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret_word: secretWord })
    });

    const result = await response.json();  // Get the JSON response from the backend
    
    keywordInput.placeholder = result.message;  // Replace placeholder text with response
    keywordInput.value = '';  // Clear the input field
});
