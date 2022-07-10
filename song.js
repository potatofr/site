var audio = document.getElementsByTagName("audio")[0];
audio.play();

// or with an ID

var audio = document.getElementById("song");
audio.play();

var audio = $("#song")[0];
audio.play();

var audio = $("#song")[0];
$("nav a").mouseenter(function() {
  audio.play();
});