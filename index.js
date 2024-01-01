if (!sessionStorage.getItem('number')) {
    sessionStorage.setItem('number', '')
}

if (!sessionStorage.getItem('operand')) {
    sessionStorage.setItem('operand', '');
}

if (!sessionStorage.getItem('expression')) {
    sessionStorage.setItem('expression', '');
}

window.addEventListener('keydown', function (event){
    // if(event.keyCode == 96 || event.keyCode == 48){
    //     buttonPressed(0);
    // }
    if(event.key == 0){
        buttonPressed(0);
    }
    else if(event.key == 1){
        buttonPressed(1);
    }
    else if(event.key == 2){
        buttonPressed(2);
    }
    else if(event.key == 3){
        buttonPressed(3);
    }
    else if(event.key == 4){
        buttonPressed(4);
    }
    else if(event.key == 5){
        buttonPressed(5);
    }
    else if(event.key == 6){
        buttonPressed(6);
    }
    else if(event.key == 7){
        buttonPressed(7);
    }
    else if(event.key == 8){
        buttonPressed(8);
    }
    else if(event.key == 9){
        buttonPressed(9);
    }
    else if(event.key == '+'){
        buttonPressed('+');
    }
    else if(event.key == '-'){
        buttonPressed('-');
    }
    else if(event.key == '*'){
        buttonPressed('*');
    }
    else if(event.key == '/'){
        buttonPressed('/');
    }
    else if(event.key == '.'){
        buttonPressed('.');
    }
    else if(event.key == '=' || event.key == 'Enter'){
        buttonPressed('=');
    }
    else if(event.key == 'Backspace' || event.key == 'Delete'){
        buttonPressed('DEL');
    }
    else if(event.key == 'Escape'){
        buttonPressed('RESET');
    }
});

function buttonPressed(but) {
    Exp = sessionStorage.getItem("expression")
    if (but == "DEL") {
        if (Exp == " ") {
            display(Exp);
        }
        else {
            Exp = Exp.slice(0, -1);
            sessionStorage.setItem("expression", Exp);
            display(Exp);
        }
    }
    else if (but == "RESET") {
        Exp = " "
        sessionStorage.setItem("expression", Exp);
        display(Exp);
    }
    else if (but == "="){
        if (Exp == " "){
            display(Exp);
        }
        else{
            try{
            res = eval(Exp).toFixed(3);
            Exp = " ";
            sessionStorage.setItem("expression", Exp)
            display(res);
            }
            catch(err){
                if (err instanceof Error){
                alert("Invalid Expression");
                }
            }
        }
    }
    else {
        if (Exp == " ") {
            if (but == "*" || but == "/" || but == "+" || but == ".") {
                display(Exp);
            }
            else {
                Exp += but;
                sessionStorage.setItem("expression", Exp);
                display(Exp);
            }
        }
        else {
            Exp += but;
            sessionStorage.setItem("expression", Exp);
            display(Exp);
        }
    }
}

function display(expression) {
    let Exp = document.getElementById("displayExp");
    Exp.innerHTML = expression;
}

