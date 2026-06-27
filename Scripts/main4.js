// let today = new Date(); // Date is the class. today is the date object.
// console.log(today); // Sat Jun 27 2026 14:39:36 GMT+0530 (India Standard Time)

// let today = new Date("May 12 2026 12:12:12"); // Tue May 12 2026 12:12:12 GMT+0530 (India Standard Time)
// let today = new Date("May 12 2026"); // Tue May 12 2026 00:00:00 GMT+0530 (India Standard Time)
// let today = new Date(2026, 6, 14, 12, 12, 12); // Tue Jul 14 2026 12:12:12 GMT+0530 (India Standard Time) . In this way, months are identified by indexes. So indexes are started from 0. So that is why July month for the 6th index.

// console.log(today); // Tue May 12 2026 12:12:12 GMT+0530 (India Standard Time)

// let today = new Date();
// console.log(today.toDateString()); // Sat Jun 27 2026
// console.log(typeof today); // object
// console.log(typeof today.toDateString()); // string :- toDateString converts the date of the today object into string. It is a specific method comes with the date.
// console.log(today.toString()); // Sat Jun 27 2026 20:54:24 GMT+0530 (India Standard Time)
// console.log(typeof today.toString()); // string :- toString converts the today object into string.

// We can access the each part of the date separately.
// console.log(today.toString().split(" ")); // split is a method of a string. split returns an array of strings separated by specific character.
/**
 * (9) ['Sat', 'Jun', '27', '2026', '21:19:34', 'GMT+0530', '(India', 'Standard', 'Time)']
0: "Sat"
1: "Jun"
2: "27"
3: "2026"
4: "21:19:34"
5: "GMT+0530"
6: "(India"
7: "Standard"
8: "Time)"
length: 9
 */

// console.log(today.toString().split(" ")[4]); // 21:27:06

// let today = new Date();

// console.log(today.getDate(), today.getMonth(), today.getFullYear()); // 27 5 2026
// console.log(
//   today.getFullYear(),
//   today.getHours(),
//   today.getMinutes(),
//   today.getSeconds(),
// ); // 2026 23 45 36

// console.log(today.getDay()); // 6 :- Days are also identified by indexes. It starts from 0. 0 for the sunday.

// console.log(today.getTime()); // 1782584790278
// This gives amount of miliseconds from 1970 Jan 01 0:0:0:0 to current date.

// =========================
// Date setting

let today = new Date();

// today.setDate(3); // Wed Jun 03 2026 00:06:42 GMT+0530 (India Standard Time)
// today.setMonth(4); // Thu May 28 2026 00:10:19 GMT+0530 (India Standard Time)
today.setHours(22); // Sun Jun 28 2026 22:15:42 GMT+0530 (India Standard Time)

console.log(today);
