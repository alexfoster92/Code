//=============================================================================================
//              GETCOMPUTEDSTYLE - reading the style of any element
//=============================================================================================

const li = document.querySelector("li");

const liStyles = getComputedStyle(li);
// this will get a CSSStyleDeclaration which will show all CSS properties for the selected element

liStyles.color; // this will give me the color style info
liStyles.fontSize; // this will give me the font-size

// this can be used to get whatever style info you want from the selected element

//=============================================================================================
//              MANIPULATING CLASSES
//=============================================================================================

const todo = document.querySelector("#todos .todo");

// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

// this is what we are able to do at this point - manipulate one style at a time, which of course,
// is not very efficient - it works, but there's a better way:

// MANIPULATING CLASSES!

// we could use setAttribute to change the class, but this completely overrides the class
// when in actuality, we just want to add another class

// classList - this can be used to add / remove a class from an element!!

todo.classList.add("done"); // this adds the class of "done" to the selected elements
todo.classList.remove("done"); // this removes the class of "done" to the selected elements

// it doesn't matter if the class is or isn't already applied, and it won't throw an error if
// the class you're trying to add / remove is / isn't there already

todo.classList.toggle("done"); // toggle on
todo.classList.toggle("done"); // toggle off
// we can also toggle a class! everytime we pass toggle, it will toggle the class on and off, on and off etc.

//=============================================================================================
//              CREATING ELEMENTS
//=============================================================================================

const newh2 = document.createElement("h2"); // we've created an h2 element but it does not show
// up in the DOM yet

newh2.innerText = "Hello everyone! I was created in JavaScript!"; // this adds text to the newh2
newh2.classList.add("special"); // adding the class of special to the newh2

// we need to append this element to another element inside of the DOM

const section = document.querySelector("section"); // selecting the element that we want to append
// newh2 to

section.appendChild(newh2); // this will append newh2 to the end of the section element

// what a success! let's add some other things to the DOM

const newImg = document.createElement("img"); // remember, you specify the element that you want
// to create in as an argument - here we've just created an img element

newImg.src = "https://bit.ly/2TUFFPs"; // setting the img src attribute in JS

document.body.appendChild(newImg); // appending the newImg to the end of the body element

const newLink = document.createElement("a");
newLink.innerText = "Luigi is-a comin for you!";
newLink.href = "https://www.youtube.com/watch?v=PpxDuNFBVj8";
newLink.target = "_blank";

document.body.appendChild(newLink);


// Creating a new element and appending it, in summary:

// create a variable that selects whatever you want the new element to append to
const parentUL = document.querySelector("ul");

// create the new element using createElement and specifying the HTML tag type
// and storying it in it's own variable
const newLI = document.createElement("li");

// modify the newly created element as you want, using the newly created variable
newLI.innerText = "I'm a new LI created in JavaScript!";
newLI.classList.add("special");
newLI.style.fontSize = "20px";

// append the newly created element
parentUL.appendChild(newLI);

// the new element should now appear at the end of the parent element

// what if we want to add in an element before, rather than at the end, of another element?

//===================================================================================================
// introducing: insertBefore!!
//===================================================================================================

// we need to select the element that we want to insert before, AS WELL AS the parent element
// this selects the list item that we want to insert our new element before
const firstLI = document.querySelector("li.todo");

// here we've created our new element
const newBefore = document.createElement("li");

// here we've formatted our new element with innerText as well as removing any listStyle
newBefore.innerText = "I'm the first now!";
newBefore.style.listStyle = "none";

// now we need to reference the parent element, then insertBefore, which passes two arguments:
// first the new element that you want to insert, and then the element that you want to insert in front of
parentUL.insertBefore(newBefore, firstLI);

//===================================================================================================
// Element.insertAdjacentElement()
//===================================================================================================

// we have another way of inserting new elements that is a little more defined / complicated
// however, we don't have to select anything other than the parent element

// createElement as normal
const i = document.createElement("i");

// give the element whatever you want
i.innerText = "I am italics and also created in JavaScript!";

// select the parent element
const firstP = document.querySelector("p");

// insertAdjacentElement requires a position that is specified with a string, and then you add the new element
// beforebegin inserts the new element before the parent element tag
firstP.insertAdjacentElement("beforebegin", i);
// afterend inserts after the parent element tag
firstP.insertAdjacentElement("afterend", i);
// afterbegin inserts the new element at the beginning and inside of the parent element tag
firstP.insertAdjacentElement("afterbegin", i);
// beforeend inserts the new element at the end and inside of the parent element tag
firstP.insertAdjacentElement("beforeend", i);

//===================================================================================================
// append() & prepend()
//===================================================================================================

// both append and prepend accept multiple new elements, as opposed to the previous methods seen

const newText = document.createElement("p");

newText.innerText = "Hello! I've been added using JavaScript!"
newText.style.fontSize = "30px";
newText.style.color = "red";

const newText2 = document.createElement("p");

newText2.innerText = "Me too! But I'm blue and smaller!"
newText2.style.fontSize = "15px";
newText2.style.color = "blue";

// append can add multiple new elements that are added after the parent tag
firstP.append(newText, newText2);
// prepend can add multiple new elements that are added before the parent tag
firstP.prepend(newText, newText2);


//===================================================================================================
// removing elements - removeChild() & remove()
//===================================================================================================

// select the element that you want to remove by creating a variable for it
const ul = document.querySelector("section ul");

// here we've created ul just to make the selection a little easier
// and we also need the parent element for the removeChild() method
const removeMe = ul.querySelector(".special");

const deleted = ul.removeChild(removeMe); // the element has now been removed
// optionally, this removed element can be stored in a variable if you want to do something with it
// as it is returned upon completion of the method

// remove() doesn't require the parent element; we just need to select the actual element that we 
// want to delete

// select the h1 using CSS selectors
const h1 = document.querySelector("h1");

// simple as that! the h1 element has now been removed
h1.remove();