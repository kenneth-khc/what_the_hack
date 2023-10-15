const ok = document.getElementById("ok");
const error_sound = document.getElementById("error_sound");

ok.addEventListener("click", popup);

function popup() {
	const container1 = document.createElement("div");
	container1.id = "container1";
	container1.style.width = "400px";
	container1.style.height = "200px";
	container1.style.position = "absolute";
	container1.style.zIndex = "100";
	
	const container2 = document.createElement("div");
	container2.id = "container2";
	container2.style.padding = "5px";
	container2.style.backgroundClip = "content-box";
	container2.style.background = "linear-gradient(#0059ed,#0812b4)"
	container2.style.width = "400px";
	container2.style.height = "200px";
	container2.style.borderRadius = "10px 10px 0 0";
	container2.style.display = "flex";
	container2.style.justifyContent = "center";
	container2.style.alignItems = "flex-end";
	container2.style.position = "absolute";
	container2.style.zIndex = "1";
	container1.appendChild(container2);

	const c2_content1 = document.createElement("div");
	c2_content1.id = "c2_content1";
	c2_content1.style.background = "#f8f6e6";
	c2_content1.style.width = "400px";
	c2_content1.style.height = "170px";
	c2_content1.style.display = "flex";
	c2_content1.style.justifyContent = "center";
	c2_content1.style.margin = "0px";
	container2.appendChild(c2_content1);

	const message2 = document.createElement("p");
	message2.id = "message2";
	message2.textContent = "Task failed successfully."
	c2_content1.appendChild(message2);

	const container3 = document.createElement("div");
	container3.id = "container3";
	container3.style.display = "flex";
	container3.style.justifyContent = "center";
	container3.style.position = "relative";
	container3.style.top = "150px";
	container3.style.zIndex = "4";
	container1.appendChild(container3);
	
	const ok = document.createElement("button");
	ok.id = "ok";
	ok.textContent = "OK";
	ok.style.backgroundColor = "#f8f6e6";
	ok.style.width = "4rem";
	ok.style.height = "1.5rem";
	container3.appendChild(ok);
	
	const close = document.createElement("button");
	close.id = "close";
	close.style.backgroundImage = "url(png-transparent-button-computer-icons-window-scalable-graphics-browse-and-close-button-s-miscellaneous-angle-text-thumbnail.png)";
	close.style.width = "30px";
	close.style.height = "24px";
	close.style.left = "374px";
	close.style.top = "-28px";
	close.style.backgroundSize = "contain";
	close.style.backgroundRepeat = "no-repeat";
	close.style.borderRadius = "10px";
	close.style.border = "0px";
	close.style.margin = "0px";
	close.style.padding = "0px";
	container1.appendChild(close);

	const message1 = document.createElement("p");
	message1.id = "message1";
	message1.textContent = "Error";
	message1.style.font = "1.1em Tahoma";
	message1.style.top = "-54px";
	message1.style.left = "12px";
	message1.style.color = "white";
	message1.style.border = "black";
	message1.style.margin = "0px";
	message1.style.position = "relative";
	message1.style.zIndex = "3";
	message1.style.textShadow = "0.4px 0.4px white";
	container1.appendChild(message1);

	const error_icon = document.createElement("img");
	error_icon.id = "error_icon";
	error_icon.src = "cfcb439a-1b88-4790-9898-e0fbc354aa7f-1666643160117.png";
	error_icon.style.width = "120px";
	error_icon.style.height = "100px";
	error_icon.style.top = "-55px";
	error_icon.style.position = "relative";
	error_icon.style.zIndex = "2";
	error_icon.style.margin = "0px";
	container1.appendChild(error_icon);
	
	const body = document.getElementsByTagName("BODY")[0];
	const bodyWidth = body.clientWidth;
	const bodyHeight = body.clientHeight;
	const randomTop = Math.floor(Math.random() * (bodyHeight - 100));
	const randomLeft = Math.floor(Math.random() * (bodyWidth - 100));
	container1.style.top = randomTop + "px";
	container1.style.left = randomLeft + "px";
	body.appendChild(container1);
	error_sound.currentTime = 0;
	error_sound.play()
}