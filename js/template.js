// Drag the pop-up tab, when click on the header
var pop_ups = document.querySelectorAll(".pop-up");
var zIndexCounter = 1;
const abc = document.getElementById("type1");

function onMouseDown(e)
{
    var target = e.target
    var pop_up = target.parentNode;

    if (target.classList.contains("header")) {
        var close_button = target.querySelector(".controls > button[aria-label='Close']");
        var close_button_rect = close_button.getBoundingClientRect();
        if (e.clientX >= close_button_rect.left
        && e.clientX <= close_button_rect.right
        && e.clientY >= close_button_rect.top
        && e.clientY <= close_button_rect.bottom) {
            return; // If mouse is over close button, do nothing
        }

        target.style.cursor = "move";
        // pop_up.style.zIndex = zIndexCounter;
        // zIndexCounter++;

        var offsetX = e.clientX - pop_up.offsetLeft;
        var offsetY = e.clientY - pop_up.offsetTop;

        function onMouseMove(e) {
            var x = e.pageX;
            var y = e.pageY;
    
            pop_up.style.left = (x - offsetX) + "px";
            pop_up.style.top = (y - offsetY) + "px";
        }
    
        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            if (target.classList.contains("header")) {
                target.style.cursor = "auto";
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    } // End of header settings
}

function features(pop_up) {
    pop_up.addEventListener("mousedown", function(e) {
        onMouseDown(e);
    });
    // Click functionality
    pop_up.addEventListener("click", function(e) {
        var target = e.target;
        // Duplicate functionaility
        if (target.getAttribute("aria-label") == "Close")
        {
            var pop_up = target.closest(".pop-up");
            var original_div = pop_up.cloneNode(true);

            // Generate random top and left values
            var randomTop = Math.floor(Math.random() * (window.innerHeight - original_div.offsetHeight));
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - original_div.offsetWidth));

            original_div.style.position = "absolute";
            original_div.style.top = randomTop + "px";
            original_div.style.left = randomLeft + "px";
            original_div.style.display = "initial";

            document.body.insertBefore(original_div, pop_up);
            features(original_div);

            var audio = pop_up.querySelector(".header > .controls > #mysound");
            function toggleAudio() {
                audio.currentTime = 0;
                audio.play();
            }
            toggleAudio();
        }
    });

    // put above the other tab, by adding z-index
    pop_up.addEventListener("mousedown", function() {
        pop_up.style.zIndex = zIndexCounter;
        zIndexCounter++;
    });
}

pop_ups.forEach(function(pop_up) {
    features(pop_up);
})

let i = 0;
let text = "oh hi there !!\n\nthank you and welcome to our page ♥\n\n\
we would like to thank the bocals for organizing this hackathon!\n\n\
It's been a really fun and enjoyable experience to join one albeit \
it's not really a \"real\" hackathon.\nthroughout the entire process \
we have really learnt a lot from coding in a new language to working \
together as a team.\n\nFrom this day onwards will definitely muster up our courage to \
join a real one next time!\n\nNow please enjoy the website ♥\n\n\
thank you all so much !! (P.S thanks to Zhen Min for calling us out.)";
let speed = 50;
const audio = document.getElementById("type1");
const virus = document.getElementById("virus_gif");
const our_page = document.createElement("img");
const song1 = document.getElementById("song1");
our_page.src = "test/Communist_Bugs_Bunny_Banner.jpeg";
our_page.style.width = "100vw";
our_page.style.height = "100vh";
our_page.style.position = "absolute";
our_page.style.opacity = "0.5";
our_page.style.zIndex = "100";
let virus2 = virus.cloneNode(false);
virus2.style.display = "block";
virus2.style.borderRadius = "10px 10px 0 0";
audio.currentTime = 1;
var flag = 0;
var flag2 = 0;
const login = document.getElementById("login");
const requirement = document.getElementById("requirement");

function type() {
    if (i < text.length) {
        if (text.charAt(i) == '\n') {
            document.getElementById("text").innerHTML += "<br>";
        }
		else {
            document.getElementById("text").innerHTML += text.charAt(i);
            audio.play();
        }
        if (i == 40)
        {
            document.body.appendChild(our_page);
            setTimeout(function() {
                document.body.removeChild(our_page);
            }, 100);
        }
        i++;
		setTimeout(type, speed);
	}
    else if (flag == 0)
    {
        audio.pause();
        flag = 1;
        setTimeout(function() {
            document.body.appendChild(virus2);
            setTimeout(function() {
                document.body.removeChild(virus2);
                flag = 0;
            }, 5650);
        }, 100);
    }
    if (i >= text.length && flag2 == 0)
    {
        flag2 = 1;
        let bodyWidth = document.body.clientWidth;
        let bodyHeight = document.body.clientHeight;
        let randomTop = Math.floor(Math.random() * (bodyHeight - 100));
        let randomLeft = Math.floor(Math.random() * (bodyWidth - 100));
        login.style.top = randomTop + "px";
        login.style.left = randomLeft + "px";
        login.style.display = "initial";
        randomTop = Math.floor(Math.random() * (bodyHeight - 100));
        randomLeft = Math.floor(Math.random() * (bodyWidth - 100));
        requirement.style.top = randomTop + "px";
        requirement.style.left = randomLeft + "px";
        requirement.style.display = "initial";
    }
};


document.addEventListener("click", type);
document.addEventListener("click", function() {
    song1.play();
})
