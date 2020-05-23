//============================================
//              FUNCTIONS
//============================================

// Functions are chunks of code that can be run whenever you need them

// There are two steps:
// 1. we need to define the function - what does it do?
// 2. we need to run the function using () after the function name

function salutations() { // we have now defined and written the function
    console.log("Hello"); // it will print these three strings when called upon
    console.log("Hi");
    console.log("Hey");
}

salutations(); // this calls the function and runs it!

for (let i = 1; i <= 10; i++) { // this for loop will run the salutations function 10 times
    console.log(i); // just to print the corresponding number to keep track of how many times it has been run
    salutations(); // this runs the salutations function for the amount of times defined in the for loop
}

// Rolling dice function

function rollDie() { // this will roll a die
    let roll = Math.floor(Math.random() * 6) + 1; // randomly generates a number from 1-6
    console.log(`Rolled: ${roll}`); // spits out Rolled: "random die roll"
}

// function rollDice() { // this function calls the previously defined rollDie function
//    for (let i = 0; i < 5; i++) { // rollDie is then looped x amount of times defined by the for loop
//        rollDie(); // our original function that will be run x amount of times when the rollDice function is run
//    }
// }

//============================================
//              ARGUMENTS
//============================================

function greet() { // this function just spits out "Hello there!" each time it's called on
    console.log(`Hello there!`); // but what if we wanted to personalise or change it?
}

// introducing...arguments!

function greetArgument(firstName) { // the argument goes in between the brackets and serves as a placeholder (called a parameter)
    console.log(`Hello there, ${firstName}!`); // it doesn't matter what you call it, but it should make sense
}

// now, when I run "greetArgument("Alex");, Alex will be printed along with the "Hello there"

greetArgument("Alex"); // here's the function with it's argument
greetArgument("Giulia"); // it can be changed to whatever you like
greetArgument(42); // it could even be a number, an array, etc. anything at all

// we can even update our rollDice function to roll whatever number of dice we want!!

function rollDice(numRolls) { // numRolls is now a parameter for the argument
    for (let i = 0; i < numRolls; i++) { // and now we've set the for loop to run against the numRolls
        rollDie();
    }
}

// so if I write "rollDice(4);", it will roll 4 dice!!
rollDice(4); // awesome!

// this can be used with several parameters in the same argument

function sum(x, y) { // the parameters need to be divided by a comma
    console.log(x + y);
}

// now when I run sum(4,5); I will get "9" as the sum
sum(4, 5);

// much like in standard maths, the order is important and the parameters are read left to right

function divide(x, y) {
    console.log(x / y);
}

divide(4, 2); // this comes back as 2 because we're dividing 4 by 2
divide(2, 4); // this comes back as 0.5 because we're dividing 2 by 4

//============================================
//              RETURN
//============================================

// we've been using console.log() to print out our tests so far, but what if we want to capture whatever
// is returned from a function?

function multiply(x, y) { // the function, argument, and parameters remain the same
    return x * y; // but now we have the function return the value
} // however, this can only return one item, so if you want multiple values returned, you're going to
// have to use an array, or something similar

const multiplication = multiply(4, 5); // this can now capture the return value from the function

// return statements cause the function to end, so if you have anything after a return, it will not run

function subtract(x, y) {
    return x - y;
    console.log("Hello everyone!"); // this part of the function doesn't run as it's after the return
}

// in this function, we can have multiple returns because only one will run
function isPurple(color) { // "isWhatever" is quite a standard boolean check name
    if (color.toLowerCase() === "purple") { // this transforms toLowerCase to check even if someone writes "PURPLE"
        return true;
    } else {
        return false;
    }
}

// this can be rewritten removing the "else", as the return function will only run return false if it is false
function isBlue(color) {
    if (color.toLowerCase() === "blue") {
        return true;
    }
    return false; // the else is completely eliminated here and the function still works perfectly
}

// this can be rewritten once again! seeing as it's a boolean, it will always return either true or false
// we don't need the if statement
function isSunny(weather) {
    return (weather.toLowerCase() === "sunny"); // there parentheses run first and then return true or false
}

function containsBlue(arr) {
    for (let color of arr) { // "let for" method for an array
        if (color === "blue" || color === "indigo") {
            return true;
        }
    }
    return false; // this needs to come at the end, otherwise it will stop the function after looping once
}

containsBlue(["yellow", "orange", "indigo"]); // the above function will check the array for blue & indigo