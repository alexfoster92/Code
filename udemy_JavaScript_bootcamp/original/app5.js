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