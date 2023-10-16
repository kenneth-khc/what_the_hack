function hasNumbers(input) {
    var regex = /\d/;
    return regex.test(input);
}

function hasSymbols(input) {
    var regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(input);
}

function countSymbols(input) {
    var symbolCount = 0;
    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i);
        if(/[!@#$%^&*(),.?":{}|<>]/.test(char)) {
            symbolCount++;
        }
    }
    return symbolCount;
}

function hasAdjacentDuplicates(input) {
    for (var i = 0; i < input.length - 1; i++) {
        if (input[i] === input[i + 1]) {
            return true;
        }
    }
    return false;
}

function hasTextBasedEmojis(input) {
    var regex = /(:\)|:-\)|:\(|:-\(|;\)|;-\)|:-D|:D|:-d|:d|<3|>:o|>:O|:-P|:P|:-p|:p)/;
    return regex.test(input);
}

function hasMalaysia(str) {
    return str.includes("Malaysia");
}

function hasKL(str) {
    return str.includes("Kuala_Lumpur");
}

function has42kl(str) {
    return str.includes("42kl");
}

function sumDigitsInString(str) {
    var digitSum = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var digit = parseInt(char);

        if (!isNaN(digit)) {
            digitSum += digit;
        }
    }
    return digitSum;
}

function checkPassReq(input)
{
    switch (true)
    {
        case input.length < 10:
            return "password must be " + (input.length + 1) + " characters long";
        case !hasNumbers(input):
            return "password must have a number";
        case !hasSymbols(input):
            return "password must have a symbol";
        case countSymbols(input) < 5:
            var symbol_count = countSymbols(input);
            return "password must have " + (symbol_count + 1) + " symbols";
        case hasAdjacentDuplicates(input):
            return "remove the adjacent identical characters"
        case !hasTextBasedEmojis(input):
            return "password must have a text based emoji";
        case !hasMalaysia(input):
                return "password must include Malaysia"
        case !hasKL(input):
            return "password must include Kuala_Lumpur"
        case !has42kl(input):
            return "password must include 42kl"
        case sumDigitsInString(input) < 42:
            return "all digits must total up to 42 or more"
        default:
            return "weak password"
    }
}

var password = document.querySelector("#password");
password.addEventListener("input", function(e) {
    var dynamic_paragraph = document.querySelector("#pop-up > .content > ul");
    if (dynamic_paragraph)
        dynamic_paragraph.remove();
    var input = e.target.value;
    var paragraph = document.createElement('li');
    paragraph.textContent = checkPassReq(input);
    content.appendChild(paragraph);
})