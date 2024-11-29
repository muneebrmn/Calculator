function reset() {
    var result = document.getElementById("result");
    result.innerHTML = "";
}

function one() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("1");
}

function two() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("2");
}

function three() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("3");
}

function four() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("4");
}

function five() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("5");
}

function six() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("6");
}

function seven() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("7");
}

function eight() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("8");
}

function nine() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("9");
}

function zero() {
    var result = document.getElementById("result");
    var one = document.getElementById("ONE");
    result.append("0");
}

function plus() {
    var result = document.getElementById("result");
    var plus = document.getElementById("PLUS");
    result.append("+");
}

function minus() {
    var result = document.getElementById("result");
    var plus = document.getElementById("PLUS");
    result.append("-");
}

function multiply() {
    var result = document.getElementById("result");
    var plus = document.getElementById("PLUS");
    result.append("*");
}

function divide() {
    var result = document.getElementById("result");
    var plus = document.getElementById("PLUS");
    result.append("/");
}

function mod() {
    var result = document.getElementById("result");
    var plus = document.getElementById("PLUS");
    result.append("%");
}

function equal() {
    var result = document.getElementById("result");
    var plus = document.getElementById("PLUS");
    result.innerText = eval(result.innerText);
}