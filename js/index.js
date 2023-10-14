const start_minutes = 10;
let time_in_sec = start_minutes * 60;

const countdown_element = document.getElementById("timer");

setTimeout(function() {
	setInterval(countdown_timer, 1000)
}, 1000);

function countdown_timer() {
	const minutes = Math.floor(time_in_sec / 60);
	let seconds = time_in_sec % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdown_element.innerHTML = `${minutes}:${seconds}`;
	time_in_sec--;
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const audio = document.getElementById("meow");
audio.playbackRate = 2.0;

username.addEventListener("keypress", function() {
	audio.play();
});

username.addEventListener("keyrelease", function() {
	audio.play();
});

password.addEventListener("keypress", function() {
	audio.play();
});

password.addEventListener("keyrelease", function() {
	audio.play();
});
