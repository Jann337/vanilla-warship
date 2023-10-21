console.log("Hello World!");

const varName = 5;
let varName2 = true;

// Number, String, Boolean, undefined, null, Symbol;
// Object, Array, Function;

// Array methods
console.log("---Array methods---");
const list = [1, 2, 3, 4, 5];
list.push(7);
list.pop();

list.shift();
list.unshift(1);

const reversed = list.reverse();
console.log(reversed, "REVERSED");

const sorted = list.sort();
console.log(sorted, "SORTED");

const fused = list.concat(reversed);
console.log(fused, "CONCATENATED");

console.log(list.includes(3), "CHECK IF 3 IS IN THE LIST");
console.log(list.indexOf(3), "GET INDEX OF 3 IN THE LIST");
console.log(list.slice(0, 15), "SLICE FIRST 15 VALUES");
list.splice(0, 3, ...[1, 2, 3, 4]);
console.log(list, "DELETE RANGE AND ADD NEW VALUES");
// Loopy

list.forEach(function (item) {
  console.log(item, "from for Each");
});

const mapped = list.map(function (item) {
  return item + 3;
});
console.log(mapped, "Mapped array");

// Object methods
// EMPTY OBJECT
// const teacher = {};

const student = {
  firstNname: "John",
  lastName: "Doe",
};

console.log(student.firstName);
console.log(student.lastName);
listOffKeys = ["firstName", "lastName"];

listOffKeys.forEach((value) => console.log(student[value]));

student.firstNname = "Jane";
student.charachter = "Wild";
console.log(student);

// Functions
// Step1

function add(a, b) {
  return a + b;
}

// Step2 This is weird but it works
const add2 = function (a, b) {
  return a + b;
};

// Step3 THE MODERN WAY
const add3 = (a, b) => a + b;

// SELECTORS
let element = document.getElementById("header");
console.log(element);

let paragraph = document.getElementsByClassName("text");
console.log(paragraph);

let tag = document.getElementsByTagName("body");

let selector = document.querySelectorAll(".text");
console.log(selector);

// let container = document.querySelector("#container");

// CREATE / APPEND
const newTextNode = document.createElement("span");
newTextNode.innerText = "Hello World from JS!";

container.appendChild(newTextNode);

// EVENTS
const showMessage = () => {
  element.classList.add("color");
};
