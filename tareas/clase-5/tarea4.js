//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calculateButton = document.querySelector('#calculateButton');

$calculateButton.onclick = function() {
	const hours1 = Number(document.querySelector('#hours1').value);
	const hours2 = Number(document.querySelector('#hours2').value);
	const hours3 = Number(document.querySelector('#hours3').value);

	const minutes1 = Number(document.querySelector('#minutes1').value);
	const minutes2 = Number(document.querySelector('#minutes2').value);
	const minutes3 = Number(document.querySelector('#minutes3').value);

	const seconds1 = Number(document.querySelector('#seconds1').value);
	const seconds2 = Number(document.querySelector('#seconds2').value);
	const seconds3 = Number(document.querySelector('#seconds3').value);

	let totalSeconds = seconds1 + seconds2 + seconds3;
	let totalMinutes = minutes1 + minutes2 + minutes3;
	let totalHours = hours1 + hours2 + hours3;

	if (totalSeconds > 60) {
		let remainder = totalSeconds % 60;
		totalMinutes += (totalSeconds - remainder) / 60;
		totalSeconds = remainder;
	}
	if (totalMinutes > 60) {
		let remainder = totalMinutes % 60;
		totalHours += (totalMinutes - remainder) / 60;
		totalMinutes = remainder;
	}

	document.querySelector('#resultadoFinal').innerText = 
		'El contenido total es de'.concat(' ',totalHours)+' horas,'.concat(' ',totalMinutes)+' minutos y'.concat(' ',totalSeconds)+' segundos.';
	return false;
}