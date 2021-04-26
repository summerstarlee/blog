function f0(){
    console.log(a)
}

function f1(){
    var a = 1;
    f0();
}
    
f1();