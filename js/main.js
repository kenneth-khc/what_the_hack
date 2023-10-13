var message;
var elYearInput;

message = "Where Do You See Yourself In 5 Years?";
elYearInput = document.getElementById("year-input");
elYearInput.value = message;

function randomTick() 
{
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        var randomValue = Math.random() >= 0.5;
        checkbox.checked = randomValue;
    });
}

document.addEventListener('DOMContentLoaded', randomTick);

var flag;

flag = 1;

var checkboxes;

checkboxes = document.querySelectorAll("input[type='checkbox']");

function areAllCheckboxedUnchecked()
{
    var i;

    i = 0;
    while (i < checkboxes.length)
    {
        if (checkboxes[i].checked)
        {
            flag = 1;
            return ;
        }
        i++;
    }
    flag = 0;
    return ;
}

var elEntryForm;
var images;

elEntryForm = document.getElementById("entry-form");
images =  document.querySelectorAll(".entry > img");

function hasCharacter(value) {
    return /[a-zA-Z]/.test(value);
}

function containsDigitsOneToNine(value) {
    var pattern = /[1-79]/;
    return pattern.test(value);
}

function handleEnterKey(event)
{
    if (event.key === "Enter")
    {
        event.preventDefault();
        areAllCheckboxedUnchecked();
        if (elYearInput.value == message)
            flag = 1;
        else if (hasCharacter(elYearInput.value))
        {
            flag = 1;
            elYearInput.value = "numeric numbrs only, please"
        }
        else if (containsDigitsOneToNine(elYearInput.value))
        {
            flag = 1;
            elYearInput.value = "ONLY 1-9"
        }
    }
    if (flag == 0)
    {
        winner = document.querySelector("img[alt='dog(46)'");
        winner.alt = "dgo(46)";
    }
}

elEntryForm.addEventListener("keypress", handleEnterKey);


var ctrlA = false;
var cut = false;
var ctrl = false;
var selectionandbackspace = false;

function lucky()
{
    if (ctrlA && cut && ctrl && selectionandbackspace)
    {
        console.log("YOU GOT LUCKY FIND IT!");
        winner = document.querySelector("img[alt='dog(46)'");
        winner.alt = "dgo(46)";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'a' && document.activeElement.type === 'text') 
    {
        event.preventDefault();
        randomTick();
        ctrlA = true;
        lucky();
        alert("FIND ANOTHER WAY!");
    }
    if (event.metaKey && event.key === 'a' && document.activeElement.type === 'text') 
    {
        event.preventDefault(); // Prevent the default behavior of Command+A
        randomTick();
        ctrlA = true;
        lucky();
        alert("FIND ANNOTHER WAY!");
    }
    if ((event.metaKey || event.ctrlKey) && document.activeElement.type === 'text') 
    {
        switch(event.key) {
            case 'ArrowLeft':
                alert("So LAZYYYyyyy")
                randomTick();
                ctrl = true;
                lucky();
                break;
            case 'ArrowRight':
                alert("So LAZYYYY.")
                randomTick();
                ctrl = true;
                lucky();
                break;

        }
    }

});


document.addEventListener('keydown', function(event) {
    var selection = window.getSelection();
    if (selection && selection.toString().length > 0 && (event.key === 'Backspace' || event.key === 'Delete') && document.activeElement.type === 'text') {
        event.preventDefault();
        selectionandbackspace = true;
        randomTick();
        lucky();
        alert("YOU ARR ALMOST THERE!");
    }
});

document.addEventListener('cut', function(event) {
    event.preventDefault();
    cut = true;
    randomTick();
    lucky();
    alert("sorry");
});

document.addEventListener('paste', function(e) {
    var clipboardData = e.clipboardData || window.clipboardData;
    var pastedText = clipboardData.getData('text');
    var selection = window.getSelection();
    if (pastedText.length < selection.toString().length)
        alert("YOU FOUND A WAY! :]")
});
