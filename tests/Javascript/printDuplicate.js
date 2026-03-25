function printDuplicates(arr){

    let original = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (original.has(num)) {
            duplicates.add(num);
        }
        else {
            original.add(num);
        }
    }
console.log([...duplicates]);
}
printDuplicates([31,12,14,15,31,12,96]);