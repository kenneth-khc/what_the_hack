const start_minutes = 10;
let time_in_sec = start_minutes * 60;

const countdown_element = document.getElementById("timer");

setTimeout(function() {
	setInterval(countdown_timer, 1000)
}, 1000);

function countdown_timer() {
	if (time_in_sec <= 0)
		time_in_sec = 0;
	const minutes = Math.floor(time_in_sec / 60);
	let seconds = time_in_sec % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdown_element.innerHTML = `${minutes}:${seconds}`;
	time_in_sec--;
}

const password = document.getElementById("input_field");
const input = document.getElementById("feedback_field");
const audio = document.getElementById("meow");
audio.playbackRate = 1.5;

input.addEventListener("keypress", function() {
	audio.currentTime = 0;
	audio.play();
});

input.addEventListener("keyrelease", function() {
	audio.currentTime = 0;
	audio.play();
});

password.addEventListener("keypress", function() {
	audio.currentTime = 0;
	audio.play();
});

password.addEventListener("keyrelease", function() {
	audio.currentTime = 0;
	audio.play();
});
