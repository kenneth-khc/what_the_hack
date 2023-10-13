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