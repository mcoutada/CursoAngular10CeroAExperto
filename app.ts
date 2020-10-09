(function () {

    // // completa:
    // const sumar = (a: number, b: number): number => {
    //     return a + b;
    // }

    // simple
    const sumar = (a: number, b: number) => a + b;

    const nombre = (): string => 'Hola Fernando';

    const obtenerSalario = (): Promise<string> => {

        return new Promise((resolve, reject) => {
            resolve('Fernando');
        });

    }

})();