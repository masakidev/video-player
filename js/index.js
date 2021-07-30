const $backward = document.getElementById('backward');
const $play = document.getElementById('play');
const $pause = document.getElementById('pause');
const $forward = document.getElementById('forward');
const $video = document.getElementById('video');
const $progress = document.getElementById('progress');

$backward.addEventListener('click', handleBackward);
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput);

function handleBackward() {
    $video.currentTime -= 10;
}

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function handleForward() {
    $video.currentTime += 10;
}

function handleLoaded() {
   $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

function handleInput() {
    $video.currentTime = $progress.value;
}