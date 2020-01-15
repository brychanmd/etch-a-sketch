const container = document.getElementById('container');
const etchBody = document.getElementById('etchBody');
const shakeBtn = document.getElementById('btnLeft');
const resizeBtn = document.getElementById('btnRight');
const gridSize = 26;

let isDrawing = false;
window.addEventListener("mousedown", e => {
    if (e) {
        isDrawing = true;
    }
});
window.addEventListener("mouseup", e => {
    if (e) {
        isDrawing = false;
    }
});

function createGrid(currentGrid) {
	for (let i = 0; i < currentGrid; i++) {

		let row = document.createElement('div');
		row.setAttribute('class', 'row');
		container.appendChild(row);
		for (let i = 0; i < currentGrid; i++) {
			let square = document.createElement('div');
			square.setAttribute('class', 'square');
			row.appendChild(square);
		}
	}

	let sq = document.querySelectorAll('.square');
	sq.forEach(element => {
		element.addEventListener('mouseover', function () {
			if (isDrawing) {
				element.classList.add('active');
			}
		});	
	});
}

createGrid(gridSize);

function reset() {
	let sq = document.querySelectorAll('.square');
	sq.forEach(element => {	
		element.classList.remove('active');
	});
}

function resize() {
	let oldGrid = document.querySelectorAll('.row');
	oldGrid.forEach(element => {	
		element.parentNode.removeChild(element);
	});
	
	let newGrid = window.prompt("Enter grid width (from 9 - 99)", 24);
	if (newGrid < 9 || newGrid > 99) {
		alert("Invalid size")
		createGrid(24);
	}
	createGrid(newGrid);
}

shakeBtn.addEventListener('click', function () {
	etchBody.classList.toggle('shakeActive');
	reset();
	setTimeout(function() { etchBody.classList.toggle('shakeActive'); }, 2000)
});

resizeBtn.addEventListener('click', function () {
	resize();
});
