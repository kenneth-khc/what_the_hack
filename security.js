let popup = document.getElementById("popup")
const delay = 29000;

function show_popup() {
    const popup = document.getElementById("popup")
    popup.style.visibility = "visible"
}

let seconds = 0
function update_seconds() {
    const timer = document.getElementById("timer")

    seconds++
    timer.textContent = seconds + " sec" + (seconds !== 1 ? "s": "")
}

let random = 0
function update_random_numbers() {
    const objects_scanned = document.getElementById("objects_scanned")

    random += Math.floor(Math.random() * 100000)
    objects_scanned.textContent = random
}


let threats = 1
let timer = 0
function update_threats() {
    const threats_found = document.getElementById("threats_found")

    timer++

    if (timer >= 20)
    {
        threats_found.style.color = "red";
        threats += Math.floor(Math.random() * 999)
        if (threats_found.textContent == "None")
            threats_found.textContent = threats
        threats_found.textContent = threats
    }
}
setInterval(update_random_numbers, 1000)
setInterval(update_seconds, 1000)
setInterval(update_threats, 1000)
setTimeout(show_popup, delay)

let contact = document.querySelector("#contact_button")
contact.addEventListener("click", full_screen)

function full_screen(){
    let window = document.documentElement;
    let update = document.querySelector("#update")
    let virus_scan = document.querySelector("#virus_scan")
    let popup = document.querySelector("#popup")
    virus_scan.style.visibility = "hidden"
    popup.style.visibility = "hidden"
    setTimeout(() => {
        update.style.visibility = "visible"
        window.requestFullscreen()
    }, 3000)
}

let percentage = document.querySelector("#completion_message")
let ran_num = Math.floor(Math.random())
setInterval(() => {
    percentage.textContent = ran_num + "% complete"
    ran_num += Math.floor(Math.random() * 3) + 1
}, 3000)