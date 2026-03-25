let genderType = "female";

function printGender() {
let color = "brown";
if (genderType.startsWith("female")){
    var age = 30;
    let color="pink"
    console.log("Color inside the block:",color);
}
    console.log("Age outside the if block:",age);   
}

printGender();
console.log("Global genderType:",genderType);
console.log("--- Changing the genderType to 'male'---:");
genderType="male";
printGender();
