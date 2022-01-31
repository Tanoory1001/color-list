let topp = document.querySelector("#topp");

let botp = document.querySelector("#botp");

// let advice = topp.innerHeight ;

// topp.innerHTML = "Choose youre destiny"

function changeColor(color) {
    document.body.style.background = color;
}

function Red_Run() {
    changeColor('red');
    topp.innerHTML = "You choose Nightmaire";
    botp.innerHTML = "Blood bath";
}

function Blue_Run() {
    changeColor('blue');
    topp.innerHTML = "You choose Adventure";
    botp.innerHTML = " Perfection path";
}

function Green_Run() {
    changeColor('green');
    topp.innerHTML = "You Choose Peace";
    botp.innerHTML = "Justice for ALL";
}

function Yellow_Run() {
    changeColor('yellow');
    topp.innerHTML = "You Choose Excitement";
    botp.innerHTML = "BreathTaking";
}

function Default_Run() {
    changeColor('none');
    topp.innerHTML ="" ;
    botp.innerHTML ="" ;
}


