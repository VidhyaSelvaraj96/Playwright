function lengthOfLastWord(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("fly me to the moon"));

function isAnagram(s,t){
    if(s.length !==t.length){
        return false;
    }
    const format = (str) => str.split('').sort().join('');
    return format(s) === format(t);
}
console.log(isAnagram('listen','silent'));
console.log(isAnagram('hello','world'));