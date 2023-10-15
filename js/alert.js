function fixErrorTab() {
    // Drag the pop-up tab, when click on the header
    var header = document.querySelector(".pop-up > .header");

    function onMouseDown(e)
    {
        var close_button = document.querySelector(".pop-up > .header > .controls > button[aria-label='Close']");
        var close_button_rect = close_button.getBoundingClientRect();
        if (e.clientX >= close_button_rect.left
        && e.clientX <= close_button_rect.right
        && e.clientY >= close_button_rect.top
        && e.clientY <= close_button_rect.bottom) {
            return; // If mouse is over close button, do nothing
        }

        var pop_up = document.querySelector(".pop-up");
        pop_up.style.position = "absolute";
        header.style.cursor = "move";

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
            header.style.cursor = "auto";
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    header.addEventListener("mousedown", onMouseDown);

    // Change cursor to draggable icon when click on the header
    var pop_up = document.querySelector(".pop-up");

    pop_up.addEventListener("mousemove", function(e) {
        var rect = this.getBoundingClientRect();
        var borderWidth = 6; // Adjust this value to match your border width

        var isNearLeftEdge = e.clientX >= rect.left && e.clientX <= rect.left + borderWidth;
        var isNearRightEdge = e.clientX >= rect.right - borderWidth && e.clientX <= rect.right;
        var isNearTopEdge = e.clientY >= rect.top && e.clientY <= rect.top + borderWidth;
        var isNearBottomEdge = e.clientY >= rect.bottom - borderWidth && e.clientY <= rect.bottom;

        if (isNearLeftEdge || isNearRightEdge) {
            this.style.cursor = "ew-resize";
        } else if (isNearTopEdge || isNearBottomEdge) {
            this.style.cursor = "ns-resize";
        } else {
            this.style.cursor = "auto";
        }
    });

    // Delete pop-up tab when click on the fix button
    var close_button = document.querySelector(".pop-up > .content > .buttons > button:first-child");

    close_button.addEventListener("click", function(e) {
        pop_up.remove();
    })

    // Minimize when click on the x button, set display to none
    var minimize_button = document.querySelector(".pop-up > .header > .controls > button[aria-label='Close']");
    var pop_up_body = document.querySelector(".pop-up > .content")
    var original_display = pop_up_body.style.display;

    minimize_button.addEventListener("click", function(e) {
        if (pop_up_body.style.display == "none") {
            pop_up_body.style.display = original_display;
        } else {
            pop_up_body.style.display = "none";
        }
    })
}

fixErrorTab();