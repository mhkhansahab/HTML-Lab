
var i = 0;
var j = 1;
var k = 1;
var timer;

function msec_timer(){
    document.getElementById("msec").innerHTML = i;    
    i++;
    if(i == 100){
        i = 0;
        sec_timer();       
    }
}
    function sec_timer(){
    document.getElementById("sec").innerHTML = j;
    j++;
    if(j == 60){
        j = 0;
        min_timer();
    }
}
    function min_timer(){
    document.getElementById("min").innerHTML = k;
}

function start(){
    timer = setInterval(msec_timer,10);    
}
function stop(){
    clearInterval(timer);
}
function reset(){
    document.getElementById("min").innerHTML = 0;
    document.getElementById("sec").innerHTML = 0;
    document.getElementById("msec").innerHTML = 0;
}