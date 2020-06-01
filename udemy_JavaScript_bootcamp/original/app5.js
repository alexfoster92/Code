//===============================================================================================
//              DEFAULT PARAMETERS - used to set a default if nothing is entered
//===============================================================================================

function multiply(x, y = 1) { // this sets y's default value to 1
    return x * y; // if y isn't stated, it will run x * 1 as a default
}

const greet = (person, greeting = "Hi") => { // this sets the default greeting to "Hi"
    console.log(`${greeting}, ${person}!`);
}

// both parameters can still be defined but if the parameter isn't defined, it will default to "Hi"
// order of defaults is important!


//===============================================================================================
//              SPREAD - can expand iterables
//===============================================================================================

// FOR FUNCTION CALLS - expands an iterable (array, string, etc.) into a list of arguments

Math.max(3, 4, 5, 6, 7, 8, 9); // typically, we can find the max number in an argument like this

const nums = [45, 23, 34, 7, 5]; // but when we try and do the same with an array, it treats
// everything as a string and doesn't work

Math.max(nums); // this doesn't work and will return NaN

Math.max(...nums); // using spread (...) resolves this problem! It treats each number in the array
// as an argument

function giveMeFour(a, b, c, d) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
};

const colors = ["red", "orange", "yellow", "green"];

giveMeFour(colors); // if I run this, we will get:

// a: ["red", "orange", "yello", "green"]
// b: undefined
// c: undefined
// d: undefined

// as we only input one argument paramenter when it expected four

// However, if we use spread, it will spraed the four values in the array to fill the four arguments

giveMeFour(...colors); // this will give us:

// a: red
// b: orange
// c: yellow
// d: green

// It spreads the iterables!

const str = "GOAT";

giveMeFour(...str); // this will spread the string across the four arguments and give:

// a: G
// b: O
// c: A
// d: T

// whenever you pass an iterables using spread, it spreads them into individual arguments

//=============================================================================================

// SPREAD IN ARRAY LITERALS

const cephalopods = ["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"];
const gastropods = ["giant african snail", "banana slug", "variable neon slug"];
const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods]; // this creates a new array containing both
// the cephalopods and gastropods array

const cephCopy = [...cephalopods];
// spread is commonly used to create a copy of an array - easy syntax and easy to read
// this creates a unique copy that doesn't reference the original so:
// cephCopy === cephalopods would return false as they are unique

//=============================================================================================

// SPREAD IN OBJECTS LITERALS

const feline = {
    legs: 4,
    family: "Felidae"
};

const canine = {
    family: "Caninae",
    furry: true,
    legs: 4
};

const dog = { // here we're creating a new object with the properties from the canine object
    ...canine, // using spread, we copy the object key value pairs from canine
    isPet: true, // and now we can include other key value pairs
    adorable: true // this will ultimately show all the key value pairs from canine, as well as
}; // the new key value pairs that we've just added

const houseCat = { // the same is true for houseCat, that will include everything from feline
    ...feline, // spread to copy key value pairs from feline
    isGrumpy: true, // new key value pair
    personality: "unpredictable" // new key value pair
};

// what happens if you have two conflicting key value pairs?

const catDog = { // one of the objects is going to override the other
    ...canine, // both family and legs are conflicting key value pairs
    ...feline // in this case, the last object overrides the first one - ORDER IS IMPORTANT!
};

// with this example, we end up with:

// catDog {
//     family: "Felidae", // this overrides "Caniae" because it comes after canine
//     furry: true,
//     legs: 4 // legs is technically copied over from feline, even if here it doesn't make a difference
// }

const catDogClone = { // spread can also be useful when creating a unique copy of another object
    ...catDog // however, it is only one level deep, just like with arrays, and will not copy
}; // nested arrays or objects

//=============================================================================================
//              REST - OUTDATED
//=============================================================================================

// THE ARGUMENTS OBJECT - old way of essentially doing what REST does
// this can accept as many arguments as are inserted

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) { // this allows any number of arguments to be passed
        total += arguments[i]; // you can add infinite arguments and it would still add them all
    }
    return total;
}
sumAll(8, 4, 3, 2); // this sums all the elements to 17
sumAll(2, 3); // this sums to 5

//=============================================================================================

// REST "..." used in the parameter of a function

function sumEX(...nums) {
    console.log(nums); // this will create an actual array rather than an array like structure
} // like in the case of the ARGUMENTS object

function sum(...nums) { // the rest goes before the argument name that you give
    return nums.reduce((total, currVal) => { // this can now be used arrow functions and reduce etc.
        return total + currVal // we have our standard reduce function
    });
};

// the above function will take as many arguments as are inserted and sum them all together


// this creates two parameters "first" & "last" and then collects anything else as a "titles"
function fullName(first, last, ...titles) {
    console.log("First:", first)
    console.log("Last:", last)
    console.log("Titles:", titles)
};

fullName("Alex", "Foster", "Chief Lizard", "Owner of two spatulas");
// this will produce:

// First: Alex
// Last: Foster
// Titles: (2) ["Chief Lizard", "Owner of two spatulas"] 

// notice how everything after the first two defined parameters is put into the catchall "titles"
// created by using the rest parameter

// the rest parameter needs to be the LAST parameter

const multiplyRest = (...nums) => ( // arrow function with rest parameter*
    nums.reduce((total, currVal) => total * currVal) // then reduced**
);

// * anything that is passed in the function argument will be considered a "nums"
// ** this takes all the nums and reduces them to total and currVal and loops them all while multiplying
// we end up with all the nums being multiplied together

//=============================================================================================
//              DESTRUCTURING - a short, clean syntax to "unpack": - values from arrays + properties from objects into distinct variables
//=============================================================================================

//=============================================================================================
// DESTRUCTURING ARRAYS

const raceResults = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie"];

// in the past, we would have to write something like:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// this old method works, but is rather clunky and requires you to write a new variable for each
// position

const [gold, silver, bronze] = raceResults; // here we destructure the raceResults array
gold; // "Eliud Kipchoge"
silver; // "Feyisa Lelisa"
bronze; // "Galen Rupp"

// this does the same as the old const gold = raceResults[0] but now matches everything automatically!

const [fastest, ...everyoneElse] = raceResults; // rest can also be used with destructuring
fastest; // "Eliud Kipchoge"
everyoneElse; // ["Feyisa Lelisa", "Galen Rupp"]

// of course, order is important!!!

const [first, , , fourth] = raceResults; // we can use commas to skip elements!!

//=============================================================================================
// DESTRUCTURING OBJECTS

const runner = {
    firstName: "Eliud",
    lastName: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
};

const {
    firstName,
    lastName,
    country
} = runner;

// these needs to be existing keynames in the object that is being referenced
// the order isn't important, but the keynames need to exist
// if you reference a keyname that isn't in the original object, it will come back as undefined

firstName; // "Eliud"
lastName; // "Kipchoge"
country; // "Kenya"

const {
    country: nation, // this creates a new variable called nation that uses the value from country
    title: honorific // this does the same but with title
} = runner;

nation; // "Kenya"
honorific; // "Elder of the Order of the Golden Heart of Kenya"

//=============================================================================================
// NESTED DESTRUCTURING

const results = [{
        name: "Eliud",
        surname: "Kipchoge",
        country1: "Kenya"
    },
    {
        name: "Feyisa",
        surname: "Lilesa",
        country1: "Ethiopia"
    },
    {
        name: "Galen",
        surname: "Rupp",
        country: "United States"
    }
];

// this accesses the second object in the array's country1 keyname and value pair
const [, { // we use the comma to skip the first object in the array
    country1 // and then find the country1 in the second object in the array
}] = results;

const [, silverMedal] = results; // this however may be easier to read and modify
const {
    countryEx
} = silverMedal;

// nesting becomes complicated quickly!!!

//=============================================================================================
// DESTRUCTURING PARAMETERS

const fullNome = ({
    firstName,
    lastName
}) => {
    return `${firstName} ${lastName}`
};

fullNome(runner); // "Eliud Kipchoge"

// this destructuring can be used when you only want a few elements from an object