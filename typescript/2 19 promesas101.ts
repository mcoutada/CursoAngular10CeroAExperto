(() => {
    // console.log('Inicio');

    // const prom1 = new Promise((resolve, reject) => {

    //     setTimeout(() => {
    //         resolve('se termino el timeout');
    //     }, 1000);
    // });

    // then: lo que yo quiero ejecutar cuando se realiza todo exitosamente
    // catch: lo que yo quiero ejecutar cuando ocurrio un error
    // Symbol: es un identificador, no se usa a lo largo del curso

    // el then no es bloqueante por es veo primero el mensaje "fin" y desp el "se termino el timeout"
    //  prom1
    //      .then(mensaje => console.log(mensaje))
    // console.log('Fin');

    // ////////////////////////////////////////////////////////////////////////////////////////////
    // // si hago lo mismo pero con el reject, recibo "inicio", "fin" y luego del timeout, el error "Uncaught (in promise) se termino el timeout"
    // // eso es porque no estamos manejando errores, y se detiene la ejecucion del programa, para eso necesitamos el catch

    // console.log('Inicio');

    // const prom1 = new Promise((resolve, reject) => {

    //     setTimeout(() => {
    //         reject('se termino el timeout');
    //     }, 1000);
    // });

    // prom1
    //     .then(mensaje => console.log(mensaje))
    //     .
    // console.log('Fin');

    ////////////////////////////////////////////////////////////////////////////////////////////
    // catch:

    console.log('Inicio');

    const prom1 = new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('se termino el timeout');
        }, 1000);
    });

    prom1
        .then(mensaje => console.log(mensaje))
        // .catch(err => console.log(err));
        .catch(err => console.warn(err)); // warn lo muestra en amarillo

        console.log('Fin');
})();