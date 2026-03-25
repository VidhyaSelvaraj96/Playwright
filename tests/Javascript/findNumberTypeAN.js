function findNumberType (num) {
    let result = "";
    if (num>0){
        console.log("the number is positive");
    }
    else if (num<0) {
        console.log("the number is negative");
    }
    else if (typeof num!== 'number'){
        console.log("the input is not a number");
    }
    else {
        console.log("the number is zero");
    }
}

findNumberType("we")