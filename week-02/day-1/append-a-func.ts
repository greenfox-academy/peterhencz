'use strict'

// -  Create a string variable named `typo` and assign the value `kuty` to it
// -  Write a function called `appendA` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`


let typo: string = 'kuty';

function appendA(append: string) { 
    append = append + 'a';
    return append;

}

console.log(appendA(typo));
 

