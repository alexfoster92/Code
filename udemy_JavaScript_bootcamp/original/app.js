if (1 !== 1) {
    console.log("Of course 1 is equal to 1, you dumbfuck");
}

let num = 157918759183756;

if (num % 2 === 0) {
    console.log("This number is even!");
}

// if + else if example

const ratings = [3, 1, 1, 1, 3, 2, 3, 3, 2, 2, 3, 1, 2, 2, 3];

const add = (a, b) =>
    a + b

const sumRatings = ratings.reduce(add);
console.log(sumRatings);

const numberOfRatings = ratings.length;
console.log(numberOfRatings);

let avgRating = (sumRatings / numberOfRatings).toFixed(2);
console.log(avgRating);

// Rating system:
// 3 = Amazeballs
// 2 = You're doing fine, kiddo
// 1 = Get the fuck out, right now.

if (avgRating >= 2.5) {
    console.log("You are amazeballs!");
} else if (avgRating <= 2.49) {
    console.log("You're doing fine, kiddo");
} else if (avgRating <= 1) {
    console.log("Get the fuck out, right now.");
} else {
    console.log("Invalid rating");
}

// else examples (basically saying "otherwise do this:")

let donkey = 3;

if (donkey === 3) {
    console.log("You are literally a donkey.");
} else if (donkey === 2) {
    console.log("Maybe you're a horse.");
} else if (donkey === 1) {
    console.log("I guess you're normal.");
} else {
    console.log("What are you?!");
}

let highScore = 1430;
let userScore = 1300;

if (userScore === highScore) {
    console.log(`Your score of ${userScore} matched the current High Score of ${highScore}!`)
} else if (userScore > highScore) {
    console.log(`Congratulations! Your score of ${userScore} beat the High Score!`)
} else {
    console.log(`Game Over. Try again to beat the High Score of ${highScore}.`)
}

// Nesting Conditionals example
// (try and avoid nesting too much as it can become difficult to read)
// UNLESS you want to give specific feedback between different states, like in the example below)

let password = "Hello";

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password is long enough but cannot contain spaces.")
    }
} else {
    console.log("Password not long enough");
}

// Truthy & Falsy (commonly used to see if something has or hasn't been done)

let loggedInUser = "Alex Foster";

if (loggedInUser) {
    console.log("You are logged in!");
} else {
    console.log("Please log in to continue!");
}

// Logical operators
// && (used to add more conditions that return true only if all the conditions are met)
// These are good to show that something is TRUE or FALSE, but doesn't allow for much feedback)

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}

let randomNumber = 4;

if (randomNumber >= 1 && randomNumber <= 10) {
    console.log("Number is between 1 - 10");
} else {
    console.log("Please enter a number between 1 - 10");
}

// || (used to return true if either of the conditions are met)

let animal = "donkey";

if (animal === "horse" || animal === "donkey") {
    console.log("Let's go to the races!");
} else {
    console.log("Back to the drawing board...");
}

let age = 28;

if (age <= 6 || age >= 65) {
    console.log("You can enter for free!");
} else {
    console.log("Time to pay up, you stingy bastard");
}

// ! (used to return the opposite of whatever is defined i.e. true = false, false = true)

let opposite = !null;
console.log(opposite);

let loggedInCheck;
if (!loggedInCheck) {
    console.log("Get out of here!");
}

let flavour = "orange";
// Written using not equal (!==) and or (||)
if (flavour !== "grape" || flavour !== "cherry") {
    console.log("We do not have this flavour.")
}
// Written using not operator (!) to negate the entire condition
if (!(flavour === "grape" || flavour === "cherry")) {
    console.log("We do not have this flavour.");
}

// These operators have precedence as well, so if you are ever unsure about what will run first,
// put whatever you want to run first in () as they have the highest precedence

// The Switch Statement (used to find the correct use case rather than writing a bunch of "else if" conditionals)

// Day of the week selector with if and else if statements:

let dayOfWeek = 7;

if (dayOfWeek === 1) {
    console.log("Monday");
} else if (dayOfWeek === 2) {
    console.log("Tuesday");
} else if (dayOfWeek === 3) {
    console.log("Wednesday");
} else if (dayOfWeek === 4) {
    console.log("Thursday");
} else if (dayOfWeek === 5) {
    console.log("Friday");
} else if (dayOfWeek === 6) {
    console.log("Saturday");
} else if (dayOfWeek === 7) {
    console.log("Sunday")
} else {
    console.log("Not a valid day");
}

// Same idea but with the Switch Statement:
// Need to include "break;" so that it matches only one of the cases rather than everything after the first match)

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Multiple cases can have the same value, in which case you don't need a "break;" between cases
// This also makes your code much easier to read + shorter

let emoji = "eggplant";

switch (emoji) {
    case "sad face":
    case "happy face":
        console.log("Yellow");
        break;
    case "eggplant":
        console.log("Purple");
        break;
    case "heart":
    case "lips":
        console.log("Red");
        break;
    default:
        console.log("Choose another Emoji");
}

// Ternary operator "condition ? expIfTrue : expIfFalse"
// This only works if it's a simple yes or no, if or else conditional; no else if

// Written with normal "if" and "else" conditionals

let luckyNum = 3;

if (luckyNum === 7) {
    console.log("Lucky!");
} else {
    console.log("Bad!");
}

// Written with ternary operator

luckyNum === 7 ? console.log("Lucky!") : console.log("Unlucky!");

// Another example of a ternary operator

// Written with if and else

let status = "offline";
let color;

if (status === "offline") {
    color = "red";
} else {
    color = "green";
}

// Written as a ternary

color = status === "offline" ? "red" : "green";

// Arrays

// .push() + .pop()
// Push adds whatever is in brackets to the end of the array - can add multiply items as a chunk - order of brackets
// Pull removes the last item in the array, regardless of what's written in brackets) - returns whatever was removed

let shoppingList = []; // Leaving the square brackets empty essentially creates an empty array to be populated if needed

shoppingList.push("eggs");
shoppingList.push("milk");
shoppingList.push("cereal");
shoppingList.push("tortillas");
shoppingList.push("onions");

shoppingList.pop();
shoppingList.pop();

// .unshift() + .shift()
// Unshift is like push but adds to the beginning of the array - can add multiply items as a chunk - order of brackets
// Shift is like pop but removes from the beginning of the array - returns whatever was removed

shoppingList.unshift("burgers");
shoppingList.unshift("sausages");
shoppingList.unshift("onions", "peppers", "berries");

shoppingList.shift();

console.log(shoppingList);

// concat - adds two arrays together into one returned array - can be used to create a new array
// Order is important
// You can even add more than one array at a time in the brackets

let veg = ["peppers", "salad"];
let fruit = ["oranges", "strawberries"];
let meat = ["steak", "chicken"];

console.log(veg.concat(fruit)); // This will have the veg array followed by the fruit array
console.log(fruit.concat(veg)); // This will have the fruit array followed by the veg array

let allFood = veg.concat(fruit, meat); // This adds veg then fruit then meat in that order
console.log(allFood);

// includes - searches for a direct match in an array and returns true or false

let ingredients = [
    "tomatoes",
    "pasta",
    "garlic",
    "aubergine",
    "courgette",
    "olive oil",
    "tuna"
];

console.log(ingredients.includes("turnips"));

if (ingredients.includes("tomatoes")) { // Doesn't need === true / false because the value returns true or false as is
    console.log("I'm allergic to tomatoes and cannot eat them!");
}

// indexOf - searches for the index of something in an array and returns the index in the array
// If what was searched doesn't exist in the array, it returns a value of -1

console.log(ingredients.indexOf("pasta"));

if (ingredients.indexOf("maple syrup") === -1) {
    console.log("Where is the maple syrup?!");
}

// reverse - this permanently reverses the order of an array

let reverseHelloArray = ["o", "l", "l", "e", "h"];

reverseHelloArray.reverse();

// join - this joins the items of an array into a string

console.log(reverseHelloArray.join()); // This defaults as item,item,item,etc but can be changed to whatever you want
console.log(reverseHelloArray.join("")); // This will join the items without anything between, creating the string "hello"
console.log(reverseHelloArray.join("-")); // This will join the items with a dash between them

// slice - can be used to return / create a selection from another array

let animals = [
    "donkey",
    "gorilla",
    "hippo",
    "rhino",
    "lion",
    "giraffe"
];

let animalGroup1 = animals.slice(0, 3); // This new array, "animalGroup1", includes the first three animals from the original array
let animalGroup2 = animals.slice(3); // This array contains the animals from index 3 in the original array to the end of the array
let animalGroup3 = animals.slice(-2, -1); // This array counts backwards from the end of the original array to make its selection 
let animalGroup4 = animals.slice(-5); // This array will contain the last 5 items of the original array

let animalsCopy = animals.slice(); // This is a common way of creating a copy of the original array as it creates a new array and doesn't impact the original one

// splice - can be used to insert or remove something from an array as well as replacing something in an array

animalsCopy.splice(1, 0, "chimp"); // This will add "chimp" to the animalsCopy array at index 1 without deleting anything from the array
animalsCopy.splice(3, 0, "tiger", "otter"); // This inserts both "tiger" and "otter" at index 3 without deleting anything

animalsCopy.splice(3, 2, "TIGER", "OTTER"); // This will remove two items (index 3 & 4), and then replace them with "TIGER" & "OTTER"

// sort - this sorts based on the character value code - revisit with functions

let teacherNames = [
    "Alex",
    "Sophia",
    "Hal",
    "Jess",
    "Emily",
    "Aaron",
    "Kendra",
    "Sahar",
    "Lisa",
    "Kate",
    "Jenna"
]

let alphabeticalTeacherNames = teacherNames.sort(); // This will sort all the names in the array alphabetically as expected

let randoNumbers = [7, 3, 14142, 65324];

randoNumbers.sort(); // This, however, will not sort the numbers numerically as the items are essentially converted into strings and then sorted based on value of the character code
// They are sorted [14142, 3, 65324, 7]


// Reference types

// When you create a primitive variable, it actually creates a snapshot of that variable that the variable then points to

let example1 = "hello world"; // This creates a reference to the memory of example1 at that time

let example2 = example1; // This now points to the memory of example1

example1 = "donkey kong" // This has now overwritten example1's original memory

// HOWEVER, example2 STILL REMAINS as "hello world" because it points to the originally created memory store

// The same is not true for arrays - they update each other 

let arrayExample1 = ["hello", "goodbye"];
let arrayExample2 = arrayExample1;

arrayExample1.push("hey there!"); // arrayExample1 now contains "hello", "goodbye", and "hey there!"

// arrayExample2 has also been updated to reflect the changes made in arrayExample1 as it is not a primitive variable type

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// const & arrays - const restricts changing what it is pointing at
// as long as myEggs is not changed and referenced with something new, the array that it references can be modified as much as you want

const myEggs = ["brown", "black"]; // This creates an array that includes "brown" & "black"

myEggs.push("speckled"); // This has added "speckled" to the array and doesn't mess with const
myEggs[0] = "yellow"; // This has replaced the original index 0 item of "brown" with "yellow"

// myEggs = "hello!"; // This DOES NOT work as it is trying to change what myEggs points to


// NOTE: const is used almost always with arrays, whereas let is typically used for primitive types

// ==============================================================================================================================================

// nested arrays (multi-dimensional arrays) - you can create arrays inside of arrays too!

const animalPairs = [
    ["lion", "lioness"], // Nesting elements like this doesn't make much sense as there's no reason why ["lion", "lioness"] should be first
    ["bull", "cow"], // the order doesn't make logical sense - why is it ordered like this?
    ["dog", "bitch"]
];

// to access different indexes in the nested arrays, you just chain indexes together

animalPairs[0]; // this accesses the 1st item in animalPairs which is our first nested array
// this will return ["lion", "lioness"]

animalPairs[0][0]; // this accesses the 1st item in animalPairs, and then the 1st item in the 1st array
// this will return "lion"

const board = [
    ["O", null, "X"], // this represents a tic tac toe board and the order makes logical sense
    [null, "X", "O"],
    ["X", "O", null]
];


// ============================================================================
//              OBJECTS - use const like for arrays but {} instead of []
// ============================================================================

// Whilst arrays are used to store date in a set order, where order is paramount,
// objects are used to store date when you need to understand what the data represents

const fitbitData = {
    totalSteps: 900000, // date is stored using the syntax: key : data
    totalMiles: 200.5, // all keys are automatically converted to strings
    caloriesBurnt: 1000, // except for symbols (not covered yet)
    workoutsThisWeek: "5 of 7",
    avgHoursSlept: 6,
    45: "forty five"
};

// When this is returned, it is returned in alphabetical order
// Do not use objects if you want a specific order - arrays would be better suited

fitbitData.totalMiles; // This will return the data stored in totalMiles
//this references the key (now a string) of "totalMiles" in the fitbitData object

// If you try and name one of the keys as a number and then access it, it won't work
// because it is looking for a string, and you've just tried to look for an unexpected number

// fitbitData.45; // this does not work using the dot (".") method

// ============================================================================
//              ACCESSING OBJECT PROPERTIES - try and use the dot method when you can, but square brackets if not possible
// ============================================================================

const bestNumbers = {
    100: "one hundred",
    200: "two hundred",
    "76 trombones": "Great song!"
};

// We can't access the 100 & 200 keys with the dot method
// We can access them through square brackets though

bestNumbers[100]; // this will return the data stored in the 100 key
// the square brackets actually convert the number into a string!
// this allows the key (which is always converted into a string) to be accessed
// as it is essentially going "search for string "100"" - this works!
// We NEED to use quotes when using square brackets to access something that isn't a number

// Square brackets are also useful when searching for a key that is a mix of types
// "76 trombones" for example, needs to be accessed with square brackets

bestNumbers["76 trombones"]; // this will return the data stored in the "76 trombones" key
// this wouldn't be accessible using the dot method as it would confuse JavaScript


const faveColors = {
    blue: "#124095",
    burgundy: "#f9215f"
};

let mysteryColor = "blue";

faveColors[mysteryColor]; // this will return the mysteryColor variable. The dot method does not work in this case

// ============================================================================
//              ADDING AND UPDATING OBJECT PROPERTIES
// ============================================================================

const userReviews = {}; // No user reviews at the moment, but we have the object ready

userReviews.alex = 5; // this now adds the key and data pair "alex: 5"
userReviews.giulia = 5; // perhaps this could be the intial review

userReviews.alex += 4; // this now updates the alex property to 9
userReviews.giulia++; // this adds one to the giulia property

// any operator can be used to update the property

// ============================================================================
//              NESTING ARRAYS AND OBJECTS - both can be nested in objects
// ============================================================================

const student = {
    firstName: "Alex",
    lastName: "Foster",
    strengths: ["Languages", "Logical thinking"],
    exams: {
        midterm: 90,
        final: 95
    }
};

// These can be accessed using the aforementioned methods

student.firstName; // This will return the data in the firstName key
student.strengths; // This will return the array in the strengths key
student.strengths[0]; // This will return the first item in the strengths key array
student.strengths[1]; // The second item etc.

student.exams.midterm; // This will return the data stored in the midterm key in the exams key

const avgExamScore = (student.exams.midterm + student.exams.final) / 2;
// This actually calculates the average score using the accessed data!!! Amazing!


// This is an ordered shopping cart seeing as we are using objects nested in an array
// The array maintains the order - which is logical - and the objects allow easy identification of the data
const shoppingCart = [{
        Product: "Jenga",
        Price: 9.99,
        Quantity: 1
    },
    {
        Product: "Amazon Echo Plus",
        Price: 99.99,
        Quantity: 2
    },
    {
        Product: "Kitchen table",
        Price: 200,
        Quantity: 1
    }
]

// This adds all the product names together into a single string
const shoppingCartItems = shoppingCart[0].Product + shoppingCart[1].Product + shoppingCart[2].Product;

// This adds all the prices together into a number!!!
const shoppingCartTotal = shoppingCart[0].Price + shoppingCart[1].Price + shoppingCart[2].Price;