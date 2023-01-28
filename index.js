const drums = document.querySelectorAll('.drum');
drums.forEach((drum) => {
    drum.addEventListener('click', () => {
        playAudio(drum.textContent)
        pressed(drum)
    });

});

document.body.addEventListener("keydown", (e) => {
    const drum = document.querySelector(`.${e.key}`);
    playAudio(`${e.key}`);
    pressed(drum);
});
function pressed(drum) {
    drum.classList.add('pressed');
    setTimeout(() => {
        drum.classList.remove('pressed');
    }, 100)
}
function playAudio(id) {
    let sound;
    switch (id) {
        case 'w':
            sound = new Audio('./sounds/crash.mp3');
            break;
        case 'a':
            sound = new Audio('./sounds/kick-bass.mp3');
            sound.play();
            break;
        case 's':
            sound = new Audio('./sounds/snare.mp3');
            sound.play();
            break;
        case 'd':
            sound = new Audio('./sounds/tom-1.mp3');
            break;
        case 'j':
            sound = new Audio('./sounds/tom-2.mp3');
            sound.play();
            break;
        case 'k':
            sound = new Audio('./sounds/tom-3.mp3');
            sound.play();
            break;
        case 'l':
            sound = new Audio('./sounds/tom-4.mp3');
            sound.play();
            break;
        default:
            break;
    }
}