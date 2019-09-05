let video = null;

function playVideo(id) {
  if (video) {
    console.log(video.pid);
    stopVideo();
  }
  console.log('playing', id);
  video = child_process.exec('mpv http://www.youtube.com/watch?v=' + id + ' --no-video', function(error, stdout, stderr){}, error => {});
  video.addListener('close', stopVideo());
  video.addListener('error', stopVideo());
}

function stopVideo() {
  video = child_process.exec('killall mpv', function(error, stdout, stderr){});
  video.kill();
}
