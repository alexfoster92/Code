//================================================================================================
//              OBJECT METHODS AND THE "THIS" KEYWORD
//================================================================================================

//================================================================================================
// SHORTHAND OBJECT PROPERTIES
//================================================================================================

// this is the old way of returning each individual variable

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max: max, // very repetitive!
        min: min, // super repetitive!
        sum: sum, // again
        avg: avg // and again!!
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// this is the new way of returning each individual variable using shorthand!

const getStatsNew = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max, // with the shorthand, you don't need to rewrite everything!!
        min, // it creates key value pairs automatically
        sum,
        avg
    }
}

const statsNew = getStatsNew(reviews); // this returns exactly the same as the old version


//================================================================================================
// COMPUTED PROPERTIES
//================================================================================================

// this is the old way, as always

const role = "Host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

// const team = {};
// team[role] = person;
// team[role2] = person2;

// again, this is very repetitive and not very clean

const team = {
    [role]: person,
    [role2]: person2
}

// the above shorthand does everything that we did above directly in the object!!

//================================================================================================
// ADDING METHODS TO OBJECTS - we can add functions as properties on objects. We call them methods!
//================================================================================================

const math = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    }
};

// this is a nice way to group functions into an object so that they aren't floating around
// if a function is stored inside of an object, it it called a method and can be called just
// like the builts in methods that we've already seen like ".toUpperCase()" etc.

math.multiply(5, 6); // this calls our own multiply method that we've defined in the object

// this is good to structure your code clearly

//================================================================================================
// METHOD SHORTHAND SYNTAX
//================================================================================================

// we create methods so often that there is a new shorthand where you don't need to write function
// is goes from:
// functionName: function ()
// to:
// functionName() - this version is much shorter

const mathShort = {
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
}
mathShort.add(50, 60); // 110

//================================================================================================
// Intro to Keyword THIS
//================================================================================================

function sayHi() { // this function is not in an object so it is stored in the window object
    console.log("Hi");
    console.log(this); // which means that "this" refers to the window (global scope object in the browser)
};

//================================================================================================
// Using THIS in methods
//================================================================================================

const celebrity = {
    firstName: "Cherilyn",
    lastName: "Sarkisian",
    nickName: "Cher",
    fullName() {
        console.log(this); // now that the function is contained in an object, this refers to the
    } // current object and can be used to call other items in the object
}

const mum = {
    firstName: "Marisol",
    lastName: "Foster",
    nickName: "Mamá",
    fullName() {
        console.log(`${this.firstName} ${this.lastName} AKA ${this.nickName}`);
    } // this now prints out a template literal with the referenced values using "this"
}

// "this" can be used to reference other things in the same object scope


// seeing as we're referring to "this" quite a lot in the above example, we have a good opportunity
// to destructure "this" as you can see in the below function
const dad = {
    firstName: "David",
    lastName: "Foster",
    nickName: "Dad",
    fullName() {
        const {
            firstName,
            lastName,
            nickName
        } = this;
        console.log(`${firstName} ${lastName} AKA ${nickName}`)
    }
}

const bro = {
    firstName: "Johnathan",
    lastName: "Foster",
    nickName: "Johnny",
    fullName() {
        const {
            firstName,
            lastName,
            nickName
        } = this;
        return `${firstName} ${lastName}, AKA ${nickName}`
    },
    printBio() {
        const fullName = this.fullName(); // without "this", fullName wouldn't be defined
        console.log(`${fullName}, is a person!`);
    }
}

// now we can use "this" to refer to other parts of the same object scope!! very useful!

//================================================================================================
// THIS: Invocation Context
//================================================================================================

// the value of "this" depends on the invocation context of the function it is used in

// the execution context matters - it won't work if called as a standard function without the dot "." syntax
// using "this" with a "." syntax method works as normal

// "this" is not set in stone and depends on how it is executed

const ampre = {
    firstName: "Giulia",
    lastName: "Pinardi",
    nickName: "Ampre pampre",
    fullName() {
        const {
            firstName,
            lastName,
            nickName
        } = this;
        return `${firstName} ${lastName}, AKA ${nickName}`
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName}, is an amazing person!`);
    },
    laugh: () => { // arrow functions don't work with "this" - "this" will refer to the window object
        console.log(this);
        console.log(`${this.nickName} says "Ahahahaha!"`);
    }
}

const printBio = ampre.printBio; // calling printBio(); does not work

// don't use arrow functions in methods as it doesn't allow you to use "this" to refer to other
// parts of the object