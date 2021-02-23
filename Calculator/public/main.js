function check(a){
    document.getElementById("manipulate").innerHTML += a;
}
function nowClear(){
    document.getElementById("manipulate").innerHTML = 0;
}
function solve(){
    var x = document.getElementById("manipulate").innerHTML; 
    var y = eval(x);
    document.getElementById("manipulate").innerHTML = y;
}