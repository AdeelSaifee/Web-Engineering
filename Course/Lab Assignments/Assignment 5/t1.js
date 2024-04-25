function startTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    //time format
    if(hours > 12){
        hours = hours - 12;
    }

    // add zero if less than 10
    hours = concatZero(hours);
    minutes = concatZero(minutes);
    seconds = concatZero(seconds);

    // am pm
    let mode;
    if(hours < 11){
        mode = 'PM';
    }
    else{
        mode = 'AM';
    }
    document.getElementById("time").innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + mode;
    setTimeout(startTime, 500);
}
startTime();

function concatZero(value){
    if(value< 10){
        value = '0' + value;
    }
    return value;
}

//screen
let screen = document.getElementById("screen");

//type to the screen
function press(numValue){
    if(screen.value === 0){
        screen.value = ' ';
    }
    screen.value += numValue;
}

//clear screen
function clearScreen(val){
    screen.value = val;
}

//Delete key
function backSpace(){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1);
}

//calculate function
function calculate(){
    if (screen.value !== ''){
        try{
            clearScreen(eval(screen.value));
        }
        catch(err){
            clearScreen("Bad expression")
        }
    }
}

//calculate the sine, cosine and tan of an angle in DEG
function sine(){
    screen.value = Math.sin(screen.value * Math.PI/180);
}

function cosine(){
    screen.value = Math.cos(screen.value * Math.PI/180);
}

function tan(){
    screen.value = Math.tan(screen.value * Math.PI/180);
}

//Function to calculate asin, acos and atan

function invsine(){
    screen.value = Math.asin(screen.value) * (180/Math.PI);
}

function invcosine(){
    screen.value = Math.acos(screen.value) * (180/Math.PI);
}

function invtan(){
    screen.value = Math.acos(screen.value) * (180/Math.PI);
}

//Function to calculate the natural logarithm
function ln(){
    screen.value = Math.log(screen.value);
}

function log(){
    screen.value = Math.log10(screen.value);
}

function percent(){
    screen.value = (screen.value/100);
}

function square(){
    screen.value = Math.pow(screen.value, 2);
}

function cube(){
    screen.value = Math.pow(screen.value, 3);
}

function sqrt(){
    screen.value = Math.sqrt(screen.value);
}

function plusminus(){
    let x = screen;
    let y = x.value;
    y = y * -1;
    x.value = y;
}

function Exp(){
    screen.value = Math.pow(10, screen.value);
}