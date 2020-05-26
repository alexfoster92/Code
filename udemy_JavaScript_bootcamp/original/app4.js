//============================================================================================
//              FOR EACH 
//============================================================================================
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//     console.log(num * 2);
// })

// function printTriple(n) {
//     console.log(n * 3);
// }

// numbers.forEach(printTriple);

numbers.forEach(function (num, idx) { // forEach can pass two parameters
    console.log(idx, num); // in this case, we have both the num from the array and the index number being printed out
}) // remember, order is important when returning / printing!

const books = [{
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25,
        genres: ["fantasy", "sci-fi"]
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42,
        genres: ["horror", "fiction"]
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11,
        genres: ["fantasy", "american"]
    },
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"],
        rating: 4.36,
        genres: ["fiction", "russian"]
    }
]

books.forEach(function (book) { // this way of doing things has been around for quite awhile and is still used
    console.log(book.title.toUpperCase())
});

for (let book of books) { // for of is newer, and can replace forEach 
    console.log(book.title.toUpperCase())
}

for (let i = 0; i < books.length; i++) { // this is even older than forEach and is a lot messier
    console.log(books[i].title.toUpperCase())
}

//============================================================================================
//              MAP - creates a new array with the results of calling a callback on every elent in the array
//============================================================================================

const texts = ["rofl", "lol", "omg", "ttyl"]; // original array
const caps = texts.map(function (t) { // new array with map function
    return t.toUpperCase(); // this returns the original array but capitalised
});
console.log(texts); // this is the original array
console.log(caps); // this is the new array based on the original, but now capitalised
// this does not change the original array, it just maps out a new copy of the array
// with whatever function you want to add to the return

const nums = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = nums.map(function (num) { // this can of course be captured in a const
    return num * 2; // this needs to be returned to get the new array
}); // this doubles the original array items and then stores them in "const doubles"

const doubles2 = []; // the above function can also be achieved through a for loop, but is
for (let num of nums) { // much messier than using .map
    doubles2.push(num * 2)
}

const numDetail = numbers.map(function (n) { // this creates a new array with objects
    return {
        value: n, // this returns the number
        isEven: n % 2 === 0 // this returns whether the number isEven or not, using mod (%)
    }
});
// this creates an array of objects with each number in the original array defined as true or false
// depending on if the number is odd or even

const abbrevs = words.map(function (word) { // this reformats the original words into a new array
    return word.toUpperCase().split("").join("."); // that is all caps and separated with a .
})

const bookTitles = books.map(function (b) { // this is so cool! this takes just the titles of the
    return b.title; // original books array and returns the titles into a new array! super handy
})

//============================================================================================
//              ARROW FUNCTIONS - a more compact form of functions
//============================================================================================

const squareOld = function (x) { // instead of using anonymous functions, we can use arrow functions!
    return x * x;
}

const squareArrow = (x) => { // same function as before, but removed anonymous "function"
    return x * x; // this is much more compact
}

const isEven = num => { // no need for parentheses as there's only one parameter
    return num % 2 === 0;
}

const multiply = (x, y) => {
    return x * y;
}

// if I only have a single paramenter, then I don't even need to put the parameter in brackets

const selfDivide = x => { // as you can see, the function still works without parentheses
    return x / x;
}

// if there are no parameters at all, you need to include empty parentheses

const greet = () => {
    console.log("Hi!");
}

// if you only want to return one expression, you don't need {} or return, and can just have
// everything in between () 

const squareNoReturn = n => ( // This is quite compact already, but can be made even more compact!
    n * n
);

const squareOneLine = n => n * n; // LOOK HOW COMPACT IT IS!!!!
// only use this if it makes sense to have everything on one line i.e. if it's short enough /
// easy enough to read

const simpNums = [1, 2, 3, 4, 5, 6, 7, 8];

const doublesSimp1 = simpNums.map(function (n) {
    return n * 2;
});

const doublesSimp2 = simpNums.map(n => {
    return n * 2;
});

const doublesSimp3 = simpNums.map(n => n * 2); // this is known as an implicit return because
// JavaScript knows exactly what to return as there's only one thing it can return

const parityList = simpNums.map(function (n) { // normal callback function with anonymous func
    if (n % 2 === 0) return "even";
    return "odd";
});

const parityListArrow = simpNums.map((n) => { // using an arrow function instead of anon func
    if (n % 2 === 0) return "even";
    return "odd";
});

const parityListArrowTer = simpNums.map((n) => ( // using a ternary operator for compactness
    n % 2 === 0 ? "even" : "odd"
));
// this could even be written on one line, but it's best not to sacrifice legibility for compactness

const parityListArrowTerOneLine = simpNums.map(n => n % 2 === 0 ? "even" : "odd");

//============================================================================================
//              FIND - returns the value of the first element in the array that satisfies the provided testing function
//============================================================================================

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

let movie = movies.find(movie => {
    return movie.includes("Mrs."); // this just looks for the first example of "Mrs." in the array
}); // this will return "Mr. and Mrs. Smith"

let movie2 = movies.find(m => m.indexOf("Mrs.") === 0);
// this will return "Mrs. Doubtfire" as it is looking for "Mrs." in the 0 index position of the string

const goodBook = books.find(r => r.rating >= 4.3);
// this is using the books object from earlier and finds the first match that has a rating greater
// than or equal to 4.3

const neilBook = books.find(b => (
    b.authors.includes("Neil Gaiman")
)); // this returns the first instance in which Neil Gaiman is listed as an author in the object array

// find works well if you're only looking for the first match but stops as soon as it's found the first match
// so can't be used to find all instances of something in an array / object

//============================================================================================
//              FILTER - creates a new array with all elements that pass the test implemented by the provided function
//============================================================================================

const numsArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = numsArray.filter(n => {
    return n % 2 === 1; // returns any number that is odd using mod and true boolean
}); // these numbers are then returned into an array
//[9, 7, 5, 3, 1]

const smallNums = numsArray.filter(n => n < 5);
// this will return into a new array any number that is less than 5 from the original numsArray array
//[4, 3, 2, 1]

const goodBooks = books.filter(b => b.rating > 4.3);
// this will filter books that have a rating greater than 4.3 and create a new array with them in it
// this can be used to find several instances of something, unlike "find"!!!

const fantasyBooks = books.filter(book => book.genres.includes("fantasy"));
// this filters the books by the genre of "fantasy"

const fantasyFictionBooks = books.filter(book => (
    book.genres.includes("fiction") ||
    book.genres.includes("fantasy")
)); // this filters books by the genre of either fiction or fantasy

const query = "go";
const results = books.filter(book => {
    const title = book.title.toLowerCase(); // makes it case insensitive
    return title.includes(query.toLowerCase()) // makes it case insensitive
}); // this mimics a search bar by returning whatever is written in the query, in this case "go"

//============================================================================================
//              EVERY (tests whether all elements in the array pass the provided function, returning a Boolean value)
//============================================================================================

const wordsWithG = ["dog", "dig", "log", "bag", "wag"];

const g = wordsWithG.every(word => {
    return word.length === 3;
}); // this returns true because every word conatins a g

const dFirstLetter = wordsWithG.every(word => word[0] === "d");
// this returns false because not every word starts with the letter "d"

const lastLetter = wordsWithG.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === "g"
}); // this returns true because each letter ends with the letter "g"



//============================================================================================
//              SOME (similar to every, but returns true if ANY of the array elements pass the test function)
//============================================================================================

const words2 = ["dog", "log", "cupcake", "bag", "wag"];

// Are there any words longer than 4 characters?
const check4 = words2.some(word => word.length > 4); // this returns true

// Do any words start with "Z"?
const checkZ = words2.some(word => word[0] === "Z"); // this returns false

// Do any words contain "cake"?
const checkCake = words2.some(word => word.includes("cake")); // this returns true

//============================================================================================
//              SORT - how to sort things the way we want them to be sorted! THIS MUTATES THE ORIGINAL ARRAY
//============================================================================================

const prices = [400.5, 3000, 99.99, 35.99, 12.00, 9500];

prices.sort();

const ascSort = prices.sort((a, b) => a - b); // this sorts ascending
const descSort = prices.sort((a, b) => b - a); // this sorts descending

// these won't work one after the other as they mutate the original array and therefore we are
// left with the descSort order

const descSortBooks = books.sort((a, b) => b.rating - a.rating);
// this has now sorted the books array by their rating from highest to lowest rating!

//============================================================================================
//              REDUCE - executes a reducer function on each element of the array, resulting in a single value
//============================================================================================

// basically same logic as the fibonacci sequence :)

const numsA = [3, 4, 5, 6, 7];
const product = numsA.reduce((total, currentVal) => {
    return total * currentVal
});

const amazonCartPrices = [9.99, 15, 342];
const CheckoutSum = amazonCartPrices.reduce((total, currentVal) => {
    return total + currentVal
});

// these two examples total all the elements together, the 1st one multiplies them all
// the 2nd sums them all (could be useful for total price)

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currentVal) => {
    if (currentVal > max) return currentVal; // this compares all the grades in the array
    return max;
});

// it basically compares each grade against the max, replacing the max only if the currentVal is
// greater than the max, at which point the currentVal becomes the max, and it loops through the entire
// array like this, so the final max will be the highest grade in the entire array

// max      currentVal      return
// 87       64              87
// 87       96              96
// 96       92              92

// this can also be rewritten with the Math.max function

const maxGradeMathMax = grades.reduce((max, currentVal) => {
    return Math.max(max, currentVal); // Math.max actually looks for the highest number
});

const minGradeMathMin = grades.reduce((min, currentVal) => (Math.min(min, currentVal)));
// and Math.min looks for the lowest number and can be rewritten as a implicit return on one line

// using reduce to tally up an array
const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

const voteResults = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1;
    }
    return tally
}, {})

const voteResultsShorter = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});