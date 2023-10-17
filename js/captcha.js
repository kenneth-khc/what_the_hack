const dog_img = document.getElementsByClassName("images");
const dog_audio = document.getElementById("bark");

for (let i = 0; i < dog_img.length; i++) {
	dog_img[i].addEventListener("click", function() {
		dog_audio.currentTime = 0;
		dog_audio.play();
		this.style.cursor = "wait";
	});
	dog_img[i].addEventListener("mouseenter", function() {
		this.style.cursor = "pointer";
	});
}

const popup = document.getElementById("popup");
const cat_audio = document.getElementById("meow");

window.onload = function () {
	randomize();
};

function randomize() {
	const container = document.getElementsByTagName("BODY")[0];
	const image = document.createElement("img")

	image.src = "images/blepping-PaleSketches01-e1532597339182.jpeg";
	image.style.width = "10px";
	image.style.height = "10px";
	image.style.position = "absolute";
	image.style.zIndex = "1000";

	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	const randomTop = Math.floor(Math.random() * (containerHeight - 100));
	const randomLeft = Math.floor(Math.random() * (containerWidth - 100));
	image.style.top = randomTop + "px";
	image.style.left = randomLeft + "px";
	
	image.addEventListener("click", function() {
		grrr.remove();
		cat_audio.currentTime = 0;
		cat_audio.volume = 0.5;
		cat_audio.play();
		popup.style.display = "flex";
		setTimeout(function() {
			location.replace("welcome.html");
		}, 5000);
	});

	image.addEventListener("mouseenter", function() {
		image.style.transition = "transform 0.5s";
		image.style.transform = "scale(1.5)";
	});

	image.addEventListener("mouseleave", function() {
		image.style.transition = "transform 0.5s";
		image.style.transform = "scale(1)";
	});

	container.appendChild(image);
}

setInterval(function() {
	if (popup.style.display != "flex")
	{
		if (window.confirm('Congratulations you just won an iphone15.!\n\
Please proceed here to claim your reward:\nhttps://shorturl.at/qDG36'))
			window.location.href='https://www.youtube.com/watch?v=xvFZjo5PgG0';
	}
}, 5000);

let text = "VERIFY U A CAT OR ELSE!!!111"
let i = 0;
let speed = 50;
let catGun = document.createElement("img");
const grrr = document.getElementById("grrr");
grrr.loop = true;
catGun.src = "images/Untitled.png"
catGun.style.position = "absolute";
catGun.style.zIndex = "101";

function type() {
    if (i < text.length) {
		document.getElementById("VERIFICATION").innerHTML += text.charAt(i);
        i++;
		setTimeout(type, speed);
	}
	else
	{
		document.getElementById("VERIFICATION").appendChild(catGun);
		setTimeout(function() {
			document.body.removeChild(document.getElementById("VERIFICATION"));
		}, 2500);
	}
}

setTimeout(type, 0);

document.addEventListener("click", function() {
	grrr.play();
});
