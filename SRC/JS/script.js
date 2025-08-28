// script.js Equalizer

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("js-audio");
  const playBtn = document.getElementById("js-play-btn");
  const eq = document.getElementById("js-equalizer");

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          eq.classList.add("equalizer--playing");
          playBtn.textContent = "Stop";
        })
        .catch((err) => console.error("Erreur de lecture audio :", err));
    } else {
      audio.pause();
      eq.classList.remove("equalizer--playing");
      playBtn.textContent = "Play";
    }
  });
  audio.addEventListener("ended", () => {
    eq.classList.remove("equalizer--playing");
    playBtn.textContent = "Play";
  });
});
