/* 
  After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

  You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

  Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

  Write a code that gives out the total amount for different days(d).

*/



function rentalCarCost(d) {
  const carCost = 40;



  if(d >= 7) {
    return (carCost * d) - 50;
  } else if(d >= 3) {
    return (carCost * d) - 20;
  } else {
    return carCost * d;
  };
};

console.log(rentalCarCost());


/* 
  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

/*
  O  split só pode ser utilizado em tipo String
*/

// let array = [];

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// };

// console.log(digitize(62345));


/* 
  Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

  For example (Input -> Output):

  2 -> 3 (1 + 2)
  8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
// function sum (num) {

//   let result = 0
//   for(let i = 1; i <= num; i++) {
//     result += i;
//   } 

//   return result;
// }

// console.log(sum(10));