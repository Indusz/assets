function toggleMute() {
    var video = document.getElementById('video');
    var audio = document.getElementById('audio');
    if (video.muted) {
        video.muted = false;
        audio.muted = true;
    } else {
        video.muted = true;
        audio.muted = false;
    }
}
