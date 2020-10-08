(() => {

    // esta funcion debe recibir un objetoo que tenga al menos el metodo nombre del tipo string
    // const enviarMision = (xmen: { nombre: string }) => {

    //     console.log(`Enviando a ${xmen.nombre} a la mision`);
    // }

    // const wolverine = {
    //     nombre: 'wolverine',
    //     edad: 60
    // }

    // enviarMision(wolverine);

    //////////////////////////////////////////////////////
    // la gente de typescript se invento las interfaces, sirve para poder cambiarle el nombre a un metodo sin necesidad de tocar los objetos originales

    interface Xmen1 {
        nombre: string;
        edad: number;
        poder?: string; // este atributo es opcional
    }
    const enviarMision = (xmen: Xmen) => {

        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel = (xmen: Xmen1) => {

        console.log(`Enviando a ${xmen.nombre} al cuartel`);
    }

    // esto posee un error porque nombre222 no es del tipo Xmen1
    // const wolverine = {
    //     nombre222: 'wolverine',
    //     edad: 60
    // }

    // pero si ya se que este objeto es del tipo Xmen1, puedo tiparlo, y asi asegurarme que no ocurra error
    // fijarse que al renombrar el atributo nombre en la interface, va a marcar todos los lugares donde debe ser cambiado
    const wolverine: Xmen1 = {
        nombre: 'wolverine',
        edad: 60
    }


    enviarMision(wolverine);
    regresarAlCuartel(wolverine);



})();