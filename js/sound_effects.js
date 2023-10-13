const dog_img = document.getElementsByClassName("images");
const dog_audio = document.getElementById("bark");

for (var i = 0; i < dog_img.length; i++) {
	dog_img[i].addEventListener("click", function() {
		dog_audio.play();
	});
}

const cat_img = document.getElementById("popup_trigger");
const cat_audio = document.getElementById("meow");

cat_img.addEventListener("click", function() {
	cat_audio.play();
});