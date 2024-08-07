"use strict";

class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
let person1 = new Employee("Laurence", "Svekis", 10);
let person2 = new Employee("Jane", "Doe", 5);
let person3 = new Employee("Adele", "Vaile", 12)
let workers = [person1, person2, person3];

Employee.prototype.details = function(){
    return this.first + " " + this.last + " has worked here " + this.years + " years";
}

workers.forEach((person) => {
    console.log(person.details());
});
