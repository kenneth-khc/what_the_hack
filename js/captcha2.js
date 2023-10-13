window.onload = function () {
	randomize();
};

function randomize() {
	const container = document.getElementsByTagName("BODY")[0];
	const popup = document.getElementById("popup");
	const cat_audio = document.getElementById("meow");

	
	const image = document.createElement("img")
	image.src = "images/blepping-PaleSketches01-e1532597339182.jpeg";
	image.style.width = "10px";
	image.style.height = "10px";
	image.style.position = "absolute";
	
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	const randomTop = Math.floor(Math.random() * (containerHeight - 100));
	const randomLeft = Math.floor(Math.random() * (containerWidth - 100));
	image.style.top = randomTop + "px";
	image.style.left = randomLeft + "px";
	
	image.addEventListener("click", function() {
		cat_audio.volume = 0.5;
		cat_audio.play();
		popup.style.display = "block";
		setTimeout(function() {
			window.open("https://www.youtube.com/watch?v=elaSoKe1gFw");
		}, 5000);
	});

	image.addEventListener("mouseenter", function() {
		image.style.transition = "transform 0.5s";
		image.style.transform = "scale(1.1)";
	});

	image.addEventListener("mouseleave", function() {
		image.style.transition = "transform 0.5s";
		image.style.transform = "scale(1)";
	});

	container.appendChild(image);
}