const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];

const changeColor = function () {
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor; // this in functions like these, generally refers to the element the addEventListener has been added to
}; // "this" in this case, refers to the div that is clicked on, so we can use the div backgroundColor to update the h1 color even though they seem to be
// unconnected functions

const container = document.querySelector('#boxes');

for (let color of colors) { // using a for of loop, we have set this to create a div for each value in the colors array
	const box = document.createElement('div'); // create div for each item in the array
	box.style.backgroundColor = color; // setting the style for the newly created div based on the items in the array that are acutal colors
	box.classList.add('box'); // adding the CSS box class styling so that the divs have a heigh and width
	container.appendChild(box); // appending the divs to the container, which in this case is a section tag with an ID of "boxes"
	box.addEventListener('click', changeColor); // defining an event listener to run a previously stated function
}

// IMPORTANT - functions that are declared in another function have to be declared BEFORE. in the above case "changeColor" has to be before
// the for of loop otherwise it DOES NOT WORK as there is nothing to reference when box.addEventListener("click", changeColor); is read and run

//======================================================================================================================================================
//				THE EVENT OBJECT 
//======================================================================================================================================================

// everytime an event occurs, an event object is created that shows what happened and can be useful if you want to use the information from that
// event

// the event object is typically defined as "e", "evt", "event" etc. and is the second possible argument
// in the addEventListener() function

document.body.addEventListener("keypress", function (e) {
	console.log(e);
});

// here we've created an event that essentially logs each keypress made whilst in the browser window
// each time a keypress is made, we console.log() the event object which gives us all the information
// about the event - what happened, what was pressed, what triggered it etc.