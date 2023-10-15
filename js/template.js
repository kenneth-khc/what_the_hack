// Drag the pop-up tab, when click on the header
var pop_ups = document.querySelectorAll(".pop-up");
var zIndexCounter = 1;

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

