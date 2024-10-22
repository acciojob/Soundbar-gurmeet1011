//your JS code here. If required.
// Select all buttons with class 'btn'
const buttons = document.querySelectorAll('.btn');
// Stop button
const stopButton = document.querySelector('.stop');

// Store the currently playing audio
let currentAudio = null;

// Add event listeners to all buttons to play respective sounds
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the sound name from the data attribute
        const soundName = button.getAttribute('data-sound');
        // Path to the sound file
        const soundPath = `./C:/Users/gurme/Desktop/sounds/${soundName}.mp3`;

        // Stop the current audio if playing
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Create a new audio object and play the sound
        currentAudio = new Audio(soundPath);
        currentAudio.play();
    });
});

// Stop the currently playing sound when the stop button is pressed
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset audio to start
        currentAudio = null; // Clear current audio
    }
});
