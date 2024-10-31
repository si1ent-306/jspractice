const selectAccent = document.getElementById('select-accent');
function makeTTS() {
    const input = document.getElementById('tts-input');
    const text = input.value;
    const selectedAccent = selectAccent.value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getVoice(selectedAccent);
    window.speechSynthesis.speak(utterance);
}

function getVoice(accent) {
    // Define the voices for each accent
    const voices = {
        'american-male': 'Google US English Male',
        'british-male': 'Google UK English Male',
        'american-female': 'Google US English Female',
        'british-female': 'Google UK English Female',
    };
    return voices[accent];
}