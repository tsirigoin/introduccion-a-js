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
	removeSalaryInputs();
	document.querySelector('#calculate-button').classList.add('hidden');
	document.querySelector('#age-results').classList.add('hidden');
	document.querySelector('#calculate-salaries').classList.add('hidden');
	document.querySelector('#add-salaries-btn').classList.add('hidden');
	document.querySelector('#salary-results').classList.add('hidden');
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

function removeSalaryInputs() {
	const $salaries = document.querySelectorAll('.member-salary');
	for (let i = 0; i < $salaries.length; i++) {
		$salaries[i].remove();
	}
}

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

const $calculateButton = document.querySelector('#calculate-button');
$calculateButton.onclick = function() {
	const memberAges = document.querySelectorAll('.member-age-input');
	const ages = getNumbers(memberAges);
	const min = minimum(ages);
	const max = maximum(ages);
	const avg = average(ages);
	document.querySelector('#min-age').innerText = 'El de menor edad tiene '+min+'.';
	document.querySelector('#max-age').innerText = 'El de mayor edad tiene '+max+'.';
	document.querySelector('#avg-age').innerText = 'El promedio de edad es de '+avg+'.';
	document.querySelector('#age-results').classList.remove('hidden');
	document.querySelector('#add-salaries-btn').classList.remove('hidden');
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function createSalaryBox() {
	const $div = document.createElement('div');
	$div.setAttribute('class','member-salary');
	const $memberSalaryInput = document.createElement('input');
	$memberSalaryInput.setAttribute('class','member-salary-input');
	$memberSalaryInput.setAttribute('placeholder','Ingrese el salario');
	$memberSalaryInput.setAttribute('type','number');
	$div.appendChild($memberSalaryInput);
	document.querySelector('#members-salary-form').appendChild($div);
}

const $addSalariesBtn = document.querySelector('#add-salaries-btn');
$addSalariesBtn.onclick = function() {
	const members = document.querySelectorAll('.member');
	removeSalaryInputs();
	for (let i = 0; i < members.length; i++) {
		createSalaryBox();
	}
	if (members.length != 0) {
		document.querySelector('#calculate-salaries').classList.remove('hidden');
	} else if (!document.querySelector('#calculate-salaries').classList.contains('hidden')) {
		document.querySelector('#calculate-salaries').classList.add('hidden');
		document.querySelector('#add-salaries-btn').classList.add('hidden');
	}
}

function getSalaries(list) {
	const arr = [];
	for (let val of list) {
		arr.push(Number(val.value));
	}
	return arr.filter(positiveSalary);
}

function positiveSalary(value) {
	return value > 0;
}

const $calculateSalaries = document.querySelector('#calculate-salaries');
$calculateSalaries.onclick = function() {
	const memberSalaries = document.querySelectorAll('.member-salary-input');
	const salaries = getSalaries(memberSalaries);
	const min = minimum(salaries);
	const max = maximum(salaries);
	const avg = average(salaries);
	const MONTHS_IN_A_YEAR = 12;
	const monthAvg = avg / MONTHS_IN_A_YEAR;
	document.querySelector('#max-salary').innerText = 'El mayor salario anual es de '+max+'.';
	document.querySelector('#min-salary').innerText = 'El menor salario anual es de '+min+'.';
	document.querySelector('#yearly-avg-salary').innerText = 'El salario anual promedio es de '+avg+'.';
	document.querySelector('#monthly-avg-salary').innerText = 'El salario mensual promedio es de '+monthAvg+'.';
	document.querySelector('#salary-results').classList.remove('hidden');
}