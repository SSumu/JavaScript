// Modern JavaScript - EcmaScript 6 - ES6

// ES6

// Array Destructuring

// This way we have a way to get the elements of an array into separate variables. It is called array destructuring. Order of the array elements are need to be considered.

// let arr = ["Amila", "Upul", "Kumara", 23, true];
// let arr = ["Amila", 23, true, "Upul", "Kumara"];

// let [fname, mname, lname, age] = arr; // It can give any names for the variables inside the array. There is no specific names for that.
// let [a, s] = arr;
// const [a, s] = arr; // Usually, there it uses the const for the array destructuring. Because we use it as a constant and we do not need to change it. But if we want, we can use let.
// let [a, s] = arr;
// let [a, s, g] = arr;

// console.log(fname); // Amila
// console.log(mname); // Upul
// console.log(lname); // Kumara
// console.log(age); // 23

// console.log(a, s); // Amila Upul
// console.log(a, typeof s); // Amila string
// console.log(a, s); // Amila 23
// console.log(a, s, g); // Amila 23 true

// a = 23;
// console.log(a); // 23

// =======================================================

// Object Destructuring

// let obj = {
//   name: "Amila Upul Kumara",
//   age: 23,
//   address: {
//     // Object is used for the address
//     address1: "fdadf",
//     address2: "dfad",
//   },
// };

// const { name, address } = obj;
// console.log(name, address);
/**
 Amila Upul Kumara {address1: 'fdadf', address2: 'dfad'}
 address1: "fdadf"
 address2: "dfad"
 [[Prototype]]: Object
 */

// In object destructuring, we have to use the keys used in the objects and no need for order.

// const { name, address } = obj;
// console.log(name, address2); // Amila Upul Kumara dfad
// console.log(name, address); // Amila Upul Kumara {address1: 'fdadf', address2: 'dfad'}

// const {
//   name,
//   address: { address1, address2 },
// } = obj;
// console.log(name, address1, address2); // Amila Upul Kumara fdadf dfad // In this way, it directly gives us the value and it is not in the object form.

let obj = {
  name: "Amila Upul Kumara",
  age: 23,
  address: {
    // Object is used for the address
    address1: "fdadf",
    address2: "dfad",
  },
};

// let newObj = obj;

// Spread operator
let newObj = {
  ...obj,
  // We can assign further values to the newObj additionally to the obj. Like functions.
  a() {
    console.log("I am a Function");
  },
  printYourName(yname) {
    console.log(yname);
  },
  // If we write array function, it is like this:-
  s: () => {
    console.log("hi");
  }, // s is the name of the function.
}; // What happens then is that the values of obj are separated into a new location called newObj and that values comes in a new location.

let arr = [1, 2, 3, 4, 5, 6];
let newArr = [...arr]; // Copy the values from arr to newArr.
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(newArr); // [1, 2, 3, 4, 5, 6]

arr.push(7);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(newArr); // [1, 2, 3, 4, 5, 6]

console.log(`obj value : `, obj);
// Without Spread Operator:-
/**
 obj value :  {name: 'Amila Upul Kumara', age: 23, address: {…}}
                address: {address1: 'fdadf', address2: 'dfad'}
                age: 23
                city: "Gampaha"
                name: "Amila Upul Kumara"
 */

// With Spread Operator:-
/**
 obj value :  {name: 'Amila Upul Kumara', age: 23, address: {…}}
                address: {address1: 'fdadf', address2: 'dfad'}
                age: 23
                city: "Gampaha"
                name: "Amila Upul Kumara"
 */

let a = 4;
let s = a;
console.log(a, s);
a += 5;
console.log(a, s);

console.log(`newObj value : `, newObj);
// Without Spread Operator:-
/**
 obj value :  {name: 'Amila Upul Kumara', age: 23, address: {…}}
                address: {address1: 'fdadf', address2: 'dfad'}
                age: 23
                city: "Gampaha"
                name: "Amila Upul Kumara"
 */

// With Spread Operator:-
/**
 newObj value :  {name: 'Amila Upul Kumara', age: 23, address: {…}}
                    address: {address1: 'fdadf', address2: 'dfad'}
                    age: 23
                    name: "Amila Upul Kumara"
 */
obj.city = "Gampaha";

console.log(`Updated obj : `, obj);
// Without Spread Operator:-
/**
 Updated obj :  
    {name: 'Amila Upul Kumara', age: 23, address: {…}, city: 'Gampaha'}
      address: {address1: 'fdadf', address2: 'dfad'}
        address1: "fdadf"
        address2: "dfad"
        [[Prototype]]: Object
        age: 23
        city: "Gampaha"
        name: "Amila Upul Kumara"
        [[Prototype]]: Object
 */

// With Spread Operator:-
/**
 Updated obj :  
    {name: 'Amila Upul Kumara', age: 23, address: {…}, city: 'Gampaha'}
      address: {address1: 'fdadf', address2: 'dfad'}
      age: 23
      city: "Gampaha"
      name: "Amila Upul Kumara"
 */

console.log(`newObj value : `, newObj);
// Without Spread Operator:-
/**
 {name: 'Amila Upul Kumara', age: 23, address: {…}, city: 'Gampaha'}
      address: {address1: 'fdadf', address2: 'dfad'}
        address1: "fdadf"
        address2: "dfad"
        [[Prototype]]: Object
        age: 23
        city: "Gampaha"
        name: "Amila Upul Kumara"
        [[Prototype]]: Object
 */

// With Spread Operator:-
/**
 {name: 'Amila Upul Kumara', age: 23, address: {…}}
    address: {address1: 'fdadf', address2: 'dfad'}
    age: 23
    name: "Amila Upul Kumara"
 */

// This behaviour is same for both array and object. If we give equal to the array or the object

// When an array or object is equal to another array or object, the values becomes a reference. A link is created to that value.

// The newObj has a separate location and the values of the obj have been copied separately. It is not a reference. This can be done to the array in this way.
