(() => {
    // //promesas y su tipado
    // const retirarDinero = (montoRetirar: number) => {

    //     let dineroActual = 100;

    //     return new Promise((resolve, reject) => {
    //         if (montoRetirar > dineroActual) {
    //             reject('No hay suficientes fondos');
    //         } else {
    //             dineroActual -= montoRetirar;
    //             resolve(dineroActual);
    //         }
    //     }

    //     );
    // }

    // retirarDinero(500)
    //     .then(montoActual => console.log(`me queda ${montoActual}`))
    //     // .catch(err => console.warn(`${err}`));
    //     // o lo que es lo mismo:
    //     .catch(console.warn);

    // resolver el tipado de datos con el cual retorna la funcion (ya sea catch o then)
    //promesas y su tipado
    const retirarDinero = (montoRetirar: number):Promise<number> => {

        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        }

        );
    }

    retirarDinero(500)
        .then(montoActual => console.log(`me queda ${montoActual}`))
        .catch(console.warn);

})();