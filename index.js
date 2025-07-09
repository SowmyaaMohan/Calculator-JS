function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backSpace() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
    catch {
        alert("Invalid expression");
    }
}

document.addEventListener("keydown", function (event) {
    keyword(event.key);


});

function keyword(key) {
    switch (key) {
        case "1":
            appendValue(key);
            break;
        case "2":
            appendValue(key);
            break;
        case "3":
            appendValue(key);
            break;
        case "4":
            appendValue(key);
            break;
        case "5":
            appendValue(key);
            break;
        case "6":
            appendValue(key);
            break;
        case "7":
            appendValue(key);
            break;
        case "8":
            appendValue(key);
            break;
        case "9":
            appendValue(key);
            break;
        case "0":
            appendValue(key);
            break;
        case "+":
            appendValue(key);
            break;
        case "-":
            appendValue(key);
            break;
        case "/":
            appendValue(key);
            break;
        case "*":
            appendValue(key);
            break;
        case "Backspace":
            backSpace();
            break;
        case "Enter":
            calculate();
            break;
        case "Delete":
            clearDisplay();
            break;


        default:
            console.log(key);

    }
}





