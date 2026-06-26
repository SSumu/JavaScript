// let arr = [12, "sadeepal", 3.5, true, "sumudupriya", "gampaha"];

// let result = a.map((el, index) => {
//   return [el, index]; // Array's map method has a return value.
// });
// We can take either el or index if we want. There is a third parameter is array. We can give it with any name and it will output the whole array.
// map() method returns an array.

// console.log(result[4][0]);

// for (index in arr) {
//   console.log(index);
// }
// The output of the above for loop:-

/*
0
1
2
3
4
5
*/
// for (__ in __){} loop only works for the array. Then the outputs are the indexes for the index for each rounds.

// So the benefit of this for (__ in __){} loop is:-
// for (index in arr) {
//   console.log(arr[index], index);
// }
// The output of the above for loop:-
/*
12 '0'
sadeepal 1
3.5 '2'
true '3'
sumudupriya 4
gampaha 5
*/

// let obj = {
//   name: "sadeepal",
//   age: 28,
//   city: "gampaha",
// };

// for (key in obj) {
//   console.log(key);
// }

// Relevant to the object, it gives the keys. Output:-
/*
name
age
city
*/

// for (key in obj) {
//   console.log(key, obj[key]);
// }

// Output:-
/**
 name sadeepal
 age 28
 city gampaha
 */

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.map((el) => el ** 2); // Callback function is called inside the map() method. There is a direct return after the arrow. Return of the map() is an array.
// console.log(result);
/**
 * (6) [1, 4, 9, 16, 25, 36]
 * 0:1
 * 1:4
 * 2:9
 * 3:16
 * 4:25
 * 5:36
 * length:6
 */

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.map((el, index) => ({
//   val: el ** 2, // In the output, val key contains the value of the el ** 2.
//   index: index, // In the output, index key contains the index of the index.
// })); // This is the way of returning an object.
// console.log(result);
/**
 * (6) [{…}, {…}, {…}, {…}, {…}, {…}]
 * 0: {val: 1, index: 0}
 * 1: {val: 4, index: 1}
 * 2: {val: 9, index: 2}
 * 3: {val: 16, index: 3}
 * 4: {val: 25, index: 4}
 * 5: {val: 36, index: 5}
 * length: 6
 */
// In map(), we need to return a single element, not an object. That's why we have used another parenthesis here. If we have to return an object, we have to use another pair of parentheses like this. If we don't use that, it will become the body of the arrow function. Because the body of the arrow function is also used with {} brackets. If we use {} brackets, JavaScript thinks that we are writing the body of the arrow function. Then the return is not done as an object. But by putting () brackets, I want a return.

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.map((el, index) => {
//   return {
//     val: el ** 2,
//     index: index,
//   };
// });
// console.log(result);
/**
 * (6) [{…}, {…}, {…}, {…}, {…}, {…}]
 * 0: {val: 1, index: 0}
 * 1: {val: 4, index: 1}
 * 2: {val: 9, index: 2}
 * 3: {val: 16, index: 3}
 * 4: {val: 25, index: 4}
 * 5: {val: 36, index: 5}
 * length: 6
 */

// Same thing happens in both above and below ways.

// let arr = [1, 2, 3, 4, 5, 6];

// let obj = [
//   {
//     name: "sadeepal",
//     age: 23,
//     city: "Gampaha",
//   },
//   {
//     name: "sumudupriya",
//     age: 23,
//     city: "Gampaha",
//   },
//   {
//     name: "danura",
//     age: 23,
//     city: "Gampaha",
//   },
// ];

// let result = obj.map((el, index) => {
//   // Object in the obj array comes as the el. index comes as the index.
//   return { val: el ** 2, index: index };
// });

// console.log(obj);
/**
 * (3) [{…}, {…}, {…}]
0: {name: 'sadeepal', age: 23, city: 'Gampaha'}
1: {name: 'sumudupriya', age: 23, city: 'Gampaha'}
2: {name: 'danura', age: 23, city: 'Gampaha'}
length: 3
 */
// let result = obj.map((el, index) => ({
//   // Object in the obj array comes as the el. index comes as the index.
//   name: el.name,
//   age: el.age,
// }));
// console.log(result);
// In the result, this { val: el ** 2, index: index }; becomes an output to a single element as a one object.
/**
 * Output:-
 * (3) [{…}, {…}, {…}]
 * 0: {name: 'sadeepal', age: 23}
 * 1: {name: 'sumudupriya', age: 23}
 * 2: {name: 'danura', age: 23}
 * length: 3
 */

// let arr = [1, 2, 3, 4, 5, 6];

// filter method :- This method comes with the array. filter method filters the values of an array based on a logic.
// let result = arr.filter((el) => el % 2 == 1); // We can also take the index or the array as the parameters.
/**
 * (3) [1, 3, 5]
 * 0: 1
 * 1: 3
 * 2: 5
 * length: 3
 */

// let result = arr.filter((el) => el % 2 == 0); // We can also take the index or the array as the parameters.
// console.log(result); // The argument returns either true or false. If true is returned, filter() will return the element that returned true in the result.
/**
 * (3) [2, 4, 6]
 * 0: 2
 * 1: 4
 * 2: 6
 * length: 3
 */
// In filter(), the elements are retrieved and returned when the condition is true.
// The return of the result variable comes as an array.

// let result = arr.map((el) => el % 2 == 1);
// let result = arr.map((el) => el % 2 == 0);
// console.log(result); // In the map() method,it returns either true or false for each case. its return value is what comes out of the logic. What comes out of the condition. map() returns an array. That return contains either true or false cases.
/**
 * (6) [true, false, true, false, true, false]
 * 0: true
 * 1: false
 * 2: true
 * 3: false
 * 4: true
 * 5: false
 * length: 6
 */

// let arr = [1, 2, 3, 4, 5, 6];

// filter -> let result = [2,4,6].map(el => el + 6)

// let result = arr.filter((el) => el % 2 == 0).map((el) => el + 6);
// console.log(result);
/**
 * (3) [8, 10, 12]
 * 0: 8
 * 1: 10
 * 2: 12
 * length: 3
 */

// reduce() method is also come with the array.
// let result = arr.reduce((pre, val) => {
//   return pre + val; // Output is 21
//   // return val; // Output is 6
// });
// previousValue is the previous value of the each element in the array. currentValue is the current value.
// return pre + val; :- By adding the each currentValue to its previousValue, the total output value is 21.

// console.log(result);
// pre returns 1. When the first value in the arr was changed to 3, then it returns 3.

// let result = arr.reduce((pre, val) => {
//   return pre + val; // Output is 21
//   // return val; // Output is 6
// }, /*-1*/ -5); // -1 or -5 is the initial value
// initialValue is taken as the previousValue for the first instance. So the -5 is the pre value. Then the currentValue is the first element(0 index value) of the array.

// console.log(result);
// Output is 20 for -1 and 16 for -5.

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce((pre, val) => {
//   pre.push({
//     eVal: val + 5 * 3,
//     oVal: val,
//   }); // Returning the object
//   return pre;
// }, []); // It can set the [] (empty array) as the initial value. Since the initial value is an [], output come as an array is included with objects.

// console.log(result);
// Output:-
/**
 * (6) [{…}, {…}, {…}, {…}, {…}, {…}]
 * 0: {eVal: 16, oVal: 1}
 * 1: {eVal: 17, oVal: 2}
 * 2: {eVal: 18, oVal: 3}
 * 3: {eVal: 19, oVal: 4}
 * 4: {eVal: 20, oVal: 5}
 * 5: {eVal: 21, oVal: 6}
 * length: 6
 */

let arr = [1, 2, 3, 4, 5, 6];

let result = arr.reduce((pre, val, index) => {
  pre[`newObj${index + 1}`] = {
    eVal: val + 5 * 3,
    oVal: val,
  }; // pre or the previousValue is an object because the initial value is an object.
  return pre;
}, {}); // It can set the {} (empty object) as the initial value.

console.log(result);
// Output:-
/**
 * {newObj1: {…}, newObj2: {…}, newObj3: {…}, newObj4: {…}, newObj5: {…}, …}
 * newObj1: {eVal: 16, oVal: 1}
 * newObj2: {eVal: 17, oVal: 2}
 * newObj3: {eVal: 18, oVal: 3}
 * newObj4: {eVal: 19, oVal: 4}
 * newObj5: {eVal: 20, oVal: 5}
 * newObj6: {eVal: 21, oVal: 6}
 */
