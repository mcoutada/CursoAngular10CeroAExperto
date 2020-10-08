(()=> {
// una clase es una abstraccion de un objeto en la vida real

    // class Avenger {

    //     nombre: string;
    //     equipo: string;
    //     //el signo de pregunta lo vuelve opcional
    //     nombreReal?: string;
        
    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor (nombre1: string, equipo1: String, nombreReal1: String, puedePelear1: Boolean, peleasGanadas1: Boolean) {
    //         // las variables de las izq hacen referencia a los atributos de la clase, los de la derecha a los argumantos del constructor
    //         this.nombre = nombre1;
    //         this.equipo = equipo1;
    //         this.nombreReal = nombreReal1;
    //         this.puedePelear = puedePelear1;
    //         this.peleasGanadas = peleasGanadas1;
    //     }

// manera mas piola di inicializar una clase:
class Avenger {

    // nombre: string;
    // equipo: string;
    // nombreReal: string;
    
    // puedePelear: boolean;
    // peleasGanadas: number;

    constructor (public nombre: string,
                 public equipo: string,
                 public nombreReal?: string,
                 public puedePelear?: boolean = true,
                 public peleasGanadas: number = 0){}

    } 

    const antman = new Avenger('Antman', 'Capi');

   console.log(antman);
    
})();