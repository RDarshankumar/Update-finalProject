function togglePlayPause(videoId) {
  var video = document.getElementById(videoId);
  var button = document.querySelector(`#${videoId} + .playPauseBtn`);

  if (video.paused) {
    video.play();
    button.textContent = 'Pause';
  } else {
    video.pause();
    button.textContent = 'Play';
  }
}
