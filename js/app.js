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

		const pregunta1 = new Pregunta('¿Como te llamas?', 'X', 'Y', 'G', 'Z');
		const pregunta2 = new Pregunta('¿Como estas?', 'X', 'Y', 'G', 'Z');
		const pregunta3 = new Pregunta('¿Cual es tu libro favorito?', 'X', 'Y', 'G', 'Z');
		const pregunta4 = new Pregunta('¿Cual es tu comida favorita?', 'X', 'Y', 'G', 'Z');
		const pregunta5 = new Pregunta('¿Qué música te gusta?', 'No se', 'Y', 'G', 'Z');
		const pregunta6 = new Pregunta('¿Cuáles son los métodos de minimización?', 'X', 'Y', 'G', 'Z');
		const pregunta7 = new Pregunta('¿Cuál método es mejor?', 'X', 'Y', 'G', 'Z');
		const pregunta8 = new Pregunta('¿Qué es un estadístico?', 'X', 'Y', 'G', 'Z');
		const pregunta9 = new Pregunta('¿Porque llevo estructras discretas?', 'X', 'Y', 'G', 'Z');
		const pregunta10 = new Pregunta('¿Que significa esto?<img class="img-pregunta" src="img/biblio.jpg">', 'X', 'Y', 'G', 'Z');

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