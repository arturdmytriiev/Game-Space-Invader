const shootSoundsButton = document.getElementById("shootSoundsButton");
const lodShootSound = document.getElementById("lodShootSound");
const invaderShootSound = document.getElementById("invaderShootSound");

function toggleBackgroundMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        bgMusicButton.src = "./space/35.png";
    } else {
        backgroundMusic.pause();
        bgMusicButton.src = "./space/34.png";
    }
}
backgroundMusic.volume = 0.5;
backgroundMusic.play();

function toggleLodShootSound() {
    const lodShootSound = document.getElementById("lodShootSound");
    lodShootSound.muted = !lodShootSound.muted;
}

function toggleInvaderShootSound() {
    const invaderShootSound = document.getElementById("invaderShootSound");
    invaderShootSound.muted = !invaderShootSound.muted;
}

function toggleShootSounds() {
    toggleLodShootSound();
    toggleInvaderShootSound();


    if (lodShootSound.muted && invaderShootSound.muted) {
        shootSoundsButton.src = "./space/34.1.png";
    } else {
        shootSoundsButton.src = "./space/35.1.png";
    }
}

function playLodShootSound() {
    const lodShootSound = document.getElementById("lodShootSound");
    lodShootSound.currentTime = 0;
    lodShootSound.play();
}


function playInvaderShootSound() {
    const invaderShootSound = document.getElementById("invaderShootSound");
    invaderShootSound.currentTime = 0;
    invaderShootSound.play();
}