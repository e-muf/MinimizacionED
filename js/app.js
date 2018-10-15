(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function(){
        
        function aleatorio(cantidad) {
            var m_aleatorio = []
            for(let i = 0; i < cantidad; i++) {
                var n = Math.floor(Math.random() * 10)
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

            getRespuestastAleatorias() {
                let r_aleatoria = aleatorio(4);
                var normal = [r_correcta, r_uno, r_dos, r_tres];
                var respuestas = []
                for(let i = 0; i < r_aleatoria; i++){
                    respuestas.push(normal[r_aleatoria[i]]);
                }
                
                return respuestas
            }
        }

        class Cuestionario {
            constructor(questions = []) {
                this.preguntas = [];
                var q_aleatorias = aleatorio(10);
                for(let i = 0; i < q_aleatorias.length; i++) {
                    this.preguntas.push(questions[q_aleatorias[i]]);
                }
                console.log(this.preguntas)
            }

        }

        const pregunta1 = new Pregunta('¿Como te llamas?', 'X', 'Y', 'G', 'Z');
        const pregunta2 = new Pregunta('¿Como estas?', 'X', 'Y', 'G', 'Z');
        const pregunta3 = new Pregunta('¿Cual es tu libro favorito?', 'X', 'Y', 'G', 'Z');
        const pregunta4 = new Pregunta('¿Cual es tu comida favorita?', 'X', 'Y', 'G', 'Z');
        const pregunta5 = new Pregunta('¿Qué música te gusta?', 'X', 'Y', 'G', 'Z');
        const pregunta6 = new Pregunta('¿Cuáles son los métodos de minimización?', 'X', 'Y', 'G', 'Z');
        const pregunta7 = new Pregunta('¿Cuál método es mejor?', 'X', 'Y', 'G', 'Z');
        const pregunta8 = new Pregunta('¿Qué es un estadístico?', 'X', 'Y', 'G', 'Z');
        const pregunta9 = new Pregunta('¿Porque llevo estructras discretas?', 'X', 'Y', 'G', 'Z');
        const pregunta10 = new Pregunta('¿Hola?', 'X', 'Y', 'G', 'Z');

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
        console.log(cuestionario.preguntas)
        var question = document.getElementsByClassName("card-header");
        var answer = document.querySelectorAll(".card-body");

        console.log(cuestionario.preguntas)
        for(let i = 0; i < 10; i++) {
            var nueva_pregunta = document.createElement("P");
            
            var texto = document.createTextNode((i+1) + ". " + cuestionario.preguntas[i].pregunta);
            
            nueva_pregunta.appendChild(texto);
            question[i].appendChild(nueva_pregunta);
        }
        console.log(answer);    
    }); // DOM Content Loaded
})();