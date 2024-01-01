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
    if(event.keyCode == 96){
        buttonPressed(0);
    }
    else if(event.keyCode == 97){
        buttonPressed(1);
    }
    else if(event.keyCode == 98){
        buttonPressed(2);
    }
    else if(event.keyCode == 99){
        buttonPressed(3);
    }
    else if(event.keyCode == 100){
        buttonPressed(4);
    }
    else if(event.keyCode == 101){
        buttonPressed(5);
    }
    else if(event.keyCode == 102){
        buttonPressed(6);
    }
    else if(event.keyCode == 103){
        buttonPressed(7);
    }
    else if(event.keyCode == 104){
        buttonPressed(8);
    }
    else if(event.keyCode == 105){
        buttonPressed(9);
    }
    else if(event.keyCode == 107){
        buttonPressed('+');
    }
    else if(event.keyCode == 109){
        buttonPressed('-');
    }
    else if(event.keyCode == 106){
        buttonPressed('*');
    }
    else if(event.keyCode == 111){
        buttonPressed('/');
    }
    else if(event.keyCode == 110){
        buttonPressed('.');
    }
    else if(event.keyCode == 187 || event.keyCode == 13){
        buttonPressed('=');
    }
    else if(event.keyCode == 8 || event.keyCode == 46){
        buttonPressed('DEL');
    }
    else if(event.keyCode == 27){
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

