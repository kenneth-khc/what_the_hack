const ok = document.getElementById("ok");
const error_sound = document.getElementById("error_sound");

ok.addEventListener("click", popup);

function popup(e) {
	const body = document.getElementsByTagName("BODY")[0];
	const pop_up = document.createElement("div");
	pop_up.className = "pop-up";
	pop_up.style.background = "linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, \
#06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7)"
	pop_up.style.width = "260px"
	pop_up.style.padding = "0px 5px 3px 3px";
	pop_up.style.borderTop = "1px solid #0831d9";
	pop_up.style.borderRight = "1px solid #001ea0";
	pop_up.style.borderLeft = "1px solid #0831d9";
	pop_up.style.borderTopLeftRadius = "8px";
	pop_up.style.borderTopRightRadius = "7px";
	pop_up.style.boxShadow = "inset -1px -1px #00138c, \
inset 1px 1px #0831d9, \
inset -2px -2px #001ea0, \
inset 2px 2px #166aee, \
inset -3px -3px #003bda, \
inset 3px 3px #0855dd";
	pop_up.style.position = "absolute";
	pop_up.style.userSelect = "none";
	pop_up.style.zIndex = "100";
	
	const header = document.createElement("div");
	header.className = "header";
	header.style.height = "21px";
	header.style.padding = "3px 0px 3px 0px";
	header.style.display = "flex";
	header.style.justifyContent = "space-between";
	header.style.alignItems = "center";
	pop_up.appendChild(header);

	const title = document.createElement("p");
	title.className = "title";
	title.textContent = "Error";
	title.style.color = "#ffffff";
	title.style.fontWeight = "700";
	title.style.fontSize = "13px";
	title.style.fontFamily = "Trebuchet MS";
	title.style.letterSpacing = "0px";
	title.style.textShadow = "1px 1px #0f1089";
	title.style.paddingLeft = "3px";
	title.style.margin = "0px";
	header.appendChild(title);

	const controls = document.createElement("div");
	controls.className = "controls";
	controls.style.display = "flex";
	header.appendChild(controls);

	const close = document.createElement("button");
	close.ariaLabel = "Close";
	close.style.backgroundImage = "url(../icons/close.png)";
	close.style.backgroundColor = "#0050ee";
	close.style.backgroundRepeat = "no-repeat";
	close.style.backgroundPosition = "50%";
	close.style.minWidth = "21px";
	close.style.maxWidth = "21px";
	close.style.minHeight = "21px";
	close.style.maxHeight = "21px";
	close.style.marginLeft = "2px";
	close.style.border = "none";
	close.style.borderRadius = "4px";
	close.style.boxShadow = "none";
	close.style.cursor = "pointer";
	close.style.transition = "filter 0.1s box-shadow 0.1s";
	close.style.outline = "none";
	close.addEventListener("mouseenter", function() {
		close.style.filter = "brightness(1.2)";
	});
	close.addEventListener("mousedown", function() {
		close.style.boxShadow = "inset 10px 4px 4px rgba(0, 0, 0, 0.5), \
inset -10px -4px -4px rgba(0, 0, 0, 0.5)";
		close.style.filter = "brightness(0.9)";
	});
	close.addEventListener("mouseleave", function() {
		close.style.filter = "brightness(1.0)";
		close.style.boxShadow = "none";
	});
	close.addEventListener("mouseup", function() {
		close.style.filter = "brightness(1.0)";
		close.style.boxShadow = "none";
	});
	controls.appendChild(close);

	const content = document.createElement("div");
	content.className = "content";
	content.style.fontSize = "12px";
	content.style.fontFamily = "Arial, Helvetica, sans-serif";
	content.style.color = "#222";
	content.style.backgroundColor = "#ece9d8";
	content.style.padding = "8px 6px 8px";
	content.style.display = "flex";
	content.style.flexDirection = "column";
	pop_up.appendChild(content);
	
	const message = document.createElement("div");
	message.className = "message";
	message.style.display = "grid";
	message.style.gridTemplateColumns = "1fr 4fr";
	message.style.placeItems = "center";
	content.appendChild(message);
	
	const alert = document.createElement("img");
	alert.src = "../icons/alert.png";
	alert.style.width = "32px";
	message.appendChild(alert);

	const message_content = document.createElement("p");
	message_content.textContent = "Click \"Fix\" to fix error";
	message_content.style.lineHeight = "1.5";
	message_content.style.justifySelf = "start";
	message.appendChild(message_content);

	const buttons = document.createElement("div");
	buttons.className = "buttons";
	buttons.style.display = "flex";
	buttons.style.justifyContent = "center";
	content.appendChild(buttons);
	
	const fix = document.createElement("button");
	fix.textContent = "Fix";
	fix.style.fontSize = "11px";
	fix.style.fontFamily = "\"Pixelated MS Sans Serif\", Arial";
	let currColor = fix.style.backgroundColor;
	fix.style.backgroundColor = "linear-gradient(180deg, #fff, #ecebe5 86%, #d8d0c4)";
	fix.style.minWidth = "75px";
	fix.style.minHeight = "23px";
	fix.style.marginLeft = "6px";
	fix.style.padding = "0px 12px";
	fix.style.border = "none";
	fix.style.borderRadius = "3px";
	fix.style.outline = "1px solid #003c74";
	fix.style.boxShadow = "none";
	fix.style.boxSizing = "border-box";
	let focusIn = false;
	let mouseJustLeft = false;
	let mouseClick = 0;
	fix.addEventListener("mousedown", function() {
		fix.style.backgroundColor = "#d4d4d4";
	});
	fix.addEventListener("focus", function() {
		fix.style.border = "2px solid #FFD700";
		focusIn = true;
	});
	fix.addEventListener("blur", function() {
		fix.style.border = "0px solid #d6e4f3";
	});
	fix.addEventListener("mouseleave", function() {
		if (focusIn == true)
			fix.style.border = "2px solid #d6e4f3";
		mouseJustLeft = true;
	});
	body.addEventListener("mouseup", function() {
		fix.style.backgroundColor = currColor;
	});
	fix.addEventListener("mouseenter", function() {
		if (focusIn == true)
			fix.style.border = "2px solid #FFD700";
	});
	body.addEventListener("click", function() {
		if (mouseClick >= 2)
		{
			fix.style.border = "none";
			focusIn = false;
			mouseClick = 0;
		}
		else if (mouseJustLeft == false)
		{
			fix.style.border = "none";
			focusIn = false;
		}
		else
			mouseJustLeft = false;
		mouseClick++;
	});
	buttons.appendChild(fix);

	const bodyWidth = body.clientWidth;
	const bodyHeight = body.clientHeight;
	const randomTop = Math.floor(Math.random() * (bodyHeight - 100));
	const randomLeft = Math.floor(Math.random() * (bodyWidth - 100));
	pop_up.style.top = randomTop + "px";
	pop_up.style.left = randomLeft + "px";
	body.appendChild(pop_up);
	error_sound.currentTime = 0;
	error_sound.play()
}