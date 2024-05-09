// video.js

document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('.video');
    const playButton = document.querySelector('.switch-btn span:nth-child(1)');
    const pauseButton = document.querySelector('.switch-btn span:nth-child(2)');

    playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    });

    pauseButton.addEventListener('click', function() {
        video.pause();
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline-block';
    });
});
