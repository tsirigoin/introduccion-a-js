//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $returnButton = document.querySelector('#returnButton');

function calculateAverage(numbers) {
	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum / numbers.length;
}

function calculateSmallest(numbers) {
	let min = numbers[0];
	for (let number of numbers) {
		if (min > number) {
			min = number;
		}
	}
	return min;
}

function calculateBiggest(numbers) {
	let max = numbers[0];
	for (let number of numbers) {
		if (max < number) {
			max = number;
		}
	}
	return max;
}

function calculateFrequent(numbers) {
	const frequencyCounter = {};
	numbers.forEach(function (number) {
		frequencyCounter[number] = (frequencyCounter[number] || 0) + 1;
	});
	return Object.keys(frequencyCounter).reduce(function(a,b){return frequencyCounter[a] > frequencyCounter[b] ? a : b});
}

$returnButton.onclick = function () {
	const list = document.querySelectorAll('li');
	const numbers = [];
	for (let elem of list) {
		numbers.push(Number(elem.innerHTML));
	}
	document.querySelector('#averageReturn').innerText = 'El promedio es'.concat(' ',calculateAverage(numbers).toString());
	document.querySelector('#smallestReturn').innerText = 'El número más pequeño es'.concat(' ',calculateSmallest(numbers).toString());
	document.querySelector('#biggestReturn').innerText = 'El número más grande es'.concat(' ',calculateBiggest(numbers).toString());
	document.querySelector('#repeatedReturn').innerText = 'El número más frecuente es'.concat(' ',calculateFrequent(numbers).toString());
	return false;
}
