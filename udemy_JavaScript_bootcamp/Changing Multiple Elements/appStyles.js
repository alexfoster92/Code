//=============================================================================================
//              MANIPULATING DOM STYLES
//=============================================================================================

const h1 = document.querySelector("h1");

h1.style; // this will open the styles for h1 in an object BUT will only show in-line styles
// and not styles that are set in your CSS

// However, we can use .style to modify html elements and css styles in JavaScript

h1.style.color = "orchid"; // this has changed the color of our h1!
// technically, it creates an in-line style in our HTML

const p = document.querySelector("p");

p.style.color = "white";

// p.style.background-color = "black"; // this doesn't work because we camelCase in JavaScript,
// and hyphens, whilst used in CSS and HTML, are not used in the same way in JS

p.style.backgroundColor = "black"; // this is the correct syntax for selecting background-color in JS

// properties with more than one word are camelCase in JavaScript

p.style.fontSize = "30px";

// this style property is useful for modifying styles one at a time but not great for bigger
// modifications

const allLis = document.querySelectorAll("li");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

allLis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
})