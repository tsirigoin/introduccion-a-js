/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $familySizeConfirm = document.querySelector('#family-size-confirm');
$familySizeConfirm.onclick = function() {
	const familySize = Number(document.querySelector('#family-size').value);
	removeMemberInputs();
	for (let i = 0; i < familySize; i++) {
		createMember();
	}
	if (familySize != 0) {
		document.querySelector('#calculate-button').classList.remove('hidden');
	} else if (!document.querySelector('#calculate-button').classList.contains('hidden')) {
		document.querySelector('#calculate-button').classList.add('hidden');
		document.querySelector('#results').classList.add('hidden');
	}
}
const $restart = document.querySelector('#reset-btn');
$restart.onclick = function() {
	removeMemberInputs();
	document.querySelector('#calculate-button').classList.add('hidden');
	document.querySelector('#results').classList.add('hidden');
} 
function createMember() {
	const $div = document.createElement('div');
	$div.setAttribute('class','member');
	const $memberAgeInput = document.createElement('input');
	$memberAgeInput.setAttribute('class','member-age-input');
	$memberAgeInput.setAttribute('placeholder','Ingresar edad');
	$memberAgeInput.setAttribute('type','number');
	$div.appendChild($memberAgeInput);
	document.querySelector('#members-age-form').appendChild($div);
}
function removeMemberInputs() {
	const $members = document.querySelectorAll('.member');
	for (let i = 0; i < $members.length; i++) {
		$members[i].remove();
	}
}
const $calculateButton = document.querySelector('#calculate-button');
function minimum(numbers) {
	let min = numbers[0];
	for (let number of numbers) {
		if (min > number) {
			min = number;
		}
	}
	return min;
}
function maximum(numbers) {
	let max = numbers[0];
	for (let number of numbers) {
		if (max < number) {
			max = number;
		}
	}
	return max;
}
function average(numbers) {
	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum / numbers.length;
}
function getNumbers(list) {
	const arr = [];
	for (let val of list) {
		arr.push(Number(val.value));
	}
	return arr;
}
$calculateButton.onclick = function() {
	const memberAges = document.querySelectorAll('.member-age-input');
	const ages = getNumbers(memberAges);
	const min = minimum(ages);
	const max = maximum(ages);
	const avg = average(ages);
	document.querySelector('#min-age').innerText = 'El de menor edad tiene '+min+'.';
	document.querySelector('#max-age').innerText = 'El de mayor edad tiene '+max+'.';
	document.querySelector('#avg-age').innerText = 'El promedio de edad es de '+avg+'.';
	document.querySelector('#results').classList.remove('hidden');
}



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
