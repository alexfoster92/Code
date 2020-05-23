//==================================================
//              LOOPS
//==================================================

// for loops - used to loop a function x amount of times

// start with defining a variable, (typically "i" in loops, but it can be anything)
// the variable defines the starting number, but it's arbitrary:
// (if you want to loop something 10 times, you could start at 30 and then end at 40,
// which is exactly the same as starting at 1 and ending when you hit 10 - use 1 though
// as it's less confusing and more easily readable)

// next, define how many times you want to run the loop using a condition:
// in this example, we have set it to run 10 times (when i <= 10, stop running)

// finally, choose the increments
// in this example, we have it set to go up in 1 step increments with "i++"

// then, define your function as normal in between {}

for (let i = 1; i <= 10; i++) {
    console.log("Hello: " + i);
}

// more examples

for (let i = 1; i <= 20; i++) {
    console.log(`${i}x${i} = ${i*i}`);
}

for (let i = 50; i >= 0; i -= 10) {
    console.log(i);
}

// infinite loops - BE CAREFUL! Make sure that the condition inserted in the 
// loop will eventually be met, otherwise, the loop will run infinitely, causing
// your browser to become unresponsive or JavaScript to freak out a little

//==================================================
//          LOOPS & ARRAYS
//==================================================

const examScores = [90, 85, 73, 88, 79, 80];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}

const myStudents = [{
        name: "Zeus",
        score: 78
    },
    {
        name: "Athena",
        score: 85
    },
    {
        name: "Hermes",
        score: 90
    },
    {
        name: "Artemis",
        score: 89
    }
];

// This for loop prints out the student name and their score in a human readable format
for (let i = 0; i < myStudents.length; i++) { // this loops as long as i is less than the length of the array
    let student = myStudents[i]; // this is to avoid having to write access to data as myStudents[i].name
    console.log(`${student.name} scored ${student.score}`);
}

// This for loop is very similar, but calculates the average score at the end!
let total = 0; // variables that want to be used outside the function need to be declared outside the function
for (let i = 0; i < myStudents.length; i++) { // same as before, it loops until it's covered the entire array
    let student = myStudents[i]; // same as above
    total += student.score; // total, which was declared outside the function, will now add each student score together
}
console.log(`The average student score is: ${total / myStudents.length}`); // this now calculates the average student score by dividing the total by the number of students i.e. the length of the array!

// This is a word reverser!
const word = "stressed"; // this is the word to be reversed
let reversedWord = ""; // THIS needs to be declared OUTSIDE of the function!!
for (let i = word.length - 1; i >= 0; i--) { // this increments going backwards from the end of the string
    reversedWord += word[i]; // this adds all the individual letters in reverse
}
console.log(reversedWord); // this prints out the now newly reversed word

//===========================================================================
//              NESTED LOOPS - try to avoid nesting more than 2 loops
//===========================================================================

for (let i = 1; i <= 10; i++) { // this loop starts at 1 and runs until i is equal to 10 in increments of 1
    console.log("Outer Loop", i); // this prints "Outer Loop" as well as the current number of i
    for (let j = 10; j >= 0; j -= 2) { // when nesting loops, change i -> j, j -> k etc. to avoid confusion and allow access to both individually
        console.log("   Inner Loop", j); // every time that outer loop runs, inner loop will run all the way through
    }
};


// This is based off the game 2048 - a nested array in an array
const gameBoard = [
    [4, 32, 8, 4], // these are all just row of the gameboard with their values, displayed in an array
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for (i = 0; i < gameBoard.length; i++) { // this goes through each array
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) { // this goes through each nested array
        totalScore += row[j]; // this adds all the numbers in the nested arrays
    }
}
console.log(totalScore); // this prints out the total score

//===========================================================================
//              WHILE LOOPS - used when you don't know when it'll end
//===========================================================================

const target = Math.floor(Math.random() * 10) + 1; // this creates a random number between 1 and 10
let guess = Math.floor(Math.random() * 10) + 1; // this +1 at the end is important to avoid "0" being a randomly generated number

// this keeps guessing a number until it matches the target
// we don't know how long it will take, so we use a while loop

while (guess !== target) { // this basically states that as long as guess is not equal to target, keep running the function
    guess = Math.floor(Math.random() * 10) + 1; // this is the function and will run until guess is equal to target
    console.log(`Target: ${target} Guess: ${guess}`); // this just gives a visual representation of the guesses in the dev console
}
console.log(`Congratulations computer! You won!`);
// this runs once the while loop condition has been met, so doesn't need it's own conditional
// as it only runs after the while loop is over

//===========================================================================
//              FOR OF LOOPS - these are relatively new to JavaScript
//===========================================================================

let subreddits = ["soccer", "donkey", "nintendo", "duckhunt"];

// this is a normal for loop that prints out all the items in the array "subreddits"
for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
}

// this also prints out all the items, but uses a for of loop
for (let sub of subreddits) { // this essentially says that for each iterable item in the array, perform function
    console.log(sub); // it automatically loops each item!!!
}

for (let char of "helloworld") { // this will print out each character of the string
    console.log(char);
}

// As you can see, for of loops are much cleaner than for loops

const magicSquare = [
    [
        2, 7, 6
    ],
    [
        9, 5, 1
    ],
    [
        4, 3, 8
    ]
];

for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

// This is the above loop rewritten as a for of loop
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// However, in the example below, a for loop works better as it allows both words1 and words2
// to access the same [i]
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "board"];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
}

//===========================================================================
//              FOR IN LOOPS - use to access inside of non-iretable data, i.e. objects
//===========================================================================

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) { // this accesses the keys in the object
    console.log(prop); // this prints the keys
    console.log(jeopardyWinnings[prop]); // this accesses the values of the keys and prints them
}

let totalWinnings = 0; // created ready to be populated
for (let prop in jeopardyWinnings) {
    totalWinnings += (jeopardyWinnings[prop]); // this adds all the values in all the keys of jeopardyWinnings
}
console.log(`Your total winnings are $${totalWinnings}`);