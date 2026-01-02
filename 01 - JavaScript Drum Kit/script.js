const key = window.addEventListener("keydown", (e) => {
    const keyChoice = e.key.toLowerCase();

    const visualKey = document.querySelector(`.key[data-key="${keyChoice}"]`)

    if (visualKey) {
        visualKey.classList.add("playing");

        setTimeout(() => {
            visualKey.classList.remove("playing")
        }, 200)
    }

    const sound = document.querySelector(`audio[data-key="${keyChoice}"]`)

    if (sound) {
        sound.currentTime = 0;
        sound.play()
    }
})