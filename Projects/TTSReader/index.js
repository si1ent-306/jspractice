// Set up the speech synthesis object
let speech = new SpeechSynthesisUtterance();
let voices = []; // Array to store available voices

// Grab elements by their IDs
const voiceSelect = document.getElementById("select-accent");
const textInput = document.getElementById("tts-input");
const ttsButton = document.getElementById("tts-button");

// Function to populate the dropdown with available voices
function populateVoices() {
    // Get the list of available voices
    voices = window.speechSynthesis.getVoices();

    // Clear the dropdown and populate it with the available voices
    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        // Create an option for each voice
        const option = new Option(`${voice.name} (${voice.lang})`, i);
        voiceSelect.options.add(option);
    });

    // Set the default voice if there are any available
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

// Load the voices when the page loads or when the voiceschanged event is fired
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = populateVoices;
}
populateVoices(); // Call in case onvoiceschanged doesn't fire

// Change the voice based on the dropdown selection
voiceSelect.addEventListener("change", () => {
    // Get the selected index
    const selectedIndex = parseInt(voiceSelect.value, 10);

    // Update the speech synthesis voice
    speech.voice = voices[selectedIndex];
});

// Speak the text when the button is clicked
ttsButton.addEventListener("click", () => {
    // Stop any ongoing speech
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    // Set the text to the input value and start speaking
    speech.text = textInput.value;
    window.speechSynthesis.speak(speech);
});

// Retry voice loading if the voices array is empty
if (voices.length === 0) {
    setTimeout(populateVoices, 500); // Retry after 500ms if voices aren't loaded yet
}