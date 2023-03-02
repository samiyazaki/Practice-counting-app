const addButton = document.getElementById('add-btn');
const subtractButton = document.getElementById('subtract-btn');
const saveButton = document.getElementById('save-btn');
const countDisplay = document.getElementById('count');
const objectTitleInput = document.getElementById('object-title');
const objectTitleDisplay = document.getElementById('object-title-card');
const countCardDisplay = document.getElementById('count-card');
const historyContainer = document.getElementById('history-container');

let count = 0;
let history = JSON.parse(localStorage.getItem('history')) || [];

addButton.addEventListener('click', () => {
	count++;
	countDisplay.innerText = count;
});

subtractButton.addEventListener('click', () => {
	if (count > 0) {
		count--;
		countDisplay.innerText = count;
	}
});

saveButton.addEventListener('click', () => {
	const item = {
		title: objectTitleInput.value,
		count: count
	};
	history.push(item);
	objectTitleInput.value = "";
	count = 0; // Reset count to 0 after saving
	countDisplay.innerText = count;
	displayHistory();
	saveHistory(); // Save history to localStorage
});

function displayHistory() {
	historyContainer.innerHTML = "";
	for (let i = 0; i < history.length; i++) {
		const card = document.createElement('div');
		card.classList.add('card');
		const title = document.createElement('h2');
		title.innerText = history[i].title;
		const count = document.createElement('p');
		count.innerText = `Count: ${history[i].count}`;
		card.appendChild(title);
		card.appendChild(count);
		historyContainer.appendChild(card);
	}
}

function saveHistory() {
	localStorage.setItem('history', JSON.stringify(history));
}

// Load history on page load
displayHistory();