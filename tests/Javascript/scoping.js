if(true) {
    let a=60
    console.log("value inside the if block",a);   
}

if(true) {
    let b=50
    console.log("value inside",b);   
}

//console.log("value outside the block",a); 

//above will not be printed since it is outside the block - let,const

function funScope() {
if(true) {
    var c=31
    console.log("var, inside the block",c);
}
console.log("var, outside the block",c);
}
funScope()  //functions should be called for execution of functions 
//it can be called anywhere, above/below function

//let and const - Block Scope 
// var - Function Scope (will take values inside and outside the block)
