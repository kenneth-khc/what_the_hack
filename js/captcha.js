const dog_img = document.getElementsByClassName("images");
const dog_audio = document.getElementById("bark");

for (var i = 0; i < dog_img.length; i++) {
	dog_img[i].addEventListener("click", function() {
		dog_audio.play();
	});
}
