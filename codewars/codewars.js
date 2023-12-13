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


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Começar a utilizar mais ternários

// Pela segunda vez com ternário, use mais!

function boolToWord(bool){
  return bool ? 'Yes' : 'No';
};



// Resposta resolvida pela primeira vez

// function boolToWord(bool){
//   if(bool == true) {
//     return 'Yes';
//   } else {
//     return 'No';
//   };
// };


