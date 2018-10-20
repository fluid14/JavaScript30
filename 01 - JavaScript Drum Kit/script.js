let onKeyDown = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

let onKeyUp = (e) => {
    const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.remove("playing");
}

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);