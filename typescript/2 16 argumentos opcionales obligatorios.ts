(function () {
    function activar(quien: string, momento?: string, objeto: string = 'batisenal') {

        console.log(`${quien} activo la ${objeto} en la ${momento}`);
    }

    activar('a', 'b','c');
})();