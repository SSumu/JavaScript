// let minArr = [2, 35, 6, 7, 3];

// console.log(Math.min(1, 2, 3, 4, 5, 6, 7)); // Output is 1
// console.log(Math.min(minArr)); // Output is NaN. NaN means Not a Number.
// console.log(minArr.Math.min()); // This is wrong and error.

// let minArr = (2, 35, 6, 7, 3); // We cannot give like this and we have to give it directly.

// console.log(typeof minArr); // Output is number. If the minArr is an array, then the output is object

// console.log(Math.min(minArr)); // Output is 3. If the minArr is an array, then the output is NaN

// console.log(Math.max(minArr)); // Output is 3. This is wrong because it cannot define the number set as an array or the tuple.

// console.log(typeof "a");

// typeof is used to get the type of the variable or a value.

// We have to give the number set directly.

// console.log(Math.min(2, 35, 6, 7, 3)); // 2
// console.log(Math.max(2, 35, 6, 7, 3)); // 35

// console.log(Math.pow(5, 3)); // 125 // pow means power.

// console.log(Math.abs(-55)); // 55 // abs gives us the positive value of a number.
// console.log(Math.abs(55)); // 55
// console.log(Math.sqrt(55)); // 7.416198487095663 // sqrt means the square root of a number.
// console.log(Math.sqrt(100)); // 10
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.round(4.5657)); // 5
// console.log(Math.round(4.3657)); // 4
// console.log(Math.ceil(4.0657)); // 5 // Gives the upper integer
// console.log(Math.floor(4.9657)); // 4 // Gives the lower integer

// console.log((34.56753).toFixed(1)); // 34.6 // toFixed controls the decimal points
// let num = 34.56753;
// console.log(num.toFixed(1)); // 34.6 // toFixed controls the decimal points

// console.log(Math.random()); // random generates the numbers 0 to 1 randomly
// console.log(Math.random() * 10); // Generates numbers from 0 to 10. But it does not generates the 10.

// console.log(Math.floor(Math.random() * 10)); // Gives us the lower integer. From 0 to 10 but it never gives the 10.
// console.log(Math.floor(Math.random() * 15)); // From 0 to 15 but it never gives the 15.

// console.log(Math.floor(Math.random() * (10 - 1)) + 1); // From 0 to 10 but it never gives the 10. Also this never gives the 0.
// console.log(Math.floor(Math.random() * (10 - 5)) + 5);
// If we want to take the range of random values, we have to use this equation :-
// Math.floor(Math.random()*(max - min)) + min
// This gives the random values of a range. Then it does not give the 25. Also, it does not give the numbers below 5 but it gives the 5.

console.log(Math.floor(Math.random() * (25 - 5 + 1)) + 5); // This gives the 25. Also it gives the 5.

// If we want the max value for a range of number values:-
// Math.floor(Math.random()*(max - min + 1)) + min
