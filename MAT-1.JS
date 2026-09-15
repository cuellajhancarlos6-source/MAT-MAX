// ===============================
// OBTENER ELEMENTOS DEL HTML
// ===============================

const numerador1 = document.getElementById("numerador1");
const denominador1 = document.getElementById("denominador1");

const numerador2 = document.getElementById("numerador2");
const denominador2 = document.getElementById("denominador2");

const operacion = document.getElementById("operacion");

const resultadoNumerador = document.getElementById("resultadoNumerador");

const resultadoDenominador = document.getElementById("resultadoDenominador");

const botonCalcular = document.getElementById("calcular");

const mensaje = document.getElementById("mensaje");


// ===============================
// FUNCIÓN PARA CALCULAR
// ===============================

function calcular() {

    // Obtener los valores

    let num1 = Number(numerador1.value);
    let den1 = Number(denominador1.value);

    let num2 = Number(numerador2.value);
    let den2 = Number(denominador2.value);

    let operador = operacion.value;


    // ===============================
    // COMPROBAR CAMPOS VACÍOS
    // ===============================

    if (
        numerador1.value === "" ||
        denominador1.value === "" ||
        numerador2.value === "" ||
        denominador2.value === ""
    ) {

        mensaje.textContent =
            "Por favor, completa todos los campos.";

        return;
    }


    // ===============================
    // COMPROBAR DENOMINADORES
    // ===============================

    if (den1 === 0 || den2 === 0) {

        mensaje.textContent =
            "El denominador no puede ser 0.";

        return;
    }


    // Variables del resultado

    let resultadoNum;
    let resultadoDen;


    // ===============================
    // SUMA
    // ===============================

    if (operador === "+") {

        resultadoNum = (num1 * den2) + (num2 * den1);
        resultadoDen = den1 * den2;
    }

    // ===============================
    // RESTA
    // ===============================

    else if (operador === "-") {

        resultadoNum =
            (num1 * den2) - (num2 * den1);

        resultadoDen =
            den1 * den2;
    }


    // ===============================
    // MULTIPLICACIÓN
    // ===============================

    else if (operador === "x") {

        resultadoNum = num1 * num2;

        resultadoDen = den1 * den2;
    }


    // ===============================
    // DIVISIÓN
    // ===============================

    else if (operador === "/") {

        // No se puede dividir entre una fracción
        // cuyo numerador sea 0

        if (num2 === 0) {mensaje.textContent ="No se puede dividir entre 0.";
            return;
        }

        resultadoNum =
            num1 * den2;

        resultadoDen =
            den1 * num2;
    }


    // ===============================
    // MOSTRAR RESULTADO
    // ===============================

    resultadoNumerador.textContent =
        resultadoNum;

    resultadoDenominador.textContent =
        resultadoDen;


    // Limpiar mensaje

    mensaje.textContent = "";
}


// ===============================
// BOTÓN CALCULAR
// ===============================

botonCalcular.addEventListener("click",calcular);