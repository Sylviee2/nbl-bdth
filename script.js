var btnOpenPopup = document.getElementById('btnOpenPopup');
var popupContainer = document.getElementById('popupContainer');
var btnClosePopup = document.getElementById('btnClosePopup');

btnOpenPopup.addEventListener('click', function() {
popupContainer.style.display = 'block';
});

btnClosePopup.addEventListener('click', function() {
popupContainer.style.display = 'none';
});

function playAudio() {
var audio = document.getElementById("myAudio");
audio.play();
}


var stopButton = document.getElementById("btnClosePopup");


stopButton.addEventListener("click", function() {

});

stopButton.addEventListener("click", function() {
var audio = document.getElementById("myAudio");
audio.pause();
});

