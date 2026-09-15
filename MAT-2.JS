let respuestaCorrecta = 0;
const nR = () => Math.floor(Math.random() * 10) + 1;

window.onload = () => {
    // 1. Actualizamos los selectores para que coincidan con tu index.html
    const contenedorEcuacion = document.querySelector('#title h1'); 
    const textosRespuestas = document.querySelectorAll('#poss-ans h1'); 
    const botones = document.querySelectorAll('#options button'); 

    const GenerarEcuation = () => {
        let numberEcuation = Math.floor(Math.random() * 3);
        let ecuation = "";
        let a, b, c, d; 
        let respuesta = 0; // Declaramos la variable local para la respuesta matemática

        switch(numberEcuation){
            case 0:
                a = nR(); b = nR(); c = nR();
                ecuation = `${a}X + ${b} = ${c}`;
                respuesta = (c - b) / a;
                break;

            case 1:
                a = nR(); b = nR(); c = nR(); d = nR();
                ecuation = `${a} + ${b}X = ${c} + ${d}X`;
                respuesta = (c - a) / (b - d);
                break;

            case 2:
                a = nR(); b = nR(); c = nR(); d = nR();
                ecuation = `${a} - ${b}X + ${c} = ${d} - X`;
                respuesta = (d - a - c) / (1 - b);
                break;
        }

        // 2. Corregimos el bug lógico: ahora guardamos el resultado en "respuestaCorrecta"
        respuestaCorrecta = parseFloat(respuesta.toFixed(1));
        contenedorEcuacion.innerHTML = ecuation; 

        let opcionFalsa1 = parseFloat((respuestaCorrecta + (Math.random() * 3 + 1)).toFixed(1));
        let opcionFalsa2 = parseFloat((respuestaCorrecta - (Math.random() * 3 + 1)).toFixed(1));

        let opciones = [respuestaCorrecta, opcionFalsa1, opcionFalsa2];
        // Desordenamos las opciones al azar
        opciones.sort(() => Math.random() - 0.5);
        
        // Imprimimos las opciones en la pantalla (las cajas 00 debajo de los botones)
        textosRespuestas.forEach((elementoTexto, index) => {
            elementoTexto.textContent = opciones[index];
        });
    };  
    
    // Asignamos la lógica de validación a los botones A, B y C
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Evaluamos el texto de la respuesta basándonos en el índice del botón clickeado
            let valorSeleccionado = parseFloat(textosRespuestas[index].textContent);
            
            if (valorSeleccionado === respuestaCorrecta) {
                alert('¡CORRERTO!');
                GenerarEcuation(); 
            } else {
                alert('¡SUERTE PARA LA PROXIMA!');
            }
        });
    });
    
    // Generamos la primera ecuación al cargar
    GenerarEcuation();
};