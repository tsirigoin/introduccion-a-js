//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $accessButton = document.querySelector('#accessButton');

$accessButton.onclick = function() {
	const firstName = document.querySelector('#firstName').value;
	const middleName = document.querySelector('#middleName').value;
	const lastName = document.querySelector('#lastName').value;
	const age = document.querySelector('#age').value;

	const fullName = firstName.concat(' ',middleName.concat(' ',lastName));
	console.log(fullName)
	if (fullName != '  ') {
		document.querySelector('h1').innerText = '¡Bienvenido, '+fullName+'!';
		document.querySelector('#info').innerText = fullName+', '+age+' años.';
	}

	return false;
}