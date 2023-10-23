function appendToDisplay(value) {
    document.getElementById("display").value += value;
    console.log(document.getElementById("display").value);
}

function clearDisplay() {
    document.getElementById("display").value = "";
    console.log(document.getElementById("display").value);
}
function backspace() {
var input = document.getElementById("display");
console.log(input.value);
input.value = input.value.substring(0, input.value.length-1);
console.log(input.value);
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}