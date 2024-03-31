// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called Name and set 'Dane' as a string.
// Next code is if-else statement.
// So, we check name value. If name is 'Mary' then print 'Hi, Mary!'
// However, we already know the name is 'Dane' not 'Mary'.
// Therefore, move on else block.
// console.log 'How do you do?' will be executed.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret without value.
// We also make a variable called code and set it to 123 as a number value.
// This code is if-else statement.
// So, we check code value. if it's equal to 123, then print 'super'
// And our code is 123. Now it runs two equations.
// Secret ='Super' and code = code * 2.
// Final code value will be 246.
// Let's move on the second block.
// We check code value again. If it's greater than 250, then print 'duper'
// We already know the code value is 246. And it's not greater than 250.
// So, Second block will not be executed.
// Fianlly, console.log(secret) will be executed with the result from the first block
// It will print 'Super'


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make isStudent variable and the value is true (Boolean).
// We make age variable and the value is 34 (number).
// We make zip variable and the value is 55407 (number).
// Now we check ifStudent is true and(&&) zip value is greater than 80000.
// ifStudent is true. But our zip code is 55407. It's not greater than 80000.
// Therefore, first console.log('You're a student on the West Coast!') will not be executed.
// So let's move on the second if block. 
// We check ifStudent is false or(||) age is less than 30.
// ifStduent is not false. And the age is 34 (It is greater than 30).
// None of these are correct. So, second console.log(What are your hobbies?') will not be executed.
// Let's move on the third if block.
// We check ifStudent is true.
// Yes it's a true. Therefore, console.log('Welcome to Prime!') will be executed.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// colorOne has to be blue. So we've changed red to blue.
// colorTwo has to be red. So we've changed blue to red.
// Now we check if statement.
// This block has only one variable.
// colorTwo = 'purple'; has to be placed the bottom of colorOne = 'purple';.

/*
let colorOne = 'red';
let colorTwo = 'blue';

//Fix let colorOne = 'blue';
//Fix let colorTwo = 'red';

let mix = true;


if (mix === true) {
  colorOne = 'purple';
//add coloTwo = 'purple';
}



*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// Our description was 'if temp is higher than 39 and(&&) if time is greater or equal to 4'
// However, the code below is using or(||), instead of and (&&).
// So fix the sign correctly (from || to &&).

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
//Fix if (temp > 39 && time >=4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// From the descrption above, it said 'if age is greater than or equal to minAge'.
// So the code must be if(age >= minAge). 
// We change it to the right order.
// Also, if age is greater than equal to min Age, cosole.log ('enter') must show up. not ('no entry')
// So we change reversed part. If part must be console.log ('enter'), and else part must be console. log ('no entry').

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  //Fix if (age >= minAge)
  console.log('no entry');
  //Fix console.log('enter');
  
} else {
  console.log('enter');
  //Fix console.log('no entry');
}
*/

