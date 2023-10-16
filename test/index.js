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

let i = 0;
let text = "oh hi there !!\nthank you and welcome to our page ♥\n\
we would like to thank the bocals for organizing this hackathon!\n\
It's been a really fun and enjoyable experience to join one albeit \
it's not\nreally a \"real\" hackathon.\nthroughout the entire process \
we have really learnt a lot from coding in\na new language to working \
together as a team.\nFrom this will definitely muster up our courage to \
join a real one next time!\n\nNow please enjoy the website ♥\n\n\
thank you all so much !!";
let speed = 50;

function type() {
	if (i < text.length) {
		if (text.charAt(i) == '\n')
			document.getElementById("text_content").innerHTML += "<br>";
		else
			document.getElementById("text_content").innerHTML += text.charAt(i);
		i++;
		setTimeout(type, speed);
	}
};

document.getElementById("text_content").addEventListener("load", type());