(() => {
    const avenger = {
        nombre: 'Steve'
        , clave: 'capitan america'
        , poder: 'Droga'
    }
    // sin desestructuracion
    // console.log(avenger.nombre);
    // console.log(avenger.clave);
    // console.log(avenger.poder);

    // //desestructuracion de un objeto
    // const {nombre, clave, poder} = avenger;

    // console.log(nombre);
    // console.log(clave);
    // console.log(poder);

    // // no importa el orden
    // const {nombre, poder} = avenger;

    // console.log(nombre);
    // console.log(poder);

    // desestructuracion en una funcion
    // const extraer = (avenger:any) => {
    // const {nombre, clave, poder} = avenger;

    // console.log(nombre);
    // console.log(clave);
    // console.log(poder);
    // }


    // desestructuracion en una funcion, de solo ciertas propiedades especificas

    // extraigo 2 atributos de lo que sea que estoy mandando (la desestructuracion ocurre como argumento)
    // const extraer = ({nombre, poder} :any) => {
    //     // const {nombre, clave, poder} = avenger;

    //     console.log(nombre);
    //     // console.log(clave);
    //     console.log(poder);
    //     }

    // extraer(avenger);

    ///////////////////////////////////////////////////////////////////////////
    // desestructuracion de arreglos:
    const avengers: string[] = ['thor', 'ironman', 'spiderman'];

    // //sin desestructuracion:
    // console.log(avengers[0]);
    // console.log(avengers[1]);
    // console.log(avengers[2]);

    //con desestructuracion, todos los elementos:
    // const [a, b, c] = avengers;
    // console.log(a);
    // console.log(b);
    // console.log(c);

    //con desestructuracion, parte de los elementos:
    // const [, , c] = avengers;
    // console.log(c);

    // funcion con input array sin desestr
    // const extraerArr = (avengers: string[]) => {
    //     console.log(avengers[0]);
    //     console.log(avengers[1]);
    //     console.log(avengers[2]);
    // }
    // extraerArr(avengers)

    // funcion con array y con desestr
    const extraerArr = ([a, b, c]: string[]) => {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    extraerArr(avengers)
})();