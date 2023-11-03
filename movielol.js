function toggleMute() {
    var video = document.getElementById('video');
    var audio = document.getElementById('audio');
    if (video.muted) {
        video.muted = false;
        audio.muted = true;
        notification('Video unmuted, audio muted');
    } else {
        video.muted = true;
        audio.muted = false;
        notification('Video muted, audio unmuted');
    }
}
