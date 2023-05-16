console.clear()

const process = require("process")
const calculadora = require("./calculadora");

const operaciones = ["sumar", "restar", "dividir", "multiplicar"]

const operacion  = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;

if(operaciones.includes(operacion)){

    if(operacion === "sumar"){
        resultado = calculadora.sumar(numeroA, numeroB);
        }else if(operacion === "restar"){
       resultado = calculadora.restar(numeroA,numeroB);
        }else if(operacion === "dividir"){
            if (numeroB === 0) {
                console.log("No puede dividir por cero");
            }else{
                resultado = calculadora.dividir(numeroA, numeroB);
            }
        }else if(operacion === "multiplicar"){
            resultado = calculadora.multiplicar(numeroA, numeroB);}
         console.log(resultado);
}else{
    console.log("ERROR: Operacion no existente");
}



