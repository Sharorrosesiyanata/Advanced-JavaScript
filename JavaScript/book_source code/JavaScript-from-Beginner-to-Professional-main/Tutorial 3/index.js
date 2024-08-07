"use strict";

/********How to Convert HTML Form Field Values to JSON Object using JavaScript******/
function convertToJson() {
    let form = document.getElementById("dataForm");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    let jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";
}

/*****How to parse JSON object using JSON.stringify() in JavaScript.******/

JSON.stringify(object, replacer, space);

var obj = {
    name: "Vishal",
    email: "abc@gmail.com",
};
var result = JSON.stringify(obj);
document.write("parsed object = " + result);

var obj = {
    company: "GeeksforGeeks",
    courses: ['DSA', 'Web Tech',
        'Placement_Preparation', 'DDA']
};
var result = JSON.stringify(obj);
document.write("parsed object = " + result);

/******How to transforms JSON object to pretty-printed JSON using Angular Pipe.*******/

//COMPLETED IN THE HTML.

/*******Convert JSON String to Array of JSON Objects in JavaScript.******/

// JSON String Representing an Array of Objects
const jsonStr = '[{"name": "Adams", "age": 30}, {"name": "Davis", "age": 25}, {"name": "Evans", "age": 35}]';

// Parse JSON string to array of objects
const jsonArray = JSON.parse(jsonStr);

// Output the array of objects
console.log(jsonArray);

//JSON String Representing an Array of Objects
const jsonStr = '[{"name": "Adams", "age": 30}, {"name": "Davis", "age": 25}, {"name": "Evans", "age": 35}]';

let obj = eval('(' + jsonStr + ')');

let res = [];

for (let i in obj)
    res.push(obj[i]);

console.log(res);

/********JSON Modify an Array Value of a JSON Object******/

//JSON String Representing an Array of Objects
const jsonStr = '[{"name": "Adams", "age": 30}, {"name": "Davis", "age": 25}, {"name": "Evans", "age": 35}]';

let obj = eval('(' + jsonStr + ')');

let res = [];

for (let i in obj)
    res.push(obj[i]);

console.log(res);

let myObj, i;

myObj = {

    // Stored the values
    "words": ["I", "am", "Good"]
};

// Modifying the value present at index 2
myObj.words[3] = "bad";

for (i in myObj.words) {

    // Displaying the modified content
    console.log(myObj.words[i]);
}

/**********How to convert LowerCase values to UpperCase in Input Field using ReactJS*******/

import React from "react";
import CapitalLetter from "./CapitalLetter";
function App() {
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h3>
                React JS example for Lower Case to Upper
                Case Letters
            </h3>
            <CapitalLetter />
        </div>
    );
}
 
export default App;

/*********How to select values from a JSON object using jQuery*********/
/*
<!DOCTYPE html> 
<html lang="en"> 
  
<head> 
    <title> 
        How to select values from a 
        JSON object using jQuery? 
    </title> 
  
    <!-- Import jQuery cdn library -->
    <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 
  
    <script> 
        $(document).ready(function () { 
  
            var json = [ 
                { "name": "GFG", "text": "GFG" }, 
                { "name": "Geeks", "text": "Geeks" }, 
                { "name": "GeeksforGeeks",  
                    "text": "GeeksforGeeks" } 
            ]; 
  
            $('button').click(function () { 
                var select = $("<select></select>") 
                    .attr("name", "cities"); 
  
                $.each(json, function (index, json) { 
                    select.append($("<option></option>") 
                    .attr("value", json.name).text(json.text)); 
                }); 
                $("#GFG").html(select); 
            }); 
        });   
    </script> 
</head> 
  
<body style="text-align: center;"> 
    <h1 style="color: green;"> 
        GeeksforGeeks 
    </h1> 
  
    <h3> 
        How to select values from a 
        JSON object using jQuery? 
    </h3> 
  
    <div id="GFG"></div> 
  
    <button>Submit</button> 
</body> 
  
</html>
*/

/*****How to Convert JS Object to JSON String in JQuery/Javascript*********/

// Sample JS object
const geeks = {
    name: "Shubham",
    age: 21,
    Intern: "Geeksoforgeeks",
    Place: "Work from Home"
};

// Converting JS object to JSON string
const gfg = JSON.stringify(geeks);
console.log(gfg);

//Using Lodash _.prototype.toJSON() Method.

const _ = require('lodash');
const myObj = {};
const jsonString = _(myObj).toJSON();
const _ = require('lodash');
const geeks = {
    name: "Shubham",
    age: 21,
    Intern: "Geeksoforgeeks",
    Place: "Work from Home"
};
let res = _(geeks).toJSON();
console.log(res);

/******How to Initialize a TypeScript Object with a JSON-Object*****/

//Object.assign

let jsonString = '{"name": "John", "age": 25}';
let user = Object.assign({}, JSON.parse(jsonString));
console.log(user.name); // Output: John
console.log(user.age); // Output: 25

// Type Assertion

let jsonString = '{"name": "John", "age": 25}';
let user = JSON.parse(jsonString) as { name: string; age: number };
console.log(user.name); // Output: John
console.log(user.age); // Output: 25

//Spread Operator

let jsonString = '{"name": "John", "age": 25}';
let user = { ...JSON.parse(jsonString) };
console.log(user.name); // Output: John
console.log(user.age); // Output: 25

//Class Initialization

class User {
    name: string;
    age: number;
    
    constructor(data: { name: string; age: number }) {
        this.name = data.name;
        this.age = data.age;
    }
    }
    
    let jsonString = '{"name": "John", "age": 25}';
    let user = new User(JSON.parse(jsonString));
    console.log(user.name); // Output: John
    console.log(user.age); // Output: 25

//Using Object Destructuring

let jsonString =
    '{"username": "GFG", "userAge": 22}';
let { username, userAge } =
    JSON.parse(jsonString);

console.log(username);
console.log(userAge);

*/



