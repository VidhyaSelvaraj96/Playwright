//String Literal -No new memory created, just points it in the next time
let companyName ="TestLeaf" // address 100
let organisationName ="TestLeaf" // address 100

console.log(companyName===organisationName);


//String object -- with "new", new memory is created each time
let empname = new String ("Jane") // address 500
let empname1 = new String ("Jane") // address 560

console.log(empname===empname1);

//concat - to concat two strings
let TestCase1 ="New Lead"
let TestCase2 =311296
let resultConcat = TestCase1.concat(TestCase2)
console.log(resultConcat);
let resultConcat1 = TestCase2+"-"+TestCase1+"passed" //old way of concating
console.log(resultConcat1);


//Escape Sequence
let test = ('it\'s a regression\t testing\n now')
console.log(test);

//template literal -- `${}`
function funName (a){
    console.log(`there is ${a} testcases to execute`);
}
funName(500)

let course = "Playwright"

//length property (index value starts from ZERO, length starts from ONE)
console.log(`the length of the string is ${course.length}`);

//charAt
console.log(`the second character is ${course.charAt(2)}`);

//indexOf
console.log(`the index of "w" is ${course.indexOf('w')}`);

//split
let course1 = "Playwright"
let course2 = "Playwright Automation"

console.log(course1.split(""));
console.log(course2.split(" "));


//slice
console.log(course.slice(2,5));

//substring -- negative value considered as ZERO, start(5) is greater than end(-2)
console.log(course.substring(5,-2));

