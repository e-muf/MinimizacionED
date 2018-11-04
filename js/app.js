(function() {
	"use strict";

	var fcheck = document.getElementsByClassName("form-check");
	for(let i = 0; i < fcheck.length; i++) {
		fcheck[i].children[0].checked = false;
	}
	document.addEventListener('DOMContentLoaded', function(){

		function aleatorio(cantidad) {
			var m_aleatorio = []
			for(let i = 0; i < cantidad; i++) {
				var n = Math.floor(Math.random() * cantidad)
				if(!m_aleatorio.includes(n))
					m_aleatorio.push(n);
				else
					i = i - 1;
			}
			return m_aleatorio;
		}

		class Pregunta {
			constructor(pregunta, r_correcta, r_uno, r_dos, r_tres) {
				this.pregunta = pregunta;
				this.r_correcta = r_correcta;
				this.r_uno = r_uno;
				this.r_dos = r_dos;
				this.r_tres = r_tres;
			}

			get correcta() {
				return this.r_correcta
			}

			getRespuestasAleatorias() {
				let r_aleatoria = aleatorio(4);
				var normal = [this.r_correcta, this.r_uno, this.r_dos, this.r_tres];
				var respuestas = []
				for(let i = 0; i < r_aleatoria.length; i++){
					respuestas.push(normal[r_aleatoria[i]]);
				}

				return respuestas
			}
		}

		class Cuestionario {
			constructor(questions = []) {
				this.preguntas = [];
				var q_aleatorias = aleatorio(10, 10);
				for(let i = 0; i < q_aleatorias.length; i++) {
					this.preguntas.push(questions[q_aleatorias[i]]);
				}
			}

		}

		const pregunta1 = new Pregunta('¿Cuando conviene realizar un proceso de minimización?', 'Cuando una red se va a producir de manera masiva.', 'Si tenemos una red lógica que usaremos una vez.', 'Cuando el tiempo en el que se lleva la minimización es corto.', 'Cuando el tiempo de minimización no importa.');
		const pregunta2 = new Pregunta('En Algebra de Boole, ¿Qué significa el operador "-"?', 'NOT', 'AND', 'XOR', 'OR');
		const pregunta3 = new Pregunta('¿Cuales son los operadores con los que se representa AND y OR?', '* y +', '+ y *', '- y +', '+ y -');
		const pregunta4 = new Pregunta('¿Cual método se presentó en 1953?', 'Mapa Karnaugh', 'Método de Quine-McCluskey', 'Método Algebraico', 'E.W. Veitch');
		const pregunta5 = new Pregunta('Dos cuadrados de un mapa de Karnaugh son adyacentes cuando...', 'los minterms que representan difieren únicamente en un literal', 'los minterms que representan difieren en más de un literal', 'los minterms que representan no difieren', 'los minterms que representan estan juntos');
		const pregunta6 = new Pregunta('Selecciona el método de minimización', 'Mapa de Karnaugh', 'Óxido-Reducción', 'Lema de Arden', 'Suma canónica de productos');
		const pregunta7 = new Pregunta('La tabla de verdad de A ^ B es: ', 'V<br>F<br>F<br>F', 'V<br>V<br>V<br>F', 'V<br>F<br>V<br>V', 'V<br>F<br>F<br>V');
		const pregunta8 = new Pregunta('¿Cuando dos expresiones booleanas son equivalentes?', 'Si tiene las mismas funciones de verdad', 'Si son exactamente iguales', 'Si son parecidas en al menos un término', 'Si son parecidas en todos los terminos.');
		const pregunta9 = new Pregunta('¿Qué pasa cuando en un mapa de Karnaugh dos cuadrados adyacentes contienen un 1?', 'Se pueden combinar en un producto que contendrá únicamente las variables o literal común', 'Se separan las variables que los contienen', 'Se juntan las variables con valor diferente', 'Se juntan las variables las cuales son iguales');
		const pregunta10 = new Pregunta('Un bloque de 4 cuadrados elimina: ', '0 variables', '1 variable', '2 variables', '4 variables');

		var t_preguntas = [
		pregunta1,
		pregunta2,
		pregunta3,
		pregunta4,
		pregunta5,
		pregunta6,
		pregunta7,
		pregunta8,
		pregunta9,
		pregunta10
		];

		var cuestionario = new Cuestionario(t_preguntas);
		var question = document.getElementsByClassName("card-header");
		var calificar = document.getElementById("calificar");

		for(let i = 0; i < 10; i++) {
			question[i].innerHTML = (i+1) + ". " + cuestionario.preguntas[i].pregunta;
			var respuestas = cuestionario.preguntas[i].getRespuestasAleatorias();
			var answer = document.querySelectorAll(".pregunta" + (i+1));
			for(let j = 0; j < 4; j++){
				answer[j].innerHTML = respuestas[j];
			}
		}

		calificar.addEventListener('click', calificarCuestionario);



		function calificarCuestionario(event){
			var contador = 0;
			var calificacion = 0;
			event.preventDefault();
			for(let i = 0; i < fcheck.length; i++) {
				if(fcheck[i].children[0].checked){	
					if(fcheck[i].children[1].innerHTML == cuestionario.preguntas[contador].r_correcta){
						calificacion += 1;
					}
					contador += 1;
				}
			}
			if(contador < 10){
				$("#incompletas").modal();
			}
			else {
				$(".modal-body").html('<p>Tu califacación es:&nbsp <span class="calificacion font-weight-bold">' + calificacion + '</span></p>');
				$('#completas').modal();
			}
		}
    }); // DOM Content Loaded
})();