require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow frontend to communicate with backend
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Secret words loaded from environment variables
const cassoWords = {
    "paragon": process.env.SECRET_PARAGON,
    "hugo": process.env.SECRET_HUGO,
    "find": process.env.SECRET_FIND,
    "found": process.env.SECRET_FOUND,
    "locate": process.env.SECRET_LOCATE,
    "alco": process.env.SECRET_ALCO,
    "fuck": process.env.SECRET_FUCK,
    "shit": process.env.SECRET_SHIT,
    "bitch": process.env.SECRET_BITCH,
    "penis": process.env.SECRET_PENIS,
    "fucking": process.env.SECRET_FUCKING,
    "shitting": process.env.SECRET_SHITTING,
    "faggot": process.env.SECRET_FAGGOT,
    "pussy": process.env.SECRET_PUSSY,
    "piss": process.env.SECRET_PISS,
    "pissing": process.env.SECRET_PISSING,
    "ass": process.env.SECRET_ASS,
    "poop": process.env.SECRET_POOP,
    "pee": process.env.SECRET_PEE

};

// POST route to check secret word
app.post('/check-secret', (req, res) => {
    const userInput = req.body.secret_word.toLowerCase(); // Convert input to lowercase for consistency

    if (cassoWords[userInput]) {
        res.json({ message: cassoWords[userInput] }); // Send response based on valid secret word
    } else {
        res.json({ message: "Invalid" }); // Invalid secret word
    }
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));

