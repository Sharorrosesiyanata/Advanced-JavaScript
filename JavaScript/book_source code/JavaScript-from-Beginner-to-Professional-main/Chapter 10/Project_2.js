"use strict";

window.onload = build;
let myArray = ["Laurence", "Mike", "John", "Larry"];
let message = document.getElementById("message");
let addNew = document.getElementById("addNew");
let newInput = document.getElementById("addFriend");
let output = document.getElementById("output");
addNew.onclick = function () {
    let newFriend = newInput.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);
}
function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0);
    });
}
function adder(name, index, counter) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.classList.add("box");
    td1.textContent = index + 1;
    let td2 = document.createElement("td");
    td2.textContent = name;
    let td3 = document.createElement("td");
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.onclick = function () {
        console.log(tr.lastChild);
        let val = Number(tr.lastChild.textContent);
        val++;
        tr.lastChild.textContent = val;
    }
    output.appendChild(tr);
}