const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
	console.log('KEY DOWN!');
});

input.addEventListener('keyup', function (e) {
	console.log('KEY UP!');
});

input.addEventListener('keypress', function (e) {
	console.log('KEY PRESS!');
});

// barebones shopping list app

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) { // using the event object to listen for enter keypress
	if (e.key === 'Enter') { // when a user presses enter => run this function
		if (!this.value) return; //if input is empty, skip everything
		//add a new item to list
		const newItemText = this.value; // this refers to the input the addEventListener was added to
		const newItem = document.createElement('li'); // create a new li
		newItem.innerText = newItemText; // the text of the new li will be taken from the input
		itemsUL.appendChild(newItem); // append the new li to the ul parent element
		this.value = ''; // clear the input field once this function has run
	}
});