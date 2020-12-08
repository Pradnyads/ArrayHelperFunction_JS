//Array fuction implementation

let array = ["Pradnya", "Diksha", "Priya", "Sakshi", "Neha"];
console.log(array);

//Sorting of array
let element = array.sort();
console.log(element);

//Slice Array function
let elements = array.slice(1, 2);
console.log(elements);

//Push function for add elements in array
let addelement = array.push("Minal");
console.log(addelement);

//Unshift and Shift array helper fuction
let name = array.unshift("Sakshi");
console.log(name);

let addFirst = array.shift("Mrunal");
console.log(addFirst);

//splice function
array.splice(2, 1, "Nisha", "Priya");
console.log(array);

//IndexOf function
let index = array.indexOf("Priya");
console.log(index);

//forEach and join function
const arr = [11, 21, 53, 42, 67, 78, 90];
arr.forEach((item) => console.log(item));

console.log(arr.join(" "));

//Reduce array function 
const numbers = [11, 12, 13, 14, 15, 16, 17];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
numbers.reduce((sum, numbers) => sum + numbers, 0);

//find function
const num = [12, 30, 41, 35, 10, 13, 14];
let answer;
for (let i = 0; i < num.length; i++) {
  if (num[i] > 10) {
    answer = num[i];
    break;
  }
}
console.log(answer);
const ans = num.find((number) => number > 10);
console.log(ans);

//filter array helper function 
const Specifications = [
  { name: "Manasi", Carcolor: "White", Age: "25" },
  { name: "Ramesh", Carcolor: "red", Age: "27" },
  { name: "Anish", Carcolor: "Black", Age: "29" },
];
const Charactors = Specifications.filter(
  (Specification) => Specification.Carcolor === "White"
);
//Map 
console.log(Charactors);
const param = Specifications.map((Specification) => Specification.Carcolor);
console.log(param);
