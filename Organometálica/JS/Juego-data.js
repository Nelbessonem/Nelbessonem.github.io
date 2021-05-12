

$(document).ready(function () {

	Swal.fire({
		title: 'Bienvenido',
		html: '<p class="black"> Antes de empezar, por favor escribe tu nombre</p>',
		icon: 'success',
		confirmButtonText: 'Ingresar',
		width: '85%',
		padding: '1rem',
		background: '#fffF',

		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		stopKeydownPropagation: true,

		input: 'text',
		inputPlaceholder: 'Nombre'
		// inputValue:
		// inputOptions:
	}).then(result => {
		if (result.value) {
			const nombre = result.value;
			var nplayer = document.getElementById('player');
			nplayer.textContent = nombre;

		};

	});



	/**
 * Función que se ejecuta al arrastrar el elemento. 
 */


}())
var barrVida = 100;
$('#life_bar').css({
	'width': barrVida + '%'
});

var Level1 = {
	padre: $('#level1'),
	nivel: $('#level1').children('.level_mission').length,
	posicion: 1
};
Level1.padre.children('.level_mission').first().css({
	'left': 0
});

var pointLife = 100;
pLifepoints = document.getElementById('life');
pLifepoints.textContent = pointLife;

function start(e) {
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.4';
}

/**
 * Función que se ejecuta se termina de arrastrar el elemento. 
 */

function end(e) {
	e.target.style.opacity = ''; // Restaura la opacidad del elemento   
	e.dataTransfer.clearData("Data");
}

/**
 * Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
 */

function enter(e) {
	return true;
}

/**
 * Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
 * Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
 */

function over(e) {
	if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas")) {
		return false;
	} else {
		return true;
	}
}

/**
 * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
 */

function drop(e) {
	e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
	var elementoArrastrado = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion

}

function comprobar() {
	if (Level1.posicion < Level1.nivel) {

		Level1.padre.children().not('.active').css({
			'left': '100%'
		});
		$('#level1 .active').removeClass('active').next().addClass('active').animate({
			'left': '0'
		});
		$('#level1 .active').prev().animate({
			'left': '-100%'
		});
		Level1.posicion = Level1.posicion + 1;
	}
};


function malaRespuesta() {
	pointLife = pointLife - 5;
	pLifepoints.textContent = pointLife;
	barrVida = barrVida - 5;
	$('#life_bar').animate({
		'width': barrVida + '%'
	});

	if (pointLife < 86) { }
	$('#life_bar').css({
		'background': 'linear-gradient(to bottom,#00FF21FF,#00EE51FF )'
	});
	if (pointLife < 66) {
		$('#life_bar').css({
			'background': 'linear-gradient(to bottom,#FF7900FF,#FF4100FF )'
		});
	}

	if (pointLife < 36) {
		$('#life_bar').css({
			'background': 'linear-gradient(to bottom,#FF0000FF,#F60808FF )'
		});
	}
	if (pointLife == 0) {
		Swal.fire({
			title: 'Game Over',

			html: '<p class="black"> Vueleve a intentarlo </p> <br><a href="../index.Html" class="Game_Over"> Voler</a>',
			icon: 'error',
			showConfirmButton: false,
			width: '95%',
			height: '85%',
			padding: '1rem',
			background: '#fffF',

			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false,
			stopKeydownPropagation: true,
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
			}

		})

	}
};


/**nivel 1**/

$('#Boton1').on('click', function (e) {
	e.preventDefault();
	if ((document.getElementById('pieza1').parentNode.id == 'uno') &&
		(document.getElementById('pieza2').parentNode.id == 'dos') &&
		(document.getElementById('pieza3').parentNode.id == 'tres') &&
		(document.getElementById('pieza4').parentNode.id == 'cuatro')) {

		comprobar();

	} else {
		malaRespuesta();

	};

});

/**Nivel 2**/


$('#PistaB').on('click', function (e) {
	Swal.fire({
		title: 'Bienvenido',
		html: '<p class="black"> Hola ten una lisa de posibles respuestas</p> <ul><li>Carbonilos metálicos</li> <li>Organometalica</li> <li>Orbital</li> <li>Fosfina metálicas</li></ul>',
		icon: 'question',
		confirmButtonText: 'listo',
		width: '85%',
		padding: '1rem',
		background: '#fffF',

		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		stopKeydownPropagation: true,


	})
});
$('#PistaA').on('click', function (e) {
	Swal.fire({
		title: 'Bienvenido',
		html: '<p class="black"> Hola ten una lisa de posibles respuestas</p> <ul><li>Carbenos</li> <li>Organometalica</li> <li>Orbital</li> <li>laboratorio</li></ul>',
		icon: 'question',
		confirmButtonText: 'listo',
		width: '85%',
		padding: '1rem',
		background: '#fffF',

		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		stopKeydownPropagation: true,


	})
});




function obtenerDatos() {


	var Texto1 = 'Carbenos';
	var Texto2 = 'Carbonilos metálicos';
	var respuesta1 = document.getElementById('Respuesta1').value;
	var respuesta2 = document.getElementById('Respuesta2').value;
	console.log(respuesta1);
	console.log(respuesta2);
	if (respuesta1 == Texto1 && respuesta2 == Texto2) {
		comprobar();

	} else {

		malaRespuesta();
	};

	if (Texto1 != respuesta1) {

		$('#REspuestas1').css({
			'background': '#F60808FF'
		});
	}
	if (Texto2 != respuesta2) {

		$('#REspuestas2').css({
			'background': '#F60808FF'
		});
	};
};


$('#Boton2').on('click', function (e) {

	obtenerDatos();


});


/** nivel 3**/


function Nivel3() {

	var Argumento1 = 'Verdadero'
	var Argumento2 = 'Falso'
	var Argumento3 = 'Verdadero'
	var Argumento4 = 'Falso'
	var Argumento5 = 'Verdadero'

	var Resp1 = document.getElementById('Respuesta-1').value;
	var Resp2 = document.getElementById('Respuesta-2').value;
	var Resp3 = document.getElementById('Respuesta-3').value;
	var Resp4 = document.getElementById('Respuesta-4').value;
	var Resp5 = document.getElementById('Respuesta-5').value;

	if (Argumento1 == Resp1 && Argumento2 == Resp2 && Argumento3 == Resp3 && Argumento5 == Resp5 && Argumento4 == Resp4) {
		comprobar();
	} else {
		malaRespuesta();
		if (Argumento1 != Resp1) {
			$('#Help1').css({
				'background': 'linear-gradient(to bottom,#FF0000FF,#F60808FF )'
			});
		} else {
			$('#Help1').css({
				'background': 'linear-gradient(to bottom,#00FF21FF,#00EE51FF  )'
			});
		};


		if (Argumento2 != Resp2) {
			$('#Help2').css({
				'background': 'linear-gradient(to bottom,#FF0000FF,#F60808FF )'
			});
		} else {
			$('#Help2').css({
				'background': 'linear-gradient(to bottom,#00FF21FF,#00EE51FF  )'
			});
		};
		if (Argumento3 != Resp3) {
			$('#Help3').css({
				'background': 'linear-gradient(to bottom,#FF0000FF,#F60808FF )'
			});
		} else {
			$('#Help3').css({
				'background': 'linear-gradient(to bottom,#00FF21FF,#00EE51FF  )'
			});
		};
		if (Argumento4 != Resp4) {
			$('#Help4').css({
				'background': 'linear-gradient(to bottom,#FF0000FF,#F60808FF )'
			});
		} else {
			$('#Help4').css({
				'background': 'linear-gradient(to bottom,#00FF21FF,#00EE51FF  )'
			});
		};
		if (Argumento5 != Resp5) {
			$('#Help5').css({
				'background': 'linear-gradient(to bottom,#FF0000FF,#F60808FF )'
			});
		} else {
			$('#Help5').css({
				'background': 'linear-gradient(to bottom,#00FF21FF,#00EE51FF  )'
			});
		};
	};

};

$('#Boton3').on('click', function (e) {

	Nivel3();
});

/**nivel 4**/
function Nivel4() {

	if (document.getElementById('contactChoice2').checked && document.getElementById('contactChoice8').checked && document.getElementById('contactChoice9').checked && document.getElementById('contactChoice15').checked) {
		comprobar();
	} else {
		malaRespuesta();
		if (document.getElementById('contactChoice3').checked || document.getElementById('contactChoice4').checked || document.getElementById('contactChoice1').checked) {

			$('#1').css({
				'border-color': '#F20C0FFF'
			});
		}
		if (document.getElementById('contactChoice5').checked || document.getElementById('contactChoice6').checked || document.getElementById('contactChoice7').checked) {

			$('#2').css({
				'border-color': '#F20C0FFF'
			});
		}
		if (document.getElementById('contactChoice10').checked || document.getElementById('contactChoice11').checked || document.getElementById('contactChoice12').checked) {

			$('#3').css({
				'border-color': '#F20C0FFF'
			});
		}
		if (document.getElementById('contactChoice13').checked || document.getElementById('contactChoice14').checked || document.getElementById('contactChoice16').checked) {

			$('#4').css({
				'border-color': '#F20C0FFF'
			});
		}
		if (document.getElementById('contactChoice2').checked) {

			$('#1').css({
				'border-color': '#5BDF1FFF'
			});
		}
		if (document.getElementById('contactChoice8').checked) {

			$('#2').css({
				'border-color': '#5BDF1FFF'
			});
		}
		if (document.getElementById('contactChoice9').checked) {

			$('#3').css({
				'border-color': '#5BDF1FFF'
			});
		}
		if (document.getElementById('contactChoice15').checked) {

			$('#4').css({
				'border-color': '#5BDF1FFF'
			});
		}

	}
}


$('#Boton4').on('click', function (e) {

	Nivel4();
});
/*Nivel5*/
$('#Boton5').on('click', function (e) {
	e.preventDefault();
	if ((document.getElementById('pieza5').parentNode.id == 'once') &&
		(document.getElementById('pieza9').parentNode.id == 'diez') &&
		(document.getElementById('pieza7').parentNode.id == 'nueve') &&
		(document.getElementById('pieza11').parentNode.id == 'ocho') &&
		(document.getElementById('pieza10').parentNode.id == 'siete') &&
		(document.getElementById('pieza6').parentNode.id == 'seis') &&
		(document.getElementById('pieza8').parentNode.id == 'cinco')) {

		comprobar();

	} else {
		malaRespuesta();

	};

});
