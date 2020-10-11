(function () {

    // Uso de Let y Const
    // si no se va a cambiar una variable debe ser declarada como const, ademas es mas liviana en memoria
    let nombre = "Ricardo Tapia";
    const edad = 23;


    // en e es6 (ecma script 6) cuando ustedes tienen una propiedad que tiene el mismo nombre que la variable, entonces esto:
    const PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    // es lo mismo que:
    const PERSONAJE = { nombre, edad };


    // Cree una interfaz que sirva para validar el siguiente objeto

    var batman = {
        nombre: "Bruno Díaz",
        artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
    }

    interface Batman {
        nombre: string;
        artesMarciales: string[];

    }


    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a, b) {
        return (a + b) * 2
    }

    const resultadoDoble1 = (a: number, b: number) => {
        return (a + b) * 2
    }
    // o mas corto:
    const resultadoDoble2 = (a: number, b: number) => { (a + b) * 2 }

    // tambien podriamos especificar el retorno:
    const resultadoDoble3 = (a, b): number => { (a + b) * 2 }
    // pero es redundante ya que typescript lo infiere (al sumar solo nros)


    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    // function getAvenger(nombre, poder, arma) {
    //     var mensaje;
    //     if (poder) {
    //         mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    //     } else {
    //         mensaje = nombre + " tiene un " + poder
    //     }
    // };

    function getAvenger(nombre: string, poder?: string, arma: string = 'arco') {
        let mensaje;
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        } else {
            mensaje = nombre + " tiene un " + poder
        }

        // Cree una clase que permita manejar la siguiente estructura
        // La clase se debe de llamar rectangulo,
        // debe de tener dos propiedades:
        //   * base
        //   * altura
        // También un método que calcule el área  =  base * altura,
        // ese método debe de retornar un numero.

        class Rectangulo {
            constructor(
                public base: number,
                public altura: number
            ) { }
        }

        calcularArea(): number => this.base * this.altura;
    }) ();
