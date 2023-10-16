function caculating() {
    let displayequal = document.getElementById('Display-Caculator').value;
    document.getElementById('Display-Caculator').innerHTML = eval(displayequal);
}
function elementtinputt() {
    let display = document.getElementById('Display-Caculator').value;
    let t= document.getElementById(x).value;
    document.getElementById('Display-Caculator').innerHTML = display + t;
}