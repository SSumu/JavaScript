// console.log("hi");

// let yname = prompt("Enter Your Name", "saman"); // The prompt is also a model in a browser. If we want to modify the prompt, then we have to write HTML for it and sperately we have to apply CSS and JavaScript. When the user input a value to the prompt and then if he click OK, then the prompt returns the user's value to the variable. So then variable store the value. We can give a default value to a prompt. In here, 'saman' is the default value.

// let yname = "Sadeepal";

// let yname = confirm("Are you Sadeepal?"); // The confirm is also a model in a browser. This returns true or false.
// console.log(yname); // Semicolon is not necessary for JavaScript statements. But it is a good practice to put it in the end of the statement.

// console.error("This is an error"); // This will give a error to the console.

// console.warn("This is a warn"); // This will give a warning to the console.

// Object
/*let a = {
  name: "Sadeepal", // Here the name is the key(key name). 'Sadeepal' is the value(key value). We can use any data type to create values.
  age: 23,
  city: "Gampaha",
};
let b = {
  name: "Sumudupriya", // Here the name is the key(key name). 'Sadeepal' is the value(key value). We can use any data type to create values.
  age: 23,
  city: "Gampaha",
};
let c = {
  name: "Kumara", // Here the name is the key(key name). 'Sadeepal' is the value(key value). We can use any data type to create values.
  age: 23,
  city: "Gampaha",
};*/

// Comments are not executed. These are used to detail something.
// Single line comments.
// console.log(a);
// console.log(b);
// console.log(c);

/*
Multi line comments.
*/

// console.log({ a, b, c }); // We can show any number of objects at once. All the objects are presented as a one object. The output will come as an object. Inside the object has our objects.

// console.log(a, b, c); // In this way we can see each objects' outputs sperately. Not only the objects but also we can also show several other type variables in a one console.log().

// console.table({ a, b, c }); // This is to visualizes the objects which has the same key names with the values in a table.

// console.table(a, b, c); // This will give the values in a different way.

// Data Types
// let a = "Sadeepal Sumudupriya"; // String. We can also write String using ''.
// let a1 = "Sadeepal Sumudupriya"; // String
// let b = 23; // Integer or Number
// let c = true; // Boolean
// let d = 234n; // Bigint -> Integer type has a limit. If the calculations exceed that limit we have to use Bigint.
// let e; // Undefined
// let f = null; // null

// console.log(typeof a); // typeof key use to identify the datatype. typeof is a key word or a method.
// console.log(typeof a1);
// console.log(typeof b); // typeof(b) also can be used in this way.
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f); // data type of null is object.

// _ (Underscore) is used for creating private variables.

// Converting one data type to another data type
// Strings cannot be converted to other data types.
// console.log(a, b, c, d, e, f);
// console.log(String(b));
// console.log(typeof String(b));
// b = String(b); // Integers or Numbers can be converted into String data type. In here b is converted to String data type and put(store) it in the b.
// console.log(typeof b);

// c = String(c);
// console.log(c);

// d = String(d);
// console.log(d); // When bigint is converted to a String, n will be omited. Only the number will be shown.

// e = String(e);
// console.log(e);

// f = String(f);
// console.log(f);

// Converting one data type to another data type
// f = Number(f); // This Number() method will convert other data types to number type.
// console.log(f);

// console.log(Number(a)); // Output is NaN. NaN means not a number. Strings cannot be converted to a number.
// console.log(Number(c)); // When boolean value is converted to a Number, output is 1 for true value and 0 for false value.
// console.log(Number(d)); // When bigint value is converted to a Number, output is a number.
// console.log(typeof Number(d));

// console.log(Number(e)); // When undefined value is converted to a Number, output is NaN.

// console.log(Number(f)); // When null value is converted to a Number, output is 0.

// console.log(parseInt(f)); // parseInt() method also can be used to convert other data types to numbers. Here the output is NaN.
// console.log(parseInt(d)); // When bigint value is converted to a Number, output is a number. Here the output is 234.

// console.log(typeof parseInt(d)); // Output is number.

// let a2 = "12";
// let a3 = "13.345";
// let a4 = "13.345ad";
// let a5 = "13athe242";

// console.log(parseInt(a2)); // parseInt() method can convert string number into a number. Output is 12.
// console.log(parseInt(a3)); // 13. Here decimal part is omitted. parseInt used to convert number to a whole number.
// console.log(Number(a3)); // 13.345
// console.log(Number(a4)); // NaN. Number function or method convert the full string to a number.
// console.log(parseInt(a5)); // 13. Here parseInt method will take the characters one by one from the String and convert to number. So in this converting process, when the first non-character is found, then it ignore the rest of part. So the after that omission, rest of the part will be printed.
// console.log(parseFloat(a3)); // 13.345
// console.log(parseFloat(a4)); // 13.345
