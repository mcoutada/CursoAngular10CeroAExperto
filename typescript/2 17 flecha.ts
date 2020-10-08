(function () {


    // 2 formas clasicas de definir una funcion
    let miFuncion = function (a: string) {
        return a;
    }

    function miFuncion2(a: string) {
        return a;
    }

    // funcion flecha
    const miFuncionF = (a: string) => {
        return a;
    }

    // funcion flecha 1 linea (gran ventaja)
    const miFuncionF2 = (a: string) => a.toUpperCase();

    const sumarN = function (a: number, b: number) {
        return a + b
    }

    const sumarF = (a: number, b: number) => a + b;

    let a = miFuncion('miFuncion');
    let b = miFuncion2('miFuncion2');
    let c = miFuncionF('miFuncionF');
    let d = miFuncionF2('miFuncionF2');
    let e = sumarN(5, 2);
    let f = sumarF(2, 3);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);

    const hulk = {
        nombre: 'Hulk',
        smash() {
            console.log(`${this.nombre} smash!!!`);
        }
    }
    hulk.smash();

    // esto falla porque las funciones regulares modifican hacia adonde apunta this
    // const hulk2 = {
    //     nombre: 'Hulk',
    //     smash() {
    //         setTimeout(function () {
    //             console.log(`${this.nombre} smash!!!`);
    //         }, 1000);
            
    //     }
    // }

    // esto no falla porque las funciones flecha no modifican donde apunta this
    const hulk2 = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
            
        }
    }
    hulk2.smash();
})();