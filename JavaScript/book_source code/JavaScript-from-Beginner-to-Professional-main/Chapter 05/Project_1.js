"use strict";

let myTable = [];
let numm = 20;
for(let a = 0; a < numm; a++){
    let temp = [];
    for(let b = 0; b < numm; b++){
        temp.push(a * b);
    }
    myTable.push(temp);
}

console.log(myTable);
