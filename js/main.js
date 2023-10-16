var mousedown = false;

let ok_button = document.querySelector("#ok_button")
let box = document.querySelector("#tos_box")

ok_button.addEventListener("click", function(){
    start_jamming()
    setTimeout(() => {
        box.remove()
    }, 500)
})

function start_jamming(){
    var bg_song = document.getElementById('bg-song');
    bg_song.play()

    var bg_flag = false;
    function openNewTab() {
        // window.open("alert.html", "_blank"); // CHANGE THE LOCATION FOR THE NEXT PAGE
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
        // Calculate the inverse color (complementary color) with transparency for the box shadow
        // var alpha = (Math.random() * (0.1 - 0.5) + 0.5).toFixed(2); // Random alpha between 0.1 and 0.5
        var inverseColor = 'rgba(' +
        (255 - parseInt(circle.style.backgroundColor.slice(5, 8))) + ',' +
        (255 - parseInt(circle.style.backgroundColor.slice(10, 13))) + ',' +
        (255 - parseInt(circle.style.backgroundColor.slice(15, 18))) + ',' + 0.7;
        circle.style.boxShadow = '0 0 0 9999px ' + inverseColor;



        // Change shape after clicking the dog div
        function changeProperties() {
            var randomRadiusTopLeft = Math.floor(Math.random() * 101); // Random value between 0 and 100
            var randomRadiusTopRight = Math.floor(Math.random() * 101); // Random value between 0 and 100
            var randomRadiusBottomRight = Math.floor(Math.random() * 101); // Random value between 0 and 100
            var randomRadiusBottomLeft = Math.floor(Math.random() * 101); // Random value between 0 and 100
        
            var randomSize = Math.floor(Math.random() * 201) + 100; // Random value between 100 and 300
        
            var circleElement = document.querySelector('.circle');
        
            // Apply random border radii and size with transition
            circleElement.style.transition = 'all 0.5s ease';
            circleElement.style.borderRadius = randomRadiusTopLeft + '% ' + randomRadiusTopRight + '% ' + randomRadiusBottomRight + '% ' + randomRadiusBottomLeft + '%';
            circleElement.style.width = randomSize + 'px';
            circleElement.style.height = randomSize + 'px';
        }
        
        // Call the function to change properties
        if (mousedown == false)
            changeProperties();
        
        




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
}

let circle = document.querySelector(".fake_circle")
circle.addEventListener("mouseenter", start_dragging)
window.addEventListener("mousemove", move_cute_dog)

let dragging = false
let offsetX, offsetY
let multiplier = 1
function start_dragging(event)
{
    dragging = true;
    document.body.style.cursor = "none";
    offsetX = (event.pageX - circle.offsetLeft)
    offsetY = (event.pageY - circle.offsetTop)
}

function move_cute_dog(event)
{
    if (dragging)
    {
        let x = event.pageX - offsetX
        let y = event.pageY - offsetY

        x *= multiplier
        y *= multiplier
        circle.style.left = (x) + "px"
        circle.style.top = (y) + "px"
        circle.style.cursor = "none"
    }
}