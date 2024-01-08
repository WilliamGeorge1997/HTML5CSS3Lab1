// Selecting Elements From Document
let progress = document.getElementById("progress");
let currentTime = document.getElementById('currentTime');
let totalTime = document.getElementById('totalTime');
let vid = document.getElementById("vid");
let play = document.getElementById("play");
let stopVid = document.getElementById("stop");
let start = document.getElementById("start");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let end = document.getElementById("end");
let mute = document.getElementById("mute");
let volume = document.getElementById("volume");
let oldVolume;
let speed = document.getElementById("speed");
let fullScreen = document.getElementById("fullScreen")
let currentVideoIndex = 0;
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
// ==================================================================
//Bonus buttons to go to next and pervious video and in end of video go to next one
  let videos = [
    "videos/frozen.mp4",
    "videos/frozen2.mp4",
    "videos/frozen3.mp4"
  ];
  function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    vid.src = videos[currentVideoIndex];
    vid.play();
  }

  function playPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    vid.src = videos[currentVideoIndex];
    vid.play();
  }
  function onVideoEnded() {
    playNextVideo();
  }
  nextButton.addEventListener("click", function(){
    playNextVideo()
  });
  previousButton.addEventListener("click", function(){
    playPreviousVideo()
  });
// ==================================================================
//Full screen video function
function fullScreenVideo(){
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.mozRequestFullScreen) {
    vid.mozRequestFullScreen();
  } else if (vid.webkitRequestFullscreen) {
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) {
    vid.msRequestFullscreen();
  }
}
fullScreen.addEventListener("click" , function(){
  fullScreenVideo()
})
// ==================================================================
//Time progress update function
function setProgressMax() {
    progress.max = vid.duration;
}
function updateProgress() {
    progress.value = vid.currentTime;
}
function updateVideoTime() {
    vid.currentTime = progress.value;
}

vid.addEventListener("loadedmetadata", function(){
  setProgressMax()
});
vid.addEventListener("timeupdate", function(){
  updateProgress()
});
progress.addEventListener("input", function(){
  updateVideoTime()
});
// ==================================================================
// Video update time 
function updateTimer() {
  let currentMinutes = Math.floor(vid.currentTime / 60);
  let currentSeconds = Math.floor(vid.currentTime % 60);
  let totalMinutes = Math.floor(vid.duration / 60);
  let totalSeconds = Math.floor(vid.duration % 60);

  let formattedCurrentTime = (currentMinutes < 10 ? '0' : '') + currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;
  let formattedTotalTime = (totalMinutes < 10 ? '0' : '') + totalMinutes + ':' + (totalSeconds < 10 ? '0' : '') + totalSeconds;

  currentTime.textContent = formattedCurrentTime;
  totalTime.textContent = formattedTotalTime;

  requestAnimationFrame(updateTimer);
}
updateTimer();
// ==================================================================
// Play function
function playVideo() {
  vid.play();
}

play.addEventListener("click", function () {
  playVideo();
});
// ==================================================================
//Stop Function
function pauseVideo() {
  vid.pause();
}

stopVid.addEventListener("click", function () {
  pauseVideo();
});
// ==================================================================
//Go To Begin Of Video
function startVideo() {
  vid.currentTime = 0;
}
start.addEventListener("click", function () {
  startVideo();
});
// ==================================================================
//Skip backward 5 seconds
function backwardVideo() {
  vid.currentTime = vid.currentTime - 5;
}
backward.addEventListener("click", function () {
  backwardVideo();
});
// ==================================================================
//Skip Forward 5 seconds
function forwardVideo() {
  vid.currentTime = vid.currentTime + 5;
}
forward.addEventListener("click", function () {
  forwardVideo();
});
// ==================================================================
//Go To End Of Video
function endVideo() {
  vid.currentTime = vid.duration;
}
end.addEventListener("click", function () {
  endVideo();
});
// ==================================================================
//Volume and mute 
function volumeControl() {
  vid.volume = volume.value;

  // Toggle button text based on volume level
  if (vid.volume > 0) {
    mute.textContent = "Mute";
  } else {
    mute.textContent = "Unmute";
  }
}
function muteVideo() {
  if (vid.volume > 0) {
    // Store the old volume before muting
    oldVolume = vid.volume;
    vid.volume = 0;
    volume.value = 0;
    mute.textContent = "Unmute";
  } else {
    // Restore the old volume
    vid.volume = oldVolume;
    volume.value = oldVolume;
    mute.textContent = "Mute";
  }
}
volume.addEventListener("input", function () {
  volumeControl();
});
mute.addEventListener("click", function () {
  muteVideo();
});
// ==================================================================
//Playback Speed rate chnage
function playBackSpeed() {
  vid.playbackRate = speed.value;
}
speed.addEventListener("input", function () {
  playBackSpeed();
});
