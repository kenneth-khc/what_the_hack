document.addEventListener('DOMContentLoaded', function() {
    var bg_song = document.getElementById('bg-song');

    // Wait for user interaction (e.g., click) to play the audio
    document.addEventListener('click', function() {
        bg_song.play();
    });

    var bg_flag = false;
    function openNewTab() {
        window.open("alert.html", "_blank"); // CHANGE THE LOCATION FOR THE NEXT PAGE
        if (bg_flag == false) {
            var body_style = document.body.style;
            body_style.backgroundImage = "url('gifs/crazy-cat-cat-crazy.gif')"
            body_style.backgroundRepeat = "repeat";
            body_style.backgroundSize = "500px auto"
            bg_flag = true;
        }

        // Change circle color
        var circle = document.querySelector('.circle');
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = 'rgba(';
            for (var i = 0; i < 3; i++) {
                color += Math.floor(Math.random() * 256) + ',';
            }
            var alpha = (Math.random() * (0.5 - 0.1) + 0.1).toFixed(2); // Random alpha between 0.1 and 0.5
            color += alpha + ')';
            return color;
        }
        
        function changeColorSmoothly() {
            var newColor = getRandomColor();
            circle.style.transition = 'background-color 0.5s ease'; // Define a transition
            circle.style.backgroundColor = newColor;
            setTimeout(function() {
                circle.style.transition = ''; // Reset transition after animation
            }, 500);
        }
        
        // Use the function to change color
        changeColorSmoothly();
        circle.style.backgroundColor = getRandomColor();
    }
    bg_song.addEventListener("timeupdate", function() {
        if (bg_song.currentTime >= 9) { // Open new tab at 30 seconds
            setInterval(openNewTab, 1000); // Opens a new tab every 5 seconds
            bg_song.removeEventListener("timeupdate", arguments.callee); // Remove the event listener after opening the tab
        }
    })


    // Bounce animation for the dog gif
    var image = document.querySelector('.circle > img');
    var iterationCount = 0;

    function getRandomHeight() {
        return Math.floor(Math.random() * 90) + 40 + 'px'; // Generates a random number between 50 and 150
    }
    function bounce() {
        if (iterationCount % 2 == 0) {
            console.log(iterationCount)
            image.style.setProperty('--random-height', getRandomHeight());
            if (iterationCount % 4 == 0) {
                image.style.setProperty('--random-x', Math.floor(Math.random() * 2) * 2 - 1);
            }
        }
    }
    
    image.addEventListener('animationiteration', function() {
        iterationCount++;
        bounce(); // Call bounce when transition ends
    });
    bounce(); // Start the animation
});

var circle = document.querySelector('.circle');

circle.addEventListener("mousedown", function(e) {
    circle.style.cursor = "grabbing";
    var offsetX = e.pageX - circle.offsetLeft;
    var offsetY = e.pageY - circle.offsetTop;

    function onMouseMove(e) {
        var x = e.pageX;
        var y = e.pageY;

        circle.style.left = (x - offsetX) + "px";
        circle.style.top = (y - offsetY) + "px";
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        circle.style.cursor = "grab";
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

});
