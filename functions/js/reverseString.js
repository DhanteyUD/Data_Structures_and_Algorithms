//* Reverse a String (Basic)

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));