const popup_trigger = document.getElementById("popup_trigger");
const popup = document.getElementById("popup");

popup_trigger.addEventListener("click", function() {
	popup.style.display = "block";
	setTimeout(function() {
		window.open("https://www.youtube.com/watch?v=elaSoKe1gFw");
	}, 5000);
});
